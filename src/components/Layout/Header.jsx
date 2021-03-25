/** @jsx jsx */
import { jsx } from '@emotion/react';

import { space } from '../../theme/space';
import colors from '../../theme/colors';
import sizes from '../../theme/sizes';
import mq from '../../theme/media-queries';
import shadows from '../../theme/shadows';
import container from '../../theme/container';

// const rootPath = `${__PATH_PREFIX__}/`;
//   if (location.pathname === rootPath) {

import Navbar from '../Navbar';

const styleHeader = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: colors.header.bg,
  height: sizes.header.sm,
  boxShadow: shadows.raised,
  padding: `${space[2]} 0`,
  contain: 'layout',
  zIndex: 200,
  [mq.lg]: {
    height: sizes.header.lg,
  },
};

const styleInnerWrap = {
  // display: 'flex',
  // alignItems: 'center',
  // width: '100%',
  backgroundColor: 'inherit',
  color: colors.header.text,
  ...container.header,
};

const Header = () => (
  <header css={styleHeader}>
    <div css={styleInnerWrap}>
      <Navbar />
    </div>
  </header>
);

export default Header;
