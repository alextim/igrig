import { graphql } from 'gatsby';

import Post from './components/Post';

const PostTemplate = ({ data, location: { pathname }, pageContext: { locale } }) => (
  <Post data={data} pathname={pathname} locale={locale} />
);

export default PostTemplate;

export const postQuery = graphql`
  query PostQuery($id: String!, $locale: String!) {
    post: mdPost(id: { eq: $id }) {
      ...MdPostFragment
    }
    recentPosts: allMdPost(
      sort: { fields: [datePublished], order: DESC }
      limit: 10
      filter: { locale: { eq: $locale } }
    ) {
      edges {
        node {
          ...MdPostShortInfoFragment
        }
      }
    }
    featuredPosts: allMdPost(
      sort: { fields: [datePublished], order: DESC }
      limit: 10
      filter: { featured: { eq: true }, locale: { eq: $locale } }
    ) {
      edges {
        node {
          ...MdPostShortInfoFragment
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
