import { useRef } from 'react';
import { useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import P from 'prop-types';

import * as Styled from './style';
import profileImage from '../../assets/png/profile.png';
import resume from '../../assets/pdf/resume.pdf';
import { Section, Button, Highlight } from '../../styles/globalStyle';
import Skills from './Skills';
import MotionWrapper from '../../utils/MotionWrapper';

const TITLE_EN = 'About me';
const TITLE_PT = 'Sobre mim';

const DESCRIPTION_EN = (
  <>
    Console.log(<Highlight>"Hello, world!"</Highlight>); I,m Gabriel, a <Highlight>fullstack developer</Highlight> from
    Brazil, fluent in <Highlight>Portuguese</Highlight> and <Highlight>English</Highlight>, always seeking{' '}
    <Highlight>new opportunities</Highlight>.<br /> <br />
    With a strong foundation in <Highlight>JavaScript</Highlight>, <Highlight>HTML</Highlight>,{' '}
    <Highlight>CSS</Highlight>, and <Highlight>PHP</Highlight>, I’ve built a solid skill set that includes working with
    databases like <Highlight>MySQL</Highlight> and <Highlight>PostgreSQL</Highlight>.<br /> <br />
    Over the years, I've explored both <Highlight>backend</Highlight> and <Highlight>frontend</Highlight> development,
    but right now I'm diving deeper into <Highlight>React</Highlight> and sharpening my expertise in{' '}
    <Highlight>frontend technologies</Highlight>.<br /> <br />
    Always curious and eager to improve, I enjoy solving <Highlight>problems</Highlight>, building{' '}
    <Highlight>projects</Highlight>, and learning <Highlight>new tools</Highlight> to stay up to date in the tech world.
    <br /> <br />
    If you're looking for someone to bring <Highlight>ideas to life</Highlight> or tackle{' '}
    <Highlight>challenges</Highlight> together, <Highlight>hit me up!</Highlight>
    <br /> <br />
    Check out my <Highlight>GitHub</Highlight> to see some of my <Highlight>projects</Highlight>. Let's create something{' '}
    <Highlight>amazing!</Highlight>
  </>
);

const DESCRIPTION_PT = (
  <>
    Console.log(<Highlight>"Olá, mundo!"</Highlight>); Meu nome é Gabriel, sou um{' '}
    <Highlight>desenvolvedor fullstack</Highlight> de Curitiba, fluente em <Highlight>português</Highlight> e{' '}
    <Highlight>inglês</Highlight>, sempre buscando <Highlight>novas oportunidades</Highlight>.<br /> <br />
    Com uma base sólida em <Highlight>JavaScript</Highlight>, <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight> e{' '}
    <Highlight>PHP</Highlight>, eu desenvolvi um conjunto de habilidades que inclui trabalhar com bancos de dados como{' '}
    <Highlight>MySQL</Highlight> e <Highlight>PostgreSQL</Highlight>.<br /> <br />
    Ao longo dos anos, explorei tanto o desenvolvimento <Highlight>backend</Highlight> quanto o{' '}
    <Highlight>frontend</Highlight>, mas agora estou me aprofundando em <Highlight>React</Highlight> e aprimorando
    minhas habilidades em <Highlight>tecnologias frontend</Highlight>.<br /> <br />
    Sempre curioso e buscando melhorar, gosto de resolver <Highlight>problemas</Highlight>, construir{' '}
    <Highlight>projetos</Highlight> e aprender <Highlight>novas ferramentas</Highlight> para me manter atualizado no
    mundo da tecnologia.
    <br /> <br />
    Se você está procurando alguém para dar vida a <Highlight>ideias</Highlight> ou enfrentar{' '}
    <Highlight>desafios</Highlight> juntos, <Highlight>me chama!</Highlight>
    <br /> <br />
    Dê uma olhada no meu <Highlight>GitHub</Highlight> para ver alguns dos meus <Highlight>projetos</Highlight>. Vamos
    criar algo <Highlight>incrível!</Highlight>
  </>
);

const RESUME_EN = 'Download resume';
const RESUME_PT = 'Download CV';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const AboutMe = ({ dark, language = 'us' }) => {
  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  //box
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  //shadow
  const ySpringShadow = useTransform(ySpring, (latestValue) => -latestValue * 3);
  const xSpringShadow = useTransform(xSpring, (latestValue) => latestValue * 3);
  const boxShadow = useMotionTemplate`${ySpringShadow}px ${xSpringShadow}px 40px var(--lightter-accent)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Section>
      <Styled.AboutMeContainer id="aboutMe">
        <div>
          <Styled.Title>
            {language === 'us' ? TITLE_EN : TITLE_PT} <hr />
          </Styled.Title>
          <MotionWrapper threshold={0.4} variants={fadeInVariants}>
            <Styled.Description>
              <Styled.HoverText>{language === 'us' ? DESCRIPTION_EN : DESCRIPTION_PT}</Styled.HoverText>
              {/* sepa trar o botão fique melhor */}
              <Button
                $padding={'1rem 2rem'}
                $fontSize={'1.2rem'}
                $marginTop={'2rem'}
                href={resume}
                download="Gabriel_Resume"
              >
                {language === 'us' ? RESUME_EN : RESUME_PT}
              </Button>{' '}
            </Styled.Description>
          </MotionWrapper>
        </div>
        <MotionWrapper threshold={0.4} variants={fadeInVariants}>
          <Styled.TiltCardWrapper
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform,
              boxShadow,
            }}
          >
            <Styled.InnerCard>
              <img src={profileImage} alt="Profile" />
            </Styled.InnerCard>
          </Styled.TiltCardWrapper>
        </MotionWrapper>
      </Styled.AboutMeContainer>
      <MotionWrapper threshold={0.1} variants={fadeInVariants}>
        <Skills />
      </MotionWrapper>
    </Section>
  );
};

AboutMe.propTypes = {
  dark: P.bool.isRequired,
  language: P.string,
};

export default AboutMe;
