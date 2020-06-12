import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'

const Post = styled.article`
    box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    a {
        color: black;
        text-decoration: none;
    }
    p {
        font-size: 0.8rem;
    }
    h2 {
        margin-bottom: 0.5rem;
    }
    small {
        color: gray;
    }
    .read-more {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 0.8rem;
        text-decoration: underline;
        color: #524567;
    }
`;

const LISTING_QUERY = graphql`
query ProjectListing {
  allMarkdownRemark(limit: 10, filter: {frontmatter: {posttype: {eq: "project"}}}) {
    edges {
      node {
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
          tags
        }
      }
    }
  }
}
`

const Listing = () => (
  <StaticQuery 
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) => {
        return (
            <div>
              {allMarkdownRemark.edges.map(edge => {
                  const { excerpt, frontmatter: { slug, title, date } } = edge.node
                  return (
                      <Post key={slug}>
                          <Link to={`/projects${slug}`}>
                              <h2>{title}</h2>
                          </Link>
                          <small>{date}</small>
                          <p>{excerpt}</p>
                          <Link className="read-more" to={`/projects${slug}`}>Read More</Link>
                      </Post>
                  )
              })}
            </div>
        )
    }}

  />

)

export default Listing
