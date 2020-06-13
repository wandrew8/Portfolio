import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const ArchiveList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    a {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 0.8rem;
        text-decoration: underline;
        color: #524567;
    }
`;

const POST_ARCHIVE_QUERY = graphql`
query ProjectArchive {
  allMarkdownRemark(limit: 10, filter: {frontmatter: {posttype: {eq: "project"}}}, sort: {order: DESC, fields: frontmatter___order}) {
    edges {
      node {
        frontmatter {
          title
          slug
          tags
          subtitle
        }
        excerpt(pruneLength: 100)
      }
    }
  }
}


`

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)
  const { edges } = data.allMarkdownRemark;

  return (
    <>
      <aside>
          <h3>Archive</h3>
          <ArchiveList>
            {edges.map((edge) => {
                const { excerpt, frontmatter: { title, slug, subtitle }} = edge.node;
               return ( 
                   <Link key={slug} to={`/projects${slug}`}>
                        <li>
                            <p>{title}</p>
                            <small>{subtitle}</small>
                            <p>{excerpt}</p>
                        </li>
                    </Link>
               )
            })}
          </ArchiveList>
      </aside>
    </>
  )
}

export default Archive
