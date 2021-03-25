/** @jsx jsx */
import { jsx } from '@emotion/react';
import utils from '@alextim/utils';

import mq from '../../theme/media-queries';
import SocialLink from './SocialLink';
// import useSocialLinks from '../../hooks/useSocialLinks';

import Icon from '../Icon';

const wrapStyle = {
  justifySelf: 'end',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [mq.lg]: {
    gridArea: 'aside',
    justifySelf: 'center',
  },
};

const SocialLinks = ({ items }) => (
  <div css={wrapStyle}>
    {Object.keys(items).map((key) => (
      <SocialLink
        key={key}
        icon={<Icon name={key} />}
        name={utils.upperFirst(key)}
        to={items[key].to}
        title={items[key].title}
      />
    ))}
  </div>
);

export default SocialLinks;
