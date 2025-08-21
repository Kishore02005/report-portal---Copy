import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { db } from "../firebaseConfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import UserNavbar from "../components/UserNavbar";
import Chatbot from "../components/Chatbot";
import CountUp from 'react-countup';
import { FiUser, FiActivity, FiFileText, FiDownload, FiExternalLink, FiAward, FiBookOpen, FiAlertCircle } from 'react-icons/fi';

/* -------------------- ANIMATIONS & KEYFRAMES -------------------- */
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;


/* -------------------- STYLED COMPONENTS -------------------- */
const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  
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
    background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem;
  padding-top: 5.5rem;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1rem;
    padding-top: 5rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem;
    padding-top: 4.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
    padding-top: 4rem;
  }
  
  @media (max-width: 320px) {
    padding: 0.25rem;
    padding-top: 3.5rem;
  }
`;

const WelcomeBanner = styled.div`
  padding: 2rem 2.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  color: #1e293b;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6);
  animation: ${fadeIn} 0.5s ease-out;
  border: 1px solid rgba(255, 255, 255, 0.4);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
  }

  svg {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    color: #667eea;
  }
  
  @media (max-width: 768px) {
    padding: 1rem 1.25rem;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    border-radius: 16px;
    
    svg {
      width: 32px;
      height: 32px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 12px;
  }
`;

const WelcomeText = styled.div`
  flex: 1;
  
  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0 0 4px 0;
    line-height: 1.2;
    word-wrap: break-word;
    overflow-wrap: break-word;
    
    @media (max-width: 1024px) {
      font-size: 1.5rem;
    }
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
      margin: 0 0 2px 0;
    }
    
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
    
    @media (max-width: 320px) {
      font-size: 1rem;
    }
  }
  p {
    font-size: 1rem;
    margin: 0;
    opacity: 0.9;
    line-height: 1.4;
    word-wrap: break-word;
    overflow-wrap: break-word;
    
    @media (max-width: 1024px) {
      font-size: 0.9rem;
    }
    
    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
    
    @media (max-width: 320px) {
      font-size: 0.75rem;
    }
  }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 24px;
  align-items: start;
  
  @media (max-width: 1200px) {
    grid-template-columns: 280px 1fr;
    gap: 20px;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  @media (max-width: 768px) {
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const AnimatedCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: ${({ delay }) => delay || '0s'};
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 16px;
    
    &:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
    border-radius: 12px;
  }
`;

const ProfileCard = styled(AnimatedCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: fit-content;
  
  @media (max-width: 1024px) {
    margin-bottom: 0;
  }
`;

const Avatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.2);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }
`;

const UserName = styled.h2`
  color: #1e293b;
  font-size: 1.5rem;
  margin-bottom: 4px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 3px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 2px;
  }
`;

const UserRole = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 24px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin-bottom: 12px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
  margin-bottom: 16px;
`;

const ExtendedStatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 8px;
    margin-bottom: 12px;
  }
`;

const CompactStatItem = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 1rem 0.75rem;
  border-radius: 16px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    min-height: 70px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
    min-height: 60px;
    border-radius: 10px;
  }
`;

const CompactStatIcon = styled.div`
  color: #3b82f6;
  font-size: 1.2rem;
  margin-bottom: 6px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 4px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 3px;
  }
`;

const CompactStatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const CompactStatLabel = styled.div`
  font-size: 0.7rem;
  color: #64748b;
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 0.65rem;
  }
`;

const StatItem = styled.div`
  background: #f8fafc;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #e2e8f0;
`;

const StatIcon = styled.div`
  color: #3b82f6;
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
`;

const InfoSection = styled.div`
  width: 100%;
  border-top: 1px solid #e2e8f0;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  @media (max-width: 768px) {
    padding-top: 12px;
    gap: 6px;
  }
  
  @media (max-width: 480px) {
    padding-top: 10px;
    gap: 5px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 3px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 2px 0;
  }
`;

