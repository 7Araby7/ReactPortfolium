import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiTypescript, SiBootstrap, SiPython } from 'react-icons/si'; // Importa os ícones

import * as Styled from './style';

const Skills = () => {
  const handleTouchStart = (e) => {
    e.currentTarget.classList.add('hover-active');
  };

  const handleTouchEnd = (e) => {
    e.currentTarget.classList.remove('hover-active');
  };
  return (
    <Styled.SkillsList>
      {[
        { title: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: <SiHtml5 /> },
        { title: 'CSS3', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: <SiCss3 /> },
        {
          title: 'JavaScript',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          icon: <SiJavascript />,
        },
        {
          title: 'TypeScript',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          icon: <SiTypescript />,
        },
        { title: 'Python', link: 'https://docs.python.org/3/', icon: <SiPython /> },
        { title: 'React', link: 'https://react.dev/', icon: <SiReact /> },
        { title: 'Bootstrap', link: 'https://git-scm.com/doc', icon: <SiBootstrap /> },
        { title: 'Git', link: 'https://git-scm.com/doc', icon: <SiGit /> },
      ].map((skill, index) => (
        <Styled.SkillTag
          key={index}
          $index={index}
          href={skill.link}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {skill.icon}
          {skill.title}
        </Styled.SkillTag>
      ))}
    </Styled.SkillsList>
  );
};

export default Skills;

/* { title: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
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
          { title: 'Git', link: 'https://git-scm.com/doc' }, */
