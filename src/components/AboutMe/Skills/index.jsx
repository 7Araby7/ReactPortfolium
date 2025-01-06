import { useEffect, useRef, useState } from 'react';

import * as Styled from './style';
import { skills } from './SkillsList';

const Skills = () => {
  // Memoriza a lista duplicada para evitar recriação
  const listRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (listRef.current) {
      const totalWidth = listRef.current.scrollWidth;
      setWidth(totalWidth);
    }
  }, [listRef]);

  return (
    <Styled.DIV>
      <Styled.SkillsList
        ref={listRef}
        initial={{ x: 0 }}
        animate={{ x: `-${width / 3}px` }} // Ajuste dinâmico
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: 'linear',
        }}
        style={{
          display: 'flex',
          gap: '1rem',
          width: `${width}px`,
        }}
      >
        {skills.map((skill, index) => (
          <Styled.SkillTag key={index} href={skill.link}>
            {skill.icon}
            {skill.title}
          </Styled.SkillTag>
        ))}
      </Styled.SkillsList>
    </Styled.DIV>
  );
};

export default Skills;

/* import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiTypescript, SiBootstrap, SiPython } from 'react-icons/si'; // Importa os ícones

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
 */
