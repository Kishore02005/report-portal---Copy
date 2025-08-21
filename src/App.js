// src/App.js
import React from "react";
import { useAuth } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import styled from "styled-components";
import Loader from "./components/Loader";

const AppContainer = styled.div`
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <AppContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Loader />
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      <AppRoutes />
    </AppContainer>
  );
}

export default App;
