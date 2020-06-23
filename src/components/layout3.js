import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Header from "./header"
import HeaderDrawer from './headerDrawer'
import App from './app'
import { variables } from '../styles/variables'
import "./layout.css"

const MainWrapper = styled.main`
  width: 100%;
  margin: 0rem auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: 0rem;
  @media only screen and (max-width: ${variables.large}) {
        grid-template-columns: 1fr;
    }

`;

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, ${variables.primaryBlue}, ${variables.primaryGreen});
`;

const Layout = ({ children }) => {
  const [ width, setWidth ] = useState(window.innerWidth);
  useEffect(() => {
    const updateWindowDimensions = () => {
      console.log(window.innerWidth)
      console.log(window)
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWindowDimensions);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", updateWindowDimensions);    };
  });
  return (
    <App>
      {width > 756 ? <Header /> : <HeaderDrawer />}
        <MainWrapper>
            {children}
        </MainWrapper>
    </App>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
