import BaseLayout from './BaseLayout';
import { ContainerFullWidth } from '../Container';

const FullWidthLayout = ({ cover, title, headline, context, children }) => (
  <BaseLayout cover={cover} title={title} headline={headline} context={context}>
    <ContainerFullWidth>{children}</ContainerFullWidth>
  </BaseLayout>
);

export default FullWidthLayout;
