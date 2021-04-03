/** @jsx jsx */
import { jsx } from '@emotion/react';

import mq from '../../theme/media-queries';
import container from '../../theme/container';
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
export const ContainerHero = ({ children }) => children;

const styleFW = {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  width: '100%',
  padding: `0 ${container.p.sm}`,
  [mq.lg]: {
    padding: `0 ${container.p.lg}`,
  },
};

export const ContainerFullWidth = ({ children, ...props }) => (
  <div css={styleFW} {...props}>
    {children}
  </div>
);

const styleHeading = {
  ...styleFW,
  maxWidth: container.heading.maxWidth,
};

export const ContainerHeading = ({ children, ...props }) => (
  <div css={styleHeading} {...props}>
    {children}
  </div>
);

const styleContent = {
  ...styleFW,
  maxWidth: container.content.maxWidth,
};

const Container = ({ children, ...props }) => (
  <div css={styleContent} {...props}>
    {children}
  </div>
);

export default Container;
