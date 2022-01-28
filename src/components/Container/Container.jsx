import mq from '../../theme/media-queries';
import container from '../../theme/container';

export const ContainerHero = ({ children }) => children;

const styleFW = {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  width: '100%',
  padding: `0 ${container.p.sm}`,
  [mq.lg]: {
    padding: `0 ${container.p.lg}`,
  },
};

export const ContainerFullWidth = ({ children, ...props }) => (
  <div css={styleFW} {...props}>
    {children}
  </div>
);

const styleHeading = {
  ...styleFW,
  maxWidth: container.heading.maxWidth,
};

export const ContainerHeading = ({ children, ...props }) => (
  <div css={styleHeading} {...props}>
    {children}
  </div>
);

const styleContent = {
  ...styleFW,
  maxWidth: container.content.maxWidth,
};

const Container = ({ children, ...props }) => (
  <div css={styleContent} {...props}>
    {children}
  </div>
);

export default Container;
