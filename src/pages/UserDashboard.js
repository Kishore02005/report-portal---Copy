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

/* -------------------- STYLED COMPONENTS -------------------- */
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 1.25rem 1.5rem;
  padding-top: 5.25rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  min-height: calc(100vh - 5.25rem);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1024px) {
    padding: 1rem 1.25rem;
    padding-top: 5rem;
    max-width: 1200px;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 4.5rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
    padding-top: 4rem;
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
  
  @media (max-width: 1200px) {
    grid-template-columns: 280px 1fr;
    gap: 16px;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  animation: ${fadeIn} 0.6s ease;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 8px;
  }
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
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const StatItem = styled.div`
  background: #f8fafc;
  padding: 1rem 0.75rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    padding: 0.875rem 0.625rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem 0.5rem;
    border-radius: 6px;
  }
`;

const StatValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.25rem;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 1.625rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
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
  transition: width 1.2s ease;
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
  
  @media (max-width: 768px) {
    height: 300px;
  }
  
  @media (max-width: 480px) {
    height: 250px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
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
    background: #eff6ff;
    text-decoration: none;
    color: #3b82f6;
    border-color: #3b82f6;
  }
`;

const ErrorText = styled.p`
  color: #dc2626;
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
  background: #fef2f2;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #fecaca;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.875rem;
    margin-top: 1.5rem;
    border-radius: 6px;
  }
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
