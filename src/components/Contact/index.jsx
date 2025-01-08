import { AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import P from 'prop-types';
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope, FaGithubAlt } from 'react-icons/fa';
import { SiAlienware } from 'react-icons/si';

import * as Styled from './style.js';
import { Section, Button, Highlight } from '../../styles/globalStyle';
import MotionWrapper from '../../utils/MotionWrapper.jsx';

const TITLE_EN = 'Get in touch!';
const TITLE_PT = 'Entre em contato!';

const BUTTON_EN = 'Say hello!';
const BUTTON_PT = 'Diga olá!';

const TEXT_EN = (
  <>
    I’m always open to connecting with <Highlight>new people</Highlight>, whether it’s for potential{' '}
    <Highlight>collaborations</Highlight>, <Highlight>freelance opportunities</Highlight>, or just a{' '}
    <Highlight>casual chat</Highlight>. If you have any <Highlight>questions</Highlight>, would like to discuss a{' '}
    <Highlight>project</Highlight>, or are interested in <Highlight>working together</Highlight>, feel free to{' '}
    <Highlight>reach out</Highlight>. I’ll do my best to <Highlight>respond</Highlight> as soon as possible!
  </>
);
const TEXT_PT = (
  <>
    Eu estou sempre aberto a me conectar com <Highlight>novas pessoas</Highlight>, seja para possíveis{' '}
    <Highlight>colaborações</Highlight>, <Highlight>oportunidades de freelas</Highlight> ou só para um{' '}
    <Highlight>papo casual</Highlight>. Se você tiver alguma <Highlight>dúvida</Highlight>, quiser discutir um{' '}
    <Highlight>projeto</Highlight> ou estiver interessado em <Highlight>trabalhar junto</Highlight>, fique à vontade
    para <Highlight>entrar em contato</Highlight>. Vou fazer o meu melhor para <Highlight>responder</Highlight> o mais
    rápido possível!
  </>
);

const Contact = ({ language = 'us', color = '' }) => {
  const [popUp, setPopUp] = useState(false);
  const popUpRef = useRef(null);

  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const handleClick = () => {
    setPopUp(true);
  };

  const handleClickOutside = (event) => {
    if (popUpRef.current && !popUpRef.current.contains(event.target)) {
      setPopUp(false);
    }
  };

  useEffect(() => {
    if (popUp) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popUp]);

  return (
    <Section id="contact">
      <Styled.ContactTitle>
        {language === 'us' ? TITLE_EN : TITLE_PT} <hr />
      </Styled.ContactTitle>
      <MotionWrapper threshold={0.5} variants={fadeInVariants}>
        <Styled.Text>{language === 'us' ? TEXT_EN : TEXT_PT}</Styled.Text>
        <Button $padding={'1rem 2rem'} $fontSize={'1.2rem'} $marginTop={'2rem'} onClick={handleClick}>
          {language === 'us' ? BUTTON_EN : BUTTON_PT}
        </Button>
      </MotionWrapper>

      <AnimatePresence>
        {popUp && (
          <>
            <Styled.Background
              initial={{ opacity: 0, transform: 'translate(-50%, -50%)' }}
              animate={{ opacity: 1, transform: 'translate(-50%, -50%)' }}
              exit={{
                opacity: 0,
                transform: 'translate(-50%, -50%)',
                transition: {
                  duration: 0.3,
                  delay: 0.8,
                },
              }}
            ></Styled.Background>

            <Styled.popUp
              ref={popUpRef}
              initial={{ transform: 'translate(-300%, -150%)' }}
              animate={{ transform: 'translate(-50%, -50%)' }}
              exit={{ transform: 'translate(200%, -150%)' }}
              transition={{
                duration: 1,
                ease: [0.68, -1.2, 0.32, 2.2],
              }}
            >
              <Styled.Alien $position={'left'}>
                m<FaGithubAlt style={{ transform: 'translateY(-6px)' }} />m
              </Styled.Alien>
              <Styled.Alien $position={'right'}>
                m<SiAlienware style={{ transform: 'translateY(-9px)' }} />m
              </Styled.Alien>
              <Styled.ContactInfoTitle>
                Contact Links <hr />
              </Styled.ContactInfoTitle>
              <Styled.ContactLinks>
                <a href="https://wa.me/5541998995100 " target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={40} />
                </a>
                <a href="https://github.com/GabrielBrunhara" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={40} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriel-brunhara-049b43248/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={40} />
                </a>
              </Styled.ContactLinks>
              <Styled.Gif>
                <img src={`/ReactPortfolio/assets/gif/pool${color}.gif`} alt="DeadPool heart" />
              </Styled.Gif>
              <Styled.ContactEmail>
                <FaEnvelope size={30} color="var(--text)" />
                <p href="http://google.com">gabrielbrunhara02@gmail.com</p>
              </Styled.ContactEmail>
            </Styled.popUp>
          </>
        )}
      </AnimatePresence>
    </Section>
  );
};

Contact.propTypes = {
  language: P.string,
  color: P.string,
};

export default Contact;
