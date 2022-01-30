import { useAppContext } from '@/context';
import useOrganizationContacts from '@/hooks/useOrgContacts';

const style = {
  gridArea: 'c',
  justifySelf: 'center',
  textAlign: 'center',
};

const Copyright = ({ text }) => {
  const { foundingDate } = useOrganizationContacts();
  const { address } = useAppContext();
  const name = address?.name;
  const currentYear = new Date().getFullYear();
  let s = '';
  if (foundingDate) {
    const foundingYear = new Date(foundingDate).getFullYear();
    if (foundingYear !== currentYear) {
      s = `${foundingYear}-`;
    }
  }
  return <div css={style}>{`© ${s}${currentYear} ${name}${text ? `. ${text}` : ''}`}</div>;
};

export default Copyright;
