/* @jsx jsx */
import { jsx } from '@emotion/react';

import LayoutBase from './LayoutBase';
import { ContainerFullWidth } from '../Container';

const LayoutFullWidth = ({ cover, title, headline, context, children }) => (
  <LayoutBase cover={cover} title={title} headline={headline} context={context}>
    <ContainerFullWidth>{children}</ContainerFullWidth>
  </LayoutBase>
);

export default LayoutFullWidth;
