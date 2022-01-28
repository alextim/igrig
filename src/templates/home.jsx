import { graphql } from 'gatsby';

import SEO from '@/components/SEO';

import HomeLayout from '@/components/Layout/HomeLayout';

import Hero from '@/components/Hero';

const HomeTemplate = ({ data, location: { pathname }, pageContext: { locale } }) => {
  const {
    translations,
    address,
    mainNav,
    socialLinks,
    // eslint-disable-next-line no-unused-vars
    page: { sections, metaTitle, metaDescription, noindex },
  } = data;

  let heroImages;
  if (sections) {
    heroImages = sections[0].items;
  }

  return (
    <HomeLayout context={{ translations, address, mainNav, socialLinks }}>
      <SEO
        locale={locale}
        title={metaTitle}
        description={metaDescription}
        pathname={pathname}
        noindex={noindex}
        article={false}
      />
      <Hero navEdges={mainNav.edges} heroImages={heroImages} />
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
      noindex
      sections {
        items {
          image {
            alt
            title
            sm {
              childImageSharp {
                gatsbyImageData(layout: FIXED, formats: [AUTO, WEBP], quality: 100)
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
