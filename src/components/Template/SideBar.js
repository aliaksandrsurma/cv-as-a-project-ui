import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import semver from 'semver';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import packageJson from '../../../package.json';
import ContactIcons from '../Contact/ContactIcons';

const { PROFILE_NAME, EMAIL_PERSONAL } = require('../../constants');

const SideBar = () => {

  const appVersion = packageJson.version;
  const formattedVersion = semver.clean(appVersion);

  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/markdown/sidebar-about-me-short.md')
      .then(response => response.text())
      .then(text => setMarkdown(text));
  }, []);


  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${process.env.PUBLIC_URL}/images/me.jpg`} alt="" />
        </Link>
        <header>
          <h2>{PROFILE_NAME}</h2>
          <p><a href={`mailto:${EMAIL_PERSONAL}`}>{EMAIL_PERSONAL}</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <Markdown
          remarkPlugins={[remarkGfm]}
          children={markdown} />
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">&copy; {new Date().getFullYear()} {PROFILE_NAME} CV-as-a-project-ui v {formattedVersion}</p>
        <p className="copyright">Built with React</p>
      </section>
    </section>
  )
};

export default SideBar;
