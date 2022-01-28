import Fa500px from '../assets/fa/brand/f500px.svg';
import FaFacebookF from '../assets/fa/brand/facebook-f.svg';
import FaInstagram from '../assets/fa/brand/instagram.svg';
// import FaLink from '../assets/fa/solid/link.svg';
import FaPhone from '../assets/fa/solid/phone.svg';
import FaEnvelope from '../assets/fa/solid/envelope.svg';
// import FaExclamationTriangle from '../assets/fa/solid/exclamation-triangle.svg';
// import FaCheckCircle from '../assets/fa/solid/check-circle.svg';
// import FaThumbsUp from '../assets/fa/regular/thumbs-up.svg';
// import FaCheck from '../assets/fa/solid/check.svg';
// import FaPlane from '../assets/fa/solid/plane.svg';
// import FaUsers from '../assets/fa/solid/users.svg';

import FaTelegram from '../assets/fa/brand/telegram.svg';
import FaWhatsapp from '../assets/fa/brand/whatsapp.svg';
// import { FaViber } from 'react-icons/fa';
// import { FaSkype } from 'react-icons/fa';

const defStyle = {
  width: '1em',
  height: '1em',
};
const Icon = ({ name, css = {}, ...rest }) => {
  if (!name) {
    return null;
  }
  const style = { ...defStyle, ...css };
  const icons = {
    f500px: <Fa500px css={style} {...rest} />,
    facebook: <FaFacebookF css={style} {...rest} />,
    instagram: <FaInstagram css={style} {...rest} />,
    // link: <FaLink css={style} {...rest} />,
    phone: <FaPhone css={style} {...rest} />,
    envelope: <FaEnvelope css={style} {...rest} />,
    // exclamationTriangle: <FaExclamationTriangle css={style} {...rest} />,
    // checkCircle: <FaCheckCircle css={style} {...rest} />,
    // thumbsUp: <FaThumbsUp css={style} {...rest} />,
    // check: <FaCheck css={style} {...rest} />,
    // plane: <FaPlane css={style} {...rest} />,
    // users: <FaUsers css={style} {...rest} />,
    whatsapp: <FaWhatsapp css={style} {...rest} />,
    telegram: <FaTelegram css={style} {...rest} />,
    // viber: <FaViber css={style} />,
    // skype: <FaSkype css={style} />,
  };
  if (!icons[name]) {
    return `Pls, provide icon "${name}"`;
  }
  // const Comp = icons[name];
  // return <Comp css={extraStyle} />;
  return icons[name];
};

export default Icon;
