/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Section from '../components/Section';

const styleContactItemTitle = {
  marginBottom: '0.5rem',
  fontWeight: 'bold',
};
const styleAddressWrap = {
  marginBottom: '0.5rem',
};
const styleItemSeparator = {
  marginBottom: '0.5rem',
};

const ContactItemHeading = ({ title }) => <div css={styleContactItemTitle}>{title}</div>;

const Address = ({ data }) => {
  const {
    legalName,
    postalAddress: { addressCountry, addressLocality, postalCode, streetAddress },
  } = data;
  return (
    <div css={styleItemSeparator}>
      <ContactItemHeading title={legalName} />
      <div css={styleAddressWrap}>
        <div>{streetAddress}</div>
        <div>
          {addressLocality} {postalCode}
        </div>
        <div>{addressCountry}</div>
      </div>
    </div>
  );
};

const styleWrap3 = (t) => ({
  display: 'grid',
  gridGap: t.space[8],
  [t.mq.lg]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});

const ContactsTemplate = ({ data }) => {
  const {
    translations,
    address,
    mainNav,
    footerNav,
    socialLinks,
    page: { title, metaTitle, headline, metaDescription, noindex, locale, slug },
  } = data;

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
        pathname={slug}
        noindex={noindex}
      />

      <Section>
        <div css={styleWrap3}>
          <Address data={address} />
        </div>
      </Section>
    </Layout>
  );
};

export default ContactsTemplate;

export const pageQuery = graphql`
  query ContactsPageQuery($id: String!, $locale: String!) {
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
