// src/pages/UserHiLabsPage.js
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { db } from "../firebaseConfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";
import UserNavbar from "../components/UserNavbar";
import { FiTool, FiCalendar, FiTag, FiClock, FiCheckCircle, FiXCircle, FiAward } from 'react-icons/fi';

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
  background: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  padding: 70px 0 0 0;
  margin: 0;
  position: relative;
  color: #1e293b;
  
  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2.5rem 1.875rem 3rem 1.875rem;
  text-align: center;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem 2rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.75rem 1.5rem 0.75rem;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${slideIn} 0.8s ease-out;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StatCard = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  text-align: center;
  min-width: 140px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
    color: #3b82f6;
    font-family: 'Inter', sans-serif;
  }
  
  p {
    font-size: 0.875rem;
    margin: 0.25rem 0 0 0;
    color: #64748b;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
  }
  
  @media (max-width: 480px) {
    min-width: 120px;
    padding: 1rem 1.25rem;
    
    h3 {
      font-size: 1.5rem;
    }
    
    p {
      font-size: 0.8rem;
    }
  }
`;

const Title = styled.h2`
  font-size: 2.75rem;
  color: #0f172a;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  svg {
    color: #3b82f6;
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
  color: #64748b;
  margin: 0 auto;
  max-width: 600px;
  line-height: 1.6;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const LabGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const LabCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeIn} 0.6s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(59, 130, 246, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 100%;
    
    &:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 12px;
  }
`;

const LabHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;
`;

const LabIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const LabName = styled.h3`
  font-size: 1.75rem;
  color: #0f172a;
  margin: 0;
  font-weight: 600;
  line-height: 1.3;
  flex: 1;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const LabDetailsGrid = styled.div`
  display: grid;
  gap: 1rem;
  width: 100%;
`;

const LabDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e2e8f0;
    transform: translateX(4px);
  }
  
  svg {
    color: #3b82f6;
    flex-shrink: 0;
    font-size: 1.125rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.875rem;
    gap: 0.75rem;
  }
`;

const LabLabel = styled.span`
  color: #64748b;
  font-weight: 500;
  font-size: 1rem;
  flex: 1;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const LabValue = styled.span`
  color: #0f172a;
  font-weight: 600;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid #e2e8f0;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.375rem 0.75rem;
  }
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
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
    font-size: 1rem;
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

const UserHiLabsPage = () => {
  const { user, loading: authLoading } = useAuth();
  const [userLabs, setUserLabs] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState("");



  useEffect(() => {
    const fetchUserLab = async () => {
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
          const enrolledLabIds = userData.labs || [];
          const activeLabIds = userData.activeLabs || [];

          if (enrolledLabIds.length > 0) {
            const labsRef = collection(db, "Labs");
            const allLabsSnap = await getDocs(labsRef);
            const allLabsMap = new Map();
            allLabsSnap.docs.forEach(d => allLabsMap.set(d.id, d.data()));

            const detailedLabs = enrolledLabIds
              .map(labId => {
                const labDetails = allLabsMap.get(labId);
                const isActive = activeLabIds.includes(labId);
                return labDetails ? {
                  id: labId,
                  name: labDetails.labName,
                  enrolledDate: userData.enrolment,
                  category: "HI Lab",
                  duration: "Self-paced",
                  status: isActive ? 'Active' : 'Completed'
                } : null;
              })
              .filter(lab => lab !== null);

            if (detailedLabs.length > 0) {
              setUserLabs(detailedLabs);
            } else {
              setError("No detailed lab information found for your enrollments.");
            }
          } else {
            setError("You are not currently enrolled in any HI Labs.");
          }
        } else {
          setError("User data not found.");
        }

      } catch (err) {
        console.error("Error fetching user HI Lab:", err);
        setError("Failed to load your HI Labs. Please try again.");
      } finally {
        setPageLoading(false);
      }
    };

    fetchUserLab();
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
        ) : userLabs.length > 0 ? (
          <>
            <HeaderSection>
              <Title>
                <FiTool />
                Your HI Labs
              </Title>
              <Subtitle>
                Explore hands-on learning experiences and practical skills development
              </Subtitle>
              <StatsContainer>
                <StatCard>
                  <h3>{userLabs.length}</h3>
                  <p>Enrolled Labs</p>
                </StatCard>
                <StatCard>
                  <h3>{userLabs.filter(lab => lab.status === 'Active').length}</h3>
                  <p>Active Labs</p>
                </StatCard>
                <StatCard>
                  <h3>{userLabs.filter(lab => lab.status === 'Completed').length}</h3>
                  <p>Completed Labs</p>
                </StatCard>
              </StatsContainer>
            </HeaderSection>
            <LabGrid>
              {userLabs.map((lab, index) => (
                <LabCard key={lab.id} index={index}>
                  <LabHeader>
                    <LabIcon>
                      <FiTool />
                    </LabIcon>
                    <LabName>{lab.name || "Lab Name"}</LabName>
                  </LabHeader>
                  <LabDetailsGrid>
                    <LabDetail>
                      <FiCalendar />
                      <LabLabel>Enrolled Date</LabLabel>
                      <LabValue>{lab.enrolledDate ? new Date(lab.enrolledDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "Not specified"}</LabValue>
                    </LabDetail>
                    <LabDetail>
                      <FiClock />
                      <LabLabel>Duration</LabLabel>
                      <LabValue>{lab.duration || "Self-paced"}</LabValue>
                    </LabDetail>
                    <LabDetail>
                      <FiCheckCircle />
                      <LabLabel>Status</LabLabel>
                      <StatusBadge active={lab.status === 'Active'}>
                        {lab.status === 'Active' ? <FiCheckCircle /> : <FiXCircle />}
                        {lab.status || "Inactive"}
                      </StatusBadge>
                    </LabDetail>
                  </LabDetailsGrid>
                </LabCard>
              ))}
            </LabGrid>
          </>
        ) : (
          <EmptyState>
            <FiAward />
            <h3>No Labs Yet</h3>
            <p>Start your hands-on learning journey by enrolling in HI Labs that match your interests.</p>
          </EmptyState>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default UserHiLabsPage;