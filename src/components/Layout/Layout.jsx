/* @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';

import theme from '../../theme';

import AppContextProvider from '../../context';
import GlobalStyle from '../GlobalStyle';

import PageHeader from '../DefaultHeader';

import Footer from '../Footer';

import Root from './Root';
import Header from './Header';
import Main from './Main';
import Aside from './Aside';

const Layout = ({ title, headline, context, children }) => (
  <AppContextProvider value={context}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Root>
        <Header />
        <Main>
          <PageHeader title={title} headline={headline} />
          {children}
        </Main>
        <Aside />
        <Footer />
      </Root>
    </ThemeProvider>
  </AppContextProvider>
);

export default Layout;
