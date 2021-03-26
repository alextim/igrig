/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Location } from '@reach/router';

import BODY_PREVENT_SCROLLING from '../../constants/body-prevent-scrolling';

import i18n from '../../i18n';

import mq from '../../theme/media-queries';
import sizes from '../../theme/sizes';
import { space } from '../../theme/space';
import { fontSizes } from '../../theme/font-sizes';
import fonts from '../../theme/fonts';

import useSiteHeadline from '../../hooks/useSiteHeadline';

import Logo from '../Logo';
import LanguageSwitch from '../LanguageSwitch';
import Hamburger from '../Hamburger';

import Menu from './Menu';

const styleWrap = {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gridTemplateAreas: `
    "aside main"
    "s    s"
  `,
  alignItems: 'center',
  width: '100%',
  [mq.lg]: {
    gridTemplateColumns: `${sizes.aside} 1fr`,
    gridTemplateAreas: '"aside main"',
  },
};

const styleL = {
  gridArea: 'aside',
};

const styleR = {
  display: 'inline-flex',
  alignItems: 'center',
  gridArea: 'main',
  justifySelf: 'end',
  fontFamily: fonts.heading,
  fontSize: '10px',
};

const styleSlogan = {
  gridArea: 's',
  textAlign: 'center',
  fontSize: fontSizes[1],
  margin: `${space[1]} 0 ${space[2]}`,
  [mq.lg]: {
    justifySelf: 'center',
    gridArea: 'main',
    padding: 0,
  },
};

const styleMenuWrap = {
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

const styleMenuOpen = {
  pointerEvents: 'auto',
  visibility: 'visible',
  transform: 'unset',
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
              <LanguageSwitch closeMenu={close} />
              {i18n.purePath(pathname) !== '/' && (
                <Hamburger
                  open={isMenuOpen}
                  bp={mq.lg}
                  m={`0 0 0 ${space[4]}`}
                  onClick={toggleOpen}
                />
              )}
            </div>
            <div css={styleSlogan}>{siteHeadline}</div>
          </div>
          <div css={{ ...styleMenuWrap, ...(isMenuOpen ? styleMenuOpen : {}) }}>
            <Menu pathname={pathname} onClick={close} />
          </div>
        </React.Fragment>
      )}
    </Location>
  );
};

export default Navbar;
