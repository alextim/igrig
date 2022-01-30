import colors from '@/theme/colors';
import { fontSizes } from '@/theme/font-sizes';
import mq from '@/theme/media-queries';
import sizes from '@/theme/sizes';
import container from '@/theme/container';

import LegalInfo from './LegalInfo';
import SocialLinks from './SocialLinks';
import Copyright from './Copyright';

const footerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 6rem',
  gridTemplateAreas: `
  "legal aside"
  "c c"
  `,
  alignItems: 'center',
  width: '100%',
  height: sizes.footer.sm,
  color: colors.footer.text,
  backgroundColor: colors.footer.bg,
  fontSize: fontSizes[0],
  padding: `0 ${container.p.sm}`,

  [mq.lg]: {
    height: sizes.footer.lg,
    gridTemplateColumns: `${sizes.aside} 1fr auto auto 1fr`,
    gridTemplateAreas: '"aside . legal c ."',
    padding: 0,
    fontSize: fontSizes[1],
  },
};

const Footer = () => (
  <footer css={footerStyle}>
    <LegalInfo />
    <SocialLinks />
    <Copyright />
  </footer>
);

export default Footer;
