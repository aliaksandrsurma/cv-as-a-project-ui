import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import { Title, TitleH2 } from '../shared/StyledElements';
import styled from 'styled-components';
import { GITHUB_URL, PROFILE_NAME } from '../constants';


import initialData from '../data/index-initial.js';

const Index = () => {

    const [data, setData] = useState(initialData);

    useEffect(() => {
        fetch('https://api.alexsurma.com/projects?all=true')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            }).catch(error => console.error('Error:', error));;
    }, []);


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
                          idea, background, motivation    
                        </p>
                    </Title>
                </MainArticleHeader>
                <p>
                    As an engineer I used to conduct many technical interviews and I was always surprised how many candidates were not able to present their experience in a structured way. For solution architects there is also an NDA aspect, so they can't easily share or present artifacts they have created. White-boarding partially solves this problem, but it's still problematic to present and elaborate on a complex enterprise solution in a short time.
                </p>
                <p> So one day I asked myself - how can I convert my CV 'as-a-file' into something more 'fun' and presentable. Something that may (al least partially) prove my experience and architecture/engineering skills. </p>
                <p> This is how idea of 'CV as a project' has been born... </p>
                <p class="image">
                   <img style={{width: '100%'}} src={`${process.env.PUBLIC_URL}/images/about/backlog.png`} alt="Backlog" />
                </p>
                <p> Sources are available <a href={GITHUB_URL}>here</a>.</p>
            </MainArticle>
        </Main>
    )
}

export default Index;
