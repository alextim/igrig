import React from 'react';

import PostListBase from '../blog/PostListBase';
import PostCard from './PostCard';

const PostList = ({ data, pageContext, title }) => (
  <PostListBase
    data={data}
    pageContext={pageContext}
    title={title}
    readMore="post.see"
    cardComponent={(key, cardData, readMore) => (
      <PostCard key={key} data={cardData} readMore={readMore} />
    )}
  />
);

export default PostList;
