import styled from 'styled-components';

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

  /* Hover styles */
  &:hover,
  &.hover-active {
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px) scale(1.03);
  }

  &:hover h3,
  &.hover-active h3 {
    color: var(--accent);
  }

  &:hover span,
  &.hover-active span {
    border: solid 0.5px var(--accent);
  }

  @media (max-width: 768px) {
    height: 300px;
    width: 250px;
    padding: 0 1.5rem;
    min-height: auto;
  }
`;

export const FolderIconWrapper = styled.div`
  position: absolute;
  top: 0.9rem;
  left: 0.9rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    top: 0.7rem;
    left: 0.7rem;
  }
`;

export const GithubIconWrapper = styled.div`
  position: absolute;
  top: 0.9rem;
  right: 0.9rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  svg {
    &:hover {
      stroke: var(--accent);
    }
  }

  @media (max-width: 768px) {
    top: 0.7rem;
    right: 0.7rem;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  color: var(--text);
  text-align: center;
  margin-top: 4rem;
  width: 100%;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 3rem;
  }
`;

export const ProjectDescription = styled.p`
  font-family: 'Eco Coding WGL4 W01 Bold';
  line-height: 1.6;
  text-align: left;
  flex-grow: 1;
  display: flex;
  margin: 0;

  @media (max-width: 768px) {
    line-height: 1.4;
  }
`;

export const ProjectTools = styled.p`
  font-family: 'Eco Coding WGL4 W01 Bold';
  font-size: 0.9rem;
  line-height: 1.6;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;

  span {
    color: var(--text);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    border: solid 0.5px transparent;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    gap: 0.3rem;
    margin-top: 1.5rem;

    span {
      padding: 0.2rem 0.4rem;
    }
  }
`;
