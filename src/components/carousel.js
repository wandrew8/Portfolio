import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { variables } from '../styles/variables'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Img from 'gatsby-image'
import styled from 'styled-components'
import ReactCardCarousel from "react-card-carousel";


export const CarouselContainer = styled.div`
  display: block;
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: middle;
  padding: 2rem;
  z-index: 200;
  height: 100%;
  max-height: 500px;
  margin-top: 50px;
  position:absolute; 
  top:50%; 
  left:50%; 
  transform:translate(-50%, -50%); 
  @media only screen and (max-width: ${variables.medium}) {
        margin-top: 2rem;
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
    height: 100%;
    width: 100%;
    min-width: 300px;
    max-width: 300px;
    max-height: 400px;
    &:hover .hiddenButton{
            opacity: 1;
        }
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
    .hiddenButton {
            cursor: pointer;
            letter-spacing: 1px;
            font-weight: 400;
            transition: 200ms ease-in;
            position: absolute;
            opacity: 0;
            top: 50%;
            outline: none;
            z-index: 50;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 1rem 3rem;
            color: ${variables.primaryLight};
            font-size: 0.9rem;
            border-radius: 5px;
            background-color: rgba(0,0,0,.6);
            text-decoration: none;
            font-weight: 300;
            text-transform: uppercase;
            border-radius: 10px;
            border: 1px solid rgba(0,0,0,0.5);
            transition: .3s ease-in-out;
            font-family: ${variables.headingFont};
            box-shadow: 0px 3px 30px rgba(25, 17, 34, 0.2);
            &:hover {
                background: rgba(0,0,0,0.3);
                box-shadow: 0px 3px 30px rgba(25, 17, 34, 0.4);

            }
        }
    }
    @media only screen and (max-width: ${variables.small}) {
        min-width: 250px;
        max-width: 250px;
    }
`;

const TOP_PROJECTS = graphql`
query TopThreeProjects {
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
            <CarouselContainer>
                <ReactCardCarousel>
                    {allMarkdownRemark.edges.map(edge => {
                        const { frontmatter: { slug, title, category, primaryTech, date, subtitle } } = edge.node
                        const image = edge.node.frontmatter.featuredImage.childImageSharp.fluid
                        console.log(image)
                        return (
                            <Post key={slug}>
                                    <Img className="projectImage" fluid={image} />
                                    <Link to={`/projects${slug}`}>
                                        <button className="hiddenButton">
                                        LEARN MORE
                                        </button>
                                    </Link>
                                    <h2>{title}</h2>
                                    <p>{subtitle}</p>
                                    <Button>{category}</Button>
                                    <small>{date} | {primaryTech}</small>
                            </Post>
                        )
                    })}
                </ReactCardCarousel>
            </CarouselContainer>
        )
    }}

  />

)

export default Listing
