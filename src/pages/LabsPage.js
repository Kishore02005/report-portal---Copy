import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import styled from "styled-components";
import SuperAdminSidebar from "../components/SuperAdminSidebar";
import Loader from "../components/Loader";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  font-family: "Inter", "Segoe UI", sans-serif;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 32px;
  margin-left: 300px;
  max-width: 1400px;
  margin-right: auto;
`;

const Header = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #1e293b;
  margin: 0 0 8px 0;
  font-weight: 700;
`;

const Subtitle = styled.p`
  color: #64748b;
  font-size: 1rem;
  margin: 0;
`;

const LabsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
`;

const LabCard = styled.div`
  background: ${props => props.bgGradient || 'white'};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    z-index: 1;
  }
  
  & > * {
    position: relative;
    z-index: 2;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #10b981;
    
    &::before {
      background: rgba(255, 255, 255, 0.85);
    }
  }
`;

const LabHeader = styled.div`
  margin-bottom: 16px;
`;

const LabTitle = styled.h3`
  font-size: 1.25rem;
  color: #1e293b;
  font-weight: 600;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const LabBadge = styled.div`
  display: inline-block;
  background: #ecfdf5;
  color: #10b981;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const LabDescription = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 12px 0 0 0;
`;

const LabStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
`;

const EnrollmentCount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #10b981;
  font-weight: 600;
  font-size: 0.9rem;
`;

const LabFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const LabType = styled.div`
  background: #f0fdf4;
  color: #166534;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ViewButton = styled.div`
  background: #10b981;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: background 0.2s ease;
  
  &:hover {
    background: #059669;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #1e293b;
  font-weight: 600;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #64748b;
  
  &:hover {
    color: #1e293b;
  }
`;

const ParticipantsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ParticipantItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`;

const ParticipantAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f1f5f9;
`;

const ParticipantInfo = styled.div`
  flex: 1;
`;

const ParticipantName = styled.div`
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 2px;
`;

const ParticipantEmail = styled.div`
  font-size: 0.85rem;
  color: #64748b;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 32px;
  color: #64748b;
`;

const LabsPage = () => {
  const navigate = useNavigate();
  const [selectedLab, setSelectedLab] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const usersSnapshot = await getDocs(collection(db, "Users"));
        const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAllUsers(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchAllUsers();
  }, []);

  const labs = [
    {
      id: 1,
      title: "Clarity as Culture",
      type: "Organizational",
      focus: "Culture Building"
    },
    {
      id: 2,
      title: "Decision-Making Without Drama",
      type: "Leadership",
      focus: "Decision Skills"
    },
    {
      id: 3,
      title: "Inner Focus in Noisy Worlds",
      type: "Personal",
      focus: "Mindfulness"
    },
    {
      id: 4,
      title: "The Power of Listening",
      type: "Communication",
      focus: "Active Listening"
    },
    {
      id: 5,
      title: "Intelligent Conflict and Recovery",
      type: "Conflict Resolution",
      focus: "Relationship Management"
    },
    {
      id: 6,
      title: "Systemic Thinking",
      type: "Strategic",
      focus: "Systems Analysis"
    },
    {
      id: 7,
      title: "Voice, Value and Vulnerability",
      type: "Personal Growth",
      focus: "Authentic Leadership"
    },
    {
      id: 8,
      title: "Leadership Without Imitation",
      type: "Leadership",
      focus: "Authentic Leadership"
    }
  ];

  const fetchParticipants = async (labTitle) => {
    setLoading(true);
    try {
      const usersSnapshot = await getDocs(collection(db, "Users"));
      const allUsers = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      // Filter users who have this lab in their labName field
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

  const handleLabClick = (lab) => {
    setSelectedLab(lab);
    fetchParticipants(lab.title);
  };

  const closeModal = () => {
    setSelectedLab(null);
    setParticipants([]);
  };

  const getLabDescription = (title) => {
    const descriptions = {
      "Clarity as Culture": "Build organizational clarity through structured communication and shared understanding.",
      "Decision-Making Without Drama": "Learn to make effective decisions while minimizing workplace conflict and tension.",
      "Inner Focus in Noisy Worlds": "Develop mindfulness and concentration skills in distracting environments.",
      "The Power of Listening": "Master active listening techniques to improve communication and relationships.",
      "Intelligent Conflict and Recovery": "Navigate conflicts intelligently and build stronger relationships through recovery.",
      "Systemic Thinking": "Understand complex systems and develop strategic thinking capabilities.",
      "Voice, Value and Vulnerability": "Discover your authentic voice while embracing vulnerability as a leadership strength.",
      "Leadership Without Imitation": "Develop your unique leadership style without copying others."
    };
    
    return descriptions[title] || "Intensive lab experience designed to develop specific skills and capabilities.";
  };

  const getLabBackground = (title) => {
    const backgrounds = {
      "Clarity as Culture": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "Decision-Making Without Drama": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "Inner Focus in Noisy Worlds": "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "The Power of Listening": "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      "Intelligent Conflict and Recovery": "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      "Systemic Thinking": "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      "Voice, Value and Vulnerability": "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      "Leadership Without Imitation": "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    };
    
    return backgrounds[title] || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  };

  const getEnrolledCount = (labTitle) => {
    return allUsers.filter(user => 
      user.labName && user.labName.toLowerCase().includes(labTitle.toLowerCase())
    ).length;
  };

  return (
    <PageContainer>
      <SuperAdminSidebar />
      <ContentWrapper>
        <Header>
          <Title>Labs Management</Title>
          <Subtitle>View and manage all available labs and their participants</Subtitle>
        </Header>
        
        <LabsGrid>
          {labs.map((lab) => (
            <LabCard key={lab.id} onClick={() => handleLabClick(lab)} bgGradient={getLabBackground(lab.title)}>
              <LabHeader>
                <LabTitle>{lab.title}</LabTitle>
                <LabBadge>Lab Experience</LabBadge>
              </LabHeader>
              
              <LabDescription>
                {getLabDescription(lab.title)}
              </LabDescription>
              
              <LabStats>
                <EnrollmentCount>
                  👥 {getEnrolledCount(lab.title)} Enrolled
                </EnrollmentCount>
              </LabStats>
              
              <LabFooter>
                <LabType>{lab.type}</LabType>
                <ViewButton>View Details</ViewButton>
              </LabFooter>
            </LabCard>
          ))}
        </LabsGrid>
        
        {selectedLab && (
          <Modal onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <ModalTitle>{selectedLab.title}</ModalTitle>
                <CloseButton onClick={closeModal}>×</CloseButton>
              </ModalHeader>
              
              {loading ? (
                <Loader />
              ) : participants.length > 0 ? (
                <ParticipantsList>
                  {participants.map((participant) => (
                    <ParticipantItem key={participant.id}>
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
                    </ParticipantItem>
                  ))}
                </ParticipantsList>
              ) : (
                <EmptyState>
                  <p>No participants enrolled in this lab yet.</p>
                </EmptyState>
              )}
            </ModalContent>
          </Modal>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default LabsPage;