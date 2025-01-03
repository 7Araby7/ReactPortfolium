export const lightTheme = {
  primary: '#f5f5f5',
  secondary: ' #bebebe',
  text: '#181818',
  opposite: '#181818',
  nav: '#f5f5f5c5',
  font: 'Eco Coding WGL4 W01 Bold',
};

export const darkTheme = {
  primary: '#181818',
  secondary: '#303030',
  text: '#f5f5f5',
  opposite: '#f5f5f5',
  nav: '#181818d3',
  font: 'Eco Coding WGL4 W01 Regular',
};

export const colorTheme = (color, dark) => {
  let accent;
  let isDark = dark;

  switch (color) {
    case 'red':
      accent = '#ff1313';
      break;
    case 'orange':
      accent = '#ff8c13';
      break;
    case 'yellow':
      accent = '#fffa13';
      break;
    case 'green':
      accent = '#1bff13';
      break;
    case 'teal':
      accent = '#13ffe5';
      break;
    case 'blue':
      accent = '#13d0ff';
      break;
    case 'purple':
      accent = '#a313ff';
      break;
    case 'pink':
      accent = '#ff13cf';
      break;
    case 'magenta':
      accent = '#ff13ff';
      break;
    case 'themeOposite':
      dark ? (accent = '#f5f5f5') : (accent = '#242424');
      break;
  }

  return {
    accent,
    lightAccent: isDark ? accent + '99' : accent,
    lightterAccent: isDark ? accent + '50' : accent + '99',
    neonGlow: `0 0 20px ${accent}`,
  };
};
