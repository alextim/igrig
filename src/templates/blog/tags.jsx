import { graphql } from 'gatsby';

import PostList from './components/PostList';

const TagTemplate = ({ data, location: { pathname }, pageContext }) => {
  const { tag } = pageContext;
  const {
    page: { title: defaultTitle },
  } = data;

  const title = `${defaultTitle} ${tag}`;

  return <PostList data={data} pathname={pathname} pageContext={pageContext} title={title} />;
};

export default TagTemplate;

export const pageQuery = graphql`
  query tagQuery($locale: String!, $tag: String, $skip: Int!, $limit: Int!, $type: String!) {
    page: mdPage(slug: { regex: "//tags//" }, locale: { eq: $locale }) {
      ...MdPageFragment
    }
    posts: allMdPost(
      limit: $limit
      skip: $skip
      sort: { fields: [featured, datePublished], order: [ASC, DESC] }
      filter: {
        type: { eq: $type }
        locale: { eq: $locale }
        tags: { elemMatch: { title: { in: [$tag] } } }
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
