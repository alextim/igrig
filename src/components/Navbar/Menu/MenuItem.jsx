import { Link } from 'gatsby';

import colors from '../../../theme/colors';
import fontWeights from '../../../theme/font-weights';

const activeStyle = {
  boxShadow: `0 -2px 0 ${colors.header.nav.item.boxShadowColor} inset`,
};

const linkStyle = {
  // position: 'relative',
  padding: '1rem 2rem',

  width: '100%',
  // height: '100%',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  /**
   * scrolling doesn't work in mobile due
   * touchAction: 'none
   */
  // touchAction: 'none',
  // opacity: 1,
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontWeight: fontWeights.semibold,

  color: colors.header.nav.item.text,

  '&:hover, &:active, &:focus': {
    textDecoration: 'none',
    outline: '0',
  },

  '&:focus': {
    backgroundColor: colors.header.nav.item.focusBg,
  },

  '&:hover': {
    color: colors.highlight,
    backgroundColor: colors.header.nav.item.hoverBg,
  },

  '&:active': {
    backgroundColor: colors.header.nav.item.activeBg,
  },
};

const MenuItem = ({ title, to, active, onClick }) => (
  <Link css={{ ...linkStyle, ...(active ? activeStyle : {}) }} to={to} onClick={onClick}>
    {title}
  </Link>
);

export default MenuItem;
