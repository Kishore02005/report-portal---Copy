import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import styled from "styled-components";
import Loader from "../components/Loader";
import AdminSidebar from "../components/AdminSidebar"; // Import AdminSidebar directly (assuming admin views this)

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  display: flex;
  
  @media (min-width: 769px) {
    margin-left: 250px;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 80px;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
    padding-top: 75px;
  }
`;

const Header = styled.h2`
  font-size: 1.875rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const InfoCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-top: 1rem;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    margin-top: 0.75rem;
  }
`;

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.95rem;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.5rem 0;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    gap: 0.25rem;
  }
`;

const FieldLabel = styled.span`
  color: #64748b;
  font-weight: 500;
`;

const FieldValue = styled.span`
  color: #1e293b;
  font-weight: 600;
  text-align: right;
  
  @media (max-width: 768px) {
    text-align: left;
    word-break: break-word;
  }
`;



const UserName = styled.h3`
  font-size: 1.25rem;
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-align: center;
`;

const UserEmail = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ActionLink = styled.button`
  color: #3b82f6;
  background: #eff6ff;
  border: 1px solid #dbeafe;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #dbeafe;
    color: #1d4ed8;
  }
`;

const BackButton = styled.button`
  margin-top: 2rem;
  background: #6b7280;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #4b5563;
    transform: translateX(-2px);
  }
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    align-self: stretch;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
`;

const ErrorText = styled.p`
  color: #dc2626;
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
  background: #fef2f2;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #fecaca;
`;

const ParticipantDetails = () => {
  const { participantId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const [organizationName, setOrganizationName] = useState("");
  const [activeLabs, setActiveLabs] = useState([]);
  const [activeCourses, setActiveCourses] = useState([]);
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
          const data = { id: userDocSnap.id, ...userDocSnap.data() };
          setUserData(data);
          
          // Fetch active labs details
          if (data.activeLabs && data.activeLabs.length > 0) {
            const labsRef = collection(db, "Labs");
            const allLabsSnap = await getDocs(labsRef);
            const allLabsMap = new Map();
            allLabsSnap.docs.forEach(d => allLabsMap.set(d.id, d.data()));
            
            const activeLabsDetails = data.activeLabs
              .map(labId => {
                const labDetails = allLabsMap.get(labId);
                return labDetails ? { id: labId, name: labDetails.labName } : null;
              })
              .filter(lab => lab !== null);
            
            setActiveLabs(activeLabsDetails);
          }
          
          // Fetch active courses details
          if (data.activeCourses && data.activeCourses.length > 0) {
            const coursesRef = collection(db, "Courses");
            const allCoursesSnap = await getDocs(coursesRef);
            const allCoursesMap = new Map();
            allCoursesSnap.docs.forEach(d => allCoursesMap.set(d.id, d.data()));
            
            const activeCoursesDetails = data.activeCourses
              .map(courseId => {
                const courseDetails = allCoursesMap.get(courseId);
                return courseDetails ? { id: courseId, name: courseDetails.name } : null;
              })
              .filter(course => course !== null);
            
            setActiveCourses(activeCoursesDetails);
          }
          
          // Fetch organization name if organizationId exists
          if (data.organizationId && data.organizationId !== "Independent") {
            try {
              const orgDocRef = doc(db, "Organizations", data.organizationId);
              const orgDocSnap = await getDoc(orgDocRef);
              if (orgDocSnap.exists()) {
                setOrganizationName(orgDocSnap.data().name || data.organizationId);
              } else {
                setOrganizationName(data.organizationId);
              }
            } catch (orgErr) {
              console.error("Error fetching organization:", orgErr);
              setOrganizationName(data.organizationId);
            }
          } else {
            setOrganizationName("Independent");
          }
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
            <UserName>{userData.username || "N/A"}</UserName>
            <UserEmail>{userData.email || "N/A"}</UserEmail>
            
            <Field>
              <FieldLabel>Organization:</FieldLabel>
              <FieldValue>{organizationName || "Independent"}</FieldValue>
            </Field>
            {activeCourses.length > 0 && (
              <Field>
                <FieldLabel>Active Courses:</FieldLabel>
                <FieldValue>{activeCourses.map(course => course.name).join(', ')}</FieldValue>
              </Field>
            )}
            {activeLabs.length > 0 && (
              <Field>
                <FieldLabel>Active Labs:</FieldLabel>
                <FieldValue>{activeLabs.map(lab => lab.name).join(', ')}</FieldValue>
              </Field>
            )}
            {userData.labName && (
              <Field>
                <FieldLabel>Legacy Lab:</FieldLabel>
                <FieldValue>{userData.labName}</FieldValue>
              </Field>
            )}
            <Field>
              <FieldLabel>Enrollment Date:</FieldLabel>
              <FieldValue>{userData.enrolment ? new Date(userData.enrolment).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "N/A"}</FieldValue>
            </Field>
            <Field>
              <FieldLabel>Progress:</FieldLabel>
              <FieldValue>{userData.completion || 0}%</FieldValue>
            </Field>
            {userData.courses && userData.courses.length > 0 && (
              <Field>
                <FieldLabel>Legacy Courses:</FieldLabel>
                <FieldValue>{userData.courses.length} enrolled</FieldValue>
              </Field>
            )}
            {userData.reportUrl && (
              <Field>
                <FieldLabel>Report:</FieldLabel>
                <ActionLink onClick={() => window.open(userData.reportUrl, '_blank')}>
                  View Report
                </ActionLink>
              </Field>
            )}
            {userData.certificates && userData.certificates.length > 0 && (
              <Field>
                <FieldLabel>Achievements:</FieldLabel>
                <ActionLink onClick={() => navigate(`/achievements/${userData.email}`)}>
                  View Certificates
                </ActionLink>
              </Field>
            )}

            <BackButton onClick={() => navigate(-1)}>
              ← Back to Participants
            </BackButton>
          </InfoCard>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default ParticipantDetails;
