import React from "react"
import Layout from "../components/layout"
import HackathonListing from '../components/hackathonListing'
import { variables } from '../styles/variables'
import styled from 'styled-components'

const Hackathons = () => {
  return(
    <Layout grid={true}>
        <h1>Hackathons</h1>
        <Paragraph>I love leveling up my skills and exposing myself to new technologies. Joining in the MintBean hackathons has been a great way to do this as well as meet and learn from other developers new to the field like myself. Checkout some of the projects I have built in past challenges.</Paragraph>
        <HackathonListing />
    </Layout>
  )}

export default Hackathons

const Paragraph = styled.p`
    color: ${variables.primaryLightGray};
    padding: 1rem 2rem 3rem 2rem;
    max-width: 900px;
    margin: 0 auto;
    text-align: justify;
`;