const InfoLabel = styled.span`
  color: #64748b;
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const InfoValue = styled.span`
  color: #1e293b;
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const SectionHeader = styled.div`
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 5px;
  }
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 0;
  color: #475569;
  font-size: 0.85rem;
  
  svg {
    color: #3b82f6;
    font-size: 0.9rem;
    flex-shrink: 0;
    margin-top: 2px;
  }
  
  @media (max-width: 768px) {
    gap: 8px;
    padding: 5px 0;
    font-size: 0.8rem;
    
    svg {
      font-size: 0.85rem;
    }
  }
  
  @media (max-width: 480px) {
    gap: 6px;
    padding: 4px 0;
    font-size: 0.75rem;
    
    svg {
      font-size: 0.8rem;
    }
  }
`;

const ActivityName = styled.span`
  line-height: 1.4;
  word-break: break-word;
  flex: 1;
  text-align: left;
  
  @media (max-width: 480px) {
    line-height: 1.3;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  @media (max-width: 768px) {
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const ProgressCard = styled(AnimatedCard)``;
const ReportCard = styled(AnimatedCard)``;
const ActiveCoursesCard = styled(AnimatedCard)``;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 1.1rem;
  color: #1e293b;
  font-weight: 600;

  svg {
    color: #3b82f6;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 10px;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    gap: 8px;
    margin-bottom: 10px;
  }
`;

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const ProgressPercentage = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #3b82f6;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background: #e2e8f0;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #3b82f6 0%, #6366f1 100%);
  width: ${({ $percent }) => $percent || 0}%;
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 5px;
`;

const IframeContainer = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    height: 300px;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    height: 250px;
    margin-bottom: 10px;
  }
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid transparent;
  
  @media (max-width: 768px) {
    padding: 9px 16px;
    font-size: 0.85rem;
    gap: 6px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 0.8rem;
    width: 100%;
  }
`;

const PrimaryButton = styled(Button)`
  background: #3b82f6;
  color: white;
  
  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px -5px rgba(59, 130, 246, 0.7);
  }
`;

const SecondaryButton = styled(Button)`
  background: white;
  color: #475569;
  border-color: #e2e8f0;
  
  &:hover {
    background: #f8fafc;
    color: #3b82f6;
    border-color: #3b82f6;
  }
`;

const EmptyStateCard = styled(AnimatedCard)`
    text-align: center;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background: rgba(248, 250, 252, 0.9);
    backdrop-filter: blur(20px);
    
    svg {
        font-size: 3rem;
        color: #667eea;
    }
    
    p {
        color: #475569;
        font-size: 1rem;
        max-width: 350px;
        line-height: 1.5;
        margin: 0;
    }
    
    @media (max-width: 768px) {
        padding: 2rem 1.5rem;
        gap: 0.75rem;
        
        svg {
            font-size: 2.5rem;
        }
        
        p {
            font-size: 0.9rem;
            max-width: 300px;
        }
    }
    
    @media (max-width: 480px) {
        padding: 1.5rem 1rem;
        gap: 0.5rem;
        
        svg {
            font-size: 2rem;
        }
        
        p {
            font-size: 0.85rem;
            max-width: 250px;
        }
    }
`;

const ErrorText = styled(EmptyStateCard)`
  border: 2px solid rgba(254, 202, 202, 0.8);
  background: rgba(254, 242, 242, 0.9);
  backdrop-filter: blur(20px);
  
  svg {
    color: #ef4444;
  }
  
  p {
    color: #b91c1c;
  }
`;

const CoursesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media (max-width: 768px) {
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const CourseItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 250, 252, 0.8) 100%);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
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
    transform: translateY(-4px);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 12px 16px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px;
    gap: 6px;
    border-radius: 10px;
  }
`;

const CourseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  
  @media (max-width: 768px) {
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const CourseIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 12px 25px rgba(102, 126, 234, 0.4);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 1rem;
    border-radius: 10px;
  }
`;

const CourseName = styled.div`
  font-weight: 600;
  color: #1e293b;
  font-size: 0.95rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const CourseStatus = styled.div`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: #dbeafe;
  color: #1e40af;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    align-self: flex-end;
    margin-top: 4px;
    padding: 3px 10px;
    font-size: 0.7rem;
  }
  
  @media (max-width: 480px) {
    padding: 2px 8px;
    font-size: 0.65rem;
    border-radius: 12px;
  }
`;

/* -------------------- SKELETON LOADER -------------------- */
const SkeletonWrapper = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 24px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const SkeletonCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
`;

