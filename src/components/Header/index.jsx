import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import P from 'prop-types';
import '/node_modules/flag-icons/css/flag-icons.min.css';

import * as Styled from './style';
import HeaderText from './HeaderText/index.jsx';
import SocialIcon from './SocialIcon/index.jsx';
import ColorPicker from './ColorPicker/index.jsx';

const Header = ({ handleColor, handleLanguage, language = '' }) => {
  const [animate, setAnimate] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const handleAnimate = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 3600);
  };

  useEffect(() => {
    inView ? handleAnimate() : '';
  }, [inView]);

  const handleClick = () => {
    setTimeout(() => {
      handleLanguage();
    }, 150);
    handleAnimate();
  };

  return (
    <Styled.Header id="home" ref={ref}>
      <Styled.Language onClick={handleClick} $animate={animate} className={`fi fi-${language}`}></Styled.Language>
      {animate && <Styled.Block className="block"></Styled.Block>}
      <Styled.HeaderContent>
        <HeaderText animate={inView} language={language} />
        <SocialIcon />
      </Styled.HeaderContent>
      <ColorPicker handleColor={handleColor} />
    </Styled.Header>
  );
};

Header.propTypes = {
  handleColor: P.func.isRequired,
  handleLanguage: P.func.isRequired,
  language: P.string,
};

export default Header;
