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

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
`;

const CourseCard = styled.div`
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
    border-color: #3b82f6;
    
    &::before {
      background: rgba(255, 255, 255, 0.85);
    }
  }
`;

const CourseHeader = styled.div`
  margin-bottom: 16px;
`;

const CourseTitle = styled.h3`
  font-size: 1.25rem;
  color: #1e293b;
  font-weight: 600;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const CourseDuration = styled.div`
  display: inline-block;
  background: #eff6ff;
  color: #3b82f6;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const CourseDescription = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 12px 0 0 0;
`;

const CourseStats = styled.div`
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
  color: #3b82f6;
  font-weight: 600;
  font-size: 0.9rem;
`;

const CourseFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const CourseType = styled.div`
  background: #f0fdf4;
  color: #166534;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ViewButton = styled.div`
  background: #3b82f6;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: background 0.2s ease;
  
  &:hover {
    background: #2563eb;
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

const CoursesPage = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);
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

  const courses = [
    {
      id: 1,
      title: "Empowering Human Intelligence – 7-Day Online Course",
      duration: "7 Days",
      type: "Online"
    },
    {
      id: 2,
      title: "The 7-Day Reset: Clarity, Confidence, and Communication",
      duration: "7 Days",
      type: "Reset Program"
    },
    {
      id: 3,
      title: "The 30-Day Foundation: Purpose-Driven Professionalism",
      duration: "30 Days",
      type: "Foundation"
    },
    {
      id: 4,
      title: "The 45-Day Career Rewire: Aligning Work with Self",
      duration: "45 Days",
      type: "Career Development"
    },
    {
      id: 5,
      title: "Leadership from Within: 21-Day Intensive for Founders & Changemakers",
      duration: "21 Days",
      type: "Leadership"
    },
    {
      id: 6,
      title: "The Aaruchudar Educator Program (30 Days or Custom)",
      duration: "30+ Days",
      type: "Education"
    },
    {
      id: 7,
      title: "Institutional Innovation Catalyst",
      duration: "45 Days",
      type: "Innovation"
    },
    {
      id: 8,
      title: "Custom Sprint Labs / Retreats",
      duration: "2–5 Days",
      type: "Custom"
    }
  ];

  const fetchParticipants = async (courseTitle) => {
    setLoading(true);
    try {
      const usersSnapshot = await getDocs(collection(db, "Users"));
      const allUsers = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      // Filter users who have this course in their courses array
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

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    fetchParticipants(course.title);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setParticipants([]);
  };

  const getCourseDescription = (title) => {
    const descriptions = {
      "Empowering Human Intelligence": "Unlock your cognitive potential through structured learning and practical exercises.",
      "The 7-Day Reset": "Transform your mindset with clarity-focused techniques and communication skills.",
      "The 30-Day Foundation": "Build professional excellence through purpose-driven methodologies.",
      "The 45-Day Career Rewire": "Align your career path with your authentic self and values.",
      "Leadership from Within": "Intensive leadership development for founders and change agents.",
      "The Aaruchudar Educator Program": "Comprehensive training program for educators and trainers.",
      "Institutional Innovation Catalyst": "Drive organizational change through innovative thinking.",
      "Custom Sprint Labs": "Tailored intensive workshops for specific organizational needs."
    };
    
    const key = Object.keys(descriptions).find(k => title.includes(k));
    return descriptions[key] || "Professional development course designed to enhance your skills.";
  };

  const getCourseBackground = (title) => {
    const backgrounds = {
      "Empowering Human Intelligence": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "The 7-Day Reset": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "The 30-Day Foundation": "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "The 45-Day Career Rewire": "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      "Leadership from Within": "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      "The Aaruchudar Educator Program": "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      "Institutional Innovation Catalyst": "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      "Custom Sprint Labs": "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    };
    
    const key = Object.keys(backgrounds).find(k => title.includes(k));
    return backgrounds[key] || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  };

  const getEnrolledCount = (courseTitle) => {
    return allUsers.filter(user => 
      user.courses && user.courses.some(course => 
        course.toLowerCase().includes(courseTitle.toLowerCase().split(' ')[0]) ||
        courseTitle.toLowerCase().includes(course.toLowerCase())
      )
    ).length;
  };

  return (
    <PageContainer>
      <SuperAdminSidebar />
      <ContentWrapper>
        <Header>
          <Title>Courses Management</Title>
          <Subtitle>View and manage all available courses and their participants</Subtitle>
        </Header>
        
        <CoursesGrid>
          {courses.map((course) => (
            <CourseCard key={course.id} onClick={() => handleCourseClick(course)} bgGradient={getCourseBackground(course.title)}>
              <CourseHeader>
                <CourseTitle>{course.title}</CourseTitle>
                <CourseDuration>{course.duration}</CourseDuration>
              </CourseHeader>
              
              <CourseDescription>
                {getCourseDescription(course.title)}
              </CourseDescription>
              
              <CourseStats>
                <EnrollmentCount>
                  👥 {getEnrolledCount(course.title)} Enrolled
                </EnrollmentCount>
              </CourseStats>
              
              <CourseFooter>
                <CourseType>{course.type}</CourseType>
                <ViewButton>View Details</ViewButton>
              </CourseFooter>
            </CourseCard>
          ))}
        </CoursesGrid>
        
        {selectedCourse && (
          <Modal onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <ModalTitle>{selectedCourse.title}</ModalTitle>
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
                  <p>No participants enrolled in this course yet.</p>
                </EmptyState>
              )}
            </ModalContent>
          </Modal>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default CoursesPage;