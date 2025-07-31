import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebaseConfig";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Loader from "../components/Loader";
import AdminSidebar from "../components/AdminSidebar";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background-image: url('${props => props.backgroundImage}');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: 'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  
  * {
    box-sizing: border-box;
    font-family: inherit;
  }
  
  body {
    margin: 0 !important;
    padding: 0 !important;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 280px;
  padding: 32px;
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow-y: auto;
  
  @media (max-width: 1024px) {
    margin-left: 250px;
    padding: 24px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 12px;
    padding-top: 70px;
  }
  
  @media (max-width: 480px) {
    padding: 8px;
    padding-top: 65px;
  }
`;

const Header = styled.div`
  margin-bottom: 40px;
  text-align: center;
  
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;





const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin: 0 0 12px 0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  font-family: 'Poppins', 'Inter', sans-serif;
  letter-spacing: -0.025em;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 6px;
  }
`;

const PageSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.1rem;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  font-weight: 500;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    max-width: 95%;
  }
`;

const FiltersSection = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.15);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 24px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
    margin-bottom: 20px;
  }
`;

const FilterRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 300px;
  padding: 12px 18px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(59, 130, 246, 0.15);
    background: #ffffff;
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
  
  @media (max-width: 768px) {
    min-width: 200px;
    width: 100%;
    padding: 10px 16px;
  }
`;

const FilterButton = styled.button`
  padding: 12px 20px;
  border: 1px solid ${props => props.active ? 'transparent' : 'rgba(59, 130, 246, 0.2)'};
  border-radius: 12px;
  background: ${props => props.active 
    ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' 
    : 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)'};
  color: ${props => props.active ? 'white' : '#64748b'};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
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
    background: ${props => props.active 
      ? 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)'};
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: ${props => props.active 
      ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' 
      : 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)'};
    color: ${props => props.active ? 'white' : '#3b82f6'};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
    
    &::before {
      left: 100%;
    }
  }
`;

const StatsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media (max-width: 768px) {
    gap: 16px;
    margin-bottom: 24px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 20px;
  }
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.15);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  text-align: center;
  
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
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 16px 48px rgba(59, 130, 246, 0.2), 0 8px 16px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    color: white;
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 16px;
    
    &:hover {
      transform: translateY(-4px) scale(1.02);
    }
  }
  
  @media (max-width: 480px) {
    padding: 20px;
    
    &:hover {
      transform: translateY(-2px) scale(1.01);
    }
  }
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  font-family: 'Poppins', 'Inter', sans-serif;
  
  ${StatCard}:hover & {
    color: white;
    -webkit-text-fill-color: white;
    transform: scale(1.1);
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
`;

const ParticipantsTable = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.15);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @media (max-width: 768px) {
    background: transparent;
    backdrop-filter: none;
    box-shadow: none;
    border: none;
    border-radius: 0;
    
    &::before {
      display: none;
    }
  }
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
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 150px 100px 80px;
    padding: 12px 16px;
    
    div:nth-child(3) {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
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
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 150px 100px 80px;
    padding: 12px 16px;
    
    div:nth-child(3) {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    display: block;
    padding: 16px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    margin-bottom: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    .desktop-only {
      display: none;
    }
    
    .mobile-only {
      display: block !important;
    }
    
    &:hover {
      background: rgba(255, 255, 255, 1);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    margin-bottom: 8px;
  }
`;

const ParticipantName = styled.div`
  font-weight: 700;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Poppins', 'Inter', sans-serif;
  
  @media (max-width: 480px) {
    gap: 8px;
    
    div {
      font-size: 0.9rem;
      
      div:nth-child(2) {
        font-size: 0.75rem !important;
      }
      
      div:nth-child(3) {
        font-size: 0.7rem !important;
      }
    }
  }
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f1f5f9;
  flex-shrink: 0;
  
  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
  }
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
  padding: 8px 16px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  
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
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.75rem;
  }
`;

const EmptyState = styled.div`
  padding: 64px 32px;
  text-align: center;
  color: #64748b;
  font-size: 1.1rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    padding: 48px 24px;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 32px 16px;
    font-size: 0.9rem;
  }
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
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const courseFilter = searchParams.get('course');
  const courseTitle = searchParams.get('title');

  const getCourseBackgroundImage = (title) => {
    const backgrounds = {
      "Empowering Human Intelligence – 7-Day Online Course": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "The 7-Day Reset: Clarity, Confidence, and Communication": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "The 30-Day Foundation: Purpose-Driven Professionalism": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "The 45-Day Career Rewire: Aligning Work with Self": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "Leadership from Within: 21-Day Intensive for Founders & Changemakers": "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "The Aaruchudar Educator Program (30 Days or Custom)": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "Institutional Innovation Catalyst": "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "Custom Sprint Labs / Retreats": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    };
    return backgrounds[title] || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";
  };

  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [organizationName, setOrganizationName] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [organizations, setOrganizations] = useState([]);

  const organizationId = paramOrgId || user?.organizationId;

  useEffect(() => {
    const fetchData = async () => {
      if (authLoading) return;
      
      if (!user) {
        setError("User not authenticated.");
        setLoading(false);
        return;
      }
      
      console.log("Current user:", user);
      console.log("User organizationId:", user.organizationId);
      console.log("Param organizationId:", paramOrgId);
      console.log("Final organizationId:", organizationId);

      setLoading(true);
      setError("");

      try {
        // Fetch Organizations
        const orgSnapshot = await getDocs(collection(db, "Organizations"));
        const orgData = orgSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOrganizations(orgData);

        // Set organization name based on context
        if (courseFilter && courseTitle) {
          setOrganizationName(`Course: ${decodeURIComponent(courseTitle)}`);
        } else if (categoryFilter) {
          const categoryName = categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1) + 's';
          setOrganizationName(`${categoryName} Category`);
        } else if (organizationId && organizationId !== 'undefined') {
          const orgDocRef = doc(db, "Organizations", organizationId);
          const orgSnap = await getDoc(orgDocRef);
          if (orgSnap.exists()) {
            setOrganizationName(orgSnap.data().name || "Unknown Organization");
          } else {
            setOrganizationName("Unknown Organization");
          }
        } else {
          setOrganizationName("All Organizations");
        }

        // Fetch Participants (only users with role 'user')
        let q;
        if (organizationId && organizationId !== 'undefined') {
          q = query(
            collection(db, "Users"), 
            where("organizationId", "==", organizationId),
            where("role", "==", "user")
          );
        } else {
          // Fallback: fetch all users with role 'user'
          q = query(
            collection(db, "Users"), 
            where("role", "==", "user")
          );
        }
        
        const snapshot = await getDocs(q);
        let results = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        
        // Apply category filtering if specified
        if (categoryFilter) {
          const filteredOrgIds = orgData
            .filter(org => org.type && org.type.toLowerCase() === categoryFilter.toLowerCase())
            .map(org => org.id);
          results = results.filter(user => filteredOrgIds.includes(user.organizationId));
        }
        
        // Apply course filtering if specified
        if (courseFilter) {
          results = results.filter(user => {
            if (!user.courses) return false;
            let coursesArray = Array.isArray(user.courses) ? user.courses : [user.courses];
            return coursesArray.some(course => 
              String(course).toLowerCase().trim() === courseFilter.toLowerCase()
            );
          });
        }
        
        console.log("Fetched participants:", results);
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

  const backgroundImage = courseFilter && courseTitle ? 
    getCourseBackgroundImage(decodeURIComponent(courseTitle)) : 
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';

  return (
    <PageContainer backgroundImage={backgroundImage}>
      <AdminSidebar />
      <ContentWrapper>
        <Header>
          <PageTitle>Participants</PageTitle>
          <PageSubtitle>Manage and view all participants in {organizationName}</PageSubtitle>
        </Header>

        {!courseFilter && (
          <>
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
          </>
        )}

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
                    {categoryFilter && (
                      <div style={{fontSize: '0.75rem', color: '#94a3b8'}}>
                        {organizations.find(org => org.id === participant.organizationId)?.name || 'Unknown Org'}
                      </div>
                    )}
                  </div>
                </ParticipantName>
                <div className="desktop-only">{participant.labName || participant.courses?.[0] || "Not enrolled"}</div>
                <div className="desktop-only">{participant.completion || 0}%</div>
                <div className="desktop-only">
                  <Badge type={participant.completion >= 100 ? 'completed' : participant.labName ? 'active' : 'inactive'}>
                    {participant.completion >= 100 ? 'Completed' : participant.labName ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
                <div className="desktop-only">
                  <ViewButton onClick={(e) => { e.stopPropagation(); handleViewParticipant(participant.id); }}>
                    View
                  </ViewButton>
                </div>
                <div className="mobile-only" style={{display: 'none'}}>
                  <div style={{marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #f1f5f9'}}>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: '12px', alignItems: 'start'}}>
                      <div style={{minWidth: 0}}>
                        <div style={{fontSize: '0.8rem', color: '#64748b', marginBottom: '4px'}}>
                          <strong>Lab/Course:</strong> {participant.labName || participant.courses?.[0] || "Not enrolled"}
                        </div>
                        <div style={{fontSize: '0.8rem', color: '#64748b', marginBottom: '4px'}}>
                          <strong>Progress:</strong> {participant.completion || 0}%
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px'}}>
                          <Badge type={participant.completion >= 100 ? 'completed' : participant.labName ? 'active' : 'inactive'}>
                            {participant.completion >= 100 ? 'Completed' : participant.labName ? 'Active' : 'Inactive'}
                          </Badge>
                        </div>
                      </div>
                      <div style={{display: 'flex', alignItems: 'flex-start'}}>
                        <ViewButton onClick={(e) => { e.stopPropagation(); handleViewParticipant(participant.id); }}>
                          View
                        </ViewButton>
                      </div>
                    </div>
                  </div>
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