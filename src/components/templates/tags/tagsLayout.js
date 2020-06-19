import React from 'react'
import { graphql, Link } from 'gatsby'
import { GridContainer, Post, Button } from '../../projectListing'
import Img from "gatsby-image"
import Layout2 from '../../layout2'
import PropTypes from 'prop-types'

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`
    return (
      <Layout2>
        <div>
            <h1>{tagHeader}</h1>
            <GridContainer>
            {edges.map(edge => {
                const { frontmatter: { slug, title, category, primaryTech, date, subtitle } } = edge.node
                const image = edge.node.frontmatter.featuredImage.childImageSharp.fluid
                console.log(image)
                return (
                    <Post key={slug}>
                        <Link to={`/projects${slug}`}>
                        <Img className="projectImage" fluid={image} />
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                        <Button>{category}</Button>
                        <small>{date} | {primaryTech}</small>
                        </Link>
                    </Post>
                )
            })}
            </GridContainer>
            <Link to="/tags">All tags</Link>
        </div>
      </Layout2>
    )
  }

  export default Tags

  Tags.propTypes = {
    pageContext: PropTypes.object
  }


export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(fromNow: true)
            slug
            tags
            posttype
            subtitle
            category
            primaryTech
            github
            website
            featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
               }
            }
          }
        }
      }
    }
  }
`

// tagsLayout.propTypes = {
//     pageContext: PropTypes.object,
// }