/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';

import Tag from '../Tag';

const styleWrap = (t) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: t.space[4],
  paddingBottom: t.space[5],
  color: t.colors.text,
  textDecoration: 'none',
  ':hover': {
    color: t.colors.highlight,
  },
});

const TagList = ({ tags, count = false }) => {
  if (!tags) {
    return null;
  }
  return (
    <div css={styleWrap}>
      {Object.keys(tags).map((to) => (
        <Tag key={to}>
          {tags[to].title}
          {count && `: ${tags[to].count}`}
        </Tag>
      ))}
    </div>
  );
};

export default React.memo(TagList);
