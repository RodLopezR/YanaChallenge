type PaletteType = {
  primary: {
    color: string;
    dark: string;
    ligth: string;
  };
  secondary: {
    color: string;
    dark: string;
    ligth: string;
  };
  normal: {
    color: string;
    dark: string;
    ligth: string;
  };
};

const Palette: PaletteType = {
  primary: {
    color: '#FF8755',
    dark: '#672A11',
    ligth: '#FFC5C5',
  },
  secondary: {
    color: '#3B9391',
    dark: '#3B9391',
    ligth: '#F0F6FA',
  },
  normal: {
    color: '#C4C4C4',
    dark: '#000000',
    ligth: '#6C8080',
  },
};

export default Palette;
