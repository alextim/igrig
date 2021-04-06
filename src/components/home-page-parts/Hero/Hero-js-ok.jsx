/** @jsx jsx */
import { jsx } from '@emotion/react';

import mq from '../../../theme/media-queries';
import fonts from '../../../theme/fonts';

const styleWrap = {
  display: 'grid',
  overflow: 'hidden',
  height: '100%',
  alignItems: 'center',
  justifyItems: 'center',
};

const styleImage = {
  gridArea: '1/1',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

const columnCount = 20;

const styleTextWrap = {
  gridArea: '1/1',
  width: '100%',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  display: 'grid',
  gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
  justifyItems: 'end',
  textTransform: 'uppercase',
  fontFamily: fonts.logo,
  fontSize: '2.3rem',
  lineHeight: 1.5,
  '@media (orientation: landscape)': {
    fontSize: '2rem',
    lineHeight: 1.25,
  },
  '@media screen and (min-width: 750px)': {
    fontSize: '3rem',
    paddingRight: '11rem',
  },
  '@media screen and (orientation: landscape) and (min-width: 750px)': {
    color: 'green',
    fontSize: '2.5rem',
    paddingRight: '11rem',
  },
  [mq.lg]: {
    display: 'none',
  },
};

const Hero = ({ cover, items }) => {
  return (
    <div css={styleWrap}>
      <picture css={styleImage}>
        <source media="(min-width: 992px)" srcSet="/assets/images/hero/hero-1920w.webp" />
        <source media="(min-width: 992px)" srcSet="/assets/images/hero/hero-1920w.jpg" />
        <source
          media="(orientation: landscape) and (min-width: 992px)"
          srcSet="/assets/images/hero/hero-1024w.webp"
        />
        <source
          media="(orientation: landscape) and (min-width: 992px)"
          srcSet="/assets/images/hero/hero-1024w.jpg"
        />
        <source media="(min-width: 750px)" srcSet="/assets/images/hero/hero-1024w.webp" />
        <source media="(min-width: 750px)" srcSet="/assets/images/hero/hero-1024w.jpg" />
        <source media="(max-width: 480px)" srcSet="/assets/images/hero/hero-480w.webp" />
        <source media="(max-width: 480px)" srcSet="/assets/images/hero/hero-480w.jpg" />
        <img src="/assets/images/hero/hero-480w.jpg" alt={cover?.alt} />
      </picture>
      <div css={styleTextWrap}>
        {items.map(({ node: { title: navItemTitle, to } }, i) => (
          <a
            key={to}
            href={to}
            css={{
              gridRow: i + 1,
              gridColumn: `1 / ${columnCount + 1 - i}`,
            }}
          >
            {navItemTitle}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Hero;
