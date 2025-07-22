import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackButton = styled.button`
  background-color: #5c6bc0;
  color: white;
  font-weight: 600;
  padding: 12px 15px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3f51b5;
    transform: scale(1.02);
    box-shadow: 0 5px 12px rgba(63, 81, 181, 0.3);
  }
`;

const ReportsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Reports Page</h1>
      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
    </div>
  );
};

export default ReportsPage;