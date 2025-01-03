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
  padding: 0px 10vw;
  color: var(--text);
  min-height: 80vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4vh 5vw;
  }
`;

// Título da Seção
export const Title = styled.h2`
  text-align: left;

  hr {
    width: 100%;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

// Container da Descrição
export const Description = styled.div`
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

export const HoverText = styled.p``;

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
    object-fit: contain;
    transition: transform 0.4s ease;
  }
`;
