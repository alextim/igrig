import mq from '@/theme/media-queries';
import sizes from '@/theme/sizes';

const styleMain = {
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: sizes.header.sm,
  paddingBottom: sizes.header.sm,
  [mq.lg]: {
    marginTop: sizes.header.lg,
    paddingLeft: sizes.aside,
    paddingBottom: sizes.header.lg,
  },
};

const Main = ({ children }) => <main css={styleMain}>{children}</main>;

export default Main;
