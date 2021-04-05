/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useWebPSupportCheck } from 'react-use-webp-support-check';

import mq from '../../../theme/media-queries';
import fonts from '../../../theme/fonts';

const styleWrap = {
  overflow: 'hidden',
  height: '100%',

  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

const styleTextWrap = {
  display: 'grid',
  gridTemplateRows: 'repeat(5, 10%) 50%',
  alignItems: 'center',
  justifyItems: 'center',
  height: '100%',
  textTransform: 'uppercase',
  fontFamily: fonts.logo,
  fontSize: '2.5rem',
  [mq.lg]: {
    display: 'none',
  },
};

const Hero = ({ items }) => {
  const supportsWebP = useWebPSupportCheck();
  const ext = supportsWebP ? 'webp' : 'jpg';
  const styleBg = {
    backgroundImage: `url(/assets/images/hero/hero-800w.${ext})`,
    [mq.md]: {
      backgroundImage: `url(/assets/images/hero/hero-1024w.${ext})`,
    },
    [mq.lg]: {
      backgroundImage: `url(/assets/images/hero/hero-1920w.${ext})`,
    },
  };

  return (
    <div css={{ ...styleWrap, ...styleBg }}>
      <div css={styleTextWrap}>
        {items.map(({ node: { title: navItemTitle, to } }, i) => (
          <a key={to} href={to} style={{ gridRow: i + 2 }}>
            {navItemTitle}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Hero;
