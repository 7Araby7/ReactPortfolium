import styled from 'styled-components';

export const ProjectCard = styled.div`
  align-items: ${({ $side }) => ($side ? 'end' : 'baseline')};
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-color: transparent;
  color: var(--text);
  padding: 0;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  width: 1050px;
  min-height: 300px;
  display: flex;

  @media (max-width: 768px) {
    overflow: hidden;
    justify-content: top;
    align-items: center;
    max-width: 300px;
  }
`;

export const Img = styled.a`
  img {
    z-index: 0;
    position: absolute;
    width: 55%;
    top: 50%;
    ${({ $side }) => ($side ? 'left' : 'right')}: 0;
    transform: translateY(-50%);
    border-radius: 10px;
    transition: all 0.5s;

    &:hover {
      box-shadow: 0 0 120px var(--lightter-accent);
      transform: scale(1.01) translateY(-50%);
    }

    @media (max-width: 768px) {
      filter: brightness(0.2);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const ProjectTitle = styled.h3`
  text-align: ${({ $side }) => ($side ? 'right' : 'left')};
  z-index: 1;
  font-size: 1.6rem;
  color: var(--text);
  margin-top: 4rem;
  @media (max-width: 768px) {
    padding: 20px;
    margin-top: 0;
    text-align: center;
    font-size: 1.4rem;
    margin-top: 3rem;
  }
`;

export const ProjectDescription = styled.p`
  text-align: ${({ $side }) => ($side ? 'right' : 'left')};
  background-color: var(--secondary);
  border-radius: 10px;
  z-index: 1;
  line-height: 1.6;
  width: 50%;
  padding: 10px;
  transition: all 0.3s;

  &:hover {
    transform: ${({ $side }) => ($side ? 'translate(-7px, -7px);' : 'translate(7px, -7px);')};
    box-shadow: ${({ $side }) => ($side ? '7px 7px 5px rgba(0, 0, 0, 0.5)' : '-7px 7px 5px rgba(0, 0, 0, 0.5)')};
  }

  @media (max-width: 768px) {
    flex-grow: 1;
    line-height: 1.4;
    width: auto;
    text-align: center;
    background-color: transparent;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const ProjectTools = styled.p`
  z-index: 1;
  font-size: 0.9rem;
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
  width: 100%;
  justify-content: ${({ $side }) => ($side ? 'right' : 'left')};

  span {
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    border: solid 0.5px transparent;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    gap: 0.3rem;
    margin-top: 1.5rem;
    justify-content: center;

    span {
      padding: 0.2rem 0.4rem;
    }
  }
`;
