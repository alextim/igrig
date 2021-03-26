/** @jsx jsx */
import { jsx } from '@emotion/react';
import mq from '../../theme/media-queries';
import sizes from '../../theme/sizes';
// import container from '../../theme/container';

const styleMain = {
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '800px',
  margin: '0 auto',
  marginTop: sizes.header.sm,
  // padding: `0 ${container.p.sm} ${sizes.header.sm}`,
  [mq.lg]: {
    marginTop: sizes.header.lg,
    // padding: `0 ${container.p.lg} ${sizes.header.lg} calc(${container.p.lg} + ${sizes.aside})`,
  },
};

const Main = ({ children }) => <main css={styleMain}>{children}</main>;

export default Main;
