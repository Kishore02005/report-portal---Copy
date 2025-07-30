import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import styled from "styled-components";
import Loader from "../components/Loader";
import SuperAdminSidebar from "../components/SuperAdminSidebar";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  font-family: "Inter", "Segoe UI", sans-serif;
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 300px;
  padding: 32px;
  width: calc(100% - 300px);
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    margin-left: 260px;
    width: calc(100% - 260px);
    padding: 24px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 20px;
    padding-top: 80px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const HeaderLeft = styled.div``;

const Title = styled.h1`
  font-size: 2rem;
  color: #1e293b;
  margin: 0 0 8px 0;
  font-weight: 700;
  text-transform: capitalize;
`;

const Subtitle = styled.p`
  color: #64748b;
  font-size: 1rem;
  margin: 0;
`;

const ControlsSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

const ControlsRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 300px;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const FilterSelect = styled.select`
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  background: white;
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const ResultsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: #64748b;
  font-size: 0.9rem;
`;

const OrgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
`;

const OrgCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #e2e8f0;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    border-color: #3b82f6;
  }
`;

const OrgHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const OrgTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  color: #1e293b;
  font-weight: 600;
  line-height: 1.3;
`;

const OrgStatus = styled.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  background: #dcfce7;
  color: #166534;
`;

const OrgDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #64748b;
`;

const DetailLabel = styled.span`
  font-weight: 500;
  color: #374151;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 48px 24px;
  color: #64748b;
  
  h3 {
    color: #374151;
    margin-bottom: 8px;
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f8fafc;
  color: #64748b;
  border: 1px solid #e2e8f0;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f5f9;
    color: #475569;
    border-color: #cbd5e1;
  }
`;

const OrganizationCategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    const fetchOrganizations = async () => {
      setLoading(true);
      setError("");
      try {
        let singularCategory = category;
        if (singularCategory.endsWith('s')) {
          singularCategory = singularCategory.slice(0, -1);
        }
        const formattedCategory = singularCategory.charAt(0).toUpperCase() + singularCategory.slice(1);
        const q = query(collection(db, "Organizations"), where("type", "==", formattedCategory));
        const snapshot = await getDocs(q);
        const orgs = snapshot.docs.map(doc => {
          const data = doc.data();
          console.log('Organization data:', data); // Debug log
          return { id: doc.id, ...data };
        });
        setOrganizations(orgs);
      } catch (err) {
        console.error("Error fetching organizations by category:", err);
        setError("Failed to load organizations. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizations();
  }, [category]);

  const filteredAndSortedOrgs = useMemo(() => {
    let filtered = organizations.filter(org =>
      org.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return (a.name || "").localeCompare(b.name || "");
        case "date":
          return new Date(b.joinedDate || 0) - new Date(a.joinedDate || 0);
        default:
          return 0;
      }
    });
  }, [organizations, searchTerm, sortBy]);

  return (
    <PageContainer>
      <SuperAdminSidebar />
      <ContentWrapper>
        <Header>
          <HeaderLeft>
            <Title>{category} Organizations</Title>
            <Subtitle>Manage organizations in this category</Subtitle>
          </HeaderLeft>
          <BackButton onClick={() => navigate("/organizations")}>
            ← Back to Organizations
          </BackButton>
        </Header>
        <ControlsSection>
          <ControlsRow>
            <SearchInput
              type="text"
              placeholder="Search organizations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FilterSelect value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">Sort by Name</option>
              <option value="date">Sort by Join Date</option>
            </FilterSelect>
          </ControlsRow>
        </ControlsSection>

        {loading ? (
          <Loader />
        ) : error ? (
          <EmptyState>
            <h3>Error</h3>
            <p>{error}</p>
          </EmptyState>
        ) : (
          <>
            <ResultsInfo>
              <span>Showing {filteredAndSortedOrgs.length} of {organizations.length} organizations</span>
            </ResultsInfo>
            
            {filteredAndSortedOrgs.length === 0 ? (
              <EmptyState>
                <h3>No organizations found</h3>
                <p>{searchTerm ? `No organizations match "${searchTerm}"` : "No organizations found in this category."}</p>
              </EmptyState>
            ) : (
              <OrgGrid>
                {filteredAndSortedOrgs.map(org => (
                  <OrgCard key={org.id} onClick={() => navigate(`/admin/${org.id}`)}>
                    <OrgHeader>
                      <OrgTitle>{org.name}</OrgTitle>
                      <OrgStatus>Active</OrgStatus>
                    </OrgHeader>
                    <OrgDetails>
                      <Detail>
                        <DetailLabel>📅 Joined:</DetailLabel>
                        {(() => {
                          // Check all possible date fields
                          const possibleDates = [
                            org.joinedOn, org.joinedDate, org.createdAt, org.dateCreated, 
                            org.enrolledDate, org.created_at, org.timestamp,
                            org.registrationDate, org.signupDate
                          ];
                          
                          for (let dateValue of possibleDates) {
                            if (dateValue && dateValue !== "N/A" && dateValue !== null) {
                              try {
                                const date = new Date(dateValue);
                                if (!isNaN(date.getTime())) {
                                  return date.toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'short', 
                                    day: 'numeric' 
                                  });
                                }
                              } catch (e) {
                                continue;
                              }
                            }
                          }
                          return "Not Available";
                        })()}
                      </Detail>
                      <Detail>
                        <DetailLabel>🏢 Type:</DetailLabel>
                        {org.type || "N/A"}
                      </Detail>
                    </OrgDetails>
                  </OrgCard>
                ))}
              </OrgGrid>
            )}
          </>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default OrganizationCategoryPage;