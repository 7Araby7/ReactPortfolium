import styled from 'styled-components';

// Container principal da seção de projetos

export const ProjectsTitle = styled.h2`
  margin-bottom: 8rem;
`;

export const ProjectCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;
