import * as Styled from './style';

const Skills = () => (
  <>
    <Styled.SkillsSection id="skills">
      <Styled.SkillsTitle>Skills</Styled.SkillsTitle>
      <Styled.SkillsList>
        {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Python', 'UI/UX Design', 'Responsive Design', 'Git'].map(
          (skill, index) => (
            <Styled.SkillTag key={index} $index={index} href="https://google.com">
              {skill}
            </Styled.SkillTag>
          ),
        )}
      </Styled.SkillsList>
    </Styled.SkillsSection>
  </>
);

export default Skills;
