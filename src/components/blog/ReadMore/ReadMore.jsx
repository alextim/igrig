/** @jsx jsx */
import { jsx } from '@emotion/react';

import colors from '../../../theme/colors';
import { fontSizes } from '../../../theme/font-sizes';
import { space } from '../../../theme/space';

const styleWrap = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyItems: 'center',
  paddingTop: space[5],
};

const styleIcon = {
  width: space[4],
  height: space[4],
  marginRight: space[2],
  fill: colors.text,
};

const styleText = {
  fontSize: fontSizes[0],
  textTransform: 'uppercase',
  letterSpacing: '0.15rem',
};

const ReadMore = ({ to, title }) => {
  return (
    <a href={to} css={styleWrap}>
      <svg aria-hidden="true" css={styleIcon} viewBox="0 0 24 24">
        <use xlinkHref="#icon__article4" />
      </svg>
      <span css={styleText}>{title}</span>
    </a>
  );
};

export default ReadMore;
