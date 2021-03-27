/* @jsx jsx */
import { jsx } from '@emotion/react';
import LayoutBase from './LayoutBase';

import Container from '../Container';

const Layout = ({ cover, title, headline, context, children }) => (
  <LayoutBase cover={cover} title={title} headline={headline} context={context}>
    <Container>{children}</Container>
  </LayoutBase>
);

export default Layout;
