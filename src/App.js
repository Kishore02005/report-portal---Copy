// src/App.js
import React from "react";
import { useAuth } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import styled from "styled-components";
import Loader from "./components/Loader";

const AppContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #f7f9fb;
  min-height: 100vh;
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
