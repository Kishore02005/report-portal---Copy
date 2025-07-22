import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";
import UserNavbar from "../components/UserNavbar";

/* -------------------- ANIMATIONS -------------------- */
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
  100% { transform: translateY(0px) rotate(360deg); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

/* -------------------- STYLED COMPONENTS -------------------- */
const PageContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  font-family: "Inter", "Segoe UI", sans-serif;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px 24px;
  padding-top: 84px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  min-height: calc(100vh - 84px);
  display: flex;
  flex-direction: column;
`;

const FloatingElement = styled.div`
  position: absolute;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${float} 25s ease-in-out infinite;
  pointer-events: none;
  z-index: 1;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  
  &.element-1 {
    width: 120px;
    height: 120px;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    top: 8%;
    left: 8%;
    animation-delay: 0s;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.1) 100%);
  }
  
  &.element-2 {
    width: 180px;
    height: 180px;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    top: 55%;
    right: 10%;
    animation-delay: -8s;
    background: linear-gradient(135deg, rgba(240, 147, 251, 0.2) 0%, rgba(245, 87, 108, 0.1) 100%);
  }
  
  &.element-3 {
    width: 90px;
    height: 90px;
    border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
    bottom: 15%;
    left: 15%;
    animation-delay: -15s;
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.2) 0%, rgba(102, 126, 234, 0.1) 100%);
  }
  
  &.element-4 {
    width: 140px;
    height: 140px;
    border-radius: 70% 30% 50% 50% / 30% 60% 40% 70%;
    top: 25%;
    right: 25%;
    animation-delay: -20s;
    background: linear-gradient(135deg, rgba(255, 182, 193, 0.2) 0%, rgba(240, 147, 251, 0.1) 100%);
  }
  
  &.element-5 {
    width: 70px;
    height: 70px;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    top: 70%;
    left: 60%;
    animation-delay: -12s;
    background: linear-gradient(135deg, rgba(78, 205, 196, 0.2) 0%, rgba(79, 172, 254, 0.1) 100%);
  }
  
  &.element-6 {
    width: 110px;
    height: 110px;
    border-radius: 30% 70% 40% 60% / 40% 50% 60% 50%;
    bottom: 40%;
    right: 50%;
    animation-delay: -25s;
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.2) 0%, rgba(255, 182, 193, 0.1) 100%);
  }
`;



const DashboardHeader = styled.div`
  margin-bottom: 24px;
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 6px 0;
`;

const PageSubtitle = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  margin: 0;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  flex: 1;
  align-items: start;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  animation: ${fadeIn} 0.6s ease;
`;

const ProfileCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: fit-content;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  border: 3px solid #f1f5f9;
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
  margin-bottom: 20px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
`;

const StatItem = styled.div`
  background: #f8fafc;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e2e8f0;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const InfoText = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  margin: 8px 0;
  line-height: 1.5;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
`;

const InfoLabel = styled.span`
  color: #64748b;
  font-size: 0.9rem;
`;

const InfoValue = styled.span`
  color: #1e293b;
  font-weight: 500;
  font-size: 0.9rem;
`;

const ProgressCard = styled(Card)`
  margin-bottom: 20px;
`;

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const ProgressLabel = styled.h3`
  font-size: 1rem;
  color: #1e293b;
  font-weight: 600;
  margin: 0;
`;

const ProgressPercentage = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #3b82f6;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: #f1f5f9;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: #3b82f6;
  width: ${({ $percent }) => $percent || 0}%;
  transition: width 0.8s ease;
  border-radius: 4px;
`;

const SubText = styled.p`
  color: #555;
  font-size: 0.95rem;
  margin-top: 30px;
  margin-bottom: 12px;
`;

const ReportCard = styled(Card)``;

const ReportHeader = styled.h3`
  color: #1e293b;
  font-size: 1.1rem;
  margin: 0 0 16px 0;
  font-weight: 600;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
`;

const PrimaryButton = styled(Button)`
  background: #3b82f6;
  color: white;
  
  &:hover {
    background: #2563eb;
    text-decoration: none;
    color: white;
  }
`;

