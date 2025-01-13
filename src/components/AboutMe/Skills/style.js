import { motion } from 'framer-motion';
import styled from 'styled-components';

export const DIV = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin: 0 auto;
  box-sizing: border-box;
  width: 80%;
  /* border: solid 3px green; */
`;

export const SkillsList = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  margin: 30px auto;
  box-sizing: border-box;
  /* border: solid 3px white; */
  width: 100%;

  @media (max-width: 1000px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const SkillTag = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--text);
  padding: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  text-decoration: none;
  border: 2px solid transparent;
  box-shadow: none;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: -2px -2px 4px var(--accent);
    transform: translate(3px, 3px);
  }
`;

/* import styled from 'styled-components';

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 30px auto;
`;

export const SkillTag = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--text);
  padding: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  text-decoration: none;
  border: 2px solid transparent;
  box-shadow: none;
  transition: all 0.2s ease;

  &:hover,
  &.hover-active {
    box-shadow: -2px -2px 4px var(--accent);
    transform: translate(3px, 3px);
  }
`;

/*box-shadow: -2px -2px 0px var(--accent);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: none;
    transform: translate(-3px, -3px);
  } */
