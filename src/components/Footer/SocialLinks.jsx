import utils from '@alextim/utils';

import mq from '@/theme/media-queries';
import useSocialLinks from '@/hooks/useSocialLinks';
import Icon from '../Icon';
import SocialLink from './SocialLink';

const styleWrap = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marging: '0.2rem 0',

  [mq.lg]: {
    gridArea: 'aside',
    justifyContent: 'space-evenly',
    margin: '0.2rem 1rem',
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
