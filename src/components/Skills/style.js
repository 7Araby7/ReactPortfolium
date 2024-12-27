import styled, { css, keyframes } from 'styled-components';

const floating = keyframes`
  from{
    transform: translateY(0);
  }
  to{
    transform: translateY(30px);
  }
`;

export const SkillsSection = styled.section`
  min-height: 50vh;
  padding: 5rem 2rem;
  margin: 0 auto;
  text-align: center;
`;

export const SkillsTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--accent);
  margin-top: 0;
  margin-bottom: 2rem;
  flex: 1;
  padding-left: 2rem;
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
`;

export const SkillTag = styled.a`
  background-color: var(--secondary);
  color: var(--text);
  padding: 0.8rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 25px;
  transition: all 0.3s ease;
  animation: ${floating} 2.5s alternate-reverse infinite;
  margin-bottom: 30px;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid transparent;

  ${({ $index }) => css`
    animation-delay: ${($index - 1) * 0.2}s;
  `}

  &:hover {
    box-shadow: var(--neon-glow);
    border-color: var(--accent);
    color: var(--accent);
  }
`;