const SkeletonLine = styled.div`
  height: ${({ height }) => height || '16px'};
  width: ${({ width }) => width || '100%'};
  border-radius: 8px;
  background: linear-gradient(90deg, #f0f4f8, #e2e8f0, #f0f4f8);
  background-size: 2000px 100%;
  animation: ${shimmer} 2s linear infinite;
  margin-bottom: ${({ mb }) => mb || '0'};
`;


const SkeletonDashboard = () => (
  <SkeletonWrapper>
    {/* Profile Skeleton */}
    <SkeletonCard>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SkeletonLine width="90px" height="90px" style={{ borderRadius: '50%', marginBottom: '1rem' }} />
        <SkeletonLine width="60%" height="24px" mb="8px" />
        <SkeletonLine width="40%" height="14px" mb="24px" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', width: '100%' }}>
          <SkeletonLine height="70px" />
          <SkeletonLine height="70px" />
        </div>
      </div>
    </SkeletonCard>
    {/* Main Content Skeleton */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <SkeletonCard>
        <SkeletonLine width="40%" height="20px" mb="16px" />
        <SkeletonLine height="10px" />
      </SkeletonCard>
      <SkeletonCard>
        <SkeletonLine width="30%" height="20px" mb="16px" />
        <SkeletonLine height="450px" />
      </SkeletonCard>
    </div>
  </SkeletonWrapper>
);


/* -------------------- MAIN COMPONENT -------------------- */
const UserDashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const [dashboardDataLoading, setDashboardDataLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [activeLabs, setActiveLabs] = useState([]);
  const [activeCourses, setActiveCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (authLoading) return; // Wait until auth state is resolved

    const fetchDashboardData = async () => {
      if (!user?.email) {
        setError("You must be logged in to view the dashboard.");
        setDashboardDataLoading(false);
        return;
      }

      setDashboardDataLoading(true);
      setError("");

      const userEmailLowerCase = user.email.toLowerCase();

      try {
        const userDocRef = doc(db, "Users", userEmailLowerCase);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const data = userDocSnap.data();
          setUserData(data);
          

          
          // Fetch Labs and Courses data first
          const [labsSnap, coursesSnap] = await Promise.all([
            getDocs(collection(db, "Labs")),
            getDocs(collection(db, "Courses"))
          ]);
          
          const allLabsMap = new Map();
          const allCoursesMap = new Map();
          
          labsSnap.docs.forEach(d => allLabsMap.set(d.id, d.data()));
          coursesSnap.docs.forEach(d => allCoursesMap.set(d.id, d.data()));
          
          console.log('All labs from DB:', Array.from(allLabsMap.entries()));
          console.log('All courses from DB:', Array.from(allCoursesMap.entries()));
          
          // Fetch active courses details from activeCoursesProgress
          if (data.activeCoursesProgress && Object.keys(data.activeCoursesProgress).length > 0) {
            const activeCoursesDetails = Object.keys(data.activeCoursesProgress)
              .map(courseId => {
                const courseDetails = allCoursesMap.get(courseId);
                const progressValue = data.activeCoursesProgress[courseId];
                console.log(`Looking for course ${courseId}:`, courseDetails);
                return courseDetails ? { 
                  id: courseId, 
                  name: courseDetails.name,
                  progress: typeof progressValue === 'number' ? progressValue : 0,
                  status: 'In Progress'
                } : null;
              })
              .filter(course => course !== null);
            
            console.log('Final active courses to set:', activeCoursesDetails);
            setActiveCourses(activeCoursesDetails);
          }
          
          // Fetch active labs details from activeLabsProgress  
          if (data.activeLabsProgress && Object.keys(data.activeLabsProgress).length > 0) {
            const activeLabsDetails = Object.keys(data.activeLabsProgress)
              .map(labId => {
                const labDetails = allLabsMap.get(labId);
                const progressValue = data.activeLabsProgress[labId];
                console.log(`Looking for lab ${labId}:`, labDetails);
                return labDetails ? { 
                  id: labId, 
                  name: labDetails.labName,
                  progress: typeof progressValue === 'number' ? progressValue : 0,
                  status: 'In Progress'
                } : null;
              })
              .filter(lab => lab !== null);
            
            console.log('Final active labs to set:', activeLabsDetails);
            setActiveLabs(activeLabsDetails);
          }
        } else {
          setError("User data not found. If this is an error, please contact support.");
          setUserData(null);
        }

      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError("Failed to load dashboard data. Please check your connection and try again.");
      } finally {
        setDashboardDataLoading(false);
      }
    };

    fetchDashboardData();
  }, [user, authLoading]);

  const calculateOverallProgress = (userData) => {
    if (!userData) return 0;
    
    let totalProgress = 0;
    let itemCount = 0;
    
    // Calculate progress from courses
    if (userData.activeCoursesProgress) {
      Object.values(userData.activeCoursesProgress).forEach(courseProgress => {
        if (courseProgress.progress !== undefined) {
          totalProgress += courseProgress.progress;
          itemCount++;
        }
      });
    }
    
    // Calculate progress from labs
    if (userData.activeLabsProgress) {
      Object.values(userData.activeLabsProgress).forEach(labProgress => {
        if (labProgress.progress !== undefined) {
          totalProgress += labProgress.progress;
          itemCount++;
        }
      });
    }
    
    return itemCount > 0 ? Math.round(totalProgress / itemCount) : 0;
  };

  const formatDate = (dateValue) => {
    if (!dateValue) return "N/A";
    try {
      let date;
      if (dateValue.seconds && dateValue.nanoseconds) {
        // Firestore timestamp object
        date = new Date(dateValue.seconds * 1000);
      } else if (typeof dateValue === 'string') {
        // String date format
        const [year, month, day] = dateValue.split('-');
        date = new Date(year, month - 1, day);
      } else {
        // Assume it's already a Date object or timestamp
        date = new Date(dateValue);
      }
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (e) {
      console.error("Error formatting date:", e);
      return "N/A";
    }
  };

  const getDownloadLink = (url) => {
    if (!url) return "#";
    const match = url.match(/\/d\/(.*?)\//);
    const fileId = match ? match[1] : null;
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : url;
  };

  const welcomeName = userData?.username || user?.email?.split("@")[0] || "User";
  const userInitial = welcomeName?.charAt(0).toUpperCase() || "U";

  const renderContent = () => {
    if (authLoading || dashboardDataLoading) {
      return <SkeletonDashboard />;
    }
    if (error) {
      return <ErrorText><FiAlertCircle /><p>{error}</p></ErrorText>;
    }
    if (!userData) {
      return (
        <EmptyStateCard>
            <FiAlertCircle />
            <p>No user data found for your account. Please contact support if you believe this is an error.</p>
        </EmptyStateCard>
      );
    }

    return (
      <DashboardGrid>
        <ProfileCard delay="0.1s">
          <Avatar>{userInitial}</Avatar>
          <UserName>{userData.username || "User"}</UserName>
          <UserRole>{userData.role || "Student"}</UserRole>
          
          <ExtendedStatsGrid>
            <CompactStatItem>
              <CompactStatIcon><FiBookOpen /></CompactStatIcon>
              <CompactStatValue>
                <CountUp end={activeCourses.length} duration={1.5} />
              </CompactStatValue>
              <CompactStatLabel>Active Courses</CompactStatLabel>
            </CompactStatItem>
            <CompactStatItem>
              <CompactStatIcon><FiActivity /></CompactStatIcon>
              <CompactStatValue>
                <CountUp end={activeLabs.length} duration={1.5} />
              </CompactStatValue>
              <CompactStatLabel>Active Labs</CompactStatLabel>
            </CompactStatItem>
          </ExtendedStatsGrid>
          
          {activeCourses.length > 0 && (
            <InfoSection>
              <SectionHeader>Active Courses</SectionHeader>
              {activeCourses.map((course) => (
                <ActivityItem key={course.id}>
                  <FiBookOpen />
                  <ActivityName>{course.name}</ActivityName>
                </ActivityItem>
              ))}
            </InfoSection>
          )}
          
          {activeLabs.length > 0 && (
            <InfoSection>
              <SectionHeader>Active Labs</SectionHeader>
              {activeLabs.map((lab) => (
                <ActivityItem key={lab.id}>
                  <FiActivity />
                  <ActivityName>{lab.name}</ActivityName>
                </ActivityItem>
              ))}
            </InfoSection>
          )}
          
          <InfoSection>
            {userData.enrollmentDates && Object.keys(userData.enrollmentDates).length > 0 && (
              <InfoItem>
                <InfoLabel>First Enrolled</InfoLabel>
                <InfoValue>{formatDate(
                  Object.values(userData.enrollmentDates)
                    .map(date => date.seconds ? new Date(date.seconds * 1000) : new Date(date))
                    .sort((a, b) => a - b)[0]
                )}</InfoValue>
              </InfoItem>
            )}
          </InfoSection>
        </ProfileCard>

        <MainContent>
          {activeCourses.length > 0 ? (
            <ActiveCoursesCard delay="0.2s">
              <CardHeader><FiBookOpen /> Active Courses</CardHeader>
              <CoursesList>
                {activeCourses.map((course, index) => (
                  <CourseItem key={course.id}>
                    <CourseInfo>
                      <CourseIcon>
                        <FiBookOpen />
                      </CourseIcon>
                      <div style={{flex: 1}}>
                        <CourseName>{course.name}</CourseName>
                        <div style={{fontSize: '0.8rem', color: '#64748b', marginTop: '4px', marginBottom: '8px'}}>
                          Progress: {course.progress}%
                        </div>
                        <div style={{width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden'}}>
                          <div style={{width: `${course.progress}%`, height: '100%', background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)', borderRadius: '4px', transition: 'width 0.3s ease'}}></div>
                        </div>
                      </div>
                    </CourseInfo>
                    <CourseStatus>
                      {course.status}
                    </CourseStatus>
                  </CourseItem>
                ))}
              </CoursesList>
            </ActiveCoursesCard>
          ) : (
            <EmptyStateCard delay="0.2s">
              <FiBookOpen />
              <p>No active courses found. Enroll in a course to start your learning journey!</p>
            </EmptyStateCard>
          )}

          {activeLabs.length > 0 && (
            <ActiveCoursesCard delay="0.3s">
              <CardHeader><FiActivity /> Active Labs</CardHeader>
              <CoursesList>
                {activeLabs.map((lab) => (
                  <CourseItem key={lab.id}>
                    <CourseInfo>
                      <CourseIcon>
                        <FiActivity />
                      </CourseIcon>
                      <div style={{flex: 1}}>
                        <CourseName>{lab.name}</CourseName>
                        <div style={{fontSize: '0.8rem', color: '#64748b', marginTop: '4px', marginBottom: '8px'}}>
                          Progress: {lab.progress}%
                        </div>
                        <div style={{width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden'}}>
                          <div style={{width: `${lab.progress}%`, height: '100%', background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)', borderRadius: '4px', transition: 'width 0.3s ease'}}></div>
                        </div>
                      </div>
                    </CourseInfo>
                    <CourseStatus>
                      {lab.status}
                    </CourseStatus>
                  </CourseItem>
                ))}
              </CoursesList>
            </ActiveCoursesCard>
          )}

          {userData.reportUrl ? (
            <ReportCard delay="0.5s">
              <CardHeader><FiFileText /> Learning Report</CardHeader>
              <IframeContainer>
                <Iframe 
                  src={userData.reportUrl} 
                  title="Your Report" 
                  allow="fullscreen"
                />
              </IframeContainer>
              <ActionButtons>
                <PrimaryButton
                  href={getDownloadLink(userData.reportUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiDownload /> Download PDF
                </PrimaryButton>
                <SecondaryButton 
                  as="a"
                  href={userData.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink /> Open in New Tab
                </SecondaryButton>
              </ActionButtons>
            </ReportCard>
          ) : (
            <EmptyStateCard delay="0.5s">
                <FiFileText />
                <p>Your personalized report will be available here once you've made more progress in the course.</p>
            </EmptyStateCard>
          )}
        </MainContent>
      </DashboardGrid>
    );
  };

  return (
    <PageContainer>
      <UserNavbar />
      <ContentWrapper>
        <WelcomeBanner>
          <FiUser />
          <WelcomeText>
            <h1>Welcome back, {welcomeName}!</h1>
            <p>Here's a summary of your learning journey and progress.</p>
          </WelcomeText>
        </WelcomeBanner>
        {renderContent()}
      </ContentWrapper>
      <Chatbot />
    </PageContainer>
  );
};

export default UserDashboard;