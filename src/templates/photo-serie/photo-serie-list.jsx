/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';

import PostList from '../../components/photo-serie/PostList';

const PhotoSerieListTemplate = ({ data, pageContext }) => (
  <PostList data={data} pageContext={pageContext} />
);

export default PhotoSerieListTemplate;

export const pageQuery = graphql`
  query PhotoSerieListQuery($locale: String!, $skip: Int!, $limit: Int!, $type: String!) {
    #
    # blogPath
    # regex: "//photo-serie//"
    #
    page: mdPage(slug: { regex: "//photo-series//" }, locale: { eq: $locale }) {
      ...MdPageFragment
    }
    posts: allMdPost(
      sort: { fields: [datePublished], order: DESC }
      limit: $limit
      skip: $skip
      filter: { locale: { eq: $locale }, type: { eq: $type } }
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
