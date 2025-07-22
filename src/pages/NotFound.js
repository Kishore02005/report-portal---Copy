import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(135deg, #e3f2fd, #fce4ec);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  text-align: center;
  padding: 20px;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  margin-bottom: 10px;
  color: #3f51b5;
`;

const Message = styled.p`
  font-size: 1.4rem;
  color: #444;
  margin-bottom: 20px;
`;

const BackButton = styled(Link)`
  padding: 12px 24px;
  font-size: 1rem;
  color: white;
  background-color: #5c6bc0;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: #3f51b5;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <ErrorCode>404</ErrorCode>
      <Message>Oops! The page you're looking for doesn't exist.</Message>
      <BackButton to="/">Go to Home</BackButton>
    </Container>
  );
};

export default NotFound;
