const breakpointsSizes = {
  xs: '370px',
  sm: '480px',
  md: '750px',
  lg: '1200px',
  xl: '1600px',
};

export const theme = {
  breakpoints: {
    xs: `(min-width: ${breakpointsSizes.xs})`,
    sm: `(min-width: ${breakpointsSizes.sm})`,
    md: `(min-width: ${breakpointsSizes.md})`,
    lg: `(min-width: ${breakpointsSizes.lg})`,
    xl: `(min-width: ${breakpointsSizes.xl})`,
  },

  colors: {
    primary: '#1a8cd8',
    secondary: '#fff',
    primaryLight: '#1fa9ff',
  },
  fontFamily: {
    primary: `Roboto, sans-serif`,
  },
  fontSize: {
    xxs: '8px',
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '20px',
    xl: '24px',
    xxl: '32px',
  },
  fontWeight: {
    light: '300',
    regular: '400',
    semiBold: '600',
    bold: '700',
  },
};
