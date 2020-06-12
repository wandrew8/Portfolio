import React from "react"
import Listing from '../components/listing'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({location}) => (
  <>
    <SEO title="Home" />
    <Layout location={location}>
        <Listing/>
    </Layout>
  </>
)

export default IndexPage
