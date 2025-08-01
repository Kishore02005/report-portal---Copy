import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useAuth } from "../context/AuthContext";

// Styled Components
const NavbarContainer = styled.nav`
  background: #2e3a59;
  color: white;
  padding: 12px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 60px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    height: 56px;
  }
`;

const Brand = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  
  @media (max-width: 768px) {
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  
  &:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileImage = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
  
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #ffffffcc;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const LogoutButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  margin-left: 12px;
  font-size: 14px;

  &:hover {
    background-color: #d32f2f;
  }
  
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 12px;
    margin-left: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 6px 8px;
  }
`;

const Navbar = () => {
  const { user, role } = useAuth();
  const navigate = useNavigate();

  // console.log("Navbar: user =", user ? user.email : "null");
  // console.log("Navbar: role =", role);

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
      <Brand>HI Platform</Brand>
      {user ? (
        <NavLinks>
          {role === "user" && (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/achievement">Achievement</NavLink>
              <NavLink to="/courses-user">Courses</NavLink>
              <NavLink to="/hilabs-user">HI Labs</NavLink>
            </>
          )}

          {role === "admin" && (
            <>
              <NavLink to="/admin">Admin Dashboard</NavLink>
              <NavLink to="/participants">Participants</NavLink>
            </>
          )}

          {role === "superadmin" && (
            <>
              <NavLink to="/superadmin">Super Admin</NavLink>
            </>
          )}

          <ProfileSection>
            <ProfileImage src={profileImg} alt={`${userName}'s Profile`} />
            <UserName>{userName}</UserName>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </ProfileSection>
        </NavLinks>
      ) : (
        <NavLinks>
        </NavLinks>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
