// const purple60 = '#663399';
// const purple30 = '#D9BAE8';

const grey05 = 'rgb(245,245,245)';
// const grey10 = 'rgba(32, 33, 36, 0.01)';
const grey20 = '#78757a';
const grey30 = 'rgba(32, 33, 36, 0.04)';
const grey40 = 'rgba(32, 33, 36, 0.12)';
const grey50 = 'rgba(32, 33, 36, 0.16)';
// const grey60 = 'rgba(32, 33, 36, 0.21)';
const grey70 = '#dadce0';
const grey90 = '#232129';
// const black80 = '#1B1F23';

const black = '#000';
const white = '#fff';
const darkWhite = 'rgba(180, 180, 180, 0.9)';
const lightWhite = 'rgba(210, 210, 210, 0.9)';
// const opaqueLightYellow = 'rgba(255, 229, 100, 0.2)';
const opaqueLightWhite = 'hsla(0, 0%, 100%, 0.2)';
// const lightGray = 'hsla(0, 0%, 0%, 0.2)';

const gray20 = '#EBEBEB';
const gray40 = '#dcdcdc';

const red = 'red';

// const quickSilver = '#a5a39d';
const nickel = '#7F7D76';
const nickelDark = '#454440';
// const cardinal90 = '#a10c2d';
// const platinum = '#EBEBEB';
// const silver = '#C0C0C0';
// const queenBlue = '#3A6EA5';
// const yaleBlue = '#004E98';

const brand = {
  main: darkWhite,
  secondLight: white,
  secondDark: red,
};

const text = lightWhite;
const background = grey90;

// !!!!
const secondaryBackground = '#f6f8f8';
// !!!!

const colors = {
  white,
  black,
  text,
  background,
  secondaryBackground,

  primary: brand.main,
  primaryDark: brand.secondDark,
  secondary: lightWhite,
  secondaryDark: nickelDark,
  muted: opaqueLightWhite,
  highlight: brand.secondLight,
  heading: white,

  error: red,
  brand,

  brands: {
    // skype: 'rgb(0, 175, 240)',
    // viber: '#bcaec7',
    // whatsapp: '#25d366',
    // telegram: '#0088cc',
  },

  header: {
    text,
    bg: black,
    nav: {
      socialLink: grey20,
      item: {
        text: brand.main,
        borderColor: grey70,
        hoverBg: grey30,
        focusBg: grey40,
        activeBg: grey50,
        boxShadowColor: brand.secondDark,
      },
      submenu: {
        bg: grey05,
      },
      languageSwitch: {
        selected: brand.main,
      },
    },
  },

  footer: {
    text,
    bg: black,
    highlight: brand.secondLight,
    colophon: {
      top: {
        bg: grey20,
      },
      bottom: {
        bg: grey90,
      },
    },
  },

  input: {
    focusBoxShadow: brand.secondDark,
    required: red,
  },

  modal: {
    text,
    bg: background,
  },

  tables: {
    head: background,
    odd: background,
    even: secondaryBackground,
  },
};

colors.button = {
  text,
  bg: gray20,
  border: gray20,
  hoverBg: gray40,
  hoverBorder: gray40,
  primary: {
    text: black,
    bg: colors.primary,
    border: colors.primary,
    hoverBg: colors.primary,
    hoverBorder: colors.primaryDark,
  },
  secondary: {
    text: white,
    bg: nickel,
    border: nickel,
    hoverBg: colors.secondaryDark,
    hoverBorder: colors.secondaryDark,
  },
};
module.exports = colors;
