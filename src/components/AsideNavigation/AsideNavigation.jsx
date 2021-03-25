/* eslint-disable import/no-unresolved */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Location } from '@reach/router';

import NavItem from './NavItem';
import useMainNavItems from '../../hooks/useMainNavtems';

const styleWrap = {
  gridArea: 'a',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around;',
};

const AsideNavigation = () => {
  const navItems = useMainNavItems();

  return (
    <Location>
      {({ location: { pathname } }) => (
        <div css={styleWrap}>
          {navItems.map(({ title, to }, i) => (
            <NavItem key={i} to={to} active={to === pathname} title={title} />
          ))}
        </div>
      )}
    </Location>
  );
};

export default AsideNavigation;
