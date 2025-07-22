import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebaseConfig";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import AdminSidebar from "../components/AdminSidebar";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  font-family: "Inter", "Segoe UI", sans-serif;
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 280px;
  padding: 32px;
`;

const Header = styled.div`
  margin-bottom: 32px;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 8px 0;
`;

const PageSubtitle = styled.p`
  color: #64748b;
  font-size: 1rem;
  margin: 0;
`;

const FiltersSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

const FilterRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 300px;
  padding: 10px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const FilterButton = styled.button`
  padding: 10px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: ${props => props.active ? '#3b82f6' : 'white'};
  color: ${props => props.active ? 'white' : '#64748b'};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? '#2563eb' : '#f8fafc'};
    border-color: ${props => props.active ? '#2563eb' : '#cbd5e1'};
  }
`;

const StatsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
`;

const ParticipantsTable = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 150px 120px 100px;
  gap: 16px;
  padding: 16px 24px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  font-weight: 600;
  font-size: 0.85rem;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 150px 120px 100px;
  gap: 16px;
  padding: 16px 24px;
  border-bottom: 1px solid #f1f5f9;
  transition: background 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: #f8fafc;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const ParticipantName = styled.div`
  font-weight: 600;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f1f5f9;
`;

const Badge = styled.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => {
    if (props.type === 'active') return '#dcfce7';
    if (props.type === 'completed') return '#dbeafe';
    return '#f1f5f9';
  }};
  color: ${props => {
    if (props.type === 'active') return '#166534';
    if (props.type === 'completed') return '#1e40af';
    return '#64748b';
  }};
`;

const ViewButton = styled.button`
  padding: 6px 12px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #2563eb;
  }
`;

const EmptyState = styled.div`
  padding: 48px 24px;
  text-align: center;
  color: #64748b;
`;

const ErrorText = styled.p`
  color: #dc2626;
  text-align: center;
  margin-top: 30px;
  font-size: 1rem;
`;

const ParticipantsPage = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { organizationId: paramOrgId } = useParams();

  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [organizationName, setOrganizationName] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const organizationId = paramOrgId || user?.organizationId;

  useEffect(() => {
    const fetchData = async () => {
      if (authLoading || !user || !organizationId) {
        if (!authLoading && (!user || !organizationId)) {
          setError("Admin profile or organization ID not found.");
          setLoading(false);
        }
        return;
      }

      setLoading(true);
      setError("");

      try {
        // Fetch Organization Name
        const orgDocRef = doc(db, "Organizations", organizationId);
        const orgSnap = await getDoc(orgDocRef);
        if (orgSnap.exists()) {
          setOrganizationName(orgSnap.data().name || "Unknown Organization");
        }

        // Fetch Participants
        const q = query(collection(db, "Users"), where("organizationId", "==", organizationId));
        const snapshot = await getDocs(q);
        const results = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setParticipants(results);

      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load participants data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, authLoading, organizationId]);

  const getStats = () => {
    const total = participants.length;
    const hiLabs = participants.filter(p => p.labName).length;
    const courses = participants.filter(p => p.courses && p.courses.length > 0).length;
    const completed = participants.filter(p => p.completion >= 100).length;

    return { total, hiLabs, courses, completed };
  };

  const filteredParticipants = participants.filter(participant => {
    const matchesSearch = participant.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         participant.email?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = () => {
      switch (activeFilter) {
        case 'hilabs':
          return participant.labName;
        case 'courses':
          return participant.courses && participant.courses.length > 0;
        case 'completed':
          return participant.completion >= 100;
        default:
          return true;
      }
    };

    return matchesSearch && matchesFilter();
  });

  const { total, hiLabs, courses, completed } = getStats();

  const handleViewParticipant = (participantId) => {
    navigate(`/participants/${participantId}`);
  };

  if (authLoading || loading) {
    return (
      <PageContainer>
        <AdminSidebar />
        <ContentWrapper>
          <Loader />
        </ContentWrapper>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <AdminSidebar />
        <ContentWrapper>
          <ErrorText>{error}</ErrorText>
        </ContentWrapper>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <AdminSidebar />
      <ContentWrapper>
        <Header>
          <PageTitle>Participants</PageTitle>
          <PageSubtitle>Manage and view all participants in {organizationName}</PageSubtitle>
        </Header>

        <StatsCards>
          <StatCard onClick={() => setActiveFilter("all")}>
            <StatValue>{total}</StatValue>
            <StatLabel>Total Participants</StatLabel>
          </StatCard>
          <StatCard onClick={() => setActiveFilter("hilabs")}>
            <StatValue>{hiLabs}</StatValue>
            <StatLabel>HI Labs Enrolled</StatLabel>
          </StatCard>
          <StatCard onClick={() => setActiveFilter("courses")}>
            <StatValue>{courses}</StatValue>
            <StatLabel>Courses Enrolled</StatLabel>
          </StatCard>
          <StatCard onClick={() => setActiveFilter("completed")}>
            <StatValue>{completed}</StatValue>
            <StatLabel>Completed</StatLabel>
          </StatCard>
        </StatsCards>

        <FiltersSection>
          <FilterRow>
            <SearchInput
              type="text"
              placeholder="Search participants by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FilterButton
              active={activeFilter === "all"}
              onClick={() => setActiveFilter("all")}
            >
              All
            </FilterButton>
            <FilterButton
              active={activeFilter === "hilabs"}
              onClick={() => setActiveFilter("hilabs")}
            >
              HI Labs
            </FilterButton>
            <FilterButton
              active={activeFilter === "courses"}
              onClick={() => setActiveFilter("courses")}
            >
              Courses
            </FilterButton>
            <FilterButton
              active={activeFilter === "completed"}
              onClick={() => setActiveFilter("completed")}
            >
              Completed
            </FilterButton>
          </FilterRow>
        </FiltersSection>

        <ParticipantsTable>
          <TableHeader>
            <div>Participant</div>
            <div>Lab/Course</div>
            <div>Progress</div>
            <div>Status</div>
            <div>Action</div>
          </TableHeader>
          
          {filteredParticipants.length === 0 ? (
            <EmptyState>
              {searchTerm || activeFilter !== "all" 
                ? "No participants match your current filters." 
                : "No participants found."}
            </EmptyState>
          ) : (
            filteredParticipants.map((participant) => (
              <TableRow key={participant.id} onClick={() => handleViewParticipant(participant.id)}>
                <ParticipantName>
                  <Avatar 
                    src={participant.photoURL || "https://i.pravatar.cc/150"} 
                    alt={participant.username || participant.email}
                  />
                  <div>
                    <div>{participant.username || participant.email?.split('@')[0]}</div>
                    <div style={{fontSize: '0.8rem', color: '#64748b'}}>{participant.email}</div>
                  </div>
                </ParticipantName>
                <div>{participant.labName || participant.courses?.[0] || "Not enrolled"}</div>
                <div>{participant.completion || 0}%</div>
                <div>
                  <Badge type={participant.completion >= 100 ? 'completed' : participant.labName ? 'active' : 'inactive'}>
                    {participant.completion >= 100 ? 'Completed' : participant.labName ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
                <div>
                  <ViewButton onClick={(e) => { e.stopPropagation(); handleViewParticipant(participant.id); }}>
                    View
                  </ViewButton>
                </div>
              </TableRow>
            ))
          )}
        </ParticipantsTable>
      </ContentWrapper>
    </PageContainer>
  );
};

export default ParticipantsPage;