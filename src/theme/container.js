/**
 * WP
 * ---------
 * 32 960 32
 *    720
 * 16     16
 *
 * Medium
 * ---------
 * 64 680 64
 * 24     24
 *
 *
 * WEB.dev
 * ---------
 * 32 800 32
 *
 *
 * github
 * ---------
 * 32 838 32
 *
 * Nationa Geographic
 * --------
 * 12 636 12
 * 1280 -for pictures
 *
 * nat-geo.ru
 * 20 644 20
 *
 * 500px
 * --------
 * 20 740 20
 */
import mq from './media-queries';

const margin = '0 auto';

const hero = {
  maxWidth: '1280px',
  margin,
};

const body = {
  maxWidth: '1280px',
  margin,
  padding: '0 1.25rem',
  [mq.lg]: {
    padding: '0 2rem',
  },
};

const p = {
  sm: '1.25rem',
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
