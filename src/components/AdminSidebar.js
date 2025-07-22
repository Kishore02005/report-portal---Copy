// src/components/AdminSidebar.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/Aaruchudar Final Logo (1).png";

const SidebarContainer = styled.div`
  width: 280px;
  height: 100vh;
  background: white;
  color: #1e293b;
  display: flex;
  flex-direction: column;
  font-family: "Inter", "Segoe UI", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #e2e8f0;
  z-index: 1000;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    width: 250px;
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
  background: white;
  z-index: 999;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #1e293b;
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
  border-bottom: 1px solid #e2e8f0;
`;

const BrandSection = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #1e293b;
  
  &:hover {
    text-decoration: none;
    color: #1e293b;
  }
`;

const Logo = styled.img`
  height: 32px;
  width: auto;
`;

const BrandText = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: #1e293b;
`;

const Navigation = styled.nav`
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const NavSection = styled.div`
  margin-bottom: 32px;
`;

const NavTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 16px 0;
  padding: 0 12px;
`;

const SidebarLink = styled(Link)`
  color: #64748b;
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

  &:hover {
    background: #f8fafc;
    color: #3b82f6;
    text-decoration: none;
  }
  
  &.active {
    background: #eff6ff;
    color: #3b82f6;
  }
`;

const ProfileSection = styled.div`
  padding: 24px;
  border-top: 1px solid #e2e8f0;
  margin-top: auto;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f8fafc;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e2e8f0;
`;

const UserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const Username = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserRole = styled.div`
  font-size: 0.75rem;
  color: #64748b;
`;

const LogoutButton = styled.button`
  width: 100%;
  padding: 10px 16px;
  background: #f8fafc;
  color: #64748b;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f5f9;
    color: #475569;
    border-color: #cbd5e1;
  }
`;

const AdminSidebar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
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

  let logoDashboardLink = "/admin";

  return (
    <>
      <MobileHeader>
        <MobileMenuButton onClick={toggleSidebar}>
          ☰
        </MobileMenuButton>
        <MobileLogo>
          <Logo src={logo} alt="Aaruchudar Logo" style={{ height: '24px' }} />
          <BrandText>Aaruchudar</BrandText>
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
        {user && (
          <NavSection>
            <NavTitle>Admin Panel</NavTitle>
            <SidebarLink to="/admin">📊 Dashboard</SidebarLink>
            <SidebarLink to="/participants">👥 Participants</SidebarLink>
          </NavSection>
        )}
      </Navigation>
      
      <ProfileSection>
        <ProfileCard>
          <ProfileImage src={profileImg} alt={`${userName}'s Profile`} />
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
