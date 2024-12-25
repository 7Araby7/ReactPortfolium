// themes.js
export const lightTheme = {
  primary: '#f5f5f5',
  secondary: '#d3d3d3',
  text: '#333333',
  opposite: '#242424',
  nav: '#f5f5f5c5',
};

export const darkTheme = {
  primary: '#242424',
  secondary: '#303030',
  text: '#ffffff',
  opposite: '#f5f5f5',
  nav: '#242424d3',
};

export const colorTheme = (color) => {
  let accent;

  switch (color) {
    case 'red':
      accent = '#ff1313e5';
      break;
    case 'orange':
      accent = '#ff8c13e5';
      break;
    case 'yellow':
      accent = '#fffa13e5';
      break;
    case 'green':
      accent = '#1bff13e5';
      break;
    case 'teal':
      accent = '#13ffe5e5';
      break;
    case 'blue':
      accent = '#13d0ffe5';
      break;
    case 'purple':
      accent = '#a313ffe5';
      break;
    case 'pink':
      accent = '#ff13cfe5';
      break;
    case 'magenta':
      accent = '#ff13ffe5';
      break;
    case 'themeOposite':
      accent = 'var(--opposite)';
      break;
  }

  return {
    accent,
    neonGlow: `0 0 30px ${accent}`,
  };
};
