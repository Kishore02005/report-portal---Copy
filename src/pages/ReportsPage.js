import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styled from "styled-components";
import AdminSidebar from "../components/AdminSidebar";
import SuperAdminSidebar from "../components/SuperAdminSidebar";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  margin-left: 250px;
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 40px;
  text-align: center;
`;

const ConstructionIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 16px;
  font-weight: 700;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 32px;
  max-width: 500px;
  line-height: 1.6;
`;

const BackButton = styled.button`
  background: #6b7280;
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #4b5563;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(107, 114, 128, 0.3);
  }
`;

const ReportsPage = () => {
  const navigate = useNavigate();
  const { role } = useAuth();

  const renderSidebar = () => {
    if (role === 'superadmin') return <SuperAdminSidebar />;
    if (role === 'admin') return <AdminSidebar />;
    return null;
  };

  return (
    <PageContainer>
      {renderSidebar()}
      <Container>
        <ConstructionIcon>🚧</ConstructionIcon>
        <Title>Reports Page</Title>
        <Message>
          This page is currently under construction. We're working hard to bring you comprehensive reporting features soon!
        </Message>
        <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
      </Container>
    </PageContainer>
  );
};

export default ReportsPage;