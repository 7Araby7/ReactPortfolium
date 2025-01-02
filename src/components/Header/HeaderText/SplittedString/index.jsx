import P from 'prop-types';

import * as Styled from './style';

const SplittedString = ({ text, delay = 0 }) => {
  return (
    <Styled.StringContainer>
      {text.split('').map((char, idx) => (
        <Styled.Letter key={idx} $index={idx} $delay={delay}>
          <b>{char}</b>
        </Styled.Letter>
      ))}
    </Styled.StringContainer>
  );
};

SplittedString.propTypes = {
  text: P.string.isRequired,
  delay: P.number,
};

export default SplittedString;
