import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import SuperAdminSidebar from "../components/SuperAdminSidebar"; // Import SuperAdminSidebar directly

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  font-family: "Inter", "Segoe UI", sans-serif;
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 300px;
  padding: 40px;
  width: calc(100% - 300px);
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    margin-left: 260px;
    width: calc(100% - 260px);
    padding: 32px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 20px;
    padding-top: 80px;
  }
`;

const Header = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1e293b;
  margin: 0 0 8px 0;
  font-weight: 700;
`;

const Subtitle = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  margin: 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, ${props => props.gradient});
  border-radius: 16px;
  padding: 28px;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(30px, -30px);
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
  }
`;

const StatIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;
  font-weight: 500;
  position: relative;
  z-index: 1;
`;

const CategorySection = styled.div`
  margin-bottom: 40px;
`;

const AnalyticsSection = styled.div`
  margin-bottom: 40px;
`;

const ChartContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  margin-bottom: 24px;
`;

const ChartTitle = styled.h3`
  font-size: 1.25rem;
  color: #1e293b;
  margin-bottom: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProgressChart = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
`;

const ProgressItem = styled.div`
  text-align: center;
`;

const ProgressRing = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 16px;
`;

const ProgressSvg = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

const ProgressCircle = styled.circle`
  fill: none;
  stroke: #f1f5f9;
  stroke-width: 8;
`;

const ProgressBar = styled.circle`
  fill: none;
  stroke: ${props => props.color};
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: ${props => props.circumference};
  stroke-dashoffset: ${props => props.offset};
  transition: stroke-dashoffset 0.5s ease-in-out;
`;

const ProgressValue = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
`;

const ProgressLabel = styled.div`
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
`;

const TrendChart = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
  height: 120px;
  padding: 20px 0;
`;

const TrendBar = styled.div`
  flex: 1;
  background: linear-gradient(to top, ${props => props.color}, ${props => props.lightColor});
  border-radius: 4px 4px 0 0;
  height: ${props => props.height}%;
  min-height: 20px;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const TrendValue = styled.div`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  font-weight: 600;
  color: #1e293b;
  white-space: nowrap;
`;

const TrendLabels = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

const TrendLabel = styled.div`
  flex: 1;
  text-align: center;
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

const MetricCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.accentColor};
  }
`;

const MetricHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const MetricTitle = styled.h4`
  font-size: 1rem;
  color: #64748b;
  margin: 0;
  font-weight: 500;
`;

const MetricIcon = styled.div`
  font-size: 1.5rem;
  opacity: 0.7;
`;

const MetricValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
`;

const MetricChange = styled.div`
  font-size: 0.85rem;
  color: ${props => props.positive ? '#10b981' : '#ef4444'};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #1e293b;
  margin-bottom: 24px;
  font-weight: 600;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const CategoryCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border-color: #3b82f6;
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const CategoryIcon = styled.div`
  font-size: 1.8rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  color: #1e293b;
  font-weight: 600;
  margin: 0;
`;

const CategoryStats = styled.div`
  display: flex;
  justify-content: center;
`;

const CategoryStatItem = styled.div`
  text-align: center;
  padding: 16px;
  background: #f8fafc;
  border-radius: 8px;
`;

const CategoryStatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
`;

const CategoryStatLabel = styled.div`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;

const OrgCountCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 32px 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  border: 2px solid #f1f5f9;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.accentColor};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    border-color: ${props => props.accentColor};
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const OrgCountIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  
  ${OrgCountCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const OrgCountValue = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 8px;
  line-height: 1;
`;

