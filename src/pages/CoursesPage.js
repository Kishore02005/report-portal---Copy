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

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 28px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const CourseCard = styled.div`
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
    border-color: #3b82f6;
    
    &::before {
      opacity: 0.15;
    }
    
    &::after {
      opacity: 0.3;
      transform: scale(1.05);
      color: #3b82f6;
    }
  }
`;

const CourseHeader = styled.div`
  margin-bottom: 20px;
  padding-right: 60px;
`;

const CourseTitle = styled.h3`
  font-size: 1.3rem;
  color: #1e293b;
  font-weight: 700;
  margin: 0 0 12px 0;
  line-height: 1.3;
`;

const CourseDuration = styled.div`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  color: #3b82f6;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(59, 130, 246, 0.1);
`;

const CourseDescription = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  flex: 1;
`;

const CourseStats = styled.div`
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

const CourseFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const CourseType = styled.div`
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  color: #166534;
  padding: 6px 14px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(22, 101, 52, 0.1);
`;

const ViewButton = styled.div`
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  padding: 10px 18px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
  
  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
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
    background: rgba(59, 130, 246, 0.3);
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
  border: 3px solid rgba(59, 130, 246, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(59, 130, 246, 0.5);
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
    content: '📚';
    font-size: 4rem;
    display: block;
    margin-bottom: 16px;
    opacity: 0.3;
  }
`;

const CoursesPage = () => {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const usersSnapshot = await getDocs(collection(db, "Users"));
        const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("All users fetched:", users);
        console.log("Users with courses:", users.filter(u => u.courses));
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

  const handleCourseClick = (course) => {
    const courseId = getCourseIdFromTitle(course.title);
    navigate(`/participants?course=${courseId}&title=${encodeURIComponent(course.title)}`);
  };

  const handleViewDetails = (e, course) => {
    e.stopPropagation();
    const courseId = getCourseIdFromTitle(course.title);
    navigate(`/participants?course=${courseId}&title=${encodeURIComponent(course.title)}`);
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
  
  const getCoursePattern = (title) => {
    const patterns = {
      "Empowering Human Intelligence": "radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%), rgba(255, 255, 255, 0.9)",
      "The 7-Day Reset": "radial-gradient(circle at 30% 70%, rgba(240, 147, 251, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(245, 87, 108, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)",
      "The 30-Day Foundation": "radial-gradient(circle at 25% 75%, rgba(79, 172, 254, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(0, 242, 254, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)",
      "The 45-Day Career Rewire": "radial-gradient(circle at 35% 65%, rgba(67, 233, 123, 0.3) 0%, transparent 50%), radial-gradient(circle at 65% 35%, rgba(56, 249, 215, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)",
      "Leadership from Within": "radial-gradient(circle at 40% 60%, rgba(250, 112, 154, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(254, 225, 64, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)",
      "The Aaruchudar Educator Program": "radial-gradient(circle at 45% 55%, rgba(168, 237, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 55% 45%, rgba(254, 214, 227, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)",
      "Institutional Innovation Catalyst": "radial-gradient(circle at 50% 50%, rgba(255, 154, 158, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(254, 207, 239, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)",
      "Custom Sprint Labs": "radial-gradient(circle at 60% 40%, rgba(255, 236, 210, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(252, 182, 159, 0.2) 0%, transparent 50%), rgba(255, 255, 255, 0.9)"
    };
    
    const key = Object.keys(patterns).find(k => title.includes(k));
    return patterns[key] || "rgba(255, 255, 255, 0.9)";
  };
  
  const getCourseIcon = (title) => {
    const icons = {
      "Empowering Human Intelligence": "🧠",
      "The 7-Day Reset": "🔄",
      "The 30-Day Foundation": "🏗️",
      "The 45-Day Career Rewire": "🚀",
      "Leadership from Within": "👑",
      "The Aaruchudar Educator Program": "🎓",
      "Institutional Innovation Catalyst": "💡",
      "Custom Sprint Labs": "⚙️"
    };
    
    const key = Object.keys(icons).find(k => title.includes(k));
    return icons[key] || "📚";
  };

  const getCourseIdFromTitle = (courseTitle) => {
    const courseMapping = {
      "Empowering Human Intelligence – 7-Day Online Course": "course_01",
      "The 7-Day Reset: Clarity, Confidence, and Communication": "course_02",
      "The 30-Day Foundation: Purpose-Driven Professionalism": "course_03",
      "The 45-Day Career Rewire: Aligning Work with Self": "course_04",
      "Leadership from Within: 21-Day Intensive for Founders & Changemakers": "course_05",
      "The Aaruchudar Educator Program (30 Days or Custom)": "course_06",
      "Institutional Innovation Catalyst": "course_07",
      "Custom Sprint Labs / Retreats": "course_08"
    };
    return courseMapping[courseTitle];
  };

  const getEnrolledCount = (courseTitle) => {
    const courseId = getCourseIdFromTitle(courseTitle);
    console.log(`Checking enrollment for "${courseTitle}" (ID: ${courseId})`);
    
    const enrolledUsers = allUsers.filter(user => {
      if (!user.courses) return false;
      
      let coursesArray = Array.isArray(user.courses) ? user.courses : [user.courses];
      
      const hasMatch = coursesArray.some(course => {
        const userCourse = String(course).toLowerCase().trim();
        return userCourse === courseId?.toLowerCase();
      });
      
      if (hasMatch) {
        console.log(`✓ User ${user.email || user.id} enrolled in ${courseTitle}`);
      }
      
      return hasMatch;
    });
    
    console.log(`Total enrolled: ${enrolledUsers.length}`);
    return enrolledUsers.length;
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
            <CourseCard 
              key={course.id} 
              onClick={() => handleCourseClick(course)} 
              bgGradient={getCourseBackground(course.title)}
              bgPattern={getCoursePattern(course.title)}
              hoverBgPattern={getCoursePattern(course.title).replace('0.9)', '0.85)')}
              icon={getCourseIcon(course.title)}
            >
              <CourseHeader>
                <CourseTitle>{course.title}</CourseTitle>
                <CourseDuration>{course.duration}</CourseDuration>
              </CourseHeader>
              
              <CourseDescription>
                {getCourseDescription(course.title)}
              </CourseDescription>
              
              <CourseStats>
                <EnrollmentCount>
                  <span>👥</span> {getEnrolledCount(course.title)} Enrolled
                </EnrollmentCount>
              </CourseStats>
              
              <CourseFooter>
                <CourseType>{course.type}</CourseType>
                <ViewButton onClick={(e) => handleViewDetails(e, course)}>View Details</ViewButton>
              </CourseFooter>
            </CourseCard>
          ))}
        </CoursesGrid>

      </ContentWrapper>
    </PageContainer>
  );
};

export default CoursesPage;