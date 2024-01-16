/**
 * Index page component.
 * 
 * Landing page of the site.
 * Displays generic information about the site and it's idea.
 */
import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

//project components
import Main from '../layouts/Main';
import { Title, TitleH2 } from '../components/Common/StyledElements';
import { PROFILE_NAME } from '../constants';


const MainArticle = styled.article`
    padding: 3em 2em 1em;
    background: #ffffff;
    border: solid 1px rgba(160, 160, 160, 0.3);
    margin: 0 0 3em;
    position: relative;

    & img {
        width: 100%;
        /* Add more styles here */
    }
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

const Index = () => {

    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/markdown/index-about-site.md') // Path to markdown file in the public folder
            .then(response => response.text())
            .then(text => setMarkdown(text));
    }, []); // Empty dependency array means this effect will only run once

    return (
        <Main
            description={`${PROFILE_NAME}'s personal website CV`}
        >
            <MainArticle>
                <MainArticleHeader>
                    <Title>
                        <TitleH2><Link to="/">About this site</Link></TitleH2>
                    </Title>
                </MainArticleHeader>
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    children={markdown} />
            </MainArticle>
        </Main>
    )
}

export default Index;
