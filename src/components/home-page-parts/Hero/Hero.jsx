import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import mq from '../../../theme/media-queries';
import fonts from '../../../theme/fonts';
// import sizes from '../../../theme/sizes';

const styleWrap = {
  display: 'grid',
  height: '100%',
  [mq.lg]: {
    display: 'none',
  },
};

const styleTextWrap = {
  gridArea: '1/1',
  position: 'relative',
  // This centers the other elements inside the hero component
  display: 'grid',
  gridTemplateRows: 'repeat(5, 1fr) 5fr',
  alignItems: 'center',
  justifyItems: 'center',
  textTransform: 'uppercase',
  fontFamily: fonts.heading,
  fontSize: '3rem',
};

const styleImage = {
  gridArea: '1/1',
  // minHeight: `calc(100 * var(--vh, 1vh) - ${sizes.header.sm} - ${sizes.footer})`,
  // minHeight: `calc(100vh - ${sizes.header.sm} - ${sizes.footer})`,
};

const Hero = ({ cover, items }) => (
  <div css={styleWrap}>
    {cover && (
      <GatsbyImage
        style={styleImage}
        image={getImage(cover.sm)}
        layout="fullWidth"
        alt={cover.alt}
      />
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

export default Hero;
