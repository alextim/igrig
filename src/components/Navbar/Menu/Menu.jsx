import useMainNavItems from '@/hooks/useMainNavtems';
import MenuItem from './MenuItem';

const styleWrap = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'inherit',
};

const Menu = ({ pathname, onClick }) => {
  const navItems = useMainNavItems();

  return (
    <nav css={styleWrap}>
      {navItems.map(({ title, to }) => (
        <MenuItem key={to} to={to} title={title} active={to === pathname} onClick={onClick} />
      ))}
    </nav>
  );
};

export default Menu;
