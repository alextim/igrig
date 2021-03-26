/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link } from 'gatsby';

import i18n from '../../i18n';
import { useLocale } from '../../i18n/i18n-context';

import mq from '../../theme/media-queries';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import { space } from '../../theme/space';

import LogoSvg from '../../assets/images/logo-igrig.svg';

// const SITE_LOGO = '/assets/images/logo-igrig.svg';

const styleWrap = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',

  color: colors.header.nav.item.text,

  ':hover, :active, :focus': {
    textDecoration: 'none',
  },

  [mq.lg]: {
    // marginRight: '3rem',
  },
};

const styleTextWrap = {
  display: 'inline-flex',
  textTransform: 'uppercase',
  fontFamily: fonts.heading,
  fontSize: '10px',
  ':first-letter': {
    fontSize: '12px',
  },
};

const styleWord = {
  marginRight: space[1],
  ':first-letter': {
    fontSize: '12px',
  },
  ':last-type-of': {
    marginRight: 0,
  },
};

const styleImg = {
  width: '2rem',
  height: '2rem',
  background: 'white',
  [mq.lg]: {
    width: '2rem',
    height: '2rem',
  },
};

//       <img src="" alt={i18n.locales[locale].siteTitle} height="32" width="32" css={styleImg} />
const Logo = ({ onClick }) => {
  const { locale } = useLocale();
  const to = i18n.localizePath('/', locale);
  return (
    <Link css={styleWrap} to={to} onClick={onClick}>
      <LogoSvg css={styleImg} />
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
