/* eslint-disable react/no-array-index-key */
/** @jsx jsx */
import { jsx } from '@emotion/react';

// https://swiperjs.com/react
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

/**
 *
 * BUG
 *
 * Importing styles in separate files does't work in build neither with SCSS nor CSS
 * but in development mode it's OK
 *
 */
/*
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
*/
import 'swiper/swiper-bundle.min.css';

import mq from '../../../theme/media-queries';
import './swiper-styles.css';

import SliderItem from './SliderItem';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const styleWrap = {
  display: 'none',
  [mq.lg]: {
    display: 'block',
    height: '100%',
  },
};

// <Swiper slidesPerView={1} spaceBetween={0} navigation pagination autoplay loop>

const Slider = ({ items }) => (
  <div css={styleWrap}>
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      navigation
      pagination
      autoplay
      loop
      style={{ width: '100%', height: '100%' }}
    >
      {items &&
        items.map(({ title, image }, i) => (
          <SwiperSlide key={i}>
            <SliderItem title={title} image={image} />
          </SwiperSlide>
        ))}
    </Swiper>
  </div>
);

export default Slider;
