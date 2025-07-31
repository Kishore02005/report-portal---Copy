import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import UserNavbar from "../components/UserNavbar";
import AdminSidebar from "../components/AdminSidebar";

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  display: flex;
  flex-direction: column;
  padding-top: ${props => props.isAdminView ? '0' : '70px'};
  margin-left: ${props => props.isAdminView ? '250px' : '0'};
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 30px;
  text-align: center;
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #64748b;
  
  &:hover {
    background: #f8fafc;
    border-color: #3b82f6;
    color: #3b82f6;
  }
  
  @media (max-width: 768px) {
    position: static;
    margin-bottom: 20px;
    align-self: flex-start;
  }
`;

const Heading = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
  color: #1e293b;
  font-weight: 700;
  letter-spacing: -0.025em;
`;

const Subtext = styled.p`
  color: #64748b;
  margin-bottom: 3rem;
  font-size: 1rem;
  line-height: 1.6;
`;

const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  justify-content: center;
  align-items: stretch;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

const CertificateCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  height: fit-content;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    border-radius: 16px 16px 0 0;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
    border-color: #3b82f6;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CertificateTitle = styled.h3`
  font-size: 1.25rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.025em;
`;

const CertificateFrame = styled.iframe`
  width: 100%;
  height: 240px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  border: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    height: 220px;
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  border: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    height: 220px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  width: 100%;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  cursor: pointer;
`;

const ViewButton = styled(ActionButton)`
  background: #f8fafc;
  color: #374151;
  border: 1px solid #e2e8f0;
  
  &:hover {
    background: #f1f5f9;
    border-color: #3b82f6;
    color: #3b82f6;
    text-decoration: none;
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.875rem 1.5rem;
  background: #3b82f6;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  margin-top: 1.5rem;
  
  &:hover {
    background: #2563eb;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    text-decoration: none;
    color: white;
  }
`;

const Placeholder = styled.div`
  padding: 4rem 2.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  line-height: 1.6;
`;

const ErrorText = styled.p`
  color: #dc2626;
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
  background: #fef2f2;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #fecaca;
  line-height: 1.5;
`;

const AchievementPage = () => {
  const { user, loading: authLoading } = useAuth();
  const { userEmail } = useParams();
  const navigate = useNavigate();
  const [certificates, setCertificates] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState("");
  const [targetUserData, setTargetUserData] = useState(null);
  const [participantId, setParticipantId] = useState(null);
  
  const isAdminView = !!userEmail;
  const targetEmail = userEmail || user?.email;

  const convertGoogleDriveUrl = (url) => {
    if (url.includes('drive.google.com/file/d/')) {
      const fileId = url.match(/\/d\/(.*?)\//)?.[1];
      return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
    }
    return url;
  };

  const isGoogleDriveUrl = (url) => {
    return url.includes('drive.google.com/file/d/');
  };

  const getDownloadUrl = (url) => {
    if (isGoogleDriveUrl(url)) {
      const fileId = url.match(/\/d\/(.*?)\//)?.[1];
      return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : url;
    }
    return url;
  };

  useEffect(() => {
    const fetchCertificates = async () => {
      if (authLoading || !targetEmail) {
        setPageLoading(false);
        return;
      }

      setPageLoading(true);
      setError("");

      const userEmailLowerCase = targetEmail.toLowerCase();

      try {
        const userDocRef = doc(db, "Users", userEmailLowerCase);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setTargetUserData(userData);
          setParticipantId(userDocSnap.id);
          const fetchedCerts = userData.certificates || [];
          console.log("Fetched certificates:", fetchedCerts); // Debug log
          setCertificates(fetchedCerts);

          if (fetchedCerts.length === 0) {
            setError("No achievements yet.");
          }
        } else {
          setError("User data not found for achievements.");
        }

      } catch (err) {
        console.error("Error fetching certificates:", err);
        setError("Failed to load achievements. Please try again.");
      } finally {
        setPageLoading(false);
      }
    };

    fetchCertificates();
  }, [authLoading, targetEmail]);

  return (
    <PageContainer isAdminView={isAdminView}>
      {isAdminView ? <AdminSidebar /> : <UserNavbar />}
      <ContentWrapper>
        {isAdminView && (
          <BackButton onClick={() => navigate(`/participants/${participantId}`)}>
            ← Back to Participant
          </BackButton>
        )}
        <Heading>{isAdminView ? `${targetUserData?.username || 'User'}'s Achievements` : 'Your Achievements'}</Heading>
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
                {isGoogleDriveUrl(certUrl) ? (
                  <CertificateFrame
                    src={convertGoogleDriveUrl(certUrl)}
                    title={`Certificate ${index + 1}`}
                    onClick={() => window.open(certUrl, '_blank')}
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <CertificateImage
                    src={certUrl}
                    alt={`Certificate ${index + 1}`}
                    onClick={() => window.open(certUrl, '_blank')}
                    style={{ cursor: 'pointer' }}
                    onError={(e) => { 
                      console.log("Failed to load certificate:", certUrl);
                      e.target.onerror = null; 
                      e.target.src="https://placehold.co/300x200/E0E0E0/555555?text=Certificate+Not+Available"; 
                    }}
                  />
                )}
                <DownloadButton
                  href={getDownloadUrl(certUrl)}
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
