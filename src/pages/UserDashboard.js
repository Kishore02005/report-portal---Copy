import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { db } from "../firebaseConfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import UserNavbar from "../components/UserNavbar";
import CountUp from 'react-countup';
import { FiUser, FiActivity, FiFileText, FiDownload, FiExternalLink, FiAward, FiBookOpen, FiAlertCircle } from 'react-icons/fi';

/* -------------------- ANIMATIONS & KEYFRAMES -------------------- */
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;


/* -------------------- STYLED COMPONENTS -------------------- */
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f0f4f8;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 400px;
    background: linear-gradient(180deg, rgba(219, 234, 254, 0.6) 0%, rgba(240, 244, 248, 0) 100%);
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem;
  padding-top: 5.5rem; /* Space for Navbar */
`;

const WelcomeBanner = styled.div`
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
  border-radius: 16px;
  color: white;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.5);
  animation: ${fadeIn} 0.5s ease-out;

  svg {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
  }
`;

const WelcomeText = styled.div`
  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0 0 4px 0;
  }
  p {
    font-size: 1rem;
    margin: 0;
    opacity: 0.9;
  }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 24px;
  align-items: start;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const AnimatedCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(226, 232, 240, 0.7);
  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: ${({ delay }) => delay || '0s'};
  opacity: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  }
`;

const ProfileCard = styled(AnimatedCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: fit-content;
`;

const Avatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const UserName = styled.h2`
  color: #1e293b;
  font-size: 1.5rem;
  margin-bottom: 4px;
  font-weight: 600;
`;

const UserRole = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 24px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
  margin-bottom: 16px;
`;

const ExtendedStatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  width: 100%;
  margin-bottom: 16px;
`;

const CompactStatItem = styled.div`
  background: #f8fafc;
  padding: 0.75rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #e2e8f0;
`;

const CompactStatIcon = styled.div`
  color: #3b82f6;
  font-size: 1.2rem;
  margin-bottom: 6px;
`;

const CompactStatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1;
`;

const CompactStatLabel = styled.div`
  font-size: 0.7rem;
  color: #64748b;
  font-weight: 500;
`;

const StatItem = styled.div`
  background: #f8fafc;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #e2e8f0;
`;

const StatIcon = styled.div`
  color: #3b82f6;
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
`;

const InfoSection = styled.div`
  width: 100%;
  border-top: 1px solid #e2e8f0;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  font-size: 0.9rem;
`;

const InfoLabel = styled.span`
  color: #64748b;
`;

const InfoValue = styled.span`
  color: #1e293b;
  font-weight: 500;
`;

const SectionHeader = styled.div`
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
  font-size: 0.9rem;
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 0;
  color: #475569;
  font-size: 0.85rem;
  
  svg {
    color: #3b82f6;
    font-size: 0.9rem;
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const ActivityName = styled.span`
  line-height: 1.4;
  word-break: break-word;
  flex: 1;
  text-align: left;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProgressCard = styled(AnimatedCard)``;
const ReportCard = styled(AnimatedCard)``;
const ActiveCoursesCard = styled(AnimatedCard)``;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 1.1rem;
  color: #1e293b;
  font-weight: 600;

  svg {
    color: #3b82f6;
  }
`;

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const ProgressPercentage = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #3b82f6;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background: #e2e8f0;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #3b82f6 0%, #6366f1 100%);
  width: ${({ $percent }) => $percent || 0}%;
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 5px;
`;

const IframeContainer = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  margin-bottom: 16px;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid transparent;
`;

const PrimaryButton = styled(Button)`
  background: #3b82f6;
  color: white;
  
  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px -5px rgba(59, 130, 246, 0.7);
  }
`;

const SecondaryButton = styled(Button)`
  background: white;
  color: #475569;
  border-color: #e2e8f0;
  
  &:hover {
    background: #f8fafc;
    color: #3b82f6;
    border-color: #3b82f6;
  }
`;

const EmptyStateCard = styled(AnimatedCard)`
    text-align: center;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    svg {
        font-size: 3rem;
        color: #94a3b8;
    }
    
    p {
        color: #64748b;
        font-size: 1rem;
        max-width: 350px;
        line-height: 1.5;
        margin: 0;
    }
`;

const ErrorText = styled(EmptyStateCard)`
  border-color: #fecaca;
  background: #fef2f2;
  
  svg {
    color: #ef4444;
  }
  
  p {
    color: #b91c1c;
  }
`;

const CoursesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CourseItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
  }
`;

const CourseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CourseIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const CourseName = styled.div`
  font-weight: 600;
  color: #1e293b;
  font-size: 0.95rem;
`;

const CourseStatus = styled.div`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: #dbeafe;
  color: #1e40af;
`;

/* -------------------- SKELETON LOADER -------------------- */
const SkeletonWrapper = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 24px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const SkeletonCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
`;

