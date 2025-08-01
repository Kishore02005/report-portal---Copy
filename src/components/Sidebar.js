    import React from "react";
    import styled from "styled-components";
    import { Link, useNavigate } from "react-router-dom";
    import { signOut } from "firebase/auth";
    import { auth } from "../firebaseConfig";
    import { useAuth } from "../context/AuthContext";

    const SidebarContainer = styled.div`
      width: 250px;
      height: 100vh;
      background-color: #2e3a59;
      color: white;
      display: flex;
      flex-direction: column;
      padding: 30px 20px;
      font-family: "Poppins", sans-serif;
      position: fixed;
      top: 0;
      left: 0;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      transition: transform 0.3s ease;
      
      @media (max-width: 768px) {
        width: 280px;
        transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
        padding: 20px;
      }
    `;

    const Logo = styled(Link)`
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 40px;
      color: white;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        text-decoration: none;
        opacity: 0.9;
      }
    `;

    const SidebarLink = styled(Link)`
      color: white;
      text-decoration: none;
      padding: 12px 10px;
      font-size: 16px;
      border-radius: 8px;
      margin-bottom: 8px;
      transition: background 0.3s;
      display: flex;
      align-items: center;

      &:hover {
        background-color: #3f4f77;
      }
    `;

    const ProfileSection = styled.div`
      margin-top: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding-top: 20px;
      border-top: 1px solid #444;
    `;

    const ProfileImage = styled.img`
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #5c6bc0;
    `;

    const UsernameContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    `;

    const Username = styled.span`
      font-size: 15px;
      color: #ddd;
      text-transform: capitalize;
      font-weight: 500;
      margin-bottom: 5px;
    `;

    const LogoutButton = styled.button`
      padding: 8px 14px;
      background-color: #f44336;
      color: white;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      width: 100%;
      transition: background 0.3s;

      &:hover {
        background-color: #d32f2f;
      }
    `;

    const MobileHeader = styled.div`
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      background: #2e3a59;
      z-index: 999;
      padding: 0 16px;
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
      color: white;
      cursor: pointer;
      padding: 8px;
    `;

    const MobileBrand = styled.div`
      color: white;
      font-size: 1.2rem;
      font-weight: 600;
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

    const Sidebar = () => {
      const { user, role } = useAuth();
      const navigate = useNavigate();
      const [isOpen, setIsOpen] = React.useState(false);

      console.log("Sidebar: user =", user);
      console.log("Sidebar: role =", role);

      const handleLogout = async () => {
        try {
          await signOut(auth);
          navigate("/");
        } catch (error) {
          console.error("Logout failed", error);
        }
      };

      const profileImg = user?.photoURL || "https://i.pravatar.cc/150?img=5";
      const userName = user?.displayName || user?.email?.split("@")[0] || "User";

      let logoDashboardLink = "/";
      if (role === "admin") {
        logoDashboardLink = "/admin";
      } else if (role === "superadmin") {
        logoDashboardLink = "/superadmin";
      }

      if (role !== "admin" && role !== "superadmin") {
        console.log("Sidebar: Not rendering, role is not admin or superadmin.");
        return null;
      }

      return (
        <>
          <MobileHeader>
            <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
              ☰
            </MobileMenuButton>
            <MobileBrand>
              HI {role === "superadmin" ? "SuperAdmin" : "Admin"}
            </MobileBrand>
            <div style={{ width: '24px' }}></div>
          </MobileHeader>
          
          <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
          
        <SidebarContainer $isOpen={isOpen}>
          <Logo to={logoDashboardLink}>
            HI {role === "superadmin" ? "SuperAdmin" : "Admin"}
          </Logo>

          {role === "admin" && (
            <>
              <SidebarLink to="/admin">Dashboard</SidebarLink>
              <SidebarLink to="/participants">Participants</SidebarLink>
            </>
          )}

          {role === "superadmin" && (
            <>
              <SidebarLink to="/superadmin">Dashboard</SidebarLink>
            </>
          )}

          <ProfileSection>
            <ProfileImage src={profileImg} alt={`${userName}'s Profile`} />
            <UsernameContainer>
              <Username>{userName}</Username>
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </UsernameContainer>
          </ProfileSection>
        </SidebarContainer>
        </>
      );
    };

    export default Sidebar;
    