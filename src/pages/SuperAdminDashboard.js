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
  margin-left: 300px; /* Adjust margin-left to account for fixed Sidebar */
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
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
`;

const CategoryCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
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
    schools: { total: 0, hiLab: 0, courses: 0 },
    colleges: { total: 0, hiLab: 0, courses: 0 },
    corporates: { total: 0, hiLab: 0, courses: 0 },
    individuals: { total: 0, hiLab: 0, courses: 0 }
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
        }));

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
            joinedDate: org.joinedDate || "N/A",
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
          schools: { total: 0, hiLab: 0, courses: 0 },
          colleges: { total: 0, hiLab: 0, courses: 0 },
          corporates: { total: 0, hiLab: 0, courses: 0 },
          individuals: { total: 0, hiLab: 0, courses: 0 }
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
              <SectionTitle>Enrollment by Category</SectionTitle>
              <CategoryGrid>
                <CategoryCard>
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
                
                <CategoryCard>
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
                
                <CategoryCard>
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
                
                <CategoryCard>
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
