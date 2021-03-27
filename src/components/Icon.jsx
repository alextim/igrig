/** @jsx jsx */
import { jsx } from '@emotion/react';

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

const Icon = ({ name, ...rest }) => {
  if (!name) {
    return null;
  }
  const icons = {
    f500px: <Fa500px className="fa" {...rest} />,
    facebook: <FaFacebookF className="fa" {...rest} />,
    instagram: <FaInstagram className="fa" {...rest} />,
    // link: <FaLink className="fa" {...rest} />,
    phone: <FaPhone className="fa" {...rest} />,
    envelope: <FaEnvelope className="fa" {...rest} />,
    // exclamationTriangle: <FaExclamationTriangle className="fa" {...rest} />,
    // checkCircle: <FaCheckCircle className="fa" {...rest} />,
    // thumbsUp: <FaThumbsUp className="fa" {...rest} />,
    // check: <FaCheck className="fa" {...rest} />,
    // plane: <FaPlane className="fa" {...rest} />,
    // users: <FaUsers className="fa" {...rest} />,
    whatsapp: <FaWhatsapp className="fa" {...rest} />,
    telegram: <FaTelegram className="fa" {...rest} />,
    // viber: <FaViber />,
    // skype: <FaSkype />,
  };
  if (!icons[name]) {
    return `Pls, provide icon "${name}"`;
  }
  // const Comp = icons[name];
  // return <Comp css={extraStyle} />;
  return icons[name];
};

export default Icon;
