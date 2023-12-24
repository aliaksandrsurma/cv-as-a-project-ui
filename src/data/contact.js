import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
//import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
//import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
//import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
//import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const { GITHUB_URL, LINKEDIN_URL, EMAIL_PERSONAL } = require('../constants');

const data = [
  {
    link: GITHUB_URL,
    label: 'Github',
    icon: faGithub,
  },
  // {
  //   link: 'https://facebook.com',
  //   label: 'Facebook',
  //   icon: faFacebookF,
  // },
  // {
  //   link: 'https://www.instagram.com/TODO',
  //   label: 'Instagram',
  //   icon: faInstagram,
  // },
  {
    link: LINKEDIN_URL,
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  // {
  //   link: 'https://twitter.com/TODO',
  //   label: 'Twitter',
  //   icon: faTwitter,
  // },
  {
    link: `mailto:${EMAIL_PERSONAL}`,
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
