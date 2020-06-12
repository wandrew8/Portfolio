import React from "react"
import Layout from "../components/layout"
import { Link } from 'gatsby'
import SEO from "../components/seo"

const IndexPage = ({location}) => (
  <>
    <SEO title="Home" />
    <Layout location={location}>
      <div>

        <Link to="/projects">Projects</Link>
        <Link to="/posts">Blog Posts</Link>
      </div>
    </Layout>
  </>
)

export default IndexPage
