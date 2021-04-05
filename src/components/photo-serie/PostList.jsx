import React from 'react';

import PostListBase from '../blog/PostListBase';
import PostCard from './PostCard';

const PostList = ({ data, pageContext, title, readMore }) => (
  <PostListBase
    data={data}
    pageContext={pageContext}
    title={title}
    readMore={readMore}
    cardComponent={(key, cardData) => <PostCard key={key} data={cardData} readMore="post.see" />}
  />
);

export default PostList;
