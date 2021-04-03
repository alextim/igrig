/** @jsx jsx */
import { jsx } from '@emotion/react';

import React from 'react';
import debounce from 'lodash/debounce';

import getImgSources from '../../../helpers/getImgSources';

import mq from '../../../theme/media-queries';
import fonts from '../../../theme/fonts';
// import sizes from '../../../theme/sizes';

const styleWrap = {
  display: 'grid',
  overflow: 'hidden',
  // height: '100%',
};

const styleTextWrap = {
  gridArea: '1/1',
  display: 'grid',
  gridTemplateRows: 'repeat(5, 10%) 50% ',
  alignItems: 'center',
  justifyItems: 'center',
  textTransform: 'uppercase',
  fontFamily: fonts.heading,
  fontSize: '2.5rem',
  [mq.lg]: {
    display: 'none',
  },
};

const styleImage = {
  gridArea: '1/1',
  objectFit: 'cover',
  // height: '100%',
  // marginBottom: sizes.footer,
  // height: `calc(100 * var(--vh, 1vh) - ${sizes.header.sm} - ${sizes.footer})`,
  // minHeight: `calc(100vh - ${sizes.header.sm} - ${sizes.footer})`,
};

const Hero = ({ cover, items }) => {
  const hero = React.createRef();

  React.useEffect(() => {
    const handleResize = () => {
      if (!hero || !hero.current) {
        return;
      }
      const header = document.getElementById('header');
      const footer = document.getElementById('footer');
      hero.current.style.height = `${
        window.innerHeight - (header.offsetHeight + footer.offsetHeight)
      }px`;
    };
    const debouncedResize = debounce(() => {
      handleResize();
    }, 500);

    window.addEventListener('resize', debouncedResize);

    return () => {
      // debounce.cancel();
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  const src = {
    320: 280,
    480: 440,
    800: 760,
    1024: 980,
    1920: '',
  };

  const { srcset, sizes, defaultSrc } = getImgSources(src, '/assets/images/hero/hero-', 'jpg');

  return (
    <div css={styleWrap}>
      <img
        ref={hero}
        srcSet={srcset}
        sizes={sizes}
        src={defaultSrc}
        alt={cover.alt}
        css={styleImage}
      />
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
