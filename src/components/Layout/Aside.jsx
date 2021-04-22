/** @jsx jsx */
import { jsx } from '@emotion/react';

import mq from '../../theme/media-queries';
import { space } from '../../theme/space';
import sizes from '../../theme/sizes';
import container from '../../theme/container';

import useSiteDescription from '../../hooks/useSiteDescription';

import AsideNavigation from '../AsideNavigation';

const styleAside = {
  display: 'none',
  [mq.lg]: {
    display: 'block',
    overflow: 'hidden',
    position: 'fixed',
    top: sizes.header.lg,
    left: 0,
    bottom: sizes.footer.lg,

    width: sizes.aside,
    padding: `${space[4]} ${container.p.lg} ${space[4]} ${container.p.lg}`,
  },
};

const styleInnerWrap = {
  height: '100%',
  display: 'grid',
  gridTemplateRows: '1fr auto 1fr',
  gridTemplateAreas: `
  "text"
  "nav"
   "."
  `,
};

const styleDescription = {
  gridArea: 'text',
};

const Aside = () => {
  const siteDescription = useSiteDescription();

  return (
    <aside css={styleAside}>
      <div css={styleInnerWrap}>
        <div css={styleDescription}>{siteDescription}</div>
        <AsideNavigation />
      </div>
    </aside>
  );
};

export default Aside;
