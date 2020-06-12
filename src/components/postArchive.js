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
query PostArchive {
  allMarkdownRemark(limit: 5, filter: {frontmatter: {posttype: {eq: "post"}}}, sort: {order: DESC, fields: frontmatter___date}) {
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

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)
  const { edges } = data.allMarkdownRemark;

  return (
    <>
      <aside>
          <h3>Archive</h3>
          <ArchiveList>
            {edges.map((edge) => {
                const { title, slug } = edge.node.frontmatter;
               return ( 
                   <Link key={slug} to={`/projects${slug}`}>
                        <li>
                            {title}
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
