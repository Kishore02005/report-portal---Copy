import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SuperAdminSidebar from "../components/SuperAdminSidebar";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  font-family: "Inter", "Segoe UI", sans-serif;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 48px;
  margin-left: 300px;
  max-width: 1400px;
  margin-right: auto;
`;

const Header = styled.div`
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1e293b;
  margin: 0 0 12px 0;
  font-weight: 700;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #64748b;
  margin: 0;
  font-weight: 400;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  max-width: 1200px;
`;

const CategoryCard = styled(Link)`
  background: white;
  border-radius: 20px;
  padding: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  min-height: 280px;
  position: relative;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  cursor: pointer;

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
    text-decoration: none;
  }

  &:hover .card-background {
    transform: scale(1.1);
    opacity: 0.9;
  }

  &:hover .card-image {
    opacity: 0.6;
  }

  &:hover .card-overlay {
    opacity: 0.7;
  }

  &:hover .card-content {
    transform: translateY(-8px);
  }

  &:hover .card-icon {
    transform: scale(1.2) rotate(5deg);
  }

  &:active {
    transform: translateY(-8px) scale(1.01);
  }
`;

const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: ${(props) => props.gradient};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
`;

const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  filter: blur(2px);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 2;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 3;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 4;
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 12px;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  align-self: flex-start;
`;

const CardInfo = styled.div`
  margin-top: auto;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 8px 0;
  line-height: 1.3;
  font-family: "Inter", "Segoe UI", sans-serif;
`;

const CategoryDescription = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
  font-family: "Inter", "Segoe UI", sans-serif;
`;

const ArrowIcon = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #64748b;
  transition: all 0.3s ease;
  z-index: 5;
`;

const OrganizationsPage = () => {
  const categories = [
    { 
      name: "Schools", 
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
      icon: "🏫",
      description: "Educational institutions and K-12 schools",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2032&auto=format&fit=crop"
    },
    { 
      name: "Colleges", 
      gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)", 
      icon: "🎓",
      description: "Universities and higher education institutes",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      name: "Corporates", 
      gradient: "linear-gradient(135deg, #2af598 0%, #009efd 100%)", 
      icon: "🏢",
      description: "Business organizations and enterprises",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop"
    },
    { 
      name: "Individuals", 
      gradient: "linear-gradient(135deg, #ef32d9 0%, #89fffd 100%)", 
      icon: "👤",
      description: "Individual learners and professionals",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  return (
    <PageContainer>
      <SuperAdminSidebar />
      <ContentWrapper>
        <Header>
          <Title>Organization Categories</Title>
          <Subtitle>Select a category to view and manage organizations</Subtitle>
        </Header>
        <CategoryGrid>
          {categories.map((category) => (
            <CategoryCard key={category.name} to={`/organizations/${category.name.toLowerCase()}`}>
              <CardBackground className="card-background" gradient={category.gradient} />
              <CardImage className="card-image" image={category.image} />
              <CardOverlay className="card-overlay" />
              <ArrowIcon>→</ArrowIcon>
              <CardContent className="card-content">
                <div>
                  <CardIcon className="card-icon">{category.icon}</CardIcon>
                </div>
                <CardInfo>
                  <CategoryTitle>{category.name}</CategoryTitle>
                  <CategoryDescription>{category.description}</CategoryDescription>
                </CardInfo>
              </CardContent>
            </CategoryCard>
          ))}
        </CategoryGrid>
      </ContentWrapper>
    </PageContainer>
  );
};

export default OrganizationsPage;