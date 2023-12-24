import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
const { PROFILE_NAME, EMAIL, EMAIL_PERSONAL } = require('../../constants');

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>{PROFILE_NAME}</h2>
        <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        <p><a href={`mailto:${EMAIL_PERSONAL}`}>{EMAIL_PERSONAL}</a></p>

      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam. Praesent non urna non mauris laoreet ultricies eget at enim. Phasellus lacus odio, ullamcorper ac ipsum in, tincidunt tincidunt massa. Suspendisse ut malesuada sapien, vitae mollis diam.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; {PROFILE_NAME} <Link to="/">TODO</Link>.</p>
    </section>
  </section>
);

export default SideBar;
