/** @jsx jsx */
// import React from 'react';
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
  minHeight: '100vh',
  // height: '100%',
  minWidth: '320px',
  // minHeight: 'calc(100 * var(--vh, 1vh))',
  // minHeight: '-webkit-fill-available',
  display: 'flex',
  flexDirection: 'column',
};

const styleMain = {
  // flex: '1 1 auto',
  position: 'fixed',
  top: sizes.header.sm,
  bottom: sizes.footer,
  left: 0,
  right: 0,
  width: '100%',
  overflow: 'hidden',
  [mq.lg]: {
    top: sizes.header.lg,
    left: sizes.aside,
    width: 'auto',
    /**
     * HACK: https://github.com/nolimits4web/swiper/issues/2914#issuecomment-493384617
     *
     */
    // overflow: 'hidden',
    // marginTop: sizes.header.lg,
    // paddingLeft: sizes.aside,
  },
};

const styleSpacer = {
  width: '100%',
  flex: '1 1 auto',
  // display: 'none',
};

const HomeLayout = ({ context, children }) => {
  /**
   * The trick to viewport units on mobile
   * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
   *
   */
  /*
  const handleResize = () => {
    const root = document.querySelector(':root');
    const vh = window.innerHeight / 100;
    root.style.setProperty('--vh', `${vh}px`);
  };
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  */
  return (
    <AppContextProvider value={context}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div css={styleRoot}>
          <Header />
          <div css={styleSpacer} />
          <div css={styleMain}>{children}</div>
          <Aside />
          <Footer />
        </div>
      </ThemeProvider>
    </AppContextProvider>
  );
};
export default HomeLayout;
