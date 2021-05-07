/** @jsx jsx */
import { jsx } from '@emotion/react';

import mq from '../../../theme/media-queries';
import colors from '../../../theme/colors';
import LocalizedAnchor from '../../LocalizedAnchor';
import { useTranslation } from '../../../i18n';

const style = {
  gridArea: 'legal',
  color: colors.footer.text,
  textDecoration: 'none',

  ':hover': {
    color: colors.footer.highlight,
  },

  ':active, :hover, :focus': {
    outline: 0,
    textDecoration: 'none',
  },

  [mq.lg]: {
    marginRight: '3rem',
  },
};

const LegalInfo = () => {
  const { t } = useTranslation();
  return (
    <LocalizedAnchor to="/privacy-and-terms-of-use/" css={style}>
      {t('footer.privacyPolicy')}
    </LocalizedAnchor>
  );
};

export default LegalInfo;
