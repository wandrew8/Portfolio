import React from "react"
import PropTypes from "prop-types"
import { Spring } from 'react-spring/renderprops'
import styled from 'styled-components'
import Header from "./header"
import App from './app'
import { variables } from '../styles/variables'
import "./layout.css"

const MainWrapper = styled.main`
  max-width: 90%;
  margin: 0rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1rem;
  padding: 1rem 0rem;
  @media only screen and (max-width: ${variables.large}) {
        grid-template-columns: 1fr;
    }

`;

const StyledFooter = styled.footer`
  color: ${variables.primaryLightGray};
  font-size: 0.9rem;
`;

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, ${variables.primaryBlue}, ${variables.primaryGreen});
`;

const Layout = ({ children, location }) => {
  return (
    <App>
      <Header />
          <Spring 
            from={{ height: location.pathname === '/' ? 100 : 150 }} 
            to={{ height: location.pathname === '/' ? 150 : 100 }}>
            {styles => (
              <div style={{overflow: 'hidden', ...styles}}>
                <Gradient/>
              </div>
            )}
          </Spring>
        <MainWrapper>
            {children}
        </MainWrapper>
        <StyledFooter>
          © {new Date().getFullYear()} Andrew Weiss
        </StyledFooter>
    </App>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
