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
query BlogPostListing {
    allMarkdownRemark(limit: 10, sort: 
      {
        order: DESC, 
        fields: [frontmatter___date]
    }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
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
            allMarkdownRemark.edges.map(edge => {
                const { excerpt, frontmatter: { slug, title, date } } = edge.node
                return (
                    <Post key={slug}>
                        <Link to={`/posts${slug}`}>
                            <h2>{title}</h2>
                        </Link>
                        <small>{date}</small>
                        <p>{excerpt}</p>
                        <Link className="read-more" to={`/posts${slug}`}>Read More</Link>
                    </Post>
                )
            })
        )
    }}

  />

)

export default Listing
