import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  padding: 20px;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 3rem 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
`;

const Icon = styled.div`
  font-size: 4rem;
  color: #dc2626;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
`;

const PrimaryButton = styled(Button)`
  background: #3b82f6;
  color: white;
  
  &:hover {
    background: #2563eb;
  }
`;

const SecondaryButton = styled(Button)`
  background: #f1f5f9;
  color: #475569;
  border: 1px solid #e2e8f0;
  
  &:hover {
    background: #e2e8f0;
  }
`;

const UnauthorizedAccess = () => {
  const navigate = useNavigate();
  const { user, role } = useAuth();

  const getRoleDisplayName = (userRole) => {
    const roleNames = {
      user: "Student",
      admin: "Administrator", 
      superadmin: "Super Administrator"
    };
    return roleNames[userRole] || userRole;
  };

  const getCorrectDashboard = () => {
    switch (role) {
      case "admin":
        return "/admin";
      case "superadmin":
        return "/superadmin";
      case "user":
      default:
        return "/dashboard";
    }
  };

  const handleGoToDashboard = () => {
    navigate(getCorrectDashboard());
  };

  const handleGoToLogin = () => {
    navigate("/");
  };

  return (
    <Container>
      <Card>
        <Icon>🚫</Icon>
        <Title>Access Denied</Title>
        <Message>
          You don't have permission to access this page. Your account is registered as a{" "}
          <strong>{getRoleDisplayName(role)}</strong> and you're trying to access a restricted area.
          {!user && " Please log in with the appropriate credentials."}
        </Message>
        <ButtonGroup>
          {user ? (
            <PrimaryButton onClick={handleGoToDashboard}>
              Go to My Dashboard
            </PrimaryButton>
          ) : (
            <PrimaryButton onClick={handleGoToLogin}>
              Go to Login
            </PrimaryButton>
          )}
          <SecondaryButton onClick={() => window.history.back()}>
            Go Back
          </SecondaryButton>
        </ButtonGroup>
      </Card>
    </Container>
  );
};

export default UnauthorizedAccess;