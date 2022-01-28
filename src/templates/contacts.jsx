import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import utils from '@alextim/utils';

import useOrgContacts from '@/hooks/useOrgContacts';

import SEO from '@/components/SEO';
import Layout from '@/components/Layout/FullWidthLayout';

import mq from '@/theme/media-queries';
import Section from '@/components/Section';
import Icon from '@/components/Icon';
import styleHtmlDef from './styles/styleHtml';
// import sizes from '../../../theme/sizes';

const styleHtml = (t) => ({
  ...styleHtmlDef,
  'p:first-of-type::first-letter': {
    float: 'left',
    padding: `0 ${t.space[2]} 0`,
    color: 'red',
    fontSize: '3em',
    lineHeight: 1,
  },
});

const styleImage = (t) => ({
  [mq.lg]: {
    float: 'left',
    width: '25%',
    marginRight: t.space[5],
    marginBottom: t.space[2],
  },
});

const styleWrap = (t) => ({
  display: 'grid',
  gridGap: t.space[8],
  [t.mq.lg]: {
    gridAutoFlow: 'column',
  },
});

const styleItemWrap = {
  display: 'grid',
  gridTemplateRows: '4rem repeat(auto-fill, 2rem)',
  justifyItems: 'center',
  alignItems: 'center',
};

const styleIcon = {
  width: '3em',
  height: '3em',
};

const ContactItems = ({ icon, items, formatTitle, formatTo }) => {
  if (!items) {
    return null;
  }
  return (
    <div css={styleItemWrap}>
      <Icon name={icon} css={styleIcon} />
      {items.map((el) => (
        <a key={el} href={formatTo(el)} target="_blank" rel="nofollow noopener noreferrer">
          {formatTitle(el)}
        </a>
      ))}
    </div>
  );
};

const Contacts = () => {
  const { email, voice } = useOrgContacts();
  const { whatsapp, telegram } = voice || {};
  return (
    <div css={styleWrap}>
      <ContactItems
        icon="envelope"
        items={email}
        formatTo={(x) => `mailto:${x}`}
        formatTitle={(x) => x}
      />
      <ContactItems
        icon="whatsapp"
        items={whatsapp ? [whatsapp] : null}
        formatTo={utils.whatsappUrl}
        formatTitle={utils.formatPhone}
      />
      <ContactItems
        icon="telegram"
        items={telegram ? [telegram] : null}
        formatTo={utils.telegramUrl}
        formatTitle={(x) => x}
      />
    </div>
  );
};

const ContactsTemplate = ({ data, location: { pathname }, pageContext: { locale } }) => {
  const {
    translations,
    address,
    mainNav,
    socialLinks,
    page: { cover, title, metaTitle, headline, metaDescription, noindex, html },
  } = data;

  return (
    <Layout
      title={title}
      headline={headline}
      context={{ translations, address, mainNav, socialLinks }}
    >
      <SEO
        locale={locale}
        title={metaTitle}
        description={metaDescription}
        pathname={pathname}
        noindex={noindex}
      />
      <Section>
        {cover && <GatsbyImage css={styleImage} image={getImage(cover.sm)} alt={cover.alt} />}
        {html && <div css={styleHtml} dangerouslySetInnerHTML={{ __html: html }} />}
      </Section>
      <Section>
        <Contacts />
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
