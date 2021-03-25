import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';

import HomeLayout from '../components/Layout/HomeLayout';

import Hero from '../components/home-page-parts/Hero';
// eslint-disable-next-line no-unused-vars
import Slider from '../components/home-page-parts/Slider';

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
      <Hero cover={cover} items={mainNav.edges} />
      <Slider items={sections[0].items} />
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
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      noindex
      slug
      locale
      sections {
        items {
          title
          subtitle
          text
          image {
            alt
            title
            sm {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
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
