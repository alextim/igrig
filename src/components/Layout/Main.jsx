/** @jsx jsx */
import { jsx } from '@emotion/react';
import mq from '../../theme/media-queries';

const styleMain = {
  flex: 1,
  [mq.lg]: {
    order: 2,
  },
};

const Main = ({ children }) => {
  return <main css={styleMain}>{children}</main>;
};

export default Main;
