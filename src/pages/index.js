import React from "react"
import Layout2 from "../components/layout2"
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'
import { Link } from 'gatsby'
import SEO from "../components/seo"

const IndexPage = () => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return(
    <>
    <Layout2>
      <SEO title="Home" />
        <div>
          <Section>
            <animated.div style={props}>
                <h1>Personal Portfolio</h1>
                <h3>Andrew Weiss</h3>
                <h3>Frontend Web Developer</h3>
            </animated.div>
          </Section>
          <Section>
            <h1>Skills</h1>
          </Section>
          <Section>
            <h1>Top Projects</h1>
          </Section>
          <Link to="/tags">All Tags</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </Layout2>
    </>
  )
}

export default IndexPage

const Section = styled.section`
  height: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  &:first-of-type{
    min-height: calc(100vh - 200px);
  }
`;