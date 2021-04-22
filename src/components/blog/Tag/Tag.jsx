/** @jsx jsx */
import { jsx } from '@emotion/react';

const style = (t) => ({
  margin: `0 ${t.space[4]} ${t.space[3]} 0`,
  padding: `${t.space[1]} ${t.space[2]}`,
  color: t.colors.text,
  backgroundColor: t.colors.muted,
  fontSize: t.fontSizes[0],
  textDecoreation: 'none',
  ':hover': {
    color: t.colors.highlight,
  },
  ':active, :hover, :focus': {
    outline: 0,
    textDecoration: 'none',
  },
});

const Tag = ({ to, children }) => (
  <a key={to} href={to} css={style}>
    {children}
  </a>
);

export default Tag;
