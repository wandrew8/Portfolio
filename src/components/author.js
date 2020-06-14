import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from "prop-types"
import { variables } from '../styles/variables'

const AuthorContainer = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    justify-content: center;
    text-align: left;
    margin: 1rem 0rem;
    .authorName {
        font-style: italic;
    }
    p {
        margin: 0;
        padding: 0;
        font-size: 0.8rem;
    }
    .middle {
        margin: 0rem 0.5rem;
    }
    .avatarImg {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;

    }
    .date {
        display: flex;
        color: ${variables.primaryLightGray}
    }
    .buttonHolder {
        justify-self: flex-end;
    }
`;

export const Button = styled.button`
    padding: 0.2rem 0.5rem;
    text-align: center;
    border-radius: 5px;
    display: block;
    border: solid 2px ${variables.primaryBlue};
    color: ${variables.primaryBlue};
    transition: 300ms ease-in;
    cursor: pointer;
    width: auto-fit;
    background: transparent;
    margin: 0.5rem 0rem;
    &:hover {
        border: solid 2px ${variables.primaryBlue};
        color: ${variables.primaryWhite};
        background-color: ${variables.primaryBlue};
    }
`;

export default function Author(props) { 
    const data = useStaticQuery(graphql`
    query imageQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: {
        regex: "/avatar/"
      }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const image = data.file.childImageSharp.fluid
  const { date, category, primaryTech } = props;
    return (
        <AuthorContainer>
            <Img className="avatarImg" fluid={image} />
            <div>
                <p className="authorName">By Andrew Weiss</p>
                <div className="date">
                    <p>{date} </p>
                    <p className="middle"> | </p>
                    <p>{primaryTech}</p>
                </div>
            </div>
            <div className="buttonHolder">
                <Button>
                    {category}
                </Button>
            </div>
        </AuthorContainer>
    )
}



  Author.propTypes = {
      date: PropTypes.string,
      category: PropTypes.string,
      primaryTech: PropTypes.string,
  }