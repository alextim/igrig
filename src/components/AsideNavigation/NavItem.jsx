/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link } from 'gatsby';

import colors from '../../theme/colors';
import fontWeights from '../../theme/font-weights';

const NavItem = ({ title, to, active }) => {
  const linkStyle = {
    padding: '1rem 0',

    whiteSpace: 'nowrap',
    cursor: 'pointer',
    opacity: 1,
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: fontWeights.semibold,

    color: colors.header.nav.item.text,

    boxShadow: active ? `0 -2px 0 ${colors.header.nav.item.boxShadowColor} inset` : 'unset',

    '&:hover, &:active, &:focus': {
      textDecoration: 'none',
      outline: '0',
    },

    '&:hover': {
      color: colors.highlight,
    },
  };

  return (
    <Link css={linkStyle} to={to}>
      {title}
    </Link>
  );
};

export default NavItem;
