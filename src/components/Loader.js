import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderCircle = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #5c6bc0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 50px auto;
`;

const Loader = () => <LoaderCircle />;

export default Loader;
