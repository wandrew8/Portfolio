import React from 'react'
import PropTypes from 'prop-types'
import PostLayout from './templates/postLayout'
import { Link, graphql } from 'gatsby'

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
      } tagged with "${tag}"`

    return (
        <PostLayout>
            <div>
                <h1>{tagHeader}</h1>
                <ul>
                    {edges.map(({ node }) => {
                    const { slug } = node.fields
                    const { title } = node.frontmatter
                    return (
                        <li key={slug}>
                        <Link to={slug}>{title}</Link>
                        </li>
                    )
                    })}
                </ul>
            </div>
        </PostLayout>
    )
}

Tags.propTypes = {
    pageContext: PropTypes.object,
    data: PropTypes.object
}

export default Tags

// export const pageQuery = graphql`
//   query($tag: String) {
//     allMarkdownRemark(
//       limit: 2000
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { tags: { in: [$tag] } } }
//     ) {
//       totalCount
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }
// `;