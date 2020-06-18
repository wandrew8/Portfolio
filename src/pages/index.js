import React from "react"
import Header from "../components/header"
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'
import { Link } from 'gatsby'
import SEO from "../components/seo"

const IndexPage = () => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return(
    <>
    <Header />
      <SEO title="Home" />
        <div>
          <Section>
            <animated.div style={props}>
                <h1>Personal Portfolio</h1>
                <h3>Andrew Weiss</h3>
                <h3>Frontend Web Developer</h3>
            </animated.div>
          </Section>
          <Link to="/tags">All Tags</Link>
          <Link to="/projects">Projects</Link>
        </div>
    </>
  )
}

export default IndexPage

const Section = styled.section`
  height: 100%;
  min-height: 100vh;
`;