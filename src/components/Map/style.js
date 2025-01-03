import styled from 'styled-components';

// Estilização minimalista
export const MapTitle = styled.h2`
  cursor: help;
`;

export const Subtitles = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
  gap: 40px;
  margin-bottom: 30px;
`;

export const coordsButton = styled.button`
  color: var(--text);
  font-family: var(--font);
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  width: 6rem;
  height: 2.5rem;

  &:hover {
    color: var(--accent);
  }
`;

export const PermissionButton = styled.button`
  font-family: var(--font);
  font-size: 1rem;
  background: none;
  border: solid 2px var(--accent);
  cursor: pointer;
  padding: 10px;
  transform: translateY(7px);
  color: var(--text);
  width: 4rem;
  height: 2.5rem;

  &:hover {
    transform: translateY(7px) scale(0.95);
  }
`;

export const MapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  .map {
    z-index: 0;
    width: 80%;
    /* max-width: 400px;
    height: 400px;
    border-radius: 50%; */
    max-width: 700px;
    height: 400px;
    border-radius: 30px;
    overflow: hidden;
    border: solid 3px var(--accent);
    color: var(--accent);
    box-shadow: 0 0 60px var(--lightter-accent);
    background-color: var(--primary);

    @media (max-width: 768px) {
      max-width: 300px;
      height: 300px;
    }
  }
`;
