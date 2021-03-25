/** @jsx jsx */
import { jsx } from '@emotion/react';

import { space } from '../../theme/space';
import colors from '../../theme/colors';
import { fontSizes } from '../../theme/font-sizes';
import mq from '../../theme/media-queries';
import sizes from '../../theme/sizes';

import { useAppContext } from '../../context';
import useOrganizationContacts from '../../hooks/useOrgContacts';
import useSocialLinks from '../../hooks/useSocialLinks';

import Container from '../Container';
import SocialLinks from './SocialLinks';
import LegalInfo from './LegalInfo';

const footerStyle = {
  width: '100%',
  color: colors.footer.text,
  backgroundColor: colors.footer.bg,
  fontSize: fontSizes[1],
  paddingTop: space[2],
  paddingBottom: space[2],
};

const styleInnerWrap = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridTemplateAreas: '"main aside"',
  alignItems: 'center',
  [mq.lg]: {
    gridTemplateColumns: `${sizes.aside} 1fr`,
    gridTemplateAreas: '"aside main"',
  },
};

const Footer = () => {
  const { foundingDate } = useOrganizationContacts();
  const { address } = useAppContext();
  const socialLinks = useSocialLinks();

  return (
    <footer css={footerStyle}>
      <Container>
        <div css={styleInnerWrap}>
          <LegalInfo foundingDate={foundingDate} name={address ? address.name : undefined} />
          {socialLinks && <SocialLinks items={socialLinks} />}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
