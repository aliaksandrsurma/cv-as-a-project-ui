import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';
import styled from 'styled-components';

import { PROFILE_NAME } from '../constants';

const WrapperDiv = styled.div`
  display: -moz-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: row-reverse;
  flex-direction: row-reverse;
  transition: opacity 0.5s ease;
  margin: 0 auto;
  max-width: 100%;
  opacity: 1;
  padding: 4.5em;
  width: 90em;
  @media (max-width: 1680px) {
    padding: 3em;
  }
  @media screen and (max-width: 1280px)
  {
    display: block;
  }
  @media screen and (max-width: 736px)
  {
    padding: 1.5em;
  }
`;

const MainDiv = styled.div`
  -moz-flex-grow: 1;
  -ms-flex-grow: 1;
  flex-grow: 1;
  -ms-flex: 1;
  width: 100%;
`;

const Main = (props) => {

  return (
    <HelmetProvider>
      <Analytics />
      <ScrollToTop />
      <Helmet titleTemplate={`%s | ${PROFILE_NAME}`} defaultTitle={PROFILE_NAME} defer={false}>
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
      <WrapperDiv>
        <Navigation />
        <MainDiv>
          {props.children}
        </MainDiv>
        {props.fullPage ? null : <SideBar />}
      </WrapperDiv>
    </HelmetProvider>
  )
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: `${PROFILE_NAME}'s personal website.`,
};

export default Main;
