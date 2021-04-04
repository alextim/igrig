/** @jsx jsx */
import { jsx } from '@emotion/react';
import { GatsbyImage } from 'gatsby-plugin-image';

import card from '../../../theme/card';

import getCardSchema from '../../SEO/getCardSchema';

import ReadMore from '../../blog/ReadMore';
import Published from '../../blog/Published';

const PostCard = ({
  data: { slug: to, cover, title, headline, metaDescription, datePublished, dateModified },
  readMore,
}) => (
  <article css={card.wrap}>
    <script type="application/ld+json">
      {JSON.stringify(
        getCardSchema({
          to,
          title,
          headline: headline || metaDescription,
          cover,
          datePublished,
          dateModified,
          pageType: 'BlogPosting',
        }),
      )}
    </script>

    {cover && cover.sm && (
      <a href={to}>
        <GatsbyImage
          image={cover.sm.childImageSharp.gatsbyImageData}
          alt={cover.alt}
          title={cover.title}
        />
      </a>
    )}
    <div css={card.textWrap}>
      <a href={to} css={card.link}>
        <h2 css={card.heading}>{title}</h2>
      </a>
      <Published date={datePublished} />
      <ReadMore to={to} title={readMore} />
    </div>
  </article>
);

export default PostCard;
