import React from "react"
import PropTypes from "prop-types"
import Img from 'gatsby-image'
import { Spring } from 'react-spring/renderprops'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Header from "./header"
import "./layout.css"

const MainWrapper = styled.main`
  max-width: 90%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1rem;

`;

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: {
        regex: "/IMG/"
      }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
          <Spring 
            from={{ height: location.pathname === '/' ? 100 : 200 }} 
            to={{ height: location.pathname === '/' ? 200 : 100 }}>
            {styles => (
              <div style={{overflow: 'hidden', ...styles}}>
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>
            )}
          </Spring>
        <MainWrapper>
            {children}
        </MainWrapper>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
