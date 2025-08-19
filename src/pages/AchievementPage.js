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
  width: 100%;
  max-width: 100vw;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%);
  display: flex;
  margin-left: ${props => props.isAdminView ? '250px' : '0'};
  position: relative;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  width: 100%;
  padding: 0 2rem 3rem 2rem;
  padding-top: ${props => props.isAdminView ? '2rem' : 'calc(70px + 2rem)'};
  animation: ${fadeIn} 0.5s ease-out;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 1024px) {
    padding: 0 1.5rem 2.5rem 1.5rem;
    padding-top: ${props => props.isAdminView ? '1.5rem' : 'calc(70px + 1.5rem)'};
  }
  
  @media (max-width: 768px) {
    padding: 0 1rem 2rem 1rem;
    padding-top: calc(70px + 1rem);
  }
  
  @media (max-width: 480px) {
    padding: 0 0.75rem 1.5rem 0.75rem;
    padding-top: calc(70px + 0.75rem);
  }
  
  @media (max-width: 320px) {
    padding: 0 0.5rem 1rem 0.5rem;
    padding-top: calc(70px + 0.5rem);
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
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.04em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  svg {
    color: #ffffff;
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
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
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
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 300px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    
    &::before {
      left: 100%;
    }
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
  color: #f093fb;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: rgba(240, 147, 251, 0.1);
    transform: scale(1.1);
    color: #f5576c;
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
  line-height: 1.3;
  flex: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.7rem;
  }
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
  color: #f093fb;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  flex-shrink: 0;

  &:hover {
    background: #e2e8f0;
    color: #f5576c;
    transform: translateY(-1px);
  }
`;

const EmptyState = styled.div`
  margin-top: 2rem;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #f093fb, #f5576c, #4facfe);
  }

  svg {
    font-size: 3rem;
    color: #f093fb;
  }
  h3 {
    font-size: 1.25rem;
    color: #1e293b;
    margin: 0;
  }
  p {
    color: #475569;
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