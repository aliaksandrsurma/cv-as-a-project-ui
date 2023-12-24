import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const { PROFILE_NAME, EMAIL_PERSONAL, EMAIL } = require('../constants');

const Contact = () => (
  <Main
    title="Contact"
    description={`Contact ${PROFILE_NAME} via email @ ${EMAIL_PERSONAL}`}
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: {EMAIL} or {EMAIL_PERSONAL}</p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
