import { useLocale } from '../../i18n/i18n-context';
import i18n from '../../i18n';

const LocalizedAnchor = ({ to, children, ...props }) => {
  const { locale } = useLocale();
  const path = i18n.localizePath(to, locale);

  return (
    <a {...props} href={path}>
      {children}
    </a>
  );
};

export default LocalizedAnchor;
