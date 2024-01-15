import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';

import Main from '../layouts/Main';

const { PROFILE_NAME } = require('../constants');


const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/markdown/about-me.md')
      .then(response => response.text())
      .then(text => setMarkdown(text));
  }, []);

  const numberOfWords = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main
      title="About Me"
      description={`Learn about ${PROFILE_NAME}`}
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2><Link to="/about">About Me</Link></h2>
            <p>(in about {numberOfWords} words)</p>
          </div>
        </header>
        <Markdown children={markdown} />
      </article>
    </Main>
  );
};

export default About;
