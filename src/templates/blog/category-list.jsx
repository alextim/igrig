import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import CategoryList from '../../components/blog/CategoryList';

import styleHtml from '../../components/styles/styleHtml';

const CategoryListTemplate = ({
  data,
  location: { pathname },
  pageContext: { categories, locale },
}) => {
  const {
    translations,
    address,
    mainNav,
    socialLinks,
    page: { html, title, metaTitle, headline, metaDescription, noindex },
  } = data;

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
      <CategoryList categories={categories} count />
    </Layout>
  );
};

export default CategoryListTemplate;

export const pageQuery = graphql`
  query categoryListQuery($locale: String!) {
    page: mdPage(slug: { regex: "//category-list//" }, locale: { eq: $locale }) {
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
