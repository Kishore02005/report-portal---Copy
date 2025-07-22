// src/pages/UserHiLabsPage.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebaseConfig";
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";
import UserNavbar from "../components/UserNavbar"; // Import UserNavbar directly

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fc;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  padding-top: 70px; /* Adjust padding-top to account for fixed Navbar */
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 30px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 30px;
  text-align: center;
`;

const LabCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    transform: translateY(-3px);
  }
`;

const LabName = styled.h3`
  font-size: 1.1rem;
  color: #3f51b5;
  margin-bottom: 10px;
`;

const LabDetail = styled.p`
  font-size: 0.95rem;
  margin: 4px 0;
  color: #555;
  strong {
    color: #2e3a50;
  }
`;

const ErrorText = styled.p`
  color: #d32f2f;
  text-align: center;
  margin-top: 30px;
  font-size: 1rem;
`;

const Placeholder = styled.div`
  padding: 40px;
  background: #f9f9f9;
  border-radius: 14px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.05);
  color: #999;
  font-size: 1.1rem;
  text-align: center;
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

          if (labName) {
            const coursesRef = collection(db, "Courses");
            const q = query(coursesRef, where("name", "==", labName), where("category", "==", "HI Lab"));
            const labSnap = await getDocs(q);

            if (!labSnap.empty) {
              setUserLab({ id: labSnap.docs[0].id, ...labSnap.docs[0].data() });
            } else {
              setError(`Details for "${labName}" HI Lab not found.`);
            }
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
              <LabDetail><strong>Category:</strong> {userLab.category || "N/A"}</LabDetail>
              <LabDetail><strong>Duration:</strong> {userLab.duration || "N/A"}</LabDetail>
              <LabDetail><strong>Status:</strong> {userLab.active ? "Active" : "Inactive"}</LabDetail>
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
