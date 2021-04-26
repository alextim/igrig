/** @jsx jsx */
import { jsx } from '@emotion/react';

import mq from '../../theme/media-queries';
import fonts from '../../theme/fonts';

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

  '@media screen and (max-width: 280px)': {
    fontSize: '1.5rem',
  },

  '@media screen and (min-width: 281px) and (max-width: 320px)': {
    fontSize: '2rem',
  },

  '@media screen and (min-width: 750px)': {
    fontSize: '3rem',
    paddingRight: '11rem',
  },

  '@media screen and (orientation: landscape) and (min-width: 750px)': {
    fontSize: '2.5rem',
    paddingRight: '11rem',
  },

  [mq.lg]: {
    display: 'none',
  },
};

/**
 * https://cloudfour.com/thinks/responsive-images-101-part-2-img-required/
 *
 *
 */
const Hero = ({ navEdges, images }) => {
  const alt = images[0].image.alt;
  const heroMobile = images[0].image.sm.childImageSharp.fixed;
  const heroTablet = images[1].image.sm.childImageSharp.fixed;
  const heroDesktop = images[2].image.sm.childImageSharp.fixed;

  return (
    <div css={styleWrap}>
      <picture css={styleImage}>
        <source media="(min-width: 992px)" srcSet={heroDesktop.srcWebp} />
        <source media="(min-width: 992px)" srcSet={heroDesktop.src} />
        <source media="(orientation: landscape) and (min-width: 992px)" srcSet={heroTablet.srcWebp} />
        <source media="(orientation: landscape) and (min-width: 992px)" srcSet={heroTablet.src} />
        <source media="(min-width: 750px)" srcSet={heroTablet.srcWebp} />
        <source media="(min-width: 750px)" srcSet={heroTablet.src} />
        <source media="(max-width: 480px)" srcSet={heroMobile.srcWebp} />
        <source media="(max-width: 480px)" srcSet={heroMobile.src} />
        <img src={heroMobile.src} alt={alt} />
      </picture>
      <div css={styleTextWrap}>
        {navEdges.map(({ node: { title: navItemTitle, to } }, i) => (
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
