import React from 'react'
import { graphql, Link } from 'gatsby'
import { variables } from '../../../styles/variables'
import { GridContainer, Post, Button } from '../../projectListing'
import styled from 'styled-components'
import Img from "gatsby-image"
import Layout2 from '../../layout2'
import PropTypes from 'prop-types'
import { ButtonBase } from '@material-ui/core'

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} project${
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
            <StyledButton><Link to="/tags">View All tags</Link></StyledButton>
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
                  fluid(quality: 100, maxWidth: 1000) {
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

const StyledButton = styled.div`
    padding: 0.2rem 0.5rem;
    text-align: center;
    border-radius: 5px;
    z-index: 100;
    border: solid 2px ${variables.primaryBlue};
    transition: 300ms ease-in;
    cursor: pointer;
    width: 100%;
    text-align: center;
    max-width: 250px;
    margin: 0 auto;
    background-color: ${variables.primaryBlue};
    a {
      text-decoration: none;
      color: ${variables.primaryWhite};
      font-family: ${variables.headingFont};
      font-weight: 300;
      cursor: pointer;
    }
    &:hover {
      border: solid 2px ${variables.primaryBlue};
      background: rgba(253, 253, 254, 0.7);
      a {
      text-decoration: none;
      color: ${variables.primaryBlue};
    }
    }
    @media only screen and (max-width: ${variables.medium}) {
        margin-bottom: 2rem;
    }
   
`;
