/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import PostListBase from '../blog/PostListBase';
import PostCard from './PostCard';

const PostList = ({ data, pathname, pageContext, title }) => (
  <PostListBase
    data={data}
    pathname={pathname}
    pageContext={pageContext}
    title={title}
    readMore="post.see"
    cardComponent={(key, cardData, readMore) => (
      <PostCard key={key} data={cardData} readMore={readMore} />
    )}
  />
);

export default PostList;
