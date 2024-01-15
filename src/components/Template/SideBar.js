import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

import semver from 'semver';
import packageJson from '../../../package.json';



const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
const { PROFILE_NAME, EMAIL, EMAIL_PERSONAL } = require('../../constants');

const SideBar = () => {

  const appVersion = packageJson.version;
  const formattedVersion = semver.clean(appVersion);

  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
        </Link>
        <header>
          <h2>{PROFILE_NAME}</h2>
          <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a> <br/>
          <a href={`mailto:${EMAIL_PERSONAL}`}>{EMAIL_PERSONAL}</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>I'm Alex. Solution Architect working at EPAM Systems. Introverted type of a person who is very passionate about new technologies and hands-on engineering.
        </p>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">&copy; ${new Date().getFullYear()} {PROFILE_NAME} CV-as-a-project-ui v{formattedVersion}</p>
        <p className="copyright">Built with React</p>
      </section>
    </section>
  )
};

export default SideBar;
