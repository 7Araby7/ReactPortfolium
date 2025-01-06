import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiTypescript, SiBootstrap, SiPython } from 'react-icons/si'; // Importa os ícones
import { FaNpm } from 'react-icons/fa';
import { TbBrandMysql } from 'react-icons/tb';

const skillsList = [
  { title: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: <SiHtml5 /> },
  { title: 'CSS3', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: <SiCss3 /> },
  { title: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: <SiJavascript /> },
  { title: 'TypeScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: <SiTypescript /> },
  { title: 'Python', link: 'https://docs.python.org/3/', icon: <SiPython /> },
  { title: 'React', link: 'https://react.dev/', icon: <SiReact /> },
  { title: 'Bootstrap', link: 'https://getbootstrap.com/', icon: <SiBootstrap /> },
  { title: 'Git', link: 'https://git-scm.com/doc', icon: <SiGit /> },
  { title: 'npm', link: 'https://www.npmjs.com/', icon: <FaNpm /> },
  { title: 'MySQL', link: 'https://www.mysql.com/', icon: <TbBrandMysql /> },
];

export const skills = [...skillsList, ...skillsList, ...skillsList];

export default skills;
