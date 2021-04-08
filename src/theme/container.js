import mq from './media-queries';

const margin = '0 auto';

const hero = {
  maxWidth: '1280px',
  margin,
};

const body = {
  maxWidth: '1280px',
  margin,
  padding: '0 1.5rem',
  [mq.lg]: {
    padding: '0 2rem',
  },
};

const p = {
  sm: '1.5rem',
  lg: '2rem',
};

const heading = {
  maxWidth: '800px',
};

const content = {
  maxWidth: '800px',
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

  heading,
  content,
};

export default container;
