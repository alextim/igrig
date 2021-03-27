/* @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import theme from '../../theme';

import AppContextProvider from '../../context';
import GlobalStyle from '../GlobalStyle';

import PageHeader from '../PageHeader';

import Footer from '../Footer';

import Root from './Root';
import Header from './Header';
import Main from './Main';
import Aside from './Aside';

const styleImage = {
  marginBottom: theme.space[8],
};

const LayoutBase = ({ cover, title, headline, context, children }) => (
  <AppContextProvider value={context}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Root>
        <Header />
        <Main>
          {cover && (
            <GatsbyImage
              image={getImage(cover.sm)}
              layout="fullWidth"
              alt={cover.alt}
              css={styleImage}
            />
          )}
          <PageHeader title={title} headline={headline} />
          {children}
        </Main>
        <Aside />
        <Footer />
      </Root>
    </ThemeProvider>
  </AppContextProvider>
);

export default LayoutBase;
