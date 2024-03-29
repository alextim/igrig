import { space } from '@/theme/space';

import SEO from '@/components/SEO';
import Layout from '@/components/Layout';

import PostInfo from '../PostInfo';
import LastUpdated from '../LastUpdated';
import PostTags from '../PostTags';

const styleHtml = {
  marginBottom: space[8],
  textAlign: 'justify',
};

const Post = ({ data, pathname, locale, options = { showTimeToRead: true } }) => {
  const {
    translations,
    address,
    mainNav,
    socialLinks,
    post: {
      title,
      metaTitle,
      headline,
      metaDescription,
      cover,
      noindex,
      datePublished,
      dateModified,
      timeToRead,
      tags,
      html,
    },
  } = data;
  // cover={cover}

  return (
    <Layout
      title={title}
      headline={headline}
      context={{ translations, address, mainNav, socialLinks }}
    >
      <SEO
        locale={locale}
        title={metaTitle}
        description={metaDescription}
        headline={headline}
        pathname={pathname}
        noindex={noindex}
        datePublished={datePublished}
        dateModified={dateModified}
        tags={tags}
        pageType="BlogPosting"
        imgPath={cover?.sm?.publicURL}
      />
      <PostInfo
        datePublished={datePublished}
        timeToRead={options.showTimeToRead ? timeToRead : undefined}
      />
      {html && <div css={styleHtml} dangerouslySetInnerHTML={{ __html: html }} />}
      <PostTags tags={tags} />
      {dateModified && ((datePublished && dateModified !== datePublished) || !datePublished) && (
        <LastUpdated date={dateModified} />
      )}
    </Layout>
  );
};

export default Post;
