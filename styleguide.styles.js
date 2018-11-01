const rhythm = (value = 1, unit = 'rem', basis = 1.5) => (
  Array.isArray(value)
    ? value.map(v => `${basis * v}${unit}`).join(' ')
    : `${basis * value}${unit}`
);

const colors = {
  light: '#fff',
  dark: '#000',
  grey: '#7A7A7A',
  lightGrey: '#DEDEDE',
  paleGrey: '#EFEFEF',
  primary: '#262039',
  secondary: '#19AEC0',
  tertiary: '#0B1222',
  danger: '#E9725C',
};

const theme = {
  color: {
    baseBackground: colors.light,
    border: colors.paleGrey,
    codeBackground: colors.paleGrey,
    error: colors.danger,
    light: colors.grey,
    lightest: colors.lightGrey,
    name: colors.primary,
    type: colors.secondary,
    base: colors.dark,
    link: colors.primary,
    linkHover: colors.tertiary,
    sidebarBackground: colors.primary,
  },
  fontFamily: {
    base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    monospace: 'Consolas, "Liberation Mono", Menlo, monospace',
  },
  fontSize: {
    base: 15,
    text: 16,
    small: 13,
    h1: 38,
    h2: 32,
    h3: 18,
    h4: 18,
    h5: 16,
    h6: 16,
  },
  maxWidth: 1024,
  sidebarWidth: 240,
};

const styles = {
  ComponentsList: {
    heading: {
      fontWeight: '700 !important',
    },
  },
  Heading: {
    heading1: {
      display: 'block',
      position: 'relative',
      paddingBottom: rhythm(0.75),
      marginBottom: rhythm(0.75),
      fontWeight: 700,
      '&:before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: rhythm(3),
        height: '4px',
        backgroundColor: colors.primary,
        borderRadius: '4px',
      },
      '& > a': {
        fontWeight: '700 !important',
      },
    },
    heading2: {
      marginBottom: rhythm(0.5),
      fontWeight: '600',
    },
    heading3: {
      borderBottom: `thin solid ${colors.lightGrey}`,
      paddingBottom: rhythm(0.25),
      marginBottom: rhythm(1),
      fontWeight: '600',
    },
  },
  ReactComponent: {
    tabs: {
      backgroundColor: colors.paleGrey,
      padding: rhythm([0.5, 1]),
      overflow: 'auto',
    },
    tabButtons: {
      marginBottom: 0,
    },
  },
  SectionHeading: {
    sectionName: {
      display: 'block',
      paddingTop: `${rhythm(1)} !important`,
      '&:hover': {
        opacity: 0.75,
      },
    },
  },
  StyleGuide: {
    content: {
      paddingTop: rhythm(2.5),
      '@media (max-width: 600px)': {
        padding: rhythm(1),
      },
    },
    logo: {
      border: 0,
      paddingBottom: 0,
      color: colors.light,
      '& h1': {
        color: colors.light,
        fontFamily: theme.fontFamily.base,
        fontSize: theme.fontSize.h2,
        fontWeight: 700,
      },
    },
    sidebar: {
      border: 0,
      '& li > a': {
        color: `${colors.light} !important`,
      },
      '& li > a:hover': {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
    },
  },
  TabButton: {
    button: {
      width: '100%',
    },
    isActive: {
      border: 0,
    },
  },
  Table: {
    table: {
      marginTop: rhythm(0.5),
      marginBottom: rhythm(0.5),
      minWidth: '600px',
    },
    cellHeading: {
      borderBottom: `thin solid ${colors.lightGrey}`,
    },
    cell: {
      paddingBottom: 0,
      '& p': {
        marginBottom: `${rhythm(0.125)} !important`,
      },
      '& div[class*="para"]': {
        marginBottom: `${rhythm(0.125)} !important`,
      },
    },
  },
};

module.exports = { styles, theme };
