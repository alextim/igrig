import { getImage } from 'gatsby-plugin-image';

import mq from '@/theme/media-queries';
import fonts from '@/theme/fonts';

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

const getImages = (item) => {
  if (!item || !item.image || !item.image.sm) {
    return [];
  }
  const img = getImage(item.image.sm);
  if (!img) {
    return [];
  }
  return [img.images.fallback.src, img.images.sources[0].srcSet];
};

/**
 * https://cloudfour.com/thinks/responsive-images-101-part-2-img-required/
 *
 *
 */
const Hero = ({ navEdges, heroImages }) => {
  let heroMobile;
  let heroMobileWebp;
  let heroTablet;
  let heroTabletWebp;
  let heroDesktop;
  let heroDesktopWebp;

  if (heroImages && heroImages[0] && heroImages[0].image && heroImages[0].image.sm) {
    [heroMobile, heroMobileWebp] = getImages(heroImages[0]);
    [heroTablet, heroTabletWebp] = getImages(heroImages[1]);
    [heroDesktop, heroDesktopWebp] = getImages(heroImages[2]);
  }

  return (
    <div css={styleWrap}>
      {heroMobile && (
        <picture css={styleImage}>
          <source media="(min-width: 992px)" srcSet={heroDesktopWebp} />
          <source media="(min-width: 992px)" srcSet={heroDesktop} />
          <source media="(orientation: landscape) and (min-width: 992px)" srcSet={heroTabletWebp} />
          <source media="(orientation: landscape) and (min-width: 992px)" srcSet={heroTablet} />
          <source media="(min-width: 750px)" srcSet={heroTabletWebp} />
          <source media="(min-width: 750px)" srcSet={heroTablet} />
          <source media="(max-width: 480px)" srcSet={heroMobileWebp} />
          <source media="(max-width: 480px)" srcSet={heroMobile} />
          <img src={heroMobile} alt={heroImages[0].image.alt} />
        </picture>
      )}
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
