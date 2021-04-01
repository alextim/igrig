/** @jsx jsx */
import { jsx } from '@emotion/react';

import { space } from '../../theme/space';
import colors from '../../theme/colors';
import { fontSizes } from '../../theme/font-sizes';
import mq from '../../theme/media-queries';
import sizes from '../../theme/sizes';
import container from '../../theme/container';

import { useAppContext } from '../../context';
import useOrganizationContacts from '../../hooks/useOrgContacts';
import useSocialLinks from '../../hooks/useSocialLinks';

import SocialLinks from './SocialLinks';
import LegalInfo from './LegalInfo';

const footerStyle = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridTemplateAreas: '"main aside"',
  alignItems: 'center',
  width: '100%',
  height: sizes.footer,
  color: colors.footer.text,
  backgroundColor: colors.footer.bg,
  fontSize: fontSizes[1],
  padding: `${space[2]} ${container.p.sm}`,
  [mq.lg]: {
    gridTemplateColumns: `${sizes.aside} 1fr`,
    gridTemplateAreas: '"aside main"',
    padding: 0,
  },
};

const Footer = () => {
  const { foundingDate } = useOrganizationContacts();
  const { address } = useAppContext();
  const socialLinks = useSocialLinks();

  return (
    <footer id="footer" css={footerStyle}>
      <LegalInfo foundingDate={foundingDate} name={address ? address.name : undefined} />
      {socialLinks && <SocialLinks items={socialLinks} />}
    </footer>
  );
};

export default Footer;
