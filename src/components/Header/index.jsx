import { useInView } from 'react-intersection-observer';
import P from 'prop-types';

import * as Styled from './style';
import HeaderText from './HeaderText/index.jsx';
import SocialIcon from './SocialIcon/index.jsx';
import ColorPicker from './ColorPicker/index.jsx';

const Header = ({ handleColor }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Deixe como false para que a animação seja disparada várias vezes
    threshold: 0.2, // Quando 20% da área do header estiver visível
  });

  return (
    <Styled.Header id="home" ref={ref}>
      <Styled.HeaderContent>
        <HeaderText animate={inView} /> {/* Passe o inView diretamente */}
        <SocialIcon />
      </Styled.HeaderContent>
      <ColorPicker handleColor={handleColor} />
    </Styled.Header>
  );
};

Header.propTypes = {
  handleColor: P.func.isRequired,
};

export default Header;
