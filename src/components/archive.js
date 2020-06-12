import React from "react"
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"

const POST_ARCHIVE_QUERY = graphql`
query BlogPostArchive {
    allMarkdownRemark(limit: 5, sort: 
      {
        order: DESC, 
        fields: [frontmatter___date]
    }) {
      edges {
        node {
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

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)
  const { edges } = data.allMarkdownRemark;

  return (
    <>
      <aside>
          <h3>Archive</h3>
          <ul>
            {edges.map((edge) => {
                const { title, slug } = edge.node.frontmatter;
               return ( 
                   <Link key={slug} to={`/posts${slug}`}>
                        <li>
                            {title}
                        </li>
                    </Link>
               )
            })}
          </ul>
      </aside>
    </>
  )
}

export default Archive
