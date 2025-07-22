// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      setLoading(true);
      setError(null);
      
      if (authUser) {
        // Check if user has an email
        if (!authUser.email) {
          console.warn("AuthContext: User authenticated but no email found");
          setUser(null);
          setRole(null);
          setLoading(false);
          return;
        }

        try {
          // Use email as document ID (lowercase for consistency)
          const userEmail = authUser.email.toLowerCase();
          const userDocRef = doc(db, "Users", userEmail);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            const userRole = userData.role || "user";

            // Validate role
            if (!["user", "admin", "superadmin"].includes(userRole)) {
              console.error("AuthContext: Invalid user role:", userRole);
              setError("Invalid user role from Firestore");
              setUser(null);
              setRole(null);
              await auth.signOut();
              setLoading(false);
              return;
            }

            // Set user data combining auth and firestore data
            setUser({
              uid: authUser.uid,
              email: authUser.email,
              displayName: authUser.displayName || userData.username || userData.email,
              photoURL: authUser.photoURL || userData.photoURL,
              ...userData // Spread all firestore data
            });
            setRole(userRole);
            
            console.log("AuthContext: User authenticated successfully", {
              email: userEmail,
              role: userRole,
              username: userData.username
            });
          } else {
            console.warn("AuthContext: User authenticated but no document found in Users collection for:", userEmail);
            setError("User profile not found");
            setUser(null);
            setRole(null);
            // Don't sign out here - let them try to access login page
          }
        } catch (error) {
          console.error("AuthContext: Error fetching user data from Firestore:", error);
          setError("Failed to load user profile");
          setUser(null);
          setRole(null);
        }
      } else {
        // User is signed out
        setUser(null);
        setRole(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      setRole(null);
      setError(null);
    } catch (error) {
      console.error("AuthContext: Error during logout:", error);
      setError("Failed to logout");
    }
  };

  const value = {
    user,
    role,
    loading,
    error,
    authError,
    setAuthError,
    logout,
    // Keep setUser and setRole for backward compatibility if needed
    setUser,
    setRole
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};