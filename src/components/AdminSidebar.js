// src/components/AdminSidebar.js
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useAuth } from "../context/AuthContext";
import useResponsive from "../hooks/useResponsive";
import logo from "../assets/Aaruchudar Final Logo (1).png";

// Fallback logo URL in case import fails
const logoFallback = "/logo192.png";

const slideIn = keyframes`
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;



const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  background: linear-gradient(145deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Inter", "Segoe UI", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${slideIn} 0.6s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.5), transparent);
  }
  
  @media (max-width: 768px) {
    width: 280px;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

const MobileHeader = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%);
  backdrop-filter: blur(20px);
  z-index: 999;
  padding: 0 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
  
  @media (max-width: 768px) {
    display: flex;
    animation: ${fadeIn} 0.5s ease-out;
  }
`;

const MobileMenuButton = styled.button`
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  font-size: 1.4rem;
  color: #60a5fa;
  cursor: pointer;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    color: white;
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  }
`;

const MobileLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
  }
`;

const Header = styled.div`
  padding: 32px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 24px;
    right: 24px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
  }
`;

const BrandSection = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    text-decoration: none;
    color: white;
    transform: scale(1.02);
  }
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  filter: brightness(1.2) drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3));
  transition: all 0.3s ease;
  
  &:hover {
    filter: brightness(1.4) drop-shadow(0 6px 12px rgba(59, 130, 246, 0.5));
    animation: ${pulse} 2s infinite;
  }
  
  &:error {
    content: url(${logoFallback});
  }
`;

const BrandText = styled.h2`
  font-size: 1.4rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
`;

const Navigation = styled.nav`
  flex: 1;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavSection = styled.div`
  margin-bottom: 40px;
`;

const NavTitle = styled.h3`
  font-size: 0.7rem;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 20px 0;
  padding: 0 16px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 16px;
    width: 24px;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    border-radius: 1px;
  }
`;

const SidebarLink = styled(Link)`
  color: #cbd5e1;
  text-decoration: none;
  padding: 16px 20px;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 16px;
  margin-bottom: 8px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 0.6s ease-out;
  animation-delay: ${props => props.$delay || '0s'};
  animation-fill-mode: both;

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

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 0;
    background: linear-gradient(180deg, #3b82f6, #8b5cf6);
    border-radius: 0 2px 2px 0;
    transition: height 0.3s ease;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
    color: #60a5fa;
    text-decoration: none;
    transform: translateX(8px);
    box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      height: 24px;
    }
  }
  
  &.active {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
    color: #60a5fa;
    transform: translateX(8px);
    
    &::after {
      height: 32px;
    }
  }
`;

const ProfileSection = styled.div`
  padding: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 24px;
    right: 24px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
  }
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 20px;
  margin-bottom: 20px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.2);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
  }
`;



const UserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const Username = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserRole = styled.div`
  font-size: 0.8rem;
  color: #94a3b8;
  font-weight: 500;
`;

const LogoutButton = styled.button`
  width: 100%;
  padding: 14px 20px;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%);
  color: #fca5a5;
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 16px;
  font-weight: 600;
  font-size: 0.9rem;
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
    background: linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%);
    color: #f87171;
    border-color: rgba(239, 68, 68, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(239, 68, 68, 0.3);
    
    &::before {
      left: 100%;
    }
  }
`;

const AdminSidebar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useResponsive();
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const userName = user?.displayName || user?.email?.split("@")[0] || "User";

  let logoDashboardLink = "/admin";

  return (
    <>
      <MobileHeader>
        <MobileMenuButton onClick={toggleSidebar}>
          ☰
        </MobileMenuButton>
        <MobileLogo>
          <Logo 
            src={logo} 
            alt="Aaruchudar Logo" 
            style={{ height: '24px' }}
            onError={(e) => { e.target.src = logoFallback; }}
          />
          <BrandText>Aaruchudar</BrandText>
        </MobileLogo>
        <div style={{ width: '24px' }}></div>
      </MobileHeader>
      
      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      
      <SidebarContainer $isOpen={isOpen}>
        <Header>
        <BrandSection to={logoDashboardLink}>
          <Logo 
            src={logo} 
            alt="Aaruchudar Logo" 
            onError={(e) => { e.target.src = logoFallback; }}
          />
          <BrandText>Aaruchudar</BrandText>
        </BrandSection>
      </Header>
      
      <Navigation>
        {user && (
          <NavSection>
            <NavTitle>Admin Panel</NavTitle>
            <SidebarLink to="/admin" onClick={() => isMobile && setIsOpen(false)} $delay="0.1s">
              Dashboard
            </SidebarLink>
            <SidebarLink to="/participants" onClick={() => isMobile && setIsOpen(false)} $delay="0.2s">
              Participants
            </SidebarLink>
          </NavSection>
        )}
      </Navigation>
      
      <ProfileSection>
        <ProfileCard>
          <UserInfo>
            <Username>{userName}</Username>
            <UserRole>Administrator</UserRole>
          </UserInfo>
        </ProfileCard>
        <LogoutButton onClick={handleLogout}>Sign Out</LogoutButton>
      </ProfileSection>
    </SidebarContainer>
    </>
  );
};

export default AdminSidebar;
