/* eslint-disable import/no-unresolved */
import { Location } from '@reach/router';

import NavItem from './NavItem';
import useMainNavItems from '../../hooks/useMainNavtems';

const styleWrap = {
  gridArea: 'nav',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const AsideNavigation = () => {
  const navItems = useMainNavItems();

  return (
    <Location>
      {({ location: { pathname } }) => (
        <nav css={styleWrap}>
          {navItems.map(({ title, to }) => (
            <NavItem key={to} to={to} active={to === pathname} title={title} />
          ))}
        </nav>
      )}
    </Location>
  );
};

export default AsideNavigation;
