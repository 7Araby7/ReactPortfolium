import { useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

import * as Styled from './style';
import profileImage from '../../assets/png/profile.png';
/* import profileImage from '../../assets/png/profile.png'; */
import resume from '../../assets/pdf/resume.pdf';
import Lights from '../Lights';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const AboutMe = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

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
    <Styled.AboutMeContainer id="aboutMe">
      <Lights zIndex={-1} lightAmount={50} />
      <div>
        <Styled.Title>About Me</Styled.Title>
        <Styled.Description>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, eveniet nesciunt cumque minima qui nisi
            illo quaerat voluptas repudiandae sequi earum debitis dolore autem quis optio, dolores, ad aspernatur
            molestiae?
          </p>
          <Styled.Button href={resume} download="Gabriel_Resume">
            Resume
          </Styled.Button>
        </Styled.Description>
      </div>
      <Styled.TiltCardWrapper
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
        }}
      >
        <Styled.InnerCard>
          <img src={profileImage} alt="Profile" />
        </Styled.InnerCard>
      </Styled.TiltCardWrapper>
    </Styled.AboutMeContainer>
  );
};

export default AboutMe;
