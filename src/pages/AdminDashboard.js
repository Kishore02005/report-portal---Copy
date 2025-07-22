import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebaseConfig";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import AdminSidebar from "../components/AdminSidebar"; // Import AdminSidebar directly

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f8f9fc;
  font-family: "Inter", "Segoe UI", sans-serif;
  margin-left: 250px; /* Adjust margin-left to account for fixed Sidebar */
  
  @media (max-width: 768px) {
    margin-left: 0;
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 40px 30px;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    padding: 30px 20px;
  }
  
  @media (max-width: 768px) {
    padding: 20px 16px;
    margin-top: 60px;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #2e3a50;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 20px;
  }
`;

const OrgInfo = styled.div`
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #333;
`;

const StatBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 24px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const OverviewSection = styled.div`
  margin-bottom: 40px;
`;

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 20px;
  
  @media (max-width: 1024px) {
    gap: 16px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const OverviewCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const OverviewTitle = styled.h3`
  font-size: 1.1rem;
  color: #1e293b;
  margin: 0 0 16px 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  @media (max-width: 480px) {
    gap: 6px;
  }
`;

const ItemTag = styled.div`
  background: ${props => props.type === 'lab' ? '#ecfdf5' : '#eff6ff'};
  color: ${props => props.type === 'lab' ? '#166534' : '#1d4ed8'};
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${props => props.type === 'lab' ? '#bbf7d0' : '#bfdbfe'};
  word-break: break-word;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 6px 10px;
  }
`;

const EmptyMessage = styled.div`
  color: #64748b;
  font-style: italic;
  font-size: 0.9rem;
`;

const StatCard = styled.div`
  flex: 1 1 200px;
  background: #f0f4ff;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 16px;
  }
  
  @media (max-width: 480px) {
    flex: 1 1 auto;
  }
`;

const StatValue = styled.h3`
  font-size: 28px;
  color: #3f51b5;
  margin: 10px 0;
  font-weight: 700;
`;

const StatLabel = styled.p`
  font-size: 15px;
  color: #555;
  font-weight: 500;
`;

const ParticipantList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 30px;
  
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ParticipantItem = styled.li`
  padding: 14px 18px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #333;

  &:hover {
    transform: scale(1.015);
    background: #f9faff;
  }
  
  @media (max-width: 768px) {
    padding: 12px 14px;
    margin-bottom: 10px;
    font-size: 0.95rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const ParticipantName = styled.span`
  font-weight: 600;
  word-break: break-word;
  
  @media (max-width: 768px) {
    margin-bottom: 4px;
  }
`;

const ViewDetailsButton = styled.button`
  background-color: #5c6bc0;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;

  &:hover {
    background-color: #3f51b5;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 8px 12px;
  }
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

const BackButton = styled.button`
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;
  margin-left: 10px;

  &:hover {
    background-color: #5a6268;
  }
`;

const AdminDashboard = () => {
  const { user, role, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { organizationId: paramOrgId } = useParams();

  const [participants, setParticipants] = useState([]);
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const [organizationName, setOrganizationName] = useState("Loading...");
  const [organizationType, setOrganizationType] = useState("");
  const [error, setError] = useState("");
  const [filter, setFilter] = useState(null);

  const organizationId = paramOrgId || user?.organizationId;

  useEffect(() => {
    const fetchAdminDashboardData = async () => {
      if (authLoading || !user || !organizationId) {
        if (!authLoading && (!user || !organizationId)) {
          setError("Admin profile or organization ID not found.");
          setDashboardLoading(false);
        }
        return;
      }

      setDashboardLoading(true);
      setError("");

      try {
        // 1. Fetch Organization Name and Type from 'Organizations' collection
        const orgDocRef = doc(db, "Organizations", organizationId);
        const orgSnap = await getDoc(orgDocRef);
        if (orgSnap.exists()) {
          const orgData = orgSnap.data();
          setOrganizationName(orgData.name || "Unknown Organization");
          setOrganizationType(orgData.type || "");
        } else {
          setOrganizationName("Organization Not Found");
          setError("Organization details not found.");
        }

        // 2. Fetch Participants for this Organization from the 'Users' collection
        const q = query(collection(db, "Users"), where("organizationId", "==", organizationId));
        const snapshot = await getDocs(q);
        const results = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setParticipants(results);

      } catch (err) {
        console.error("Error fetching admin dashboard data:", err);
        setError("Failed to load dashboard data. Please try again.");
      } finally {
        setDashboardLoading(false);
      }
    };

    fetchAdminDashboardData();
  }, [user, authLoading, organizationId]);

  const getStats = () => {
    let hiLabsCount = 0;
    let coursesCount = 0;

    participants.forEach(p => {
      if (p.labName) {
        hiLabsCount++;
      }
      if (p.courses && p.courses.length > 0) {
        coursesCount++;
      }
    });

    return {
      total: participants.length,
      hiLabs: hiLabsCount,
      courses: coursesCount,
    };
  };

  const getCourseNameFromId = (courseId) => {
    const courseMap = {
      'course_01': 'Empowering Human Intelligence – 7-Day Online Course',
      'course_02': 'The 7-Day Reset: Clarity, Confidence, and Communication',
      'course_03': 'The 30-Day Foundation: Purpose-Driven Professionalism',
      'course_04': 'The 45-Day Career Rewire: Aligning Work with Self',
      'course_05': 'Leadership from Within: 21-Day Intensive for Founders & Changemakers',
      'course_06': 'The Aaruchudar Educator Program (30 Days or Custom)',
      'course_07': 'Institutional Innovation Catalyst (45 Days)',
      'course_08': 'Custom Sprint Labs / Retreats (2–5 Days)'
    };
    return courseMap[courseId] || courseId;
  };

  const getUniqueLabsAndCourses = () => {
    const uniqueLabs = new Set();
    const uniqueCourses = new Set();

    participants.forEach(p => {
      if (p.labName) {
        uniqueLabs.add(p.labName);
      }
      if (p.courses && p.courses.length > 0) {
        p.courses.forEach(course => {
          const courseName = getCourseNameFromId(course);
          uniqueCourses.add(courseName);
        });
      }
    });

    return {
      labs: Array.from(uniqueLabs),
      courses: Array.from(uniqueCourses)
    };
  };

  const { labs, courses: uniqueCourses } = getUniqueLabsAndCourses();

  const { total, hiLabs, courses } = getStats();

  const filteredParticipants = participants.filter(p => {
    if (filter === 'hilabs') {
      return p.labName;
    }
    if (filter === 'courses') {
      return p.courses && p.courses.length > 0;
    }
    return true;
  });

  const handleViewParticipant = (participantEmail) => {
    navigate(`/participants/${participantEmail}`);
  };

  const getBackButtonText = () => {
    if (!organizationType) return "Back to Organizations";
    const categoryMap = {
      "School": "schools",
      "College": "colleges", 
      "Corporate": "corporates",
      "Individual": "individuals"
    };
    const category = categoryMap[organizationType];
    return category ? `Back to ${category.charAt(0).toUpperCase() + category.slice(1)}` : "Back to Organizations";
  };

  const getBackButtonPath = () => {
    if (!organizationType) return "/organizations";
    const categoryMap = {
      "School": "schools",
      "College": "colleges",
      "Corporate": "corporates", 
      "Individual": "individuals"
    };
    const category = categoryMap[organizationType];
    return category ? `/organizations/${category}` : "/organizations";
  };

  return (
    <PageContainer>
      <AdminSidebar />
      <ContentWrapper>
        {authLoading || dashboardLoading ? (
          <Loader />
        ) : error ? (
          <ErrorText>{error}</ErrorText>
        ) : !organizationId ? (
          <ErrorText>Your admin account is not linked to an organization. Please contact support.</ErrorText>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <Heading>Admin Dashboard</Heading>
              <div>
                {role === 'superadmin' && (
                  <BackButton onClick={() => navigate(getBackButtonPath())}>
                    {getBackButtonText()}
                  </BackButton>
                )}
              </div>
            </div>

            <OrgInfo>
              <strong>Organization:</strong> {organizationName}
            </OrgInfo>

            <StatBox>
              <StatCard onClick={() => setFilter(null)}>
                <StatValue>{total}</StatValue>
                <StatLabel>Total Participants</StatLabel>
              </StatCard>
              <StatCard onClick={() => setFilter('hilabs')}>
                <StatValue>{hiLabs}</StatValue>
                <StatLabel>Opted for HI Labs</StatLabel>
              </StatCard>
              <StatCard onClick={() => setFilter('courses')}>
                <StatValue>{courses}</StatValue>
                <StatLabel>Opted for Courses</StatLabel>
              </StatCard>
            </StatBox>

            <OverviewSection>
              <OverviewGrid>
                <OverviewCard>
                  <OverviewTitle>
                    HI Labs in Organization
                  </OverviewTitle>
                  <ItemsList>
                    {labs.length > 0 ? (
                      labs.map((lab, index) => (
                        <ItemTag key={index} type="lab">{lab}</ItemTag>
                      ))
                    ) : (
                      <EmptyMessage>No HI Labs enrolled</EmptyMessage>
                    )}
                  </ItemsList>
                </OverviewCard>
                
                <OverviewCard>
                  <OverviewTitle>
                    Courses in Organization
                  </OverviewTitle>
                  <ItemsList>
                    {uniqueCourses.length > 0 ? (
                      uniqueCourses.map((course, index) => (
                        <ItemTag key={index} type="course">{course}</ItemTag>
                      ))
                    ) : (
                      <EmptyMessage>No courses enrolled</EmptyMessage>
                    )}
                  </ItemsList>
                </OverviewCard>
              </OverviewGrid>
            </OverviewSection>

            <Heading style={{ fontSize: "1.5rem", marginTop: "40px" }}>
              {filter ? `Filtered Participants (${filter})` : `All Participants`} in {organizationName}
            </Heading>

            <ParticipantList>
              {filteredParticipants.length === 0 ? (
                <p>No participants match the current filter.</p>
              ) : (
                filteredParticipants.map((p) => (
                  <ParticipantItem
                    key={p.id}
                    onClick={() => handleViewParticipant(p.id)}
                  >
                    <ParticipantName>{p.username || p.email}</ParticipantName>
                    <ViewDetailsButton onClick={(e) => { e.stopPropagation(); handleViewParticipant(p.id); }}>
                      View Details
                    </ViewDetailsButton>
                  </ParticipantItem>
                ))
              )}
            </ParticipantList>
          </>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default AdminDashboard;
