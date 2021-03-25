/** @jsx jsx */
import { jsx } from '@emotion/react';

const style = (t) => ({
  color: t.colors.footer.text,
  textDecoration: 'none',
  margin: `0 ${t.space[2]}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    color: t.colors.footer.highlight,
    transition: 'all 0.4s ease-out 0s',
  },
});

const SocialLink = ({ icon, name, title, to }) => (
  <a css={style} href={to} target="_blank" rel="noreferrer" aria-label={name} title={title}>
    {icon}
  </a>
);

export default SocialLink;
