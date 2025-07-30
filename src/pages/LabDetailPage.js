import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import styled from "styled-components";
import SuperAdminSidebar from "../components/SuperAdminSidebar";
import Loader from "../components/Loader";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  margin: 0 !important;
  padding: 0 !important;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  font-family: "Inter", "Segoe UI", sans-serif;
  overflow-x: hidden;
  
  * {
    box-sizing: border-box;
  }
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 300px;
  padding: 32px;
  width: calc(100% - 300px);
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  
  @media (max-width: 1024px) {
    margin-left: 260px;
    width: calc(100% - 260px);
    padding: 24px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 20px;
    padding-top: 80px;
  }
`;

const Header = styled.div`
  margin-bottom: 32px;
  animation: headerSlideIn 0.6s ease-out;
  display: flex;
  align-items: center;
  gap: 16px;
  
  @keyframes headerSlideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #1e293b;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(59, 130, 246, 0.3);
    color: #3b82f6;
    transform: translateX(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  margin: 0 0 8px 0;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Subtitle = styled.p`
  color: #e2e8f0;
  font-size: 1.1rem;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const ParticipantsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ParticipantCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
  animation: cardSlideIn 0.5s ease-out;
  animation-delay: ${props => (props.index || 0) * 0.1}s;
  animation-fill-mode: both;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.98);
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  }
  
  @keyframes cardSlideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ParticipantHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const ParticipantAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(16, 185, 129, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(16, 185, 129, 0.5);
    transform: scale(1.05);
  }
`;

const ParticipantInfo = styled.div`
  flex: 1;
`;

const ParticipantName = styled.div`
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
  font-size: 1.2rem;
`;

const ParticipantEmail = styled.div`
  font-size: 0.95rem;
  color: #64748b;
  font-weight: 500;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 80px 32px;
  color: #374151;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '🔬';
    font-size: 5rem;
    display: block;
    margin-bottom: 20px;
    opacity: 0.4;
  }
`;

const LabDetailPage = () => {
  const { labId } = useParams();
  const navigate = useNavigate();
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lab, setLab] = useState(null);

  const labs = [
    { id: 1, title: "Clarity as Culture", type: "Organizational", focus: "Culture Building" },
    { id: 2, title: "Decision-Making Without Drama", type: "Leadership", focus: "Decision Skills" },
    { id: 3, title: "Inner Focus in Noisy Worlds", type: "Personal", focus: "Mindfulness" },
    { id: 4, title: "The Power of Listening", type: "Communication", focus: "Active Listening" },
    { id: 5, title: "Intelligent Conflict and Recovery", type: "Conflict Resolution", focus: "Relationship Management" },
    { id: 6, title: "Systemic Thinking", type: "Strategic", focus: "Systems Analysis" },
    { id: 7, title: "Voice, Value and Vulnerability", type: "Personal Growth", focus: "Authentic Leadership" },
    { id: 8, title: "Leadership Without Imitation", type: "Leadership", focus: "Authentic Leadership" }
  ];

  useEffect(() => {
    const selectedLab = labs.find(l => l.id === parseInt(labId));
    setLab(selectedLab);
    
    if (selectedLab) {
      fetchParticipants(selectedLab.title);
    }
  }, [labId]);

  const fetchParticipants = async (labTitle) => {
    try {
      const usersSnapshot = await getDocs(collection(db, "Users"));
      const allUsers = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      const labParticipants = allUsers.filter(user => 
        user.labName && user.labName.toLowerCase().includes(labTitle.toLowerCase())
      );
      
      setParticipants(labParticipants);
    } catch (error) {
      console.error("Error fetching participants:", error);
      setParticipants([]);
    } finally {
      setLoading(false);
    }
  };

  const getLabImage = (title) => {
    const images = {
      "Clarity as Culture": "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "Decision-Making Without Drama": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "Inner Focus in Noisy Worlds": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "The Power of Listening": "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "Intelligent Conflict and Recovery": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "Systemic Thinking": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "Voice, Value and Vulnerability": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "Leadership Without Imitation": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    };
    
    return images[title] || "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";
  };



  if (!lab) {
    return <div>Lab not found</div>;
  }

  return (
    <PageContainer 
      bgImage={getLabImage(lab.title)}
    >
      <SuperAdminSidebar />
      <ContentWrapper>
        <Header>
          <BackButton onClick={() => navigate('/labs')}>
            ←
          </BackButton>
          <HeaderContent>
            <Title>{lab.title}</Title>
            <Subtitle>{participants.length} participants enrolled</Subtitle>
          </HeaderContent>
        </Header>
        
        {loading ? (
          <div style={{ padding: '60px 0' }}>
            <Loader />
          </div>
        ) : participants.length > 0 ? (
          <ParticipantsList>
            {participants.map((participant, index) => (
              <ParticipantCard 
                key={participant.id} 
                index={index}
                onClick={() => navigate(`/participants/${participant.id}`)}
              >
                <ParticipantHeader>
                  <ParticipantAvatar 
                    src={participant.photoURL || "https://i.pravatar.cc/150"}
                    alt={participant.username || participant.email}
                  />
                  <ParticipantInfo>
                    <ParticipantName>
                      {participant.username || participant.email?.split('@')[0] || 'Unknown User'}
                    </ParticipantName>
                    <ParticipantEmail>{participant.email}</ParticipantEmail>
                  </ParticipantInfo>
                </ParticipantHeader>
              </ParticipantCard>
            ))}
          </ParticipantsList>
        ) : (
          <EmptyState>
            <p>No participants enrolled in this lab yet.</p>
          </EmptyState>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default LabDetailPage;