import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TagList from '../../components/blog/TagList';

import styleHtml from '../../components/styles/styleHtml';

const TagListTemplate = ({ data, location: { pathname }, pageContext: { tags } }) => {
  const { translations, address, mainNav, socialLinks, page } = data;

  const { html, title, metaTitle, headline, metaDescription, noindex, locale } = page;

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
        pathname={pathname}
        noindex={noindex}
      />
      {html && <div css={styleHtml} dangerouslySetInnerHTML={{ __html: html }} />}
      <TagList tags={tags} count />
    </Layout>
  );
};

export default TagListTemplate;

export const pageQuery = graphql`
  query tagListQuery($locale: String!) {
    page: mdPage(slug: { regex: "//tag-list//" }, locale: { eq: $locale }) {
      ...MdPageFragment
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
