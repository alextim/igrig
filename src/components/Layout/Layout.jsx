import BaseLayout from './BaseLayout';

import Container from '../Container';

const Layout = ({ cover, title, headline, context, children }) => (
  <BaseLayout cover={cover} title={title} headline={headline} context={context}>
    <Container>{children}</Container>
  </BaseLayout>
);

export default Layout;
