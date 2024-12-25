import * as Styled from './style';
import profileImage from '../../assets/png/profile.png';
import resume from '../../assets/pdf/resume.pdf';
import Lights from '../Lights';

const AboutMe = () => {
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
            Baixar Currículo
          </Styled.Button>
        </Styled.Description>
      </div>
      <Styled.Card>
        <img src={profileImage} alt="Profile" />
      </Styled.Card>
    </Styled.AboutMeContainer>
  );
};

export default AboutMe;
