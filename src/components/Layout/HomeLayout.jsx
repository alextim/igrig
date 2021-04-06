/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';

import theme from '../../theme';
import mq from '../../theme/media-queries';
import sizes from '../../theme/sizes';

import AppContextProvider from '../../context';
import GlobalStyle from '../GlobalStyle';

import Footer from '../Footer';

import Header from './Header';
import Aside from './Aside';

const styleRoot = {
  height: '100%',
  minWidth: '320px',
  maxHeight: '100vh',
};

const styleMain = {
  position: 'fixed',
  width: '100%',
  top: sizes.header.sm,
  bottom: sizes.footer,
  overflow: 'hidden',
  [mq.lg]: {
    top: sizes.header.lg,
    left: sizes.aside,
    // width: 'auto',
    /**
     * HACK: https://github.com/nolimits4web/swiper/issues/2914#issuecomment-493384617
     *
     */
    // overflow: 'hidden',
    // marginTop: sizes.header.lg,
    // paddingLeft: sizes.aside,
  },
};

const styleFooterWrap = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
};

const HomeLayout = ({ context, children }) => {
  return (
    <AppContextProvider value={context}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div css={styleRoot}>
          <Header />
          <div css={styleMain}>{children}</div>
          <Aside />
          <div css={styleFooterWrap}>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </AppContextProvider>
  );
};
export default HomeLayout;
