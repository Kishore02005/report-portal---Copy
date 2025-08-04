import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import AdminSidebar from "../components/AdminSidebar";
import { FiAward, FiArrowLeft, FiDownload, FiExternalLink, FiAlertCircle } from 'react-icons/fi';

/* -------------------- ANIMATIONS -------------------- */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

/* -------------------- STYLED COMPONENTS -------------------- */
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f8fafc;
  display: flex;
  margin-left: ${props => props.isAdminView ? '250px' : '0'};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  width: 100%;
  padding: 0 2rem 3rem 2rem;
  padding-top: ${props => props.isAdminView ? '2rem' : 'calc(70px + 2rem)'};
  animation: ${fadeIn} 0.5s ease-out;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 0 1rem 2rem 1rem;
    padding-top: calc(70px + 1rem);
  }
  
  @media (max-width: 480px) {
    padding: 0 0.75rem 1.5rem 0.75rem;
    padding-top: calc(70px + 0.75rem);
  }
`;

const Header = styled.header`
  max-width: 800px;
  margin: 0 auto 3rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    margin: 0 auto 2rem auto;
  }
  
  @media (max-width: 480px) {
    margin: 0 auto 1.5rem auto;
  }
`;

const BackButton = styled.button`
  background: #6b7280;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 2rem;
  align-self: flex-start;
  
  &:hover {
    background: #4b5563;
    transform: translateX(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    border-radius: 6px;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.04em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    color: #3b82f6;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    gap: 0.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
    gap: 0.5rem;
    flex-direction: column;
  }
`;

const PageSubtitle = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0 0.5rem;
  }
`;

// MODIFIED COMPONENT
const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;
  justify-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;



const CertificateCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 300px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

  }
  
  @media (max-width: 480px) {
    max-width: none;
  }
`;

const PreviewContainer = styled.div`
  width: 100%;
  background-color: #f8fafc;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  position: relative;
  
  @media (max-width: 768px) {
    min-height: 120px;
  }
`;

const DownloadOverlay = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 10;
`;

const DownloadButtonOverlay = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  color: #3b82f6;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: rgba(59, 130, 246, 0.1);
    transform: scale(1.1);
    color: #1d4ed8;
  }
  
  svg {
    font-size: 1.125rem;
  }
`;

const CertificatePreview = styled.iframe`
  width: 100%;
  border: none;
  height: 150px;
  
  @media (max-width: 768px) {
    height: 120px;
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  max-height: 180px;
  
  @media (max-width: 768px) {
    max-height: 150px;
  }
`;

// MODIFIED COMPONENT
const CardContent = styled.div`
  padding: 0.75rem;
  text-align: left;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

// MODIFIED COMPONENT
const CertificateTitle = styled.h3`
  font-size: 0.875rem;
  color: #1e293b;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;
  flex: 1;
`;



const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.75rem;
  transition: all 0.2s ease;
  cursor: pointer;
  color: #3b82f6;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  flex-shrink: 0;

  &:hover {
    background: #e2e8f0;
    color: #1e40af;
    transform: translateY(-1px);
  }
`;

const EmptyState = styled.div`
  margin-top: 2rem;
  padding: 3rem 2rem;
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 3rem;
    color: #cbd5e1;
  }
  h3 {
    font-size: 1.25rem;
    color: #1e293b;
    margin: 0;
  }
  p {
    color: #64748b;
    max-width: 400px;
    margin: 0;
  }
