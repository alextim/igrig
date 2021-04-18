/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';

import Post from '../../components/blog/Post';

const PhotoProjectPostTemplate = ({ data, location: { pathname } }) => (
  <Post data={data} pathname={pathname} />
);

export default PhotoProjectPostTemplate;

export const postQuery = graphql`
  query PhotoProjectPostQuery($id: String!, $locale: String!) {
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
