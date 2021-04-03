/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';

import { space } from '../../theme/space';

import SEO from '../../components/SEO';
import Layout from '../../components/Layout';

import PostInfo from '../../components/blog/PostInfo';
import LastUpdated from '../../components/blog/LastUpdated';

const styleHtml = {
  marginBottom: space[8],
  textAlign: 'justify',
};

const PhotographyPostTemplate = ({ data }) => {
  const {
    translations,
    address,
    mainNav,
    footerNav,
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
      html,
      locale,
      slug,
    },
  } = data;

  return (
    <Layout
      title={title}
      headline={headline}
      context={{ translations, address, mainNav, footerNav, socialLinks }}
    >
      <SEO
        locale={locale}
        title={metaTitle}
        description={metaDescription}
        headline={headline}
        pathname={slug}
        noindex={noindex}
        datePublished={datePublished}
        dateModified={dateModified}
        pageType="BlogPosting"
        imgPath={cover?.sm?.publicURL}
      />
      <PostInfo datePublished={datePublished} />
      {html && <div css={styleHtml} dangerouslySetInnerHTML={{ __html: html }} />}
      <LastUpdated date={dateModified} />
    </Layout>
  );
};

export default PhotographyPostTemplate;

export const postQuery = graphql`
  query PhotographyPostQuery($id: String!, $locale: String!) {
    post: mdPost(id: { eq: $id }) {
      ...MdPostFragment
    }
    address: address(locale: { eq: $locale }) {
      ...AddressFragment
    }
    mainNav: allMainNav(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          title
          to
          submenu {
            title
            to
          }
        }
      }
    }
    footerNav: allFooterNav(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          title
          to
        }
      }
    }
    socialLinks: allSocialLink(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          code
          to
          title
        }
      }
    }
    translations: allTranslation(filter: { locale: { eq: $locale } }, limit: 1000) {
      edges {
        node {
          key
          value
        }
      }
    }
  }
`;