`;

const ErrorText = styled(EmptyState)`
  border-color: #fecaca;
  background: #fef2f2;
  svg { color: #ef4444; }
  h3 { color: #b91c1c; }
  p { color: #b91c1c; }
`;

/* -------------------- SKELETON LOADER -------------------- */
const SkeletonLine = styled.div`
  height: ${({ height = '16px' }) => height};
  width: ${({ width = '100%' }) => width};
  border-radius: 8px;
  background: linear-gradient(90deg, #f0f4f8, #e2e8f0, #f0f4f8);
  background-size: 2000px 100%;
  animation: ${shimmer} 2s linear infinite;
  margin: ${({ margin = '0' }) => margin};
`;

const SkeletonCard = () => (
  <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
    <SkeletonLine height="0" style={{ paddingTop: '56.25%', position: 'relative', borderRadius: 0 }} />
    <div style={{ padding: '1rem' }}>
      <SkeletonLine height="20px" width="70%" />
    </div>
  </div>
);

const SkeletonPage = () => (
  <>
    <Header>
      <SkeletonLine height="40px" width="60%" margin="0 auto 1rem auto" />
      <SkeletonLine height="20px" width="80%" margin="0 auto" />
    </Header>
    <CertificateGrid>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </CertificateGrid>
  </>
);


/* -------------------- MAIN COMPONENT -------------------- */
const AchievementPage = () => {
  const { user, loading: authLoading, role } = useAuth();
  const { userEmail } = useParams();
  const navigate = useNavigate();
  const [certificates, setCertificates] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState("");
  const [targetUserData, setTargetUserData] = useState(null);

  const isAdminView = role === 'admin' && !!userEmail;
  const targetEmail = isAdminView ? userEmail : user?.email;

  const convertGoogleDriveUrl = (url) => {
    const fileId = url?.match(/\/d\/(.*?)\//)?.[1];
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
  };

  const getDownloadUrl = (url) => {
    const fileId = url?.match(/\/d\/(.*?)\//)?.[1];
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : url;
  };

  useEffect(() => {
    if (authLoading) return;
    
    const fetchCertificates = async () => {
      if (!targetEmail) {
        if (!isAdminView) navigate("/login");
        return;
      }

      setPageLoading(true);
      setError("");
      
      try {
        const userDocRef = doc(db, "Users", targetEmail.toLowerCase());
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setTargetUserData(userData);
          setCertificates(userData.certificates || []);
        } else {
          setError("User data could not be found.");
        }
      } catch (err) {
        console.error("Error fetching certificates:", err);
        setError("Failed to load achievements. Please try again later.");
      } finally {
        setPageLoading(false);
      }
    };

    fetchCertificates();
  }, [authLoading, targetEmail, isAdminView, navigate]);
  
  const renderContent = () => {
    if (pageLoading) {
      return <SkeletonPage />;
    }
    if (error) {
      return <ErrorText>
        <FiAlertCircle />
        <h3>An Error Occurred</h3>
        <p>{error}</p>
      </ErrorText>;
    }
    if (certificates.length === 0) {
      return <EmptyState>
        <FiAward />
        <h3>No Achievements Yet</h3>
        <p>Completed courses and labs will appear here. Keep up the great work!</p>
      </EmptyState>;
    }
    
    return (
      <CertificateGrid>
        {certificates.map((cert, index) => {
          // Handle both string array and object array for backward compatibility
          const isObject = typeof cert === 'object' && cert !== null;
          const certUrl = isObject ? cert.url : cert;
          const certTitle = isObject ? cert.title : `Certificate of Completion`;
          
          return (
            <CertificateCard key={index}>
              <PreviewContainer>
                {certUrl.includes('drive.google.com') ? (
                  <CertificatePreview src={convertGoogleDriveUrl(certUrl)} title={certTitle} />
                ) : (
                  <CertificateImage src={certUrl} alt={certTitle} onError={(e) => { e.target.src="https://placehold.co/400x280/e2e8f0/64748b?text=Preview+Unavailable"; }} />
                )}
              </PreviewContainer>
              <CardContent>
                <CertificateTitle>{certTitle}</CertificateTitle>
              </CardContent>
              <DownloadOverlay>
                <DownloadButtonOverlay href={getDownloadUrl(certUrl)} download>
                  <FiDownload />
                </DownloadButtonOverlay>
              </DownloadOverlay>
            </CertificateCard>
          );
        })}
      </CertificateGrid>
    );
  };

  return (
    <PageContainer isAdminView={isAdminView}>
      {isAdminView ? <AdminSidebar /> : <UserNavbar />}
      <ContentWrapper isAdminView={isAdminView}>
        {isAdminView && (
          <BackButton onClick={() => navigate(-1)}>
            <FiArrowLeft /> Back to Participant
          </BackButton>
        )}
        <Header>
          <PageTitle>
            <FiAward />
            {isAdminView ? `${targetUserData?.username || 'User'}'s Achievements` : 'Your Achievements'}
          </PageTitle>
          <PageSubtitle>
            A collection of your completed courses and labs. Each certificate represents a milestone in your learning journey.
          </PageSubtitle>
        </Header>
        {renderContent()}
      </ContentWrapper>
    </PageContainer>
  );
};

export default AchievementPage;