import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContactTitle = styled.h2``;

export const Text = styled.p`
  margin: 60px 100px;

  @media (max-width: 768px) {
    margin: 60px auto;
  }
`;

export const Background = styled(motion.div)`
  z-index: 100;
  background-color: transparent;
  backdrop-filter: blur(1.16rem);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
`;

export const popUp = styled(motion.div)`
  border-radius: 10px;
  z-index: 101;
  position: fixed;
  background-color: var(--primary);
  border: var(--border) solid var(--accent);
  left: 50%;
  top: 50%;
  min-width: 500px;
  min-height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: left;

  .exit {
    cursor: pointer;
    font-size: larger;
    position: absolute;
    right: 2%;
    top: 2%;
    color: var(--accent);
    border: none;
    background: transparent;
  }

  @media (max-width: 768px) {
    min-width: 300px;
    min-height: 300px;
  }
`;

export const ContactInfoTitle = styled.h3`
  cursor: default;
  font-size: 1.5rem;
  color: var(--text);
  margin-top: 2rem;
  margin-bottom: 2rem;
  user-select: none;

  &:hover {
    hr {
      &::before {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 40px;

  svg {
    color: var(--text);

    &:hover {
      transform: scale(1.1);
      color: var(--accent);
    }
  }
`;

export const ContactEmail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  a {
    color: var(--text);
  }
`;

export const Gif = styled.div`
  overflow: hidden;
  padding: 30px;
  position: relative;

  img {
    width: 70%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: all 5s;
    filter: drop-shadow(0 0 5px var(--accent));
  }
`;

export const Alien = styled.p`
  cursor: grab;
  position: absolute;
  ${(props) => props.$position}: 0;
  font-size: 1.5rem;
  color: var(--text);
  transform: translateY(-40px);
  transition: opacity 2s;
  user-select: none;

  &:hover {
    opacity: 0;
    color: var(--accent);
  }
`;
