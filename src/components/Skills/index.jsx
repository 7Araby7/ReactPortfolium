import * as Styled from './style';

const Skills = () => (
  <>
    <Styled.SkillsSection id="skills">
      <Styled.SkillsTitle>
        Skills <hr />
      </Styled.SkillsTitle>
      <Styled.SkillsList>
        {[
          { title: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
          { title: 'CSS3', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
          { title: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
          { title: 'React', link: 'https://react.dev/' },
          { title: 'Node.js', link: 'https://nodejs.org/en/docs' },
          { title: 'Python', link: 'https://docs.python.org/3/' },
          { title: 'UI/UX Design', link: 'https://www.interaction-design.org/literature/topics/ui-design' },
          {
            title: 'Responsive Design',
            link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design',
          },
          { title: 'Git', link: 'https://git-scm.com/doc' },
        ].map((skill, index) => (
          <Styled.SkillTag key={index} $index={index} href={skill.link}>
            {skill.title}
          </Styled.SkillTag>
        ))}
      </Styled.SkillsList>
    </Styled.SkillsSection>
  </>
);

export default Skills;
