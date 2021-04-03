/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link } from 'gatsby';

import i18n from '../../i18n';
import { useLocale } from '../../i18n/i18n-context';

import mq from '../../theme/media-queries';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import { space } from '../../theme/space';

const SITE_LOGO = '/assets/images/logo.png';

const styleWrap = {
  display: 'inline-flex',
  alignItems: 'baseline',

  color: colors.header.nav.item.text,

  ':hover, :active, :focus': {
    textDecoration: 'none',
  },
};

const styleTextWrap = {
  display: 'inline-flex',
  textTransform: 'uppercase',
  fontFamily: fonts.logo,
  marginLeft: '0.225rem',
  fontSize: '1.125rem',
  [mq.lg]: {
    marginLeft: '0.3rem',
    fontSize: '1.5rem',
  },
};

const styleWord = {
  marginRight: space[1],
  '::first-letter': {
    fontSize: '1.21875rem',
  },
  ':last-type-of': {
    marginRight: 0,
  },
  [mq.lg]: {
    '::first-letter': {
      fontSize: '1.625rem',
    },
  },
};

const styleImg = {
  width: '1.59375rem',
  height: '1.59375rem',
  [mq.lg]: {
    width: '2.125rem',
    height: '2.125rem',
  },
};

const Logo = ({ onClick }) => {
  const { locale } = useLocale();
  const to = i18n.localizePath('/', locale);
  return (
    <Link css={styleWrap} to={to} onClick={onClick}>
      <img
        src={SITE_LOGO}
        alt={i18n.locales[locale].siteTitle}
        height="26"
        width="26"
        css={styleImg}
      />
      <div css={styleTextWrap}>
        {i18n.locales[locale].siteTitle.split(' ').map((w) => (
          <span key={w} css={styleWord}>
            {w}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default Logo;
