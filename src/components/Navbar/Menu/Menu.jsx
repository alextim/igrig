/** @jsx jsx */
import { jsx } from '@emotion/react';

import MenuItem from './MenuItem';
import useMainNavItems from '../../../hooks/useMainNavtems';

const styleWrap = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'inherit',
};

const Menu = ({ pathname, onClick }) => {
  const navItems = useMainNavItems();

  return (
    <div css={styleWrap}>
      {navItems.map(({ title, to }, i) => (
        <MenuItem key={i} to={to} title={title} active={to === pathname} onClick={onClick} />
      ))}
    </div>
  );
};

export default Menu;
