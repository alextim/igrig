/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';

import PostList from '../../components/blog/PostList';

const PhotoProjectListTemplate = ({ data, location: { pathname }, pageContext }) => (
  <PostList data={data} pathname={pathname} pageContext={pageContext} readMore="post.see" />
);

export default PhotoProjectListTemplate;

export const pageQuery = graphql`
  query PhotoProjectListQuery($locale: String!, $skip: Int!, $limit: Int!, $type: String!) {
    page: mdPage(slug: { regex: "//photo-projects//" }, locale: { eq: $locale }) {
      ...MdPageFragment
    }
    posts: allMdPost(
      sort: { fields: [featured, datePublished], order: [ASC, DESC] }
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
