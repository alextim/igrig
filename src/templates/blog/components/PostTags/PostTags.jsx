import React from 'react';

import Tag from '../Tag';

const styleWrap = (t) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: `${t.space[4]} 0 ${t.space[5]}`,
});

const PostTags = ({ tags }) => {
  if (!tags) {
    return null;
  }
  return (
    <div css={styleWrap}>
      {tags.map(({ to, title }) => (
        <Tag key={to} to={to}>
          {title}
        </Tag>
      ))}
    </div>
  );
};

export default React.memo(PostTags);
