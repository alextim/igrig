/** @jsx jsx */
import { jsx } from '@emotion/react';
import utils from '@alextim/utils';

import mq from '../../theme/media-queries';
import SocialLink from './SocialLink';
import useSocialLinks from '../../hooks/useSocialLinks';

import Icon from '../Icon';

const styleWrap = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [mq.lg]: {
    gridArea: 'aside',
    justifyContent: 'space-evenly',
    margin: '0 1rem',
  },
};

const styleIcon = {
  height: '1.2rem',
  width: '1.2rem',
};

const SocialLinks = () => {
  const items = useSocialLinks();
  if (!items) {
    return null;
  }

  return (
    <div css={styleWrap}>
      {Object.keys(items).map((key) => (
        <SocialLink
          key={key}
          icon={<Icon name={key} css={styleIcon} />}
          name={utils.upperFirst(key)}
          to={items[key].to}
          title={items[key].title}
        />
      ))}
    </div>
  );
};

export default SocialLinks;
