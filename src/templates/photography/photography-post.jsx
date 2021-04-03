/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { graphql } from 'gatsby';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { space } from '../../theme/space';

import SEO from '../../components/SEO';
import Layout from '../../components/Layout';

import PostInfo from '../../components/blog/PostInfo';
import LastUpdated from '../../components/blog/LastUpdated';

const styleHtml = {
  marginBottom: space[8],
  textAlign: 'justify',
};

const images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
];

const PhotographyPostTemplate = ({ data }) => {
  const {
    translations,
    address,
    mainNav,
    footerNav,
    socialLinks,
    post: {
      title,
      metaTitle,
      headline,
      metaDescription,
      cover,
      noindex,
      datePublished,
      dateModified,
      html,
      locale,
      slug,
    },
  } = data;

  const [isOpen, setIsOpen] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  return (
    <Layout
      title={title}
      headline={headline}
      context={{ translations, address, mainNav, footerNav, socialLinks }}
    >
      <SEO
        locale={locale}
        title={metaTitle}
        description={metaDescription}
        headline={headline}
        pathname={slug}
        noindex={noindex}
        datePublished={datePublished}
        dateModified={dateModified}
        pageType="BlogPosting"
        imgPath={cover?.sm?.publicURL}
      />
      <PostInfo datePublished={datePublished} onClick={() => setIsOpen(true)} />
      {html && <div css={styleHtml} dangerouslySetInnerHTML={{ __html: html }} />}
      <LastUpdated date={dateModified} />
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </Layout>
  );
};

export default PhotographyPostTemplate;

export const postQuery = graphql`
  query PhotographyPostQuery($id: String!, $locale: String!) {
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
    footerNav: allFooterNav(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          title
          to
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
