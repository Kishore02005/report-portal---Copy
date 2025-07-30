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
  background: rgba(255, 255, 255, 0.95);
  border: none;
  padding: 12px 20px;
  border-radius: 12px;
  cursor: pointer;
  color: #374151;
  font-weight: 600;
  margin-bottom: 20px;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateX(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }
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
  border: 3px solid rgba(59, 130, 246, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(59, 130, 246, 0.5);
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
    content: '📚';
    font-size: 5rem;
    display: block;
    margin-bottom: 20px;
    opacity: 0.4;
  }
`;

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);

  const courses = [
    { id: 1, title: "Empowering Human Intelligence – 7-Day Online Course", duration: "7 Days", type: "Online" },
    { id: 2, title: "The 7-Day Reset: Clarity, Confidence, and Communication", duration: "7 Days", type: "Reset Program" },
    { id: 3, title: "The 30-Day Foundation: Purpose-Driven Professionalism", duration: "30 Days", type: "Foundation" },
    { id: 4, title: "The 45-Day Career Rewire: Aligning Work with Self", duration: "45 Days", type: "Career Development" },
    { id: 5, title: "Leadership from Within: 21-Day Intensive for Founders & Changemakers", duration: "21 Days", type: "Leadership" },
    { id: 6, title: "The Aaruchudar Educator Program (30 Days or Custom)", duration: "30+ Days", type: "Education" },
    { id: 7, title: "Institutional Innovation Catalyst", duration: "45 Days", type: "Innovation" },
    { id: 8, title: "Custom Sprint Labs / Retreats", duration: "2–5 Days", type: "Custom" }
  ];

  useEffect(() => {
    const selectedCourse = courses.find(c => c.id === parseInt(courseId));
    setCourse(selectedCourse);
    
    if (selectedCourse) {
      fetchParticipants(selectedCourse.title);
    }
  }, [courseId]);

  const fetchParticipants = async (courseTitle) => {
    try {
      const usersSnapshot = await getDocs(collection(db, "Users"));
      const allUsers = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      const courseParticipants = allUsers.filter(user => 
        user.courses && user.courses.some(course => 
          course.toLowerCase().includes(courseTitle.toLowerCase().split(' ')[0]) ||
          courseTitle.toLowerCase().includes(course.toLowerCase())
        )
      );
      
      setParticipants(courseParticipants);
    } catch (error) {
      console.error("Error fetching participants:", error);
      setParticipants([]);
    } finally {
      setLoading(false);
    }
  };

  const getCourseImage = (title) => {
    const images = {
      "Empowering Human Intelligence": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "The 7-Day Reset": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "The 30-Day Foundation": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "The 45-Day Career Rewire": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "Leadership from Within": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "The Aaruchudar Educator Program": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "Institutional Innovation Catalyst": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "Custom Sprint Labs": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    };
    
    const key = Object.keys(images).find(k => title.includes(k));
    return images[key] || "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";
  };



  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <PageContainer 
      bgImage={getCourseImage(course.title)}
    >
      <SuperAdminSidebar />
      <ContentWrapper>
        <Header>
          <BackButton onClick={() => navigate('/courses')}>
            ← Back to Courses
          </BackButton>
          <Title>{course.title}</Title>
          <Subtitle>{participants.length} participants enrolled</Subtitle>
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
            <p>No participants enrolled in this course yet.</p>
          </EmptyState>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default CourseDetailPage;