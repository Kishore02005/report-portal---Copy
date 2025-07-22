// src/components/UserNavbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/Aaruchudar Final Logo (1).png";

// Styled Components
const NavbarContainer = styled.nav`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
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
  z-index: 1001;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e2e8f0;
  height: 64px;
  box-sizing: border-box;
`;

const BrandSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const Brand = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
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
  
  &.active {
    color: #3b82f6;
    background: #eff6ff;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 24px;
  border-left: 1px solid #e2e8f0;
`;

const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f1f5f9;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserName = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.2;
`;

const UserRole = styled.span`
  font-size: 0.75rem;
  color: #64748b;
  line-height: 1.2;
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

const UserNavbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const profileImg = user?.photoURL || "https://i.pravatar.cc/150?img=3";
  const userName = user?.displayName || user?.email || "Guest";

  return (
    <NavbarContainer>
      <BrandSection>
        <Logo src={logo} alt="Aaruchudar Logo" />
        <Brand>Aaruchudar</Brand>
      </BrandSection>
      {user && (
        <NavLinks>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/achievement">Achievements</NavLink>
          <NavLink to="/courses-user">Courses</NavLink>
          <NavLink to="/hilabs-user">Labs</NavLink>

          <ProfileSection>
            <ProfileImage src={profileImg} alt={`${userName}'s Profile`} />
            <UserInfo>
              <UserName>{userName.split('@')[0] || userName}</UserName>
              <UserRole>Student</UserRole>
            </UserInfo>
            <LogoutButton onClick={handleLogout}>Sign Out</LogoutButton>
          </ProfileSection>
        </NavLinks>
      )}
    </NavbarContainer>
  );
};

export default UserNavbar;
