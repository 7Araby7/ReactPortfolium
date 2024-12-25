import P from 'prop-types';

import * as Styled from './style';

const Lights = ({ lightAmount, zIndex = 0 }) => {
  const lights = Array.from({ length: lightAmount }, (_, index) => ({
    id: index,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }));

  return (
    <Styled.LightsContainer $zIndex={zIndex}>
      {lights.map((light) => (
        <Styled.Light key={light.id} style={{ top: light.top, left: light.left }} />
      ))}
    </Styled.LightsContainer>
  );
};

Lights.propTypes = {
  lightAmount: P.number.isRequired,
  zIndex: P.number,
};

export default Lights;
