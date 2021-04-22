import { withArtDirection, getImage } from 'gatsby-plugin-image';

const getArtImages = (image) => {
  if (!image) {
    return undefined;
  }
  if (image.sm && image.xl) {
    return withArtDirection(getImage(image.sm), [
      {
        media: '(min-width: 480px)',
        image: getImage(image.xl),
      },
    ]);
  }
  return getImage(image.sm || image.xl);
};

export default getArtImages;
