/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';

import Post from '../../components/blog/Post';

const PhotoSeriePostTemplate = ({ data }) => (
  <Post data={data} options={{ showTimetoRead: false }} />
);

export default PhotoSeriePostTemplate;

export const postQuery = graphql`
  query PhotoSeriePostQuery($id: String!, $locale: String!) {
    post: mdPost(id: { eq: $id }) {
      ...MdPostFragment
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
