/* eslint-disable react-hooks/rules-of-hooks */
import { getPageSchema } from '@alextim/at-seo';

import { locales } from '@/i18n/i18n';
import { useLocale } from '@/i18n/i18n-context';
import useOrgAddress from '@/hooks/useOrgAddress';
import config from '../../../igrig.content/config/website';

const getCardSchema = ({ to, title, headline, cover, datePublished, dateModified, pageType = 'Article' }) => {
  const { locale } = useLocale();
  const { name: organizationName } = useOrgAddress();

  const { htmlLang } = locales[locale];
  const { siteUrl, siteLogo } = config;

  if (pageType !== 'Article' && pageType !== 'BlogPosting') {
    throw new Error(`getCardSchema: Unsupported pageType ${pageType}!`);
  }

  const pageUrl = `${siteUrl}${to}`;

  let imgUrl;
  if (cover && cover.sm && cover.sm.publicURL) {
    imgUrl = `${siteUrl}${cover.sm.publicURL}`;
  }

  return getPageSchema({
    organizationName,
    siteUrl,
    siteLogo,
    pageUrl,
    title,
    headline,
    htmlLang,
    imgUrl,
    datePublished,
    dateModified,
    pageType,
  });
};

export default getCardSchema;
