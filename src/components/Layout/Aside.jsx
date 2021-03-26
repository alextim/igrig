/** @jsx jsx */
import { jsx } from '@emotion/react';

import mq from '../../theme/media-queries';
import { space } from '../../theme/space';
import size from '../../theme/sizes';
import container from '../../theme/container';

import useSiteDescription from '../../hooks/useSiteDescription';

import AsideNavigation from '../AsideNavigation';

const styleAside = {
  display: 'none',
  [mq.lg]: {
    overflow: 'hidden',
    position: 'fixed',
    top: size.header.lg,
    left: 0,
    bottom: size.footer,
    // height: `calc(100vh - ${size.header.lg} - ${size.footer})`,

    display: 'grid',
    gridTemplateRows: 'repeat(9, 1fr)',
    gridTemplateAreas: `
  "s"
  "."
  "."
  "a"
  "a"
  "a"
  "."
  "."
  "."
  `,
    width: size.aside,
    padding: `${space[4]} ${container.p.lg} ${space[4]} ${container.p.lg}`,
  },
};
const styleDescription = {
  gridArea: 's',
};

const Aside = () => {
  const siteDescription = useSiteDescription();

  return (
    <aside css={styleAside}>
      <div css={styleDescription}>{siteDescription}</div>
      <AsideNavigation />
    </aside>
  );
};

export default Aside;
