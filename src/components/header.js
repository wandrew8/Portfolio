import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { variables } from '../styles/variables'
import styled from 'styled-components'
import logo from '../images/512x512.png'

const HeaderWrapper = styled.header`
  background: ${variables.primaryBlue};
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.3);
`;

const HeaderContainer = styled.div`
    margin: 0 auto;
    max-width: 960;
    padding: 0.5rem;
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    display: flex;
    img {
      width: 50px;
      height: 50px;
      display: inline;
      margin: 0;
      padding: 0;
    }
`;

const Heading = styled.h1`
  margin: 0;
  display: inline;
  color: ${variables.primaryWhite}
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <StyledLink to="/">
        <img src={logo} alt="" />
        <Heading>
            Portfolio
        </Heading>
      </StyledLink>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
