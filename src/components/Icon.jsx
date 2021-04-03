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

const style = {
  width: '1em',
  height: '1em',
};
const Icon = ({ name, css = {}, ...rest }) => {
  if (!name) {
    return null;
  }
  const icons = {
    f500px: <Fa500px css={{ ...style, ...css }} {...rest} />,
    facebook: <FaFacebookF css={{ ...style, ...css }} {...rest} />,
    instagram: <FaInstagram css={{ ...style, ...css }} {...rest} />,
    // link: <FaLink css={{...style, ...css}} {...rest} />,
    phone: <FaPhone css={{ ...style, ...css }} {...rest} />,
    envelope: <FaEnvelope css={{ ...style, ...css }} {...rest} />,
    // exclamationTriangle: <FaExclamationTriangle css={{...style, ...css}} {...rest} />,
    // checkCircle: <FaCheckCircle css={{...style, ...css}} {...rest} />,
    // thumbsUp: <FaThumbsUp css={{...style, ...css}} {...rest} />,
    // check: <FaCheck css={{...style, ...css}} {...rest} />,
    // plane: <FaPlane css={{...style, ...css}} {...rest} />,
    // users: <FaUsers css={{...style, ...css}} {...rest} />,
    whatsapp: <FaWhatsapp css={{ ...style, ...css }} {...rest} />,
    telegram: <FaTelegram css={{ ...style, ...css }} {...rest} />,
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
