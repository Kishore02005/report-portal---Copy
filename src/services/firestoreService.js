// src/services/firestoreService.js
import { auth, db } from "../firebaseConfig";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  serverTimestamp,
  orderBy,
  limit
} from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile
} from "firebase/auth";

// ----------------------- AUTHENTICATION -----------------------

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Get user data from Firestore
    const userData = await getUserDataByEmail(user.email);
    
    if (!userData) {
      throw new Error("User profile not found in database");
    }

    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        ...userData
      }
    };
  } catch (error) {
    console.error("Login error:", error);
    let errorMessage = "Login failed";
    
    switch (error.code) {
      case "auth/user-not-found":
        errorMessage = "No account found with this email";
        break;
      case "auth/wrong-password":
        errorMessage = "Incorrect password";
        break;
      case "auth/invalid-email":
        errorMessage = "Invalid email address";
        break;
      case "auth/too-many-requests":
        errorMessage = "Too many failed attempts. Please try again later";
        break;
      default:
        errorMessage = error.message || "Login failed";
    }
    
    return {
      success: false,
      error: errorMessage
    };
  }
};

export const registerUser = async (email, password, userData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update Firebase Auth profile
    await updateProfile(user, {
      displayName: userData.username,
      photoURL: userData.photoURL
    });

    // Create user document in Firestore
    const userDoc = {
      email: email.toLowerCase(),
      username: userData.username,
      role: userData.role || "user",
      organizationId: userData.organizationId || null,
      photoURL: userData.photoURL || null,
      createdAt: serverTimestamp(),
      ...userData
    };

    await createUserData(email, userDoc);
    
    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        ...userDoc
      }
    };
  } catch (error) {
    console.error("Registration error:", error);
    let errorMessage = "Registration failed";
    
    switch (error.code) {
      case "auth/email-already-in-use":
        errorMessage = "An account with this email already exists";
        break;
      case "auth/weak-password":
        errorMessage = "Password should be at least 6 characters";
        break;
      case "auth/invalid-email":
        errorMessage = "Invalid email address";
        break;
      default:
        errorMessage = error.message || "Registration failed";
    }
    
    return {
      success: false,
      error: errorMessage
    };
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error("Logout error:", error);
    return { success: false, error: error.message };
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error) {
    console.error("Password reset error:", error);
    return { success: false, error: error.message };
  }
};

// ----------------------- USERS (All Roles) -----------------------

export const getUserDataByEmail = async (email) => {
  if (!email) {
    console.warn("FirestoreService: getUserDataByEmail called without an email.");
    return null;
  }
  const emailLowerCase = email.toLowerCase();
  try {
    const userRef = doc(db, "Users", emailLowerCase);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? { id: userSnap.id, ...userSnap.data() } : null;
  } catch (error) {
    console.error("Error getting user data by email:", error);
    return null;
  }
};

export const createUserData = async (email, data) => {
  if (!email) {
    console.warn("FirestoreService: createUserData called without an email.");
    return;
  }
  const emailLowerCase = email.toLowerCase();
  try {
    const userDoc = {
      ...data,
      email: emailLowerCase,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    await setDoc(doc(db, "Users", emailLowerCase), userDoc);
    return userDoc;
  } catch (error) {
    console.error("Error creating user data:", error);
    throw error;
  }
};

export const updateUserData = async (email, updates) => {
  if (!email) {
    console.warn("FirestoreService: updateUserData called without an email.");
    return;
  }
  const emailLowerCase = email.toLowerCase();
  try {
    const updateData = {
      ...updates,
      updatedAt: serverTimestamp()
    };
    await updateDoc(doc(db, "Users", emailLowerCase), updateData);
    return updateData;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const usersRef = collection(db, "Users");
    const snapshot = await getDocs(usersRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching all users:", error);
    return [];
  }
};

// ------------------ ORGANIZATIONS ---------------------

export const getAllOrganizations = async () => {
  try {
    const orgRef = collection(db, "Organizations");
    const snapshot = await getDocs(orgRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching organizations:", error);
    return [];
  }
};

export const getOrganizationById = async (id) => {
  if (!id) {
    console.warn("FirestoreService: getOrganizationById called without an ID.");
    return null;
  }
  try {
    const docRef = doc(db, "Organizations", id);
    const snapshot = await getDoc(docRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  } catch (error) {
    console.error("Error fetching organization:", error);
    return null;
  }
};

export const createOrganization = async (orgData) => {
  try {
    const docRef = await addDoc(collection(db, "Organizations"), {
      ...orgData,
      createdAt: serverTimestamp()
    });
    return { id: docRef.id, ...orgData };
  } catch (error) {
    console.error("Error creating organization:", error);
    throw error;
  }
};

// ----------------- PARTICIPANTS IN ORG ----------------

export const getUsersByOrgId = async (orgId) => {
  if (!orgId) {
    console.warn("FirestoreService: getUsersByOrgId called without an organization ID.");
    return [];
  }
  try {
    const q = query(collection(db, "Users"), where("organizationId", "==", orgId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching users by orgId:", error);
    return [];
  }
};

export const getUsersByRole = async (role) => {
  if (!role) {
    console.warn("FirestoreService: getUsersByRole called without a role.");
    return [];
  }
  try {
    const q = query(collection(db, "Users"), where("role", "==", role));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching users by role:", error);
    return [];
  }
};

// ------------------ COURSES ----------------------

export const getAllCourses = async () => {
  try {
    const coursesRef = collection(db, "Courses");
    const snapshot = await getDocs(coursesRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

export const getCourseById = async (id) => {
  if (!id) {
    console.warn("FirestoreService: getCourseById called without an ID.");
    return null;
  }
  try {
    const courseRef = doc(db, "Courses", id);
    const snapshot = await getDoc(courseRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  } catch (error) {
    console.error("Error fetching course:", error);
    return null;
  }
};

export const getUserCourses = async (courseIds) => {
  if (!courseIds || courseIds.length === 0) {
    return [];
  }
  
  try {
    const coursePromises = courseIds.map(courseId => getCourseById(courseId));
    const courses = await Promise.all(coursePromises);
    return courses.filter(course => course !== null);
  } catch (error) {
    console.error("Error fetching user courses:", error);
    return [];
  }
};

// ------------------ SUPER ADMIN STATS ------------------

export const getStatsOverview = async () => {
  try {
    const [usersSnap, orgsSnap, coursesSnap] = await Promise.all([
      getDocs(collection(db, "Users")),
      getDocs(collection(db, "Organizations")),
      getDocs(collection(db, "Courses")),
    ]);

    // Count users by role
    const usersByRole = {};
    usersSnap.docs.forEach(doc => {
      const role = doc.data().role || "user";
      usersByRole[role] = (usersByRole[role] || 0) + 1;
    });

    return {
      totalUsers: usersSnap.size,
      totalOrganizations: orgsSnap.size,
      totalCourses: coursesSnap.size,
      usersByRole,
    };
  } catch (error) {
    console.error("Error fetching stats overview:", error);
    return {
      totalUsers: 0,
      totalOrganizations: 0,
      totalCourses: 0,
      usersByRole: {},
    };
  }
};

// ------------------ UTILITY FUNCTIONS ------------------

export const validateUserRole = (role) => {
  const validRoles = ["user", "admin", "superadmin"];
  return validRoles.includes(role);
};

export const isAuthorized = (userRole, requiredRole) => {
  const roleHierarchy = {
    user: 1,
    admin: 2,
    superadmin: 3
  };
  
  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
};