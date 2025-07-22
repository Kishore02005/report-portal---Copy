import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import styled from "styled-components";
import Loader from "../components/Loader";
import AdminSidebar from "../components/AdminSidebar"; // Import AdminSidebar directly (assuming admin views this)

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fc;
  font-family: "Poppins", sans-serif;
  display: flex;
  
  /* Adjust margin-left to account for fixed Sidebar */
  margin-left: 250px; /* Sidebar width */
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
`;

const Header = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
`;

const InfoCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 25px 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Field = styled.p`
  font-size: 1rem;
  margin: 10px 0;
  width: 100%;
  text-align: left;
  span {
    font-weight: 600;
    color: #555;
    display: inline-block;
    min-width: 120px;
  }
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 4px solid #e0e0e0;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #3f51b5;
  margin-top: 40px;
  margin-bottom: 20px;
  width: 100%;
  text-align: left;
`;

const ReportLink = styled.a`
  color: #5c6bc0;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const BackButton = styled.button`
  margin-top: 30px;
  background-color: #5c6bc0;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #3f51b5;
  }
`;

const ErrorText = styled.p`
  color: #d32f2f;
  text-align: center;
  margin-top: 30px;
  font-size: 1rem;
`;

const ParticipantDetails = () => {
  const { participantId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchParticipantData = async () => {
      setLoading(true);
      setError("");

      if (!participantId) {
        setError("No participant ID provided.");
        setLoading(false);
        return;
      }

      try {
        const userDocRef = doc(db, "Users", participantId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserData({ id: userDocSnap.id, ...userDocSnap.data() });
        } else {
          setError("Participant data not found.");
          setUserData(null);
        }
      } catch (err) {
        console.error("Error fetching participant details:", err);
        setError("Failed to load participant details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (participantId) {
      fetchParticipantData();
    }
  }, [participantId]);

  return (
    <PageContainer>
      <AdminSidebar /> {/* Render AdminSidebar directly */}
      <ContentWrapper>
        <Header>Participant Details</Header>

        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorText>{error}</ErrorText>
        ) : !userData ? (
          <ErrorText>Participant data not found.</ErrorText>
        ) : (
          <InfoCard>
            <ProfileImage
              src={userData.photoURL || "https://i.pravatar.cc/150"}
              alt="Profile"
            />
            <Field>
              <span>Name:</span> {userData.username || "N/A"}
            </Field>
            <Field>
              <span>Email:</span> {userData.email || "N/A"}
            </Field>
            <Field>
              <span>Organization:</span> {userData.organizationId || "Independent"}
            </Field>
            <Field>
              <span>Role:</span> {userData.role || "N/A"}
            </Field>
            <Field>
              <span>Enrolled In:</span> {userData.labName || "N/A"}
            </Field>
            <Field>
              <span>Enrolment Date:</span> {userData.enrolment || "N/A"}
            </Field>
            <Field>
              <span>Completion:</span> {userData.completion || 0}%
            </Field>
            {userData.reportUrl && (
              <Field>
                <span>Report:</span>{" "}
                <ReportLink href={userData.reportUrl} target="_blank" rel="noopener noreferrer">
                  View Report
                </ReportLink>
              </Field>
            )}
            {userData.certificates && userData.certificates.length > 0 && (
              <Field>
                <span>Certificates:</span>{" "}
                {userData.certificates.map((certUrl, index) => (
                  <ReportLink key={index} href={certUrl} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '5px' }}>
                    Cert {index + 1}
                  </ReportLink>
                ))}
              </Field>
            )}
            {userData.courses && userData.courses.length > 0 && (
              <Field>
                <span>Courses:</span>{" "}
                {userData.courses.join(", ") || "N/A"}
              </Field>
            )}

            <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
          </InfoCard>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default ParticipantDetails;
