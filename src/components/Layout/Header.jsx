import colors from '../../theme/colors';
import sizes from '../../theme/sizes';
import mq from '../../theme/media-queries';
import shadows from '../../theme/shadows';
import container from '../../theme/container';

// const rootPath = `${__PATH_PREFIX__}/`;
//   if (location.pathname === rootPath) {

import Navbar from '../Navbar';

const styleHeader = {
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: sizes.header.sm,
  padding: `0 ${container.p.sm}`,
  color: colors.header.text,
  backgroundColor: colors.header.bg,
  boxShadow: shadows.raised,
  contain: 'layout',
  zIndex: 200,
  [mq.lg]: {
    height: sizes.header.lg,
    padding: `0 ${container.p.lg}`,
  },
};

const Header = () => (
  <header id="header" css={styleHeader}>
    <Navbar />
  </header>
);

export default Header;
