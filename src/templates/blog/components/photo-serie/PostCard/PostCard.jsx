import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import card from '@/theme/card';

import getCardSchema from '@/components/SEO/getCardSchema';

import ReadMore from '../../ReadMore';
import Published from '../../Published';

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
        <GatsbyImage image={getImage(cover.sm)} alt={cover.alt} title={cover.title} />
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
