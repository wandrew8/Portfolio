import React from "react"
import Layout from "../components/layout"
import kebabCase from "lodash/kebabCase"
import { Link, StaticQuery, graphql } from 'gatsby'
import SEO from "../components/seo"

const Tags = ({location}) => (
  <>
    <SEO title="Tags" />
    <Layout location={location}>
        <h1>Tags</h1>
        <StaticQuery 
            query={TAG_QUERY}
            render={({ allMarkdownRemark }) => {
                return (
                <div>
                    {allMarkdownRemark.group.map(edge => {
                        return (
                            <Link key={edge.tag} to={`/tags/${kebabCase(edge.tag)}/`}>
                                <h1>{edge.tag} ({edge.totalCount} {edge.totalCount > 1 ? "items" : "item"})</h1>
                            </Link>
                            
                        )
                    })}
                </div>
                )
            }}

        />
        <div>
            <Link to="/tags">All Tags</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/posts">Blog Posts</Link>
        </div>
    </Layout>
  </>
)

export default Tags

const TAG_QUERY = graphql`
query AllTags {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }

`