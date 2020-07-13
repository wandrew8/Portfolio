import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { variables } from '../styles/variables'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 1rem;
  justify-content: center;
  padding: 2rem;
  @media only screen and (max-width: ${variables.medium}) {
        h2 {
          font-size: 1.2rem;
        }
    }
`;

export const Button = styled.button`
    padding: 0rem 0.5rem;
    text-align: center;
    border-radius: 2px;
    display: block;
    font-size: 0.7rem;
    border: solid 1px ${variables.primaryLightGray};
    color: ${variables.primaryLightGray};
    transition: 300ms ease-in;
    cursor: pointer;
    width: auto-fit;
    background: transparent;
    margin: 0.5rem 0rem;
    &:hover {
        color: ${variables.primaryLightGray};
    }
`;

export const Post = styled.article`
    box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.09);
    padding: 1rem;
    border-radius: 10px;
    text-align: left;
    transition: 200ms linear;
    overflow: hidden;
    cursor: pointer;
    z-index: 200;
    background-color: ${variables.primaryWhite};
    &:hover {
      box-shadow: 0px 3px 20px rgba(25, 17, 34, 0.1);
      & .projectImage {
        transform: scale(1.01);
      }
    }
    .projectImage {
      width: 100%;
      max-width: 400px;
      height: 175px;
      object-fit: cover;
      max-height: 230px;
      border-radius: 10px;
      margin: 0 auto;
      transition: 200ms ease-out;
    }
    a {
        color: black;
        text-decoration: none;
    }
    p {
        font-size: 0.8rem;
        margin: 0.5rem 0rem;
    }
    h2 {
        font-size: 1.5rem;
        margin: 1.2rem 0rem 0.5rem 0rem;
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

const TOP_PROJECTS = graphql`
query FindTopProjects {
allMarkdownRemark(limit: 3, filter: {frontmatter: {posttype: {eq: "project"}}}, sort: {order: ASC, fields: frontmatter___order}) {
      edges {
        node {
          frontmatter {
            title
            slug
            subtitle
            category
            primaryTech
            date(fromNow: true)
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 300) {
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

const Listing = () => (
  <StaticQuery 
    query={TOP_PROJECTS}
    render={({ allMarkdownRemark }) => {
        return (
            <GridContainer>
              {allMarkdownRemark.edges.map(edge => {
                  const { frontmatter: { slug, title, category, primaryTech, date, subtitle } } = edge.node
                  const image = edge.node.frontmatter.featuredImage.childImageSharp.fluid
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
        )
    }}

  />

)

export default Listing
