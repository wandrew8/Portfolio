import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import gatsbyLogo from '../images/gatsby-icon.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          display: "flex"
        }}
      >
        <img src={gatsbyLogo} alt="" style={{
          width: "50px",
          height: "50px",
          display: "inline"
        }}/>
        <h1 style={{ margin: 0, display: "inline" }}>
            {siteTitle}
        </h1>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
