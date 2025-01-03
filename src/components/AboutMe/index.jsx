import { useRef } from 'react';
import { useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import P from 'prop-types';

import * as Styled from './style';
import profileImage from '../../assets/png/profile.png';
import resume from '../../assets/pdf/resume.pdf';
import { Section, Button } from '../../styles/globalStyle';
import Skills from './Skills';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const AboutMe = ({ dark }) => {
  const shadow = dark ? '200px' : '40px';

  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const ySpringShadow = useTransform(ySpring, (latestValue) => -latestValue * 3);
  const xSpringShadow = useTransform(xSpring, (latestValue) => latestValue * 3);
  const boxShadow = useMotionTemplate`${ySpringShadow}px ${xSpringShadow}px ${shadow} var(--lightter-accent)`;

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
            About Me <hr />
          </Styled.Title>
          <Styled.Description>
            <Styled.HoverText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, eveniet nesciunt cumque minima qui nisi
              illo quaerat voluptas repudiandae sequi earum debitis dolore autem quis optio, dolores, ad aspernatur
              molestiae?
            </Styled.HoverText>
            <Button href={resume} download="Gabriel_Resume">
              Resume
            </Button>
          </Styled.Description>
        </div>
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
      </Styled.AboutMeContainer>
      <Skills />
    </Section>
  );
};

AboutMe.propTypes = {
  dark: P.bool.isRequired,
};

export default AboutMe;
