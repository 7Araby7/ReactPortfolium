import styled from 'styled-components';
/* import { FiMousePointer } from 'react-icons/fi'; */
import { motion } from 'framer-motion';

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
  color: var(--accent);
  margin-top: 0;
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
  font-size: 1rem;
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

export const HoverText = styled.p`
  font-family: 'Eco Coding WGL4 W01 Regular';
`;

// Card com a Imagem
export const TiltCardWrapper = styled(motion.div)`
  position: relative;
  height: 28rem;
  width: 18rem;
  border-radius: 1rem;
  background: var(--secondary);
  box-shadow: 0px 0px 10px var(--accent);
  transform-style: preserve-3d;
`;

export const InnerCard = styled.div`
  overflow: hidden;
  position: absolute;
  inset: 1rem;
  display: grid;
  place-content: center;
  border-radius: 1rem;
  transform: translateZ(75px);
  transform-style: preserve-3d;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.53);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
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
    transition: all 0.5s ease;
  }

  &:hover::before {
    height: 190%;
  }
`;
