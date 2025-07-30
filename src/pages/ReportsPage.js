import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f8fafc;
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
  background: #3b82f6;
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
  }
`;

const ReportsPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ConstructionIcon>🚧</ConstructionIcon>
      <Title>Reports Page</Title>
      <Message>
        This page is currently under construction. We're working hard to bring you comprehensive reporting features soon!
      </Message>
      <BackButton onClick={() => navigate(-1)}>Go Back</BackButton>
    </Container>
  );
};

export default ReportsPage;