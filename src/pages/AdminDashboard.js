import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebaseConfig";
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
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(59, 130, 246, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
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
  background: ${props => props.type === 'lab' 
    ? 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)' 
    : 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)'};
  color: ${props => props.type === 'lab' ? '#166534' : '#1d4ed8'};
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid ${props => props.type === 'lab' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(59, 130, 246, 0.2)'};
  word-break: break-word;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${props => props.type === 'lab' 
      ? 'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.1), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)'};
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => props.type === 'lab' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(59, 130, 246, 0.2)'};
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 8px 12px;
  }
`;

const EmptyMessage = styled.div`
  color: #64748b;
  font-style: italic;
  font-size: 0.9rem;
`;

const StatCard = styled.div`
  flex: 1 1 200px;
  background: linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(59, 130, 246, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    color: white;
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    flex: 1 1 auto;
    padding: 16px;
  }
`;

const StatValue = styled.h3`
  font-size: 32px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 12px 0;
  font-weight: 800;
  transition: all 0.3s ease;
  
  ${StatCard}:hover & {
    color: white;
    -webkit-text-fill-color: white;
    transform: scale(1.1);
  }
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
  padding: 18px 20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #333;
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.05), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    box-shadow: 0 8px 32px rgba(59, 130, 246, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 16px;
    margin-bottom: 10px;
    font-size: 0.95rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
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
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 16px;
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
  const [labsMap, setLabsMap] = useState(new Map());
  const [coursesMap, setCoursesMap] = useState(new Map());

  const organizationId = paramOrgId || user?.organizationId;

  useEffect(() => {
    // Check if user has correct role
    if (!authLoading && !user) {
      navigate('/', { 
        state: { from: { pathname: '/admin' } },
        replace: true 
      });
      return;
    }
    
    if (!authLoading && user && role && role === "user") {
      alert("You are not authorized to access the Admin Dashboard. You are logged in as a Student.");
      window.location.href = '/dashboard';
      return;
    }

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
        // 1. Fetch Labs and Courses data
        const [labsSnap, coursesSnap] = await Promise.all([
          getDocs(collection(db, "Labs")),
          getDocs(collection(db, "Courses"))
        ]);
        
        const labsData = new Map();
        const coursesData = new Map();
        
        labsSnap.docs.forEach(doc => labsData.set(doc.id, doc.data()));
        coursesSnap.docs.forEach(doc => coursesData.set(doc.id, doc.data()));
        
        setLabsMap(labsData);
        setCoursesMap(coursesData);

        // 2. Fetch Organization Name and Type from 'Organizations' collection
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

        // 3. Fetch Participants for this Organization from the 'Users' collection (only users with role 'user')
        const q = query(
          collection(db, "Users"), 
          where("organizationId", "==", organizationId),
          where("role", "==", "user")
        );
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
      if (p.activeLabsProgress && Object.keys(p.activeLabsProgress).length > 0) {
        hiLabsCount++;
      }
      if (p.activeCoursesProgress && Object.keys(p.activeCoursesProgress).length > 0) {
        coursesCount++;
      }
    });

    return {
      total: participants.length,
      hiLabs: hiLabsCount,
      courses: coursesCount,
    };
  };



  const getUniqueLabsAndCourses = () => {
    const labNamesMap = new Map();
    const courseNamesMap = new Map();

    const normalize = (str) => str.trim().toLowerCase().replace(/\s+/g, ' ');

    participants.forEach(p => {
      // Labs from activeLabsProgress
      if (p.activeLabsProgress) {
        Object.keys(p.activeLabsProgress).forEach(labId => {
          const labData = labsMap.get(labId);
          if (labData?.labName) {
            const normalized = normalize(labData.labName);
            labNamesMap.set(normalized, labData.labName.trim());
          }
        });
      }
      
      // Courses from activeCoursesProgress
      if (p.activeCoursesProgress) {
        Object.keys(p.activeCoursesProgress).forEach(courseId => {
          const courseData = coursesMap.get(courseId);
          if (courseData?.name) {
            const normalized = normalize(courseData.name);
            courseNamesMap.set(normalized, courseData.name.trim());
          }
        });
      }
    });

    return {
      labs: [...labNamesMap.values()].filter(Boolean).sort(),
      courses: [...courseNamesMap.values()].filter(Boolean).sort()
    };
  };

  const { labs, courses } = getUniqueLabsAndCourses();
  


  const { total, hiLabs, courses: coursesCount } = getStats();

  const filteredParticipants = participants.filter(p => {
    if (filter === 'hilabs') {
      return p.activeLabsProgress && Object.keys(p.activeLabsProgress).length > 0;
    }
    if (filter === 'courses') {
      return p.activeCoursesProgress && Object.keys(p.activeCoursesProgress).length > 0;
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
                <StatValue>{coursesCount}</StatValue>
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
                        <ItemTag key={`lab-${index}`} type="lab">{lab}</ItemTag>
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
                    {courses.length > 0 ? (
                      courses.map((course, index) => (
                        <ItemTag key={`course-${index}`} type="course">{course}</ItemTag>
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
