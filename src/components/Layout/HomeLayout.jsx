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
  /*
    height: 'calc(100 * var(--vh, 1vh))',
    minHeight: '-webkit-fill-available',
  */
};

const styleMain = {
  position: 'fixed',
  width: '100%',
  top: sizes.header.sm,
  bottom: sizes.footer.sm,
  overflow: 'hidden',
  [mq.lg]: {
    top: sizes.header.lg,
    left: sizes.aside,
    bottom: sizes.footer.lg,
    // width: 'auto',
    /**
     * HACK: https://github.com/nolimits4web/swiper/issues/2914#issuecomment-493384617
     *
     */
    /*
    overflow: 'hidden',
    */
  },
};

const styleFooterWrap = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
};

const HomeLayout = ({ context, children }) => {
  /**
   * The trick to viewport units on mobile
   * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
   *
   */
  /*
  React.useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight / 100;
      document.querySelector(':root').style.setProperty('--vh', `${vh}px`);
    };
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);
    window.addEventListener('touchmove', handleResize, false);

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('touchmove', handleResize);
    };
  }, []);
  */
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
