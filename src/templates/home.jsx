import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';

import HomeLayout from '../components/Layout/HomeLayout';

import Hero from '../components/Hero';

const HomeTemplate = ({ data }) => {
  const {
    translations,
    address,
    mainNav,
    socialLinks,
    // eslint-disable-next-line no-unused-vars
    page: { cover, sections, metaTitle, metaDescription, noindex, locale, slug },
  } = data;

  return (
    <HomeLayout context={{ translations, address, mainNav, socialLinks }}>
      <SEO
        locale={locale}
        title={metaTitle}
        description={metaDescription}
        pathname={slug}
        noindex={noindex}
        article={false}
      />
      <Hero alt={cover?.alt} items={mainNav.edges} />
    </HomeLayout>
  );
};

export default HomeTemplate;

export const pageQuery = graphql`
  query HomePageQuery($id: String!, $locale: String!) {
    page: mdPage(id: { eq: $id }) {
      title
      headline
      metaTitle
      metaDescription
      cover {
        alt
        title
        sm {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        xl {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      noindex
      slug
      locale
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
