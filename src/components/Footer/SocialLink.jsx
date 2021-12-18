/** @jsx jsx */
import { jsx } from '@emotion/react';

// import { space } from '../../theme/space';
import colors from '../../theme/colors';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.footer.text,
  textDecoration: 'none',
  ':hover': {
    color: colors.footer.highlight,
    transition: 'all 0.4s ease-out 0s',
  },
  ':last-of-type': {
    margin: 0,
  },
};

const SocialLink = ({ icon, name, title, to }) => (
  <a css={style} href={to} target="_blank" rel="noreferrer" aria-label={name} title={title}>
    {icon}
  </a>
);

export default SocialLink;
