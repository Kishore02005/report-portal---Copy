    import React from "react";
    import styled from "styled-components";
    import { useAuth } from "../context/AuthContext";
    import Sidebar from "../components/Sidebar";
    import Navbar from "../components/Navbar";
    import Loader from "../components/Loader";

    const LayoutContainer = styled.div`
      display: flex;
      min-height: 100vh;
      background: #f8f9fc;
      font-family: "Poppins", sans-serif;
      border: 5px solid purple;
    `;

    const Content = styled.div`
      flex: 1;
      padding: 20px 30px;
      margin-left: ${({ hasSidebar }) => (hasSidebar ? "250px" : "0")};
      transition: margin-left 0.3s ease-in-out;
      padding-top: ${({ hasSidebar }) => (hasSidebar ? "20px" : "70px")}; 
      box-sizing: border-box;
      position: relative; 
      z-index: 1; 
    `;

    const DashboardLayout = ({ children }) => {
      const { role, loading: authLoading } = useAuth();
      const hasSidebar = role === "admin" || role === "superadmin";

      console.log("DashboardLayout: authLoading =", authLoading);
      console.log("DashboardLayout: role =", role);
      console.log("DashboardLayout: hasSidebar =", hasSidebar);

      if (authLoading) {
        return (
          <LayoutContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Loader />
          </LayoutContainer>
        );
      }

      return (
        <LayoutContainer>
          {hasSidebar && <Sidebar />}
          <Content hasSidebar={hasSidebar}>
            {!hasSidebar && <Navbar />}
            {children}
          </Content>
        </LayoutContainer>
      );
    };

    export default DashboardLayout;
    