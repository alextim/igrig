import mq from '@/theme/media-queries';
import { space } from '@/theme/space';

import { ContainerHeading } from '../Container';

const styleHeadline = {
  marginTop: '1rem',
};

const styleWrap = {
  margin: `${space[7]} auto`,
  textAlign: 'center',
  [mq.md]: {
    lineHeight: 1.25,
  },
};

const PageHeader = ({ title, headline }) => (
  <div css={styleWrap}>
    <ContainerHeading>
      {title && <h1>{title}</h1>}
      {headline && <p css={styleHeadline}>{headline}</p>}
    </ContainerHeading>
  </div>
);

export default PageHeader;
