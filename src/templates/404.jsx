import { graphql } from 'gatsby';

import SEO from '@/components/SEO';
import Layout from '@/components/Layout';

const wrapStyle = (t) => ({
  textAlign: 'center',
  marginTop: t.space[8],
  marginBottom: t.space[8],
});
const headingStyle = (t) => ({
  fontFamily: 'monospace',
  fontSize: t.fontSizes[12],
});

const NotFoundTemplate = ({ data, location: { pathname }, pageContext: { locale } }) => {
  const {
    translations,
    address,
    mainNav,
    socialLinks,
    page: { title, metaTitle, metaDescription, html },
  } = data;

  return (
    <Layout context={{ translations, address, mainNav, socialLinks }}>
      <SEO
        locale={locale}
        title={metaTitle}
        description={metaDescription}
        pathname={pathname}
        noindex
      />
      <div css={wrapStyle}>
        <h1 css={headingStyle}>{title}</h1>
        {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
      </div>
    </Layout>
  );
};

export default NotFoundTemplate;

export const pageQuery = graphql`
  query NotFoundPageQuery($id: String!, $locale: String!) {
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
