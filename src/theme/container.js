import mq from './media-queries';

const minWidth = '320px';
const margin = '0 auto';

const hero = {
  minWidth,
  maxWidth: '1280px',
  margin,
};

const body = {
  minWidth,
  maxWidth: '1280px',
  margin,
  padding: '0 1rem',
  [mq.lg]: {
    padding: '0 2rem',
  },
};

const p = {
  sm: '1rem',
  lg: '2rem',
};

const header = body;
const main = body;
const footer = body;

const container = {
  p,
  hero,
  header,
  main,
  footer,
};

export default container;
