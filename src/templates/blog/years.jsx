import { graphql } from 'gatsby';

import PostList from './components/PostList';

const YearTemplate = ({ data, location: { pathname }, pageContext }) => {
  const { year } = pageContext;
  const {
    page: { title: defaultTitle },
  } = data;

  const title = `${defaultTitle} ${year}`;

  return <PostList data={data} pathname={pathname} pageContext={pageContext} title={title} />;
};

export default YearTemplate;

export const pageQuery = graphql`
  query yearQuery($locale: String!, $year: Int, $skip: Int!, $limit: Int!, $type: String!) {
    page: mdPage(slug: { regex: "//years//" }, locale: { eq: $locale }) {
      ...MdPageFragment
    }
    posts: allMdPost(
      limit: $limit
      skip: $skip
      sort: { fields: [featured, datePublished], order: [ASC, DESC] }
      filter: { year: { eq: $year }, locale: { eq: $locale }, type: { eq: $type } }
    ) {
      edges {
        node {
          ...MdPostCardFragment
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
