import { graphql } from 'gatsby';

import SEO from '@/components/SEO';

import Layout from '@/components/Layout';
import Sections from '@/components/Sections';

const PageTemplate = ({ data, location: { pathname }, pageContext: { locale } }) => {
  const {
    translations,
    address,
    mainNav,
    socialLinks,
    page: { title, metaTitle, headline, metaDescription, cover, noindex, sections, html },
  } = data;

  return (
    <Layout
      title={title}
      headline={headline}
      cover={cover}
      context={{ translations, address, mainNav, socialLinks }}
    >
      <SEO
        locale={locale}
        title={metaTitle}
        description={metaDescription}
        pathname={pathname}
        noindex={noindex}
      />
      {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
      <Sections data={sections} />
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query PageQuery($id: String!, $locale: String!) {
    page: mdPage(id: { eq: $id }) {
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
