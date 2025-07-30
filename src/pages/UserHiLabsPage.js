// src/pages/UserHiLabsPage.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";
import UserNavbar from "../components/UserNavbar";

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  padding-top: 70px;
  
  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: 700;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;

const LabCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 8px;
  }
`;

const LabName = styled.h3`
  font-size: 1.5rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  width: 100%;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 1.375rem;
    margin-bottom: 1.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

const LabDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f5f9;
  font-size: 1rem;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 1rem 0;
    font-size: 0.9rem;
  }
`;

const LabLabel = styled.span`
  color: #64748b;
  font-weight: 500;
  font-size: 1rem;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const LabValue = styled.span`
  color: #1e293b;
  font-weight: 600;
  background: #f1f5f9;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.375rem 0.75rem;
  }
`;

const ErrorText = styled.p`
  color: #dc2626;
  text-align: center;
  margin-top: 2rem;
  font-size: 1.125rem;
  background: #fef2f2;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #fecaca;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }
`;

const Placeholder = styled.div`
  padding: 3rem 2.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  color: #64748b;
  font-size: 1.125rem;
  text-align: center;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    font-size: 0.9rem;
    border-radius: 8px;
  }
`;

const UserHiLabsPage = () => {
  const { user, loading: authLoading } = useAuth();
  const [userLab, setUserLab] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState("");



  useEffect(() => {
    const fetchUserLab = async () => {
      if (authLoading || !user?.email) {
        setPageLoading(false);
        return;
      }

      setPageLoading(true);
      setError("");

      const userEmailLowerCase = user.email.toLowerCase();

      try {
        const userDocRef = doc(db, "Users", userEmailLowerCase);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          const labName = userData.labName;
          const enrolledDate = userData.enrolment;

          if (labName) {
            setUserLab({
              name: labName,
              enrolledDate: enrolledDate,
              category: "HI Lab",
              duration: "N/A",
              active: true
            });
          } else {
            setError("You are not currently enrolled in any HI Labs.");
          }
        } else {
          setError("User data not found.");
        }

      } catch (err) {
        console.error("Error fetching user HI Lab:", err);
        setError("Failed to load your HI Labs. Please try again.");
      } finally {
        setPageLoading(false);
      }
    };

    fetchUserLab();
  }, [user, authLoading]);

  return (
    <PageContainer>
      <UserNavbar />
      <ContentWrapper>
        {authLoading || pageLoading ? (
          <Loader />
        ) : error ? (
          <ErrorText>{error}</ErrorText>
        ) : userLab ? (
          <>
            <Title>Your HI Labs</Title>
            <LabCard>
              <LabName>{userLab.name || "N/A"}</LabName>
              <LabDetail>
                <LabLabel>Enrolled Date:</LabLabel>
                <LabValue>{userLab.enrolledDate ? new Date(userLab.enrolledDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "N/A"}</LabValue>
              </LabDetail>
              <LabDetail>
                <LabLabel>Category:</LabLabel>
                <LabValue>{userLab.category || "N/A"}</LabValue>
              </LabDetail>
              <LabDetail>
                <LabLabel>Duration:</LabLabel>
                <LabValue>{userLab.duration || "N/A"}</LabValue>
              </LabDetail>
              <LabDetail>
                <LabLabel>Status:</LabLabel>
                <LabValue>{userLab.active ? "Active" : "Inactive"}</LabValue>
              </LabDetail>
            </LabCard>
          </>
        ) : (
          <Placeholder>You are not currently enrolled in any HI Labs.</Placeholder>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default UserHiLabsPage;