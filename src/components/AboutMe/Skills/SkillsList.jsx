import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiTypescript, SiBootstrap, SiPhp } from 'react-icons/si'; // Importa os ícones
import { FaLaravel, FaNpm } from 'react-icons/fa';
import { TbBrandMysql } from 'react-icons/tb';

const skillsList = [
  { title: 'React', link: 'https://react.dev/', icon: <SiReact /> },
  { title: 'TypeScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: <SiTypescript /> },
  { title: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: <SiJavascript /> },
  { title: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: <SiHtml5 /> },
  { title: 'CSS3', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: <SiCss3 /> },
  { title: 'PHP', link: 'https://www.php.net/docs.php', icon: <SiPhp /> },
  { title: 'Laravel', link: 'https://laravel.com/docs', icon: <FaLaravel /> },
  { title: 'Bootstrap', link: 'https://getbootstrap.com/', icon: <SiBootstrap /> },
  { title: 'npm', link: 'https://www.npmjs.com/', icon: <FaNpm /> },
  { title: 'MySQL', link: 'https://www.mysql.com/', icon: <TbBrandMysql /> },
  { title: 'Git', link: 'https://git-scm.com/doc', icon: <SiGit /> },
];

export const skills = [...skillsList, ...skillsList, ...skillsList];

export default skills;
