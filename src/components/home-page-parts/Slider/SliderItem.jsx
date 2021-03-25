/** @jsx jsx */
import { jsx } from '@emotion/react';
import { GatsbyImage, withArtDirection, getImage } from 'gatsby-plugin-image';

import mq from '../../../theme/media-queries';
import colors from '../../../theme/colors';
import { fontSizes } from '../../../theme/font-sizes';

const styleWrap = {
  display: 'grid',
  height: '100%',
};

const styleImage = {
  gridArea: '1/1',
};

const styleTextWrap = {
  gridArea: '1/1',
  position: 'relative',
  // This centers the other elements inside the hero component
  placeItems: 'center',
  display: 'grid',
};

const styleTitle = {
  fontSize: fontSizes[3],
  color: colors.white,
  textAlign: 'center',
  textTransform: 'uppercase',
  textShadow: '1px 1px 6px rgba(0, 0, 0, 0.7)',
  [mq.lg]: {
    fontSize: fontSizes[7],
  },
};

const SliderItem = ({ title, image }) => {
  let images;
  if (image) {
    if (image.sm && image.xl) {
      images = withArtDirection(getImage(image.sm), [
        {
          media: '(min-width: 480px)',
          image: getImage(image.xl),
        },
      ]);
    } else {
      images = getImage(image.sm || image.xl);
    }
  }
  return (
    <div css={styleWrap}>
      {images && (
        <GatsbyImage image={images} alt={image.alt} title={image.title} style={styleImage} />
      )}
      <div css={styleTextWrap}>
        <div css={styleTitle}>{title}</div>
      </div>
    </div>
  );
};

export default SliderItem;
