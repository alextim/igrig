/** @jsx jsx */
import { jsx } from '@emotion/react';

import mq from '../../theme/media-queries';
import fonts from '../../theme/fonts';
import useAssets from '../../hooks/useAssets';

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
    color: 'green',
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
const Hero = ({ alt, items }) => {
  const images = useAssets();
  const getImageURL = (name) => {
    const edge = images.find(({ node: { base } }) => base === name);
    if (!edge) {
      return null;
    }
    return edge.node.publicURL;
  };
  const hero480webp = getImageURL('hero-480w.jpg');
  const hero480jpg = getImageURL('hero-480w.jpg');
  const hero1024webp = getImageURL('hero-1024w.webp');
  const hero1024jpg = getImageURL('hero-1024w.jpg');
  const hero1920webp = getImageURL('hero-1920w.webp');
  const hero1920jpg = getImageURL('hero-1920w.jpg');
  return (
    <div css={styleWrap}>
      <picture css={styleImage}>
        <source media="(min-width: 992px)" srcSet={hero1920webp} />
        <source media="(min-width: 992px)" srcSet={hero1920jpg} />
        <source media="(orientation: landscape) and (min-width: 992px)" srcSet={hero1024webp} />
        <source media="(orientation: landscape) and (min-width: 992px)" srcSet={hero1024jpg} />
        <source media="(min-width: 750px)" srcSet={hero1024webp} />
        <source media="(min-width: 750px)" srcSet={hero1024jpg} />
        <source media="(max-width: 480px)" srcSet={hero480webp} />
        <source media="(max-width: 480px)" srcSet={hero480jpg} />
        <img src={hero480jpg} alt={alt} />
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
