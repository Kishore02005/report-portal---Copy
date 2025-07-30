import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import styled from "styled-components";
import SuperAdminSidebar from "../components/SuperAdminSidebar";


const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  font-family: "Inter", "Segoe UI", sans-serif;
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 300px;
  padding: 32px;
  width: calc(100% - 300px);
  box-sizing: border-box;
  
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
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 28px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const LabCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.bgGradient || 'white'};
    opacity: 0.1;
    z-index: 1;
  }
  
  &::after {
    content: '${props => props.icon || ''}';
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 2rem;
    opacity: 0.15;
    z-index: 1;
    color: #64748b;
  }
  
  & > * {
    position: relative;
    z-index: 2;
  }
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
    border-color: #10b981;
    
    &::before {
      opacity: 0.15;
    }
    
    &::after {
      opacity: 0.3;
      transform: scale(1.05);
      color: #10b981;
    }
  }
`;

const LabHeader = styled.div`
  margin-bottom: 20px;
  padding-right: 60px;
`;

const LabTitle = styled.h3`
  font-size: 1.3rem;
  color: #1e293b;
  font-weight: 700;
  margin: 0 0 12px 0;
  line-height: 1.3;
`;

const LabBadge = styled.div`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  color: #10b981;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(16, 185, 129, 0.1);
`;

const LabDescription = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  flex: 1;
`;

const LabStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #f1f5f9;
`;

const EnrollmentCount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #10b981;
  font-weight: 600;
  font-size: 0.9rem;
  background: rgba(16, 185, 129, 0.1);
  padding: 6px 12px;
  border-radius: 12px;
`;

const LabFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const LabType = styled.div`
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  color: #166534;
  padding: 6px 14px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(22, 101, 52, 0.1);
`;

const ViewButton = styled.div`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 10px 18px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
  
  &:hover {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  animation: modalFadeIn 0.3s ease-out;
  
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(8px);
    }
  }
`;

const ModalContent = styled.div`
  background: ${props => props.bgGradient || 'white'};
  border-radius: 20px;
  padding: 0;
  max-width: 700px;
  width: 90%;
  max-height: 85vh;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  position: relative;
  animation: modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.bgPattern || 'rgba(255, 255, 255, 0.95)'};
    z-index: 1;
  }
  
  &::after {
    content: '${props => props.icon || ''}';
    position: absolute;
    top: 30px;
    right: 80px;
    font-size: 4rem;
    opacity: 0.1;
    z-index: 1;
  }
  
  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: scale(0.8) translateY(50px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px 0 32px;
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  color: #1e293b;
  font-weight: 700;
  margin: 0;
  max-width: 80%;
  line-height: 1.3;
  animation: titleSlideIn 0.6s ease-out 0.2s both;
  
  @keyframes titleSlideIn {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #64748b;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    transform: scale(1.1);
  }
`;

const ParticipantsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 32px 32px 32px;
  position: relative;
  z-index: 2;
  max-height: 60vh;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(16, 185, 129, 0.3);
    border-radius: 3px;
  }
`;

const ParticipantItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: participantSlideIn 0.5s ease-out;
  animation-delay: ${props => (props.index || 0) * 0.1}s;
  animation-fill-mode: both;
  
  &:hover {
    background: rgba(255, 255, 255, 0.95);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  @keyframes participantSlideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ParticipantAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(16, 185, 129, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(16, 185, 129, 0.5);
    transform: scale(1.1);
  }
`;

const ParticipantInfo = styled.div`
  flex: 1;
`;

const ParticipantName = styled.div`
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
  font-size: 1.1rem;
`;

const ParticipantEmail = styled.div`
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 32px;
  color: #64748b;
  position: relative;
  z-index: 2;
  
  &::before {
    content: '🔬';
    font-size: 4rem;
    display: block;
    margin-bottom: 16px;
    opacity: 0.3;
  }
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
    navigate(`/labs/${lab.id}`);
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
  
  const getLabPattern = (title) => {
    const patterns = {
      "Clarity as Culture": "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), rgba(255, 255, 255, 0.9)",
      "Decision-Making Without Drama": "radial-gradient(circle at 30% 70%, rgba(240, 147, 251, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(245, 87, 108, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)",
      "Inner Focus in Noisy Worlds": "radial-gradient(circle at 25% 75%, rgba(79, 172, 254, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(0, 242, 254, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)",
      "The Power of Listening": "radial-gradient(circle at 35% 65%, rgba(67, 233, 123, 0.3) 0%, transparent 50%), radial-gradient(circle at 65% 35%, rgba(56, 249, 215, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)",
      "Intelligent Conflict and Recovery": "radial-gradient(circle at 40% 60%, rgba(250, 112, 154, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(254, 225, 64, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)",
      "Systemic Thinking": "radial-gradient(circle at 45% 55%, rgba(168, 237, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 55% 45%, rgba(254, 214, 227, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)",
      "Voice, Value and Vulnerability": "radial-gradient(circle at 50% 50%, rgba(255, 154, 158, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(254, 207, 239, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)",
      "Leadership Without Imitation": "radial-gradient(circle at 60% 40%, rgba(255, 236, 210, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(252, 182, 159, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)"
    };
    
    return patterns[title] || "rgba(255, 255, 255, 0.9)";
  };
  
  const getLabIcon = (title) => {
    const icons = {
      "Clarity as Culture": "🏛️",
      "Decision-Making Without Drama": "⚖️",
      "Inner Focus in Noisy Worlds": "🧘",
      "The Power of Listening": "👂",
      "Intelligent Conflict and Recovery": "🤝",
      "Systemic Thinking": "🔄",
      "Voice, Value and Vulnerability": "🎤",
      "Leadership Without Imitation": "👑"
    };
    
    return icons[title] || "🔬";
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
            <LabCard 
              key={lab.id} 
              onClick={() => handleLabClick(lab)} 
              bgGradient={getLabBackground(lab.title)}
              bgPattern={getLabPattern(lab.title)}
              hoverBgPattern={getLabPattern(lab.title).replace('0.9)', '0.85)')}
              icon={getLabIcon(lab.title)}
            >
              <LabHeader>
                <LabTitle>{lab.title}</LabTitle>
                <LabBadge>Lab Experience</LabBadge>
              </LabHeader>
              
              <LabDescription>
                {getLabDescription(lab.title)}
              </LabDescription>
              
              <LabStats>
                <EnrollmentCount>
                  <span>👥</span> {getEnrolledCount(lab.title)} Enrolled
                </EnrollmentCount>
              </LabStats>
              
              <LabFooter>
                <LabType>{lab.type}</LabType>
                <ViewButton>View Details</ViewButton>
              </LabFooter>
            </LabCard>
          ))}
        </LabsGrid>
        

      </ContentWrapper>
    </PageContainer>
  );
};

export default LabsPage;