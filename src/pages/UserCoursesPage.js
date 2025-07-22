// src/pages/UserCoursesPage.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebaseConfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";
import UserNavbar from "../components/UserNavbar"; // Import UserNavbar directly

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fc;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  padding-top: 70px; /* Adjust padding-top to account for fixed Navbar */
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 30px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 30px;
  text-align: center;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  justify-content: center;
`;

const CourseCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    transform: translateY(-3px);
  }
`;

const CourseName = styled.h3`
  font-size: 1.1rem;
  color: #3f51b5;
  margin-bottom: 10px;
`;

const CourseDetail = styled.p`
  font-size: 0.95rem;
  margin: 4px 0;
  color: #555;
  strong {
    color: #2e3a50;
  }
`;

const ErrorText = styled.p`
  color: #d32f2f;
  text-align: center;
  margin-top: 30px;
  font-size: 1rem;
`;

const Placeholder = styled.div`
  padding: 40px;
  background: #f9f9f9;
  border-radius: 14px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.05);
  color: #999;
  font-size: 1.1rem;
  text-align: center;
`;

const UserCoursesPage = () => {
  const { user, loading: authLoading } = useAuth();
  const [userCourses, setUserCourses] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserCourses = async () => {
      if (authLoading || !user?.email) {
        setPageLoading(false);
        return;
      }

      setPageLoading(true);
      setError("");

      const userEmailLowerCase = user.email.toLowerCase();

      try {
        const userDocRef = doc(db, "Users", userEmailLowerCase);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          const enrolledCourseIds = userData.courses || [];

          if (enrolledCourseIds.length > 0) {
            const coursesRef = collection(db, "Courses");
            const allCoursesSnap = await getDocs(coursesRef);
            const allCoursesMap = new Map();
            allCoursesSnap.docs.forEach(d => allCoursesMap.set(d.id, d.data()));

            const detailedCourses = enrolledCourseIds
              .map(courseId => {
                const courseDetails = allCoursesMap.get(courseId);
                return courseDetails ? { id: courseId, ...courseDetails } : null;
              })
              .filter(course => course !== null);

            setUserCourses(detailedCourses);
            if (detailedCourses.length === 0) {
              setError("No detailed course information found for your enrollments.");
            }
          } else {
            setError("You are not currently enrolled in any courses.");
          }
        } else {
          setError("User data not found.");
        }

      } catch (err) {
        console.error("Error fetching user courses:", err);
        setError("Failed to load your courses. Please try again.");
      } finally {
        setPageLoading(false);
      }
    };

    fetchUserCourses();
  }, [user, authLoading]);

  return (
    <PageContainer>
      <UserNavbar />
      <ContentWrapper>
        {authLoading || pageLoading ? (
          <Loader />
        ) : error ? (
          <ErrorText>{error}</ErrorText>
        ) : userCourses.length > 0 ? (
          <>
            <Title>Your Enrolled Courses</Title>
            <CourseGrid>
              {userCourses.map((course) => (
                <CourseCard key={course.id}>
                  <CourseName>{course.name || "N/A"}</CourseName>
                  <CourseDetail><strong>Category:</strong> {course.category || "N/A"}</CourseDetail>
                  <CourseDetail><strong>Duration:</strong> {course.duration || "N/A"}</CourseDetail>
                  <CourseDetail><strong>Status:</strong> {course.active ? "Active" : "Inactive"}</CourseDetail>
                </CourseCard>
              ))}
            </CourseGrid>
          </>
        ) : (
          <Placeholder>You are not currently enrolled in any courses.</Placeholder>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default UserCoursesPage;
