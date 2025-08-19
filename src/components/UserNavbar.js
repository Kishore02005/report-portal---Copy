// src/components/UserNavbar.js
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/Aaruchudar Final Logo (1).png";

// Fallback logo URL in case import fails
const logoFallback = "/logo192.png";

const getPageColors = (pathname) => {
  switch (pathname) {
    case '/dashboard':
      return {
        primary: '#667eea',
        secondary: '#764ba2',
        accent: '#f093fb'
      };
    case '/achievement':
      return {
        primary: '#f093fb',
        secondary: '#f5576c',
        accent: '#4facfe'
      };
    case '/courses-user':
      return {
        primary: '#4facfe',
        secondary: '#00f2fe',
        accent: '#43e97b'
      };
    case '/hilabs-user':
      return {
        primary: '#43e97b',
        secondary: '#38f9d7',
        accent: '#667eea'
      };
    default:
      return {
        primary: '#667eea',
        secondary: '#764ba2',
        accent: '#f093fb'
      };
  }
};

const NavbarContainer = styled.nav`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  color: white;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Inter", "Segoe UI", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999999;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 64px;
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    padding: 0 24px;
  }
  
  @media (max-width: 768px) {
    padding: 0 16px;
    height: 56px;
  }
`;

const BrandSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  
  @media (max-width: 768px) {
    height: 32px;
  }
  
  &:error {
    content: url(${logoFallback});
  }
`;

const Brand = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 1024px) {
    font-size: 1.375rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  padding: 8px;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const DesktopNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavLinks = styled.div`
  display: none;
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  z-index: 999998;
  gap: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
  }
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 8px 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  
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
    color: white;
    background: rgba(255, 255, 255, 0.1);
    text-decoration: none;
    transform: translateY(-1px);
    
    &::before {
      left: 100%;
    }
  }
  
  &.active {
    color: white;
    background: rgba(255, 255, 255, 0.15);
    font-weight: 600;
  }
  
  @media (max-width: 1024px) {
    font-size: 0.85rem;
    padding: 7px 14px;
  }
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
    white-space: normal;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 10px 14px;
  }
  
  @media (max-width: 320px) {
    font-size: 0.8rem;
    padding: 8px 12px;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 24px;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    padding-left: 0;
    border-left: none;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    justify-content: center;
  }
`;





const LogoutButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 8px 16px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
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
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
    
    &::before {
      left: 100%;
    }
  }
`;

const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999997;
  
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
  }
`;

const UserNavbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const colors = getPageColors(location.pathname);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const isActive = (path) => location.pathname === path;



  return (
    <>
      <NavbarContainer>
        <BrandSection>
          <Logo 
            src={logo} 
            alt="Aaruchudar Logo" 
            onError={(e) => { e.target.src = logoFallback; }}
          />
          <Brand>Aaruchudar</Brand>
        </BrandSection>
        
        {user && (
          <>
            <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
              ☰
            </MobileMenuButton>
            
            <DesktopNavLinks>
              <NavLink to="/dashboard" className={isActive('/dashboard') ? 'active' : ''}>Dashboard</NavLink>
              <NavLink to="/achievement" className={isActive('/achievement') ? 'active' : ''}>Achievements</NavLink>
              <NavLink to="/courses-user" className={isActive('/courses-user') ? 'active' : ''}>Courses</NavLink>
              <NavLink to="/hilabs-user" className={isActive('/hilabs-user') ? 'active' : ''}>Labs</NavLink>
              <ProfileSection>
                <LogoutButton onClick={handleLogout}>Sign Out</LogoutButton>
              </ProfileSection>
            </DesktopNavLinks>
          </>
        )}
      </NavbarContainer>
      
      <MobileNavLinks $isOpen={isOpen}>
        <NavLink to="/dashboard" className={isActive('/dashboard') ? 'active' : ''} onClick={() => setIsOpen(false)}>Dashboard</NavLink>
        <NavLink to="/achievement" className={isActive('/achievement') ? 'active' : ''} onClick={() => setIsOpen(false)}>Achievements</NavLink>
        <NavLink to="/courses-user" className={isActive('/courses-user') ? 'active' : ''} onClick={() => setIsOpen(false)}>Courses</NavLink>
        <NavLink to="/hilabs-user" className={isActive('/hilabs-user') ? 'active' : ''} onClick={() => setIsOpen(false)}>Labs</NavLink>
        <ProfileSection>
          <LogoutButton onClick={handleLogout}>Sign Out</LogoutButton>
        </ProfileSection>
      </MobileNavLinks>
      
      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </>
  );
};

export default UserNavbar;