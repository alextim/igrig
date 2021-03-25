/* @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';

import theme from '../../theme';

import AppContextProvider from '../../context';
import GlobalStyle from '../GlobalStyle';

import PageHeader from '../DefaultHeader';

import Footer from '../Footer';

import Root from './Root';
import Header from './Header';
import Content from './Content';
import Main from './Main';
import Aside from './Aside';

const Layout = ({ title, headline, context, children }) => {
  return (
    <AppContextProvider value={context}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Root>
          <Header />
          <Content>
            <Main>
              <PageHeader title={title} headline={headline} />
              {children}
            </Main>
            <Aside />
          </Content>
          <Footer />
        </Root>
      </ThemeProvider>
    </AppContextProvider>
  );
};
export default Layout;
