/** @jsx jsx */
// import React from 'react';
import { jsx, ThemeProvider } from '@emotion/react';

import theme from '../../theme';
import mq from '../../theme/media-queries';
import sizes from '../../theme/sizes';
import container from '../../theme/container';

import AppContextProvider from '../../context';
import GlobalStyle from '../GlobalStyle';

import Footer from '../Footer';

import Header from './Header';
// import Main from './Main';
import Aside from './Aside';

const styleRoot = {
  minHeight: '100vh',
  // minHeight: 'calc(100 * var(--vh, 1vh));',
  // minHeight: '-webkit-fill-available',
  display: 'flex',
  flexDirection: 'column',
};

const styleContentWrap = {
  width: '100%',
  ...container.main,
  flex: '1 1 auto',
  marginTop: sizes.header.sm,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  //  height: `calc(100 * var(--vh, 1vh) - ${sizes.footer})`,
  // height: `calc(100vh - ${sizes.footer})`,

  [mq.lg]: {
    ...container.main[mq.lg],
    marginTop: sizes.header.lg,
    flexDirection: 'row',
  },
};

const styleMain = {
  flex: 1,
  [mq.lg]: {
    order: 2,
    /**
     * https://github.com/nolimits4web/swiper/issues/2914#issuecomment-493384617
     *
     */
    overflow: 'hidden',
  },
};

const Content = ({ children }) => <div css={styleContentWrap}>{children}</div>;

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
          <Content>
            <div css={styleMain}>{children}</div>
            <Aside />
          </Content>
          <Footer />
        </div>
      </ThemeProvider>
    </AppContextProvider>
  );
};
export default HomeLayout;
