import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Location } from '@reach/router';

import BODY_PREVENT_SCROLLING from '../../constants/body-prevent-scrolling';

import mq from '../../theme/media-queries';
import sizes from '../../theme/sizes';
import { space } from '../../theme/space';
import fonts from '../../theme/fonts';

import useSiteHeadline from '../../hooks/useSiteHeadline';

import Logo from '../Logo';
import LanguageSwitch from '../LanguageSwitch';
import Hamburger from '../Hamburger';

import Menu from './Menu';
import { fontSizes } from '../../theme/font-sizes';

const styleWrap = {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gridTemplateAreas: `
    "logo   main"
    "slogan slogan"
  `,
  alignItems: 'center',
  lineHeight: 1,
  width: '100%',
  [mq.lg]: {
    gridTemplateColumns: 'auto 1fr auto',
    gridTemplateAreas: `
      "logo slogan main"
    `,
  },
};

const styleL = {
  gridArea: 'logo',
};

const styleR = {
  gridArea: 'main',
  justifySelf: 'end',
  alignSelf: 'center',
  display: 'inline-flex',
  alignItems: 'center',
  // fontFamily: fonts.heading,
  fontSize: fontSizes[1],
};

const styleSlogan = {
  gridArea: 'slogan',
  textAlign: 'center',
  // fontSize: fontSizes[1],
  fontSize: '0.9rem',
  fontFamily: fonts.slogan,
  marginTop: '0.84375rem',
  [mq.lg]: {
    justifySelf: 'end',
    alignSelf: 'flex-end',
    margin: '0 2rem 0',
    fontSize: '1.625rem',
  },
};

const styleMenuWrap = {
  display: 'flex',
  flexDirection: 'column',

  backgroundColor: 'inherit',

  position: 'absolute',
  top: sizes.header.sm,
  height: `calc(100vh - ${sizes.header.sm})`,

  /* no scrolling: no drop-down submenu or few items */
  overflow: 'hidden',
  /* scrolling: has dropdown submenu or many items */
  // overflowY: 'scroll',
  // overflowY: 'auto',

  transition: 'transform 0.5s linear',
  willChange: 'transform',

  // menu hidden by default on small screens
  pointerEvents: 'none',
  visibility: 'hidden',
  transform: 'translateX(-110%)',

  width: '100%',
  margin: 'auto',
  left: 0,
  zIndex: 201,

  [mq.lg]: {
    display: 'none',
  },
};

const styleMenuWrapOpen = {
  ...styleMenuWrap,
  pointerEvents: 'auto',
  visibility: 'visible',
  transform: 'unset',
};

const styleShowOnDesktop = {
  display: 'none',
  [mq.lg]: {
    display: 'flex',
  },
};

const styleShowOnMob = {
  marginTop: '3rem',
  '.lang-switch-item': {
    ':after': {
      margin: '0 1rem',
    },
  },
};

const Navbar = () => {
  const siteHeadline = useSiteHeadline();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setIsMenuOpenWrap = (value) => {
    const list = document.body.classList;
    const hasClass = list.contains(BODY_PREVENT_SCROLLING);
    if (value) {
      if (!hasClass) {
        list.add(BODY_PREVENT_SCROLLING);
      }
    } else if (hasClass) {
      list.remove(BODY_PREVENT_SCROLLING);
    }
    setIsMenuOpen(value);
  };
  const toggleOpen = () => setIsMenuOpenWrap(!isMenuOpen);
  const close = () => setIsMenuOpenWrap(false);

  return (
    <Location>
      {({ location: { pathname } }) => (
        <React.Fragment>
          <div css={styleWrap}>
            <div css={styleL}>
              <Logo onClick={close} />
            </div>
            <div css={styleR}>
              <LanguageSwitch extraStyle={styleShowOnDesktop} closeMenu={close} />
              <Hamburger
                open={isMenuOpen}
                bp={mq.lg}
                m={`0 -0.75rem 0 ${space[4]}`}
                onClick={toggleOpen}
              />
            </div>
            <div css={styleSlogan}>{siteHeadline}</div>
          </div>
          <div css={isMenuOpen ? styleMenuWrapOpen : styleMenuWrap}>
            <Menu pathname={pathname} onClick={close} />
            <LanguageSwitch extraStyle={styleShowOnMob} closeMenu={close} />
          </div>
        </React.Fragment>
      )}
    </Location>
  );
};

export default Navbar;