const SkeletonLine = styled.div`
  height: ${({ height }) => height || '16px'};
  width: ${({ width }) => width || '100%'};
  border-radius: 8px;
  background: linear-gradient(90deg, #f0f4f8, #e2e8f0, #f0f4f8);
  background-size: 2000px 100%;
  animation: ${shimmer} 2s linear infinite;
  margin-bottom: ${({ mb }) => mb || '0'};
`;


const SkeletonDashboard = () => (
  <SkeletonWrapper>
    {/* Profile Skeleton */}
    <SkeletonCard>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SkeletonLine width="90px" height="90px" style={{ borderRadius: '50%', marginBottom: '1rem' }} />
        <SkeletonLine width="60%" height="24px" mb="8px" />
        <SkeletonLine width="40%" height="14px" mb="24px" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', width: '100%' }}>
          <SkeletonLine height="70px" />
          <SkeletonLine height="70px" />
        </div>
      </div>
    </SkeletonCard>
    {/* Main Content Skeleton */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <SkeletonCard>
        <SkeletonLine width="40%" height="20px" mb="16px" />
        <SkeletonLine height="10px" />
      </SkeletonCard>
      <SkeletonCard>
        <SkeletonLine width="30%" height="20px" mb="16px" />
        <SkeletonLine height="450px" />
      </SkeletonCard>
    </div>
  </SkeletonWrapper>
);


/* -------------------- MAIN COMPONENT -------------------- */
const UserDashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const [dashboardDataLoading, setDashboardDataLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [activeLabs, setActiveLabs] = useState([]);
  const [activeCourses, setActiveCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (authLoading) return; // Wait until auth state is resolved

    const fetchDashboardData = async () => {
      if (!user?.email) {
        setError("You must be logged in to view the dashboard.");
        setDashboardDataLoading(false);
        return;
      }

      setDashboardDataLoading(true);
      setError("");

      const userEmailLowerCase = user.email.toLowerCase();

      try {
        const userDocRef = doc(db, "Users", userEmailLowerCase);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const data = userDocSnap.data();
          setUserData(data);
          
          // Fetch active labs details
          if (data.activeLabs && data.activeLabs.length > 0) {
            const labsRef = collection(db, "Labs");
            const allLabsSnap = await getDocs(labsRef);
            const allLabsMap = new Map();
            allLabsSnap.docs.forEach(d => allLabsMap.set(d.id, d.data()));
            
            const activeLabsDetails = data.activeLabs
              .map(labId => {
                const labDetails = allLabsMap.get(labId);
                return labDetails ? { id: labId, name: labDetails.labName } : null;
              })
              .filter(lab => lab !== null);
            
            setActiveLabs(activeLabsDetails);
          }
          
          // Fetch active courses details
          if (data.activeCourses && data.activeCourses.length > 0) {
            const coursesRef = collection(db, "Courses");
            const allCoursesSnap = await getDocs(coursesRef);
            const allCoursesMap = new Map();
            allCoursesSnap.docs.forEach(d => allCoursesMap.set(d.id, d.data()));
            
            const activeCoursesDetails = data.activeCourses
              .map(courseId => {
                const courseDetails = allCoursesMap.get(courseId);
                return courseDetails ? { id: courseId, name: courseDetails.name } : null;
              })
              .filter(course => course !== null);
            
            setActiveCourses(activeCoursesDetails);
          }
        } else {
          setError("User data not found. If this is an error, please contact support.");
          setUserData(null);
        }

      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError("Failed to load dashboard data. Please check your connection and try again.");
      } finally {
        setDashboardDataLoading(false);
      }
    };

    fetchDashboardData();
  }, [user, authLoading]);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const [year, month, day] = dateString.split('-');
      const date = new Date(year, month - 1, day);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (e) {
      console.error("Error formatting date:", e);
      return dateString;
    }
  };

  const getDownloadLink = (url) => {
    if (!url) return "#";
    const match = url.match(/\/d\/(.*?)\//);
    const fileId = match ? match[1] : null;
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : url;
  };

  const welcomeName = userData?.username || user?.email?.split("@")[0] || "User";
  const userInitial = welcomeName?.charAt(0).toUpperCase() || "U";

  const renderContent = () => {
    if (authLoading || dashboardDataLoading) {
      return <SkeletonDashboard />;
    }
    if (error) {
      return <ErrorText><FiAlertCircle /><p>{error}</p></ErrorText>;
    }
    if (!userData) {
      return (
        <EmptyStateCard>
            <FiAlertCircle />
            <p>No user data found for your account. Please contact support if you believe this is an error.</p>
        </EmptyStateCard>
      );
    }

    return (
      <DashboardGrid>
        <ProfileCard delay="0.1s">
          <Avatar>{userInitial}</Avatar>
          <UserName>{userData.username || "User"}</UserName>
          <UserRole>Student</UserRole>
          
          <ExtendedStatsGrid>
            <CompactStatItem>
              <CompactStatIcon><FiAward /></CompactStatIcon>
              <CompactStatValue>
                <CountUp end={userData.completion || 0} duration={1.5} suffix="%" />
              </CompactStatValue>
              <CompactStatLabel>Progress</CompactStatLabel>
            </CompactStatItem>
            <CompactStatItem>
              <CompactStatIcon><FiBookOpen /></CompactStatIcon>
              <CompactStatValue>
                <CountUp end={activeCourses.length} duration={1.5} />
              </CompactStatValue>
              <CompactStatLabel>Courses</CompactStatLabel>
            </CompactStatItem>
            <CompactStatItem>
              <CompactStatIcon><FiActivity /></CompactStatIcon>
              <CompactStatValue>
                <CountUp end={activeLabs.length} duration={1.5} />
              </CompactStatValue>
              <CompactStatLabel>Labs</CompactStatLabel>
            </CompactStatItem>
          </ExtendedStatsGrid>
          
          {activeCourses.length > 0 && (
            <InfoSection>
              <SectionHeader>Active Courses</SectionHeader>
              {activeCourses.map((course) => (
                <ActivityItem key={course.id}>
                  <FiBookOpen />
                  <ActivityName>{course.name}</ActivityName>
                </ActivityItem>
              ))}
            </InfoSection>
          )}
          
          {activeLabs.length > 0 && (
            <InfoSection>
              <SectionHeader>Active Labs</SectionHeader>
              {activeLabs.map((lab) => (
                <ActivityItem key={lab.id}>
                  <FiActivity />
                  <ActivityName>{lab.name}</ActivityName>
                </ActivityItem>
              ))}
            </InfoSection>
          )}
          
          <InfoSection>
            {userData.enrolment && (
              <InfoItem>
                <InfoLabel>Enrolled On</InfoLabel>
                <InfoValue>{formatDate(userData.enrolment)}</InfoValue>
              </InfoItem>
            )}
          </InfoSection>
        </ProfileCard>

        <MainContent>
          {activeCourses.length > 0 ? (
            <ActiveCoursesCard delay="0.2s">
              <CardHeader><FiBookOpen /> Active Courses</CardHeader>
              <CoursesList>
                {activeCourses.map((course, index) => (
                  <CourseItem key={course.id}>
                    <CourseInfo>
                      <CourseIcon>
                        <FiBookOpen />
                      </CourseIcon>
                      <CourseName>{course.name}</CourseName>
                    </CourseInfo>
                    <CourseStatus>In Progress</CourseStatus>
                  </CourseItem>
                ))}
              </CoursesList>
            </ActiveCoursesCard>
          ) : (
            <EmptyStateCard delay="0.2s">
              <FiBookOpen />
              <p>No active courses found. Enroll in a course to start your learning journey!</p>
            </EmptyStateCard>
          )}

          <ProgressCard delay="0.3s">
            <CardHeader><FiActivity /> Course Progress</CardHeader>
            <ProgressHeader>
                <div style={{fontWeight: 500}}>Overall Completion</div>
                <ProgressPercentage>
                    <CountUp end={userData.completion || 0} duration={1.5} suffix="%" />
                </ProgressPercentage>
            </ProgressHeader>
            <ProgressBarContainer>
              <Progress $percent={userData.completion || 0} />
            </ProgressBarContainer>
          </ProgressCard>

          {userData.reportUrl ? (
            <ReportCard delay="0.4s">
              <CardHeader><FiFileText /> Learning Report</CardHeader>
              <IframeContainer>
                <Iframe 
                  src={userData.reportUrl} 
                  title="Your Report" 
                  allow="fullscreen"
                />
              </IframeContainer>
              <ActionButtons>
                <PrimaryButton
                  href={getDownloadLink(userData.reportUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiDownload /> Download PDF
                </PrimaryButton>
                <SecondaryButton 
                  as="a"
                  href={userData.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink /> Open in New Tab
                </SecondaryButton>
              </ActionButtons>
            </ReportCard>
          ) : (
            <EmptyStateCard delay="0.4s">
                <FiFileText />
                <p>Your personalized report will be available here once you've made more progress in the course.</p>
            </EmptyStateCard>
          )}
        </MainContent>
      </DashboardGrid>
    );
  };

  return (
    <PageContainer>
      <UserNavbar />
      <ContentWrapper>
        <WelcomeBanner>
          <FiUser />
          <WelcomeText>
            <h1>Welcome back, {welcomeName}!</h1>
            <p>Here's a summary of your learning journey and progress.</p>
          </WelcomeText>
        </WelcomeBanner>
        {renderContent()}
      </ContentWrapper>
    </PageContainer>
  );
};

export default UserDashboard;