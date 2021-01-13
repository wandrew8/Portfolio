import React from "react";
import Layout from "../components/layout";
import resume from '../images/Resume2021.pdf';
import styled from 'styled-components';

const Projects = () => {
  return(
    <Layout grid={true}>
        <Container>
            <h1>Resume</h1>
            <iframe src={resume}></iframe>
        </Container>
    </Layout>
  )}

export default Projects

const Container = styled.div`
    text-align: center;
    h1 {
        text-transform: uppercase;
        font-weight: 300;
        margin: 2rem 1rem;
    }
    iframe {
        width: 90%;
        height: 100vh;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
        overflow: hidden;
        margin: 0 auto;
    }
`;