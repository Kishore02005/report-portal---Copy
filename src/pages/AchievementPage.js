import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
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
  padding: 30px;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
  color: #2c3e50;
`;

const Subtext = styled.p`
  color: #666;
  margin-bottom: 30px;
`;

const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  justify-content: center;
  align-items: flex-start;
`;

const CertificateCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CertificateTitle = styled.h3`
  font-size: 1.1rem;
  color: #3f51b5;
  margin-bottom: 15px;
`;

const CertificateImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background: #5c6bc0;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3f51b5;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(92, 107, 192, 0.4);
  }
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

const ErrorText = styled.p`
  color: #d32f2f;
  text-align: center;
  margin-top: 30px;
  font-size: 1rem;
`;

const AchievementPage = () => {
  const { user, loading: authLoading } = useAuth();
  const [certificates, setCertificates] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCertificates = async () => {
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
          const fetchedCerts = userData.certificates || [];
          setCertificates(fetchedCerts);

          if (fetchedCerts.length === 0) {
            setError("No achievements yet.");
          }
        } else {
          setError("User data not found for achievements.");
        }

      } catch (err) {
        console.error("Error fetching certificates:", err);
        setError("Failed to load your achievements. Please try again.");
      } finally {
        setPageLoading(false);
      }
    };

    fetchCertificates();
  }, [user, authLoading]);

  return (
    <PageContainer>
      <UserNavbar /> {/* Render UserNavbar directly */}
      <ContentWrapper>
        <Heading>Your Achievements</Heading>
        <Subtext>
          Below are the certificates for courses and labs you have successfully completed.
        </Subtext>

        {authLoading || pageLoading ? (
          <Loader />
        ) : error ? (
          <ErrorText>{error}</ErrorText>
        ) : certificates.length > 0 ? (
          <CertificateGrid>
            {certificates.map((certUrl, index) => (
              <CertificateCard key={index}>
                <CertificateTitle>Certificate {index + 1}</CertificateTitle>
                <a href={certUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`https://placehold.co/300x200/E0E0E0/555555?text=Certificate+Preview`}
                    alt={`Certificate ${index + 1}`}
                    style={{ width: '100%', borderRadius: '8px', marginBottom: '15px' }}
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/E0E0E0/555555?text=No+Preview"; }}
                  />
                </a>
                <DownloadButton
                  href={certUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Download Certificate
                </DownloadButton>
              </CertificateCard>
            ))}
          </CertificateGrid>
        ) : (
          <Placeholder>No achievements yet.</Placeholder>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default AchievementPage;
