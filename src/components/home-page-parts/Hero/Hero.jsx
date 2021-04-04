/** @jsx jsx */
import { jsx } from '@emotion/react';

import mq from '../../../theme/media-queries';
import fonts from '../../../theme/fonts';

const styleWrap = {
  overflow: 'hidden',
  height: '100%',
  backgroundImage: 'url(/assets/images/hero/hero-800w.jpg)',

  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  [mq.md]: {
    backgroundImage: 'url(/assets/images/hero/hero-1024w.jpg)',
  },
  [mq.lg]: {
    backgroundImage: 'url(/assets/images/hero/hero-1920w.jpg)',
  },
};

const styleTextWrap = {
  display: 'grid',
  gridTemplateRows: 'repeat(5, 10%) 50%',
  alignItems: 'center',
  justifyItems: 'center',
  height: '100%',
  textTransform: 'uppercase',
  fontFamily: fonts.heading,
  fontSize: '2.5rem',
  [mq.lg]: {
    display: 'none',
  },
};

const Hero = ({ items }) => {
  return (
    <div css={styleWrap}>
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
