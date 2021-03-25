/** @jsx jsx */
import { jsx } from '@emotion/react';

import mq from '../../theme/media-queries';
import sizes from '../../theme/sizes';
import container from '../../theme/container';

const styleContentWrap = {
  width: '100%',
  ...container.main,
  flex: '1 1 auto',
  marginTop: sizes.header.sm,
  paddingBottom: sizes.header.sm,
  display: 'flex',
  flexDirection: 'column',
  [mq.lg]: {
    ...container.main[mq.lg],
    marginTop: sizes.header.lg,
    paddingBottom: sizes.header.lg,
    flexDirection: 'row',
  },
};

const Content = ({ children }) => <div css={styleContentWrap}>{children}</div>;

export default Content;
