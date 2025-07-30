// src/pages/UserCoursesPage.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebaseConfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";
import UserNavbar from "../components/UserNavbar";

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  padding-top: 70px;
  
  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1.875rem;
  text-align: center;
  
  @media (max-width: 1024px) {
    max-width: 1000px;
    padding: 2rem 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: 700;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.25rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const CourseCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 8px;
  }
`;

const CourseName = styled.h3`
  font-size: 1.3rem;
  color: #1e293b;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.3;
  width: 100%;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.875rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.125rem;
    margin-bottom: 0.75rem;
  }
`;

const CourseDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.95rem;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    padding: 0.75rem 0;
    font-size: 0.9rem;
  }
`;

const CourseLabel = styled.span`
  color: #64748b;
  font-weight: 500;
  font-size: 0.95rem;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CourseValue = styled.span`
  color: #1e293b;
  font-weight: 600;
  background: #f1f5f9;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.95rem;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.375rem 0.75rem;
  }
`;

const ErrorText = styled.p`
  color: #dc2626;
  text-align: center;
  margin-top: 2rem;
  font-size: 1.125rem;
  background: #fef2f2;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #fecaca;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }
`;

const Placeholder = styled.div`
  padding: 3.75rem 2.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  color: #64748b;
  font-size: 1.125rem;
  text-align: center;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
    font-size: 0.9rem;
    border-radius: 8px;
  }
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
                  <CourseDetail>
                    <CourseLabel>Category:</CourseLabel>
                    <CourseValue>{course.category || "N/A"}</CourseValue>
                  </CourseDetail>
                  <CourseDetail>
                    <CourseLabel>Duration:</CourseLabel>
                    <CourseValue>{course.duration || "N/A"}</CourseValue>
                  </CourseDetail>
                  <CourseDetail>
                    <CourseLabel>Status:</CourseLabel>
                    <CourseValue>{course.active ? "Active" : "Inactive"}</CourseValue>
                  </CourseDetail>
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