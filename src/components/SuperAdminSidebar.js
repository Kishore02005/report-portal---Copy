// src/components/SuperAdminSidebar.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useAuth } from "../context/AuthContext";
import useResponsive from "../hooks/useResponsive";
import logo from "../assets/Aaruchudar Final Logo (1).png";

const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  background: #1e293b;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Inter", "Segoe UI", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-right: 1px solid #334155;
  z-index: 1000;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    width: 260px;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

const MobileHeader = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #1e293b;
  z-index: 999;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: space-between;
  color: white;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 24px;
  border-bottom: 1px solid #334155;
`;

const BrandSection = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: white;
  
  &:hover {
    text-decoration: none;
    color: white;
    opacity: 0.9;
  }
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const BrandText = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: white;
`;

const Navigation = styled.nav`
  flex: 1;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
`;

const NavSection = styled.div`
  margin-bottom: 40px;
`;

const NavTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 16px 0;
  padding: 0 12px;
`;

const SidebarLink = styled(NavLink)`
  color: #cbd5e1;
  text-decoration: none;
  padding: 12px 16px;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 8px;
  margin-bottom: 4px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;

  &:hover {
    background: #334155;
    color: white;
    text-decoration: none;
  }
  
  &.active {
    background: #3b82f6;
    color: white;
  }
`;

const IconWrapper = styled.span`
  font-size: 0.9rem;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const ProfileSection = styled.div`
  padding: 20px;
  border-top: 1px solid #334155;
  margin-top: auto;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #334155;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #475569;
`;

const UserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const Username = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserRole = styled.div`
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 500;
`;

const LogoutButton = styled.button`
  width: 100%;
  padding: 10px 16px;
  background: #475569;
  color: #cbd5e1;
  border: 1px solid #64748b;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #64748b;
    color: white;
  }
`;

const SuperAdminSidebar = () => {
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

  const profileImg = user?.photoURL || "https://i.pravatar.cc/150?img=5";
  const userName = user?.displayName || user?.email?.split("@")[0] || "User";

  let logoDashboardLink = "/superadmin";

  return (
    <>
      <MobileHeader>
        <MobileMenuButton onClick={toggleSidebar}>
          ☰
        </MobileMenuButton>
        <MobileLogo>
          <Logo src={logo} alt="Aaruchudar Logo" style={{ height: '24px' }} />
          <BrandText style={{ fontSize: '1.2rem' }}>Aaruchudar</BrandText>
        </MobileLogo>
        <div style={{ width: '24px' }}></div>
      </MobileHeader>
      
      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      
      <SidebarContainer $isOpen={isOpen}>
        <Header>
        <BrandSection to={logoDashboardLink}>
          <Logo src={logo} alt="Aaruchudar Logo" />
          <BrandText>Aaruchudar</BrandText>
        </BrandSection>
      </Header>
      
      <Navigation>
        <NavSection>
          <NavTitle>Super Admin Panel</NavTitle>
          <SidebarLink to="/superadmin" onClick={() => isMobile && setIsOpen(false)}>
            <IconWrapper>■</IconWrapper>
            Dashboard
          </SidebarLink>
          <SidebarLink to="/organizations" onClick={() => isMobile && setIsOpen(false)}>
            <IconWrapper>◆</IconWrapper>
            Organizations
          </SidebarLink>
          <SidebarLink to="/labs" onClick={() => isMobile && setIsOpen(false)}>
            <IconWrapper>▲</IconWrapper>
            HI Labs
          </SidebarLink>
          <SidebarLink to="/courses" onClick={() => isMobile && setIsOpen(false)}>
            <IconWrapper>●</IconWrapper>
            Courses
          </SidebarLink>
          <SidebarLink to="/reports" onClick={() => isMobile && setIsOpen(false)}>
            <IconWrapper>▬</IconWrapper>
            Reports
          </SidebarLink>
        </NavSection>
      </Navigation>
      
      <ProfileSection>
        <ProfileCard>
          <ProfileImage src={profileImg} alt={`${userName}'s Profile`} />
          <UserInfo>
            <Username>{userName}</Username>
            <UserRole>Super Administrator</UserRole>
          </UserInfo>
        </ProfileCard>
        <LogoutButton onClick={handleLogout}>Sign Out</LogoutButton>
      </ProfileSection>
    </SidebarContainer>
    </>
  );
};

export default SuperAdminSidebar;
