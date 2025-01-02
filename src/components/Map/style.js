import styled from 'styled-components';

// Estilização minimalista
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--primary);
  color: var(--text);

  .map {
    z-index: 0;
    width: 100%;
    max-width: 400px;
    height: 400px;
    border-radius: 50%;
    overflow: hidden;
    border: solid 3px var(--accent);
    color: var(--accent);
    box-shadow: 0 0 120px var(--lightter-accent);

    @media (max-width: 768px) {
      max-width: 300px;
      height: 300px;
    }
  }
`;

export const H1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitles = styled.h1`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
  gap: 40px;
  margin-bottom: 30px;
`;

export const Map = styled.h1`
  z-index: 0;
  width: 100%;
  max-width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  border: solid 2px var(--accent);
  color: var(--accent);
  box-shadow: 0 0 100px var(--lightter-accent);

  @media (max-width: 768px) {
    max-width: 300px;
    height: 300px;
  }
`;
