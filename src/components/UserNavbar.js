// src/components/UserNavbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/Aaruchudar Final Logo (1).png";

// Fallback logo URL in case import fails
const logoFallback = "/logo192.png";

const NavbarContainer = styled.nav`
  background: #ffffff;
  color: #1e293b;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #e2e8f0;
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
  color: #1e293b;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #1e293b;
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
  background: white;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 999998;
  gap: 16px;
  
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
  }
`;

const NavLink = styled(Link)`
  color: #64748b;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #3b82f6;
    background: #f8fafc;
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    text-align: center;
    border: 1px solid #e2e8f0;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 24px;
  border-left: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    padding-left: 0;
    border-left: none;
    padding-top: 16px;
    border-top: 1px solid #e2e8f0;
    justify-content: center;
  }
`;





const LogoutButton = styled.button`
  background: #f8fafc;
  color: #64748b;
  border: 1px solid #e2e8f0;
  padding: 8px 16px;
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
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };



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
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/achievement">Achievements</NavLink>
              <NavLink to="/courses-user">Courses</NavLink>
              <NavLink to="/hilabs-user">Labs</NavLink>
              <ProfileSection>
                <LogoutButton onClick={handleLogout}>Sign Out</LogoutButton>
              </ProfileSection>
            </DesktopNavLinks>
          </>
        )}
      </NavbarContainer>
      
      <MobileNavLinks $isOpen={isOpen}>
        <NavLink to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</NavLink>
        <NavLink to="/achievement" onClick={() => setIsOpen(false)}>Achievements</NavLink>
        <NavLink to="/courses-user" onClick={() => setIsOpen(false)}>Courses</NavLink>
        <NavLink to="/hilabs-user" onClick={() => setIsOpen(false)}>Labs</NavLink>
        <ProfileSection>
          <LogoutButton onClick={handleLogout}>Sign Out</LogoutButton>
        </ProfileSection>
      </MobileNavLinks>
      
      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </>
  );
};

export default UserNavbar;