import styled from 'styled-components';

// Container principal da seção de projetos

export const ProjectsTitle = styled.h2``;

export const ProjectCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const ProjectCard = styled.a`
  text-align: left;
  text-decoration: none;
  position: relative;
  background-color: var(--secondary);
  color: var(--text);
  padding: 0 3rem;
  border-radius: 10px;
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  width: 300px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: baseline;

  &:hover {
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px) scale(1.03);

    h3 {
      color: var(--accent);
    }

    span {
      border: solid 0.5px var(--accent);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`;
