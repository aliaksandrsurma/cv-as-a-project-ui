import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import { Title, TitleH2 } from '../shared/StyledElements';
import styled from 'styled-components';
import { GITHUB_URL, PROFILE_NAME } from '../constants';

const Index = () => {

    const MainArticle = styled.article`
        padding: 3em 2em 1em;
        background: #ffffff;
        border: solid 1px rgba(160, 160, 160, 0.3);
        margin: 0 0 3em;
        position: relative;    
    `;

    const MainArticleHeader = styled.header`
        border-bottom: 1px solid hsla(0,0%,63%,.3);
        display: -moz-flex;
        display: -ms-flex;
        display: flex;  
        left: -2em;
        margin: -3em 0 3em;
        position: relative;
        width: calc(100% + 4em);
    `;

    return (
        <Main
            description={`${PROFILE_NAME}'s personal website CV`}
        >
            <MainArticle>
                <MainArticleHeader>
                    <Title>
                        <TitleH2><Link to="/">About this site</Link></TitleH2>
                        <p>
                            Intent to demonstare my CV and past experience as a set of hands-on custom built componsnts. 
                            A stylish, responsive react application using modern JavaScript ecosystem tooling including 'styled-components' and 'CSS in JS' approach.
                        </p>
                    </Title>
                </MainArticleHeader>
                <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
                    or you can check out my {' '}
                    <Link to="/resume">resume</Link>, {' '}
                    <Link to="/projects">projects</Link>, {' '}
                    view <Link to="/stats">site statistics</Link>, {' '}
                    or <Link to="/contact">contact</Link> me.
                </p>
                <p> Sources are available <a href={GITHUB_URL}>here</a>.</p>
            </MainArticle>
        </Main>
    )
}

export default Index;
