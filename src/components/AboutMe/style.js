import styled from 'styled-components';

// Container do AboutMe
export const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 5vh 10vw;
  color: var(--text);
  min-height: 80vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4vh 5vw;
  }
`;

// Título da Seção
export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(0deg, var(--accent) 30%, var(--text));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  text-align: left;
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 768px) {
    text-align: center;
    padding-left: 0;
  }
`;

// Container da Descrição
export const Description = styled.div`
  font-size: 1.2rem;
  font-family: 'Exo 2';
  color: var(--text);
  line-height: 1.6;
  max-width: 600px;
  padding: 1rem;
  text-align: justify;

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`;

// Card com a Imagem
export const Card = styled.div`
  position: relative;
  width: 250px;
  height: 300px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

// Botão de Download (opcional)
export const Button = styled.button`
  border: solid 0.05rem var(--accent);
  background: none;
  color: var(--accent);
  padding: 1rem 2rem;
  font-size: 1.2rem;
  margin-top: 2rem;
  border-radius: 0.4rem;
  transition: ball 0.5s;
  overflow: hidden;
  transition: all 0.5s ease;

  &:hover {
    color: var(--text);
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
    transition: all 0.5s ease;
  }

  &:hover::before {
    height: 190%;
  }
`;
