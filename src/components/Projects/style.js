import styled from 'styled-components';

// Container principal da seção de projetos
export const ProjectsSection = styled.section`
  padding: 5rem 7rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

export const ProjectsTitle = styled.h2`
  font-size: 3rem;
  color: var(--text);
  margin-bottom: 2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const ProjectCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const ViewMoreButton = styled.button`
  font-family: 'Eco Coding WGL4 W01 Bold';
  border: solid 0.05rem var(--accent);
  background: none;
  color: var(--accent);
  padding: 1rem 2rem;
  font-size: 1.2rem;
  margin-top: 2rem;
  border-radius: 0.4rem;
  transition: ball 0.5s;

  overflow: hidden;
  transition: all 0.25s ease;

  &:hover {
    color: var(--primary);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--accent);
    z-index: -1;
    border-radius: 0 0 50% 50%;
    height: 0%;
    transition: all 0.25s ease;
  }

  &:hover::before {
    height: 190%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
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
