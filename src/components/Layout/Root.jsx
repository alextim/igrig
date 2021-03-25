/** @jsx jsx */
import { jsx } from '@emotion/react';

// const rootPath = `${__PATH_PREFIX__}/`;
//   if (location.pathname === rootPath) {

const styleRoot = {
  minHeight: '100vh',
  maxWidth: '100vw',
  // minHeight: '-webkit-fill-available',
  display: 'flex',
  flexDirection: 'column',
};

const Root = ({ children }) => <div css={styleRoot}>{children}</div>;

export default Root;
