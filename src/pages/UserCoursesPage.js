// src/pages/UserCoursesPage.js
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { db } from "../firebaseConfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";
import UserNavbar from "../components/UserNavbar";
import { FiBook, FiClock, FiTag, FiCheckCircle, FiXCircle, FiTrendingUp, FiAward } from 'react-icons/fi';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  background: 
    linear-gradient(135deg, rgba(79, 172, 254, 0.85) 0%, rgba(0, 242, 254, 0.85) 50%, rgba(67, 233, 123, 0.85) 100%),
    url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  position: relative;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  color: #1e293b;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1.875rem 3rem 1.875rem;
  padding-top: 6rem;
  text-align: center;
  min-height: 100vh;
  animation: ${fadeIn} 0.8s ease-out;
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 2rem 1.5rem 2.5rem 1.5rem;
    padding-top: 5.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem 2rem 1rem;
    padding-top: 5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.75rem 1.5rem 0.75rem;
    padding-top: 4.5rem;
  }
  
  @media (max-width: 320px) {
    padding: 0.75rem 0.5rem 1rem 0.5rem;
    padding-top: 4rem;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${slideIn} 0.8s ease-out;
`;

const Title = styled.h2`
  font-size: 2.75rem;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  
  svg {
    color: #ffffff;
  }
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 0.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.875rem;
    margin-bottom: 0.5rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 auto;
  max-width: 600px;
  line-height: 1.6;
  font-weight: 400;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

const StatItem = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 1rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
    color: #4facfe;
    font-family: 'Inter', sans-serif;
  }
  
  p {
    font-size: 0.875rem;
    margin: 0.25rem 0 0 0;
    color: #475569;
    font-weight: 500;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    
    h3 {
      font-size: 1.5rem;
    }
    
    p {
      font-size: 0.8rem;
    }
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const CourseCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 1.75rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeIn} 0.6s ease-out;
  animation-delay: ${props => props.index * 0.1}s;
  animation-fill-mode: both;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #4facfe, #00f2fe, #43e97b);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    
    &::after {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 16px;
    
    &:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 12px;
  }
`;

const CourseHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  width: 100%;
`;

const CourseIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  flex-shrink: 0;
`;

const CourseName = styled.h3`
  font-size: 1.25rem;
  color: #0f172a;
  margin: 0;
  font-weight: 600;
  line-height: 1.3;
  flex: 1;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.01em;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  
  @media (max-width: 1024px) {
    font-size: 1.125rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.85rem;
  }
`;

const CourseDetailsGrid = styled.div`
  display: grid;
  gap: 0.75rem;
  width: 100%;
`;

const CourseDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e2e8f0;
    transform: translateX(4px);
  }
  
  svg {
    color: #4facfe;
    flex-shrink: 0;
  }
  
  @media (max-width: 480px) {
    padding: 0.625rem;
    gap: 0.5rem;
  }
`;

const CourseLabel = styled.span`
  color: #64748b;
  font-weight: 500;
  font-size: 0.875rem;
  flex: 1;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const CourseValue = styled.span`
  color: #0f172a;
  font-weight: 600;
  background: #f1f5f9;
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  border: 1px solid #e2e8f0;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
  }
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  
  ${props => props.active ? `
    background: #dcfce7;
    color: #166534;
    border: 1px solid #bbf7d0;
  ` : `
    background: #fef2f2;
    color: #dc2626;
    border: 1px solid #fecaca;
  `}
  
  svg {
    font-size: 0.875rem;
  }
`;

const ErrorText = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
  
  h3 {
    color: #dc2626;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    font-family: 'Inter', sans-serif;
  }
  
  p {
    color: #64748b;
    font-size: 1rem;
    margin: 0;
    line-height: 1.5;
    font-family: 'Inter', sans-serif;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.125rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
`;

const EmptyState = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 4rem 2.5rem;
  text-align: center;
  margin-top: 2rem;
  
  svg {
    font-size: 4rem;
    color: #cbd5e1;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    font-size: 1.5rem;
    color: #0f172a;
    font-weight: 600;
    margin: 0 0 1rem 0;
    font-family: 'Inter', sans-serif;
  }
  
  p {
    color: #64748b;
    font-size: 1.125rem;
    margin: 0;
    line-height: 1.6;
    max-width: 400px;
    margin: 0 auto;
    font-family: 'Inter', sans-serif;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    
    svg {
      font-size: 3rem;
    }
    
    h3 {
      font-size: 1.25rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
    border-radius: 16px;
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
          const activeCourseIds = userData.activeCourses || [];

          if (enrolledCourseIds.length > 0) {
            const coursesRef = collection(db, "Courses");
            const allCoursesSnap = await getDocs(coursesRef);
            const allCoursesMap = new Map();
            allCoursesSnap.docs.forEach(d => allCoursesMap.set(d.id, d.data()));

            const detailedCourses = enrolledCourseIds
              .map(courseId => {
                const courseDetails = allCoursesMap.get(courseId);
                const isActive = activeCourseIds.includes(courseId);
                return courseDetails ? { 
                  id: courseId, 
                  ...courseDetails, 
                  status: isActive ? 'Active' : 'Completed'
                } : null;
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
          <ErrorText>
            <h3>Oops! Something went wrong</h3>
            <p>{error}</p>
          </ErrorText>
        ) : userCourses.length > 0 ? (
          <>
            <HeaderSection>
              <Title>
                <FiBook />
                Your Learning Journey
              </Title>
              <Subtitle>
                Track your progress and continue building your skills with these enrolled courses
              </Subtitle>
              <StatsBar>
                <StatItem>
                  <h3>{userCourses.length}</h3>
                  <p>Enrolled Courses</p>
                </StatItem>
                <StatItem>
                  <h3>{userCourses.filter(c => c.status === 'Active').length}</h3>
                  <p>Active Courses</p>
                </StatItem>
                <StatItem>
                  <h3>{userCourses.filter(c => c.status === 'Completed').length}</h3>
                  <p>Completed</p>
                </StatItem>
              </StatsBar>
            </HeaderSection>
            <CourseGrid>
              {userCourses.map((course, index) => (
                <CourseCard key={course.id} index={index}>
                  <CourseHeader>
                    <CourseIcon>
                      <FiBook />
                    </CourseIcon>
                    <CourseName>{course.name || "Course Name"}</CourseName>
                  </CourseHeader>
                  <CourseDetailsGrid>
                    <CourseDetail>
                      <FiClock />
                      <CourseLabel>Duration</CourseLabel>
                      <CourseValue>{course.duration || "Self-paced"}</CourseValue>
                    </CourseDetail>
                    <CourseDetail>
                      <FiTrendingUp />
                      <CourseLabel>Status</CourseLabel>
                      <StatusBadge active={course.status === 'Active'}>
                        {course.status === 'Active' ? <FiCheckCircle /> : <FiXCircle />}
                        {course.status || "Inactive"}
                      </StatusBadge>
                    </CourseDetail>
                  </CourseDetailsGrid>
                </CourseCard>
              ))}
            </CourseGrid>
          </>
        ) : (
          <EmptyState>
            <FiAward />
            <h3>No Courses Yet</h3>
            <p>Start your learning journey by enrolling in courses that match your interests and goals.</p>
          </EmptyState>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default UserCoursesPage;