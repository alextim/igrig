import { graphql } from 'gatsby';

import PostList from './components/PostList';

const CategoryTemplate = ({ data, location: { pathname }, pageContext }) => {
  const { category } = pageContext;
  const {
    page: { title: defaultTitle },
  } = data;

  const title = `${defaultTitle} ${category}`;

  return <PostList data={data} pathname={pathname} pageContext={pageContext} title={title} />;
};

export default CategoryTemplate;

export const pageQuery = graphql`
  query categoryQuery(
    $locale: String!
    $category: String
    $skip: Int!
    $limit: Int!
    $type: String!
  ) {
    page: mdPage(slug: { regex: "//category//" }, locale: { eq: $locale }) {
      ...MdPageFragment
    }
    posts: allMdPost(
      limit: $limit
      skip: $skip
      sort: { fields: [featured, datePublished], order: [ASC, DESC] }
      filter: {
        category: { elemMatch: { title: { in: [$category] } } }
        locale: { eq: $locale }
        type: { eq: $type }
      }
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
