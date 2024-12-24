import * as Styled from './style';

const Lights = () => {
  const lights = Array.from({ length: 80 }, (_, index) => ({
    id: index,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }));

  return (
    <Styled.LightsContainer>
      {lights.map((light) => (
        <Styled.Light key={light.id} style={{ top: light.top, left: light.left }} />
      ))}
    </Styled.LightsContainer>
  );
};

export default Lights;