const OrgCountLabel = styled.div`
  font-size: 1rem;
  color: #64748b;
  font-weight: 600;
  letter-spacing: 0.025em;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const OrgCard = styled.div`
  background: linear-gradient(145deg, #ffffff, #f9f9f9);
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const OrgTitle = styled.h4`
  margin-bottom: 15px;
  font-size: 1.3rem;
  color: #2c5282;
  font-weight: 700;
`;

const Detail = styled.p`
  font-size: 1rem;
  margin: 8px 0;
  color: #4a5568;
  line-height: 1.5;
`;

const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const ServiceItem = styled.span`
  background-color: #e2e8f0;
  color: #4a5568;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const NoServiceItem = styled.em`
  color: #718096;
  font-size: 0.9rem;
`;

const ErrorText = styled.p`
  color: #d32f2f;
  text-align: center;
  margin-top: 30px;
  font-size: 1rem;
`;

const LogoutButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;

  &:hover {
    background-color: #d32f2f;
  }
`;

const SuperAdminDashboard = () => {
  const [orgData, setOrgData] = useState([]);
  const [stats, setStats] = useState({
    totalParticipants: 0,
    hiLabParticipants: 0,
    courseParticipants: 0,
    totalOrganizations: 0
  });
  const [categoryStats, setCategoryStats] = useState({
    schools: { total: 0, hiLab: 0, courses: 0, orgCount: 0 },
    colleges: { total: 0, hiLab: 0, courses: 0, orgCount: 0 },
    corporates: { total: 0, hiLab: 0, courses: 0, orgCount: 0 },
    individuals: { total: 0, hiLab: 0, courses: 0, orgCount: 0 }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const [orgSnapshot, usersSnapshot] = await Promise.all([
          getDocs(collection(db, "Organizations")),
          getDocs(collection(db, "Users")),
        ]);

        const allUsers = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })).filter(user => user.role === "user");

        const result = orgSnapshot.docs.map((orgDoc) => {
          const org = orgDoc.data();
          const participants = allUsers.filter(
            (user) => user.organizationId === orgDoc.id
          );

          return {
            id: orgDoc.id,
            name: org.name || "N/A",
            type: org.type || "N/A",
            participantsCount: participants.length,
            joinedDate: org.joinedOn || org.joinedDate || "N/A",
            hasHILab: org.hasHILab || false,
            hasCourses: org.hasCourses || false,
            hasWorkshops: org.hasWorkshops || false,
            participants
          };
        });

        // Calculate overall stats
        const totalParticipants = allUsers.length;
        const hiLabParticipants = allUsers.filter(user => user.labName).length;
        const courseParticipants = allUsers.filter(user => user.courses && user.courses.length > 0).length;
        const totalOrganizations = result.length;

        setStats({
          totalParticipants,
          hiLabParticipants,
          courseParticipants,
          totalOrganizations
        });

        // Calculate category stats
        const newCategoryStats = {
          schools: { total: 0, hiLab: 0, courses: 0, orgCount: 0 },
          colleges: { total: 0, hiLab: 0, courses: 0, orgCount: 0 },
          corporates: { total: 0, hiLab: 0, courses: 0, orgCount: 0 },
          individuals: { total: 0, hiLab: 0, courses: 0, orgCount: 0 }
        };

        result.forEach(org => {
          const categoryKey = org.type.toLowerCase() === 'school' ? 'schools' :
                            org.type.toLowerCase() === 'college' ? 'colleges' :
                            org.type.toLowerCase() === 'corporate' ? 'corporates' :
                            org.type.toLowerCase() === 'individual' ? 'individuals' : null;
          
          if (categoryKey && newCategoryStats[categoryKey]) {
            newCategoryStats[categoryKey].total += org.participantsCount;
            newCategoryStats[categoryKey].hiLab += org.participants.filter(p => p.labName).length;
            newCategoryStats[categoryKey].courses += org.participants.filter(p => p.courses && p.courses.length > 0).length;
            newCategoryStats[categoryKey].orgCount += 1;
          }
        });

        setCategoryStats(newCategoryStats);
        setOrgData(result);
      } catch (err) {
        console.error("Error fetching data for Super Admin Dashboard:", err);
        setError("Failed to load dashboard data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleClick = (orgId) => {
    navigate(`/admin/${orgId}`);
  };

  const handleCategoryClick = (category) => {
    navigate(`/participants?category=${category}`);
  };

  return (
    <PageContainer>
      <SuperAdminSidebar />
      <ContentWrapper>
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorText>{error}</ErrorText>
        ) : (
          <>
            <Header>
              <Title>Super Admin Dashboard</Title>
              <Subtitle>Comprehensive overview of all participants and organizations</Subtitle>
            </Header>
            
            <StatsGrid>
              <StatCard gradient="#3b82f6, #2563eb">
                <StatIcon>👥</StatIcon>
                <StatValue>{stats.totalParticipants}</StatValue>
                <StatLabel>Total Participants</StatLabel>
              </StatCard>
              
              <StatCard gradient="#10b981, #059669">
                <StatIcon>🏢</StatIcon>
                <StatValue>{stats.hiLabParticipants}</StatValue>
                <StatLabel>Lab Enrolled</StatLabel>
              </StatCard>
              
              <StatCard gradient="#f59e0b, #d97706">
                <StatIcon>📚</StatIcon>
                <StatValue>{stats.courseParticipants}</StatValue>
                <StatLabel>Course Enrolled</StatLabel>
              </StatCard>
              
              <StatCard gradient="#8b5cf6, #7c3aed">
                <StatIcon>🏢</StatIcon>
                <StatValue>{stats.totalOrganizations}</StatValue>
                <StatLabel>Organizations</StatLabel>
              </StatCard>
            </StatsGrid>
            
            <CategorySection>
              <SectionTitle>🏢 Organizations by Category</SectionTitle>
              <StatsGrid>
                <OrgCountCard 
                  accentColor="#3b82f6" 
                  onClick={() => navigate('/organizations/school')}
                >
                  <OrgCountIcon bgColor="rgba(59, 130, 246, 0.1)">🏫</OrgCountIcon>
                  <OrgCountValue>{categoryStats.schools.orgCount}</OrgCountValue>
                  <OrgCountLabel>Schools</OrgCountLabel>
                </OrgCountCard>
                
                <OrgCountCard 
                  accentColor="#10b981" 
                  onClick={() => navigate('/organizations/college')}
                >
                  <OrgCountIcon bgColor="rgba(16, 185, 129, 0.1)">🎓</OrgCountIcon>
                  <OrgCountValue>{categoryStats.colleges.orgCount}</OrgCountValue>
                  <OrgCountLabel>Colleges</OrgCountLabel>
                </OrgCountCard>
                
                <OrgCountCard 
                  accentColor="#f59e0b" 
                  onClick={() => navigate('/organizations/corporate')}
                >
                  <OrgCountIcon bgColor="rgba(245, 158, 11, 0.1)">🏢</OrgCountIcon>
                  <OrgCountValue>{categoryStats.corporates.orgCount}</OrgCountValue>
                  <OrgCountLabel>Corporates</OrgCountLabel>
                </OrgCountCard>
                
                <OrgCountCard 
                  accentColor="#8b5cf6" 
                  onClick={() => navigate('/organizations/individual')}
                >
                  <OrgCountIcon bgColor="rgba(139, 92, 246, 0.1)">👤</OrgCountIcon>
                  <OrgCountValue>{categoryStats.individuals.orgCount}</OrgCountValue>
                  <OrgCountLabel>Individuals</OrgCountLabel>
                </OrgCountCard>
              </StatsGrid>
            </CategorySection>
            
            <AnalyticsSection>
              <SectionTitle>Analytics Overview</SectionTitle>
              
              <ChartContainer>
                <ChartTitle>
                  <span></span> Enrollment Progress
                </ChartTitle>
                <ProgressChart>
                  <ProgressItem>
                    <ProgressRing>
                      <ProgressSvg>
                        <ProgressCircle cx="60" cy="60" r="52" />
                        {stats.totalParticipants > 0 && (
                          <ProgressBar 
                            cx="60" 
                            cy="60" 
                            r="52" 
                            color="#3b82f6"
                            circumference={327}
                            offset={327 - (327 * (stats.hiLabParticipants / stats.totalParticipants))}
                          />
                        )}
                      </ProgressSvg>
                      <ProgressValue>
                        {stats.totalParticipants > 0 ? Math.round((stats.hiLabParticipants / stats.totalParticipants) * 100) : 0}%
                      </ProgressValue>
                    </ProgressRing>
                    <ProgressLabel>Lab Enrollment Rate</ProgressLabel>
                  </ProgressItem>
                  
                  <ProgressItem>
                    <ProgressRing>
                      <ProgressSvg>
                        <ProgressCircle cx="60" cy="60" r="52" />
                        {stats.totalParticipants > 0 && (
                          <ProgressBar 
                            cx="60" 
                            cy="60" 
                            r="52" 
                            color="#10b981"
                            circumference={327}
                            offset={327 - (327 * (stats.courseParticipants / stats.totalParticipants))}
                          />
                        )}
                      </ProgressSvg>
                      <ProgressValue>
                        {stats.totalParticipants > 0 ? Math.round((stats.courseParticipants / stats.totalParticipants) * 100) : 0}%
                      </ProgressValue>
                    </ProgressRing>
                    <ProgressLabel>Course Enrollment Rate</ProgressLabel>
                  </ProgressItem>
                  
                  <ProgressItem>
                    <ProgressRing>
                      <ProgressSvg>
                        <ProgressCircle cx="60" cy="60" r="52" />

                      </ProgressSvg>
                      <ProgressValue>
                        {stats.totalOrganizations}
                      </ProgressValue>
                    </ProgressRing>
                    <ProgressLabel>Active Organizations</ProgressLabel>
                  </ProgressItem>
                </ProgressChart>
              </ChartContainer>
              
              <ChartContainer>
                <ChartTitle>
                  Category Distribution
                </ChartTitle>
                <TrendChart>
                  {stats.totalParticipants > 0 ? (
                    <>
                      <TrendBar 
                        height={Math.max((categoryStats.schools.total / stats.totalParticipants) * 100, 5)}
                        color="#3b82f6"
                        lightColor="#93c5fd"
                      >
                        <TrendValue>{categoryStats.schools.total}</TrendValue>
                      </TrendBar>
                      <TrendBar 
                        height={Math.max((categoryStats.colleges.total / stats.totalParticipants) * 100, 5)}
                        color="#10b981"
                        lightColor="#6ee7b7"
                      >
                        <TrendValue>{categoryStats.colleges.total}</TrendValue>
                      </TrendBar>
                      <TrendBar 
                        height={Math.max((categoryStats.corporates.total / stats.totalParticipants) * 100, 5)}
                        color="#f59e0b"
                        lightColor="#fbbf24"
                      >
                        <TrendValue>{categoryStats.corporates.total}</TrendValue>
                      </TrendBar>
                      <TrendBar 
                        height={Math.max((categoryStats.individuals.total / stats.totalParticipants) * 100, 5)}
                        color="#8b5cf6"
                        lightColor="#c4b5fd"
                      >
                        <TrendValue>{categoryStats.individuals.total}</TrendValue>
                      </TrendBar>
                    </>
                  ) : (
                    <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
                      No participant data available
                    </div>
                  )}
                </TrendChart>
                <TrendLabels>
                  <TrendLabel>Schools</TrendLabel>
                  <TrendLabel>Colleges</TrendLabel>
                  <TrendLabel>Corporates</TrendLabel>
                  <TrendLabel>Individuals</TrendLabel>
                </TrendLabels>
              </ChartContainer>
            </AnalyticsSection>
            
            <CategorySection>
              <SectionTitle>Enrollment by Category</SectionTitle>
              <CategoryGrid>
                <CategoryCard onClick={() => handleCategoryClick('school')}>
                  <CategoryHeader>
                    <CategoryIcon>🏫</CategoryIcon>
                    <CategoryTitle>Schools</CategoryTitle>
                  </CategoryHeader>
                  <CategoryStats>
                    <CategoryStatItem>
                      <CategoryStatValue>{categoryStats.schools.total}</CategoryStatValue>
                      <CategoryStatLabel>Total Students</CategoryStatLabel>
                    </CategoryStatItem>
                  </CategoryStats>
                </CategoryCard>
                
                <CategoryCard onClick={() => handleCategoryClick('college')}>
                  <CategoryHeader>
                    <CategoryIcon>🎓</CategoryIcon>
                    <CategoryTitle>Colleges</CategoryTitle>
                  </CategoryHeader>
                  <CategoryStats>
                    <CategoryStatItem>
                      <CategoryStatValue>{categoryStats.colleges.total}</CategoryStatValue>
                      <CategoryStatLabel>Total Students</CategoryStatLabel>
                    </CategoryStatItem>
                  </CategoryStats>
                </CategoryCard>
                
                <CategoryCard onClick={() => handleCategoryClick('corporate')}>
                  <CategoryHeader>
                    <CategoryIcon>🏢</CategoryIcon>
                    <CategoryTitle>Corporates</CategoryTitle>
                  </CategoryHeader>
                  <CategoryStats>
                    <CategoryStatItem>
                      <CategoryStatValue>{categoryStats.corporates.total}</CategoryStatValue>
                      <CategoryStatLabel>Total Employees</CategoryStatLabel>
                    </CategoryStatItem>
                  </CategoryStats>
                </CategoryCard>
                
                <CategoryCard onClick={() => handleCategoryClick('individual')}>
                  <CategoryHeader>
                    <CategoryIcon>👤</CategoryIcon>
                    <CategoryTitle>Individuals</CategoryTitle>
                  </CategoryHeader>
                  <CategoryStats>
                    <CategoryStatItem>
                      <CategoryStatValue>{categoryStats.individuals.total}</CategoryStatValue>
                      <CategoryStatLabel>Total Learners</CategoryStatLabel>
                    </CategoryStatItem>
                  </CategoryStats>
                </CategoryCard>
              </CategoryGrid>
            </CategorySection>
          </>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default SuperAdminDashboard;