const SecondaryButton = styled(Button)`
  background: #f8fafc;
  color: #475569;
  border: 1px solid #e2e8f0;
  
  &:hover {
    background: #f1f5f9;
    text-decoration: none;
    color: #475569;
  }
`;

const ErrorText = styled.p`
  color: #d32f2f;
  text-align: center;
  margin-top: 30px;
  font-size: 1rem;
`;

/* -------------------- MAIN COMPONENT -------------------- */
const UserDashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const [dashboardDataLoading, setDashboardDataLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (authLoading || !user?.email) {
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
          setUserData(userDocSnap.data());
        } else {
          setError("User data not found in Firestore.");
          setUserData(null);
        }

      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError("Failed to load dashboard data. Please try again.");
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
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : "#";
  };

  return (
    <PageContainer>
      <UserNavbar />
      <ContentWrapper>
        <DashboardHeader>
          <PageTitle>Dashboard</PageTitle>
          <PageSubtitle>Track your learning progress and access your reports</PageSubtitle>
        </DashboardHeader>

        {authLoading || dashboardDataLoading ? (
          <Loader />
        ) : error ? (
          <ErrorText>{error}</ErrorText>
        ) : !userData ? (
          <ErrorText>No user data found for your account. Please contact support.</ErrorText>
        ) : (
          <DashboardGrid>
            <ProfileCard>
              <ProfileImage 
                src={userData.photoURL || "https://i.pravatar.cc/150"} 
                alt="Profile"
              />
              <UserName>{userData.username || user?.email?.split("@")[0] || "User"}</UserName>
              <UserRole>Student</UserRole>
              
              <StatsGrid>
                <StatItem>
                  <StatValue>{userData.completion || 0}%</StatValue>
                  <StatLabel>Progress</StatLabel>
                </StatItem>
                <StatItem>
                  <StatValue>{userData.labName ? '1' : '0'}</StatValue>
                  <StatLabel>Active Labs</StatLabel>
                </StatItem>
              </StatsGrid>
              
              {(userData.labName || userData.enrolment) && (
                <div style={{width: '100%', marginTop: '16px'}}>
                  {userData.labName && (
                    <InfoItem>
                      <InfoLabel>Current Lab</InfoLabel>
                      <InfoValue>{userData.labName}</InfoValue>
                    </InfoItem>
                  )}
                  {userData.enrolment && (
                    <InfoItem>
                      <InfoLabel>Enrolled</InfoLabel>
                      <InfoValue>{formatDate(userData.enrolment)}</InfoValue>
                    </InfoItem>
                  )}
                </div>
              )}
            </ProfileCard>

            <MainContent>
              {userData.labName || userData.enrolment || userData.completion || userData.reportUrl ? (
                <>
                  <ProgressCard>
                    <ProgressHeader>
                      <ProgressLabel>Course Progress</ProgressLabel>
                      <ProgressPercentage>{userData.completion || 0}%</ProgressPercentage>
                    </ProgressHeader>
                    <ProgressBarContainer>
                      <Progress $percent={userData.completion || 0} />
                    </ProgressBarContainer>
                  </ProgressCard>

                  {userData.reportUrl && (
                    <ReportCard>
                      <ReportHeader>Learning Report</ReportHeader>
                      <Iframe 
                        src={userData.reportUrl} 
                        title="Your Report" 
                        allow="fullscreen"
                      />
                      <ActionButtons>
                        <PrimaryButton
                          href={getDownloadLink(userData.reportUrl)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download PDF
                        </PrimaryButton>
                        <SecondaryButton 
                          as="button"
                          onClick={() => window.open(userData.reportUrl, '_blank')}
                        >
                          Open in New Tab
                        </SecondaryButton>
                      </ActionButtons>
                    </ReportCard>
                  )}
                  
                  {!userData.reportUrl && (
                    <Card>
                      <InfoText style={{textAlign: 'center', color: '#64748b'}}>Your personalized report will be available once you complete more of the course.</InfoText>
                    </Card>
                  )}
                </>
              ) : (
                <Card>
                  <InfoText style={{textAlign: 'center', color: '#64748b'}}>
                    No active course or lab data found. Start your learning journey by enrolling in a course!
                  </InfoText>
                </Card>
              )}
            </MainContent>
          </DashboardGrid>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default UserDashboard;
