/** @jsx jsx */
import { jsx } from '@emotion/react';
import { GatsbyImage } from 'gatsby-plugin-image';

import getArtImages from '../../../helpers/getArtImages';

import mq from '../../../theme/media-queries';
import fonts from '../../../theme/fonts';
// import sizes from '../../../theme/sizes';

const styleWrap = {
  display: 'grid',
  overflow: 'hidden',
  height: '100%',
};

const styleTextWrap = {
  gridArea: '1/1',

  display: 'grid',
  gridTemplateRows: 'repeat(5, 10%) 50%',
  alignItems: 'center',
  justifyItems: 'center',
  textTransform: 'uppercase',
  fontFamily: fonts.heading,
  fontSize: '3rem',
  [mq.lg]: {
    display: 'none',
  },
};

const styleImage = {
  gridArea: '1/1',
  // objectFit: 'cover',
  // height: '100%',
  // marginBottom: sizes.footer,
  // height: `calc(100 * var(--vh, 1vh) - ${sizes.header.sm} - ${sizes.footer})`,
  // minHeight: `calc(100vh - ${sizes.header.sm} - ${sizes.footer})`,
};
/*

const styleImage = {
  gridArea: '1/1',
  // minHeight: `calc(100 * var(--vh, 1vh) - ${sizes.header.sm} - ${sizes.footer})`,
  // minHeight: `calc(100vh - ${sizes.header.sm} - ${sizes.footer})`,
};      <GatsbyImage
        style={styleImage}
        image={getImage(cover.sm)}
        layout="fullWidth"
        alt={cover.alt}
      />
        <img ref={hero} src={cover.sm.publicURL} alt={cover.alt} css={styleImage} />

      */
const Hero = ({ cover, items }) => {
  const images = getArtImages(cover);
  return (
    <div css={styleWrap}>
      {images && (
        <GatsbyImage style={styleImage} image={images} layout="fullWidth" alt={cover.alt} />
      )}
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
