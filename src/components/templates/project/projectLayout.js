import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import ProjectArchive from '../../projectArchive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faGlobe, faImages } from '@fortawesome/free-solid-svg-icons'
import Img from "gatsby-image"
import Lightbox from '../../lightbox'
import Layout from '../../layout'
import styled from 'styled-components'
import Author from '../../author'
import { variables } from '../../../styles/variables'

const StyledHTML = styled.div`
    p {
        text-align: justify;
        &:first-of-type :first-letter {
            font-weight: 400;
            font-size: 4rem;
            line-height: 1;
            float: left;
            padding-right: 10px;
            padding-left: 2px;
            text-transform: uppercase;        
        }
    }
    h2 {
        position: relative;
        padding: 0rem 1.5rem;
        &:before {
            position: absolute;
            content: "❝";
            font-size: 8rem;
            color: #7f7f7f;
            opacity: 0.2;
            top: -2.5rem;
            left: 0rem;
        }
    }

   
`;

const Container = styled.div`
    position: relative;
    width: 90%;
    min-width: 300px;
    max-width: 700px;
    margin: 0 auto;
    h1 {
        margin: 3rem 0rem 0.5rem 0rem;
        font-weight: 500;
    }
    .subtitle {
        color: ${variables.primaryLightGray};
        font-size: 1.3rem;
        margin-bottom: 3rem;
    }
    .tags {
        display: flex;
        a {
            margin-left: 1rem;
            text-decoration: none;
            color: ${variables.primaryLightGray};
            transition: 100ms ease-in;
            :hover {
                color: ${variables.primaryBlue};
                transform: scale(1.01);
            }
        }
    }
    .navigation {
        display: flex;
        justify-content: space-between;
        a {
            color: ${variables.primaryLightGray};
            :hover {
                color: ${variables.primaryDark};
            }
        }
    }
    .lightboxContainer {
        width: 100%;
        height: 100px;
        overflow: hidden;
        margin-bottom: 1rem;
    }
    .mainPhoto {
        border-radius: 5px;
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
    }
    .metaInfo {
        display: grid;
        grid-template-columns: 150px 1fr;
        grid-gap: 1rem;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
        @media only screen and (max-width: ${variables.large}) {
            grid-template-columns: 1fr;
        }
    }
    .links {
        text-align: left;
        margin: 0rem;
        display: flex;
        align-items: center;
        .link {
            width: 50px;
            height: 50px;
            font-size: 1.1rem;
            border: solid 2px ${variables.primaryLightGray};
            border-radius: 10px;
            margin-right: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 200ms ease-in;
            a {
                transition: 200ms ease-in;
                color: ${variables.primaryLightGray};

            }
            &:hover {
                box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
                border: solid 2px ${variables.primaryDark};
                a {
                    color: ${variables.primaryDark};
                }
            }
        }
    }
`;


export default class projectLayout extends Component {
    render() {
        const { html, frontmatter: { title, github, website, date, tags, primaryTech, category, subtitle } } = this.props.data.markdownRemark;
        const { location, pageContext: { next, prev } } = this.props;
        const image = this.props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
        const lightboxImagesArray = this.props.data.markdownRemark.frontmatter.lightboxImages.map(image => (image.childImageSharp)) || [];
        console.log(lightboxImagesArray)
        return (
            <Layout location={location}>
                <Container>
                    <h1>{title}</h1>
                    <p className="subtitle">{subtitle}</p>
                    <Author date={date} category={category} primaryTech={primaryTech} />
                    <Img className="mainPhoto" fluid={image} />
                    <StyledHTML dangerouslySetInnerHTML={{
                        __html: html
                    }} />
                    <div className="lightboxContainer">
                        {lightboxImagesArray.length > 0 ? <Lightbox images={lightboxImagesArray}/> : null}
                    </div>
                    <div className="metaInfo">
                        <div className="links">
                            <div className="link" ><a href={website} target="_blank"><FontAwesomeIcon icon={faGlobe}/></a></div>
                            <div className="link" ><a href={github} target="_blank"><FontAwesomeIcon icon={faCode}/></a></div>
                        </div>
                        <div className="tags">
                            {tags.map(tag => (
                                <Link to={`/tags/${kebabCase(tag)}`} ><p>#{tag}</p></Link>
                            ))}
                        </div>
                    </div>
                    <div className="navigation">
                        {prev ?
                            <Link to={`/projects${prev.frontmatter.slug}`}>
                            ← Prev
                            </Link> : <div></div>}   
                        {next ?
                            <Link to={`/projects${next.frontmatter.slug}`}>
                                Next →
                            </Link> : <div></div>}
                    </div>
                </Container>
                <ProjectArchive />
            </Layout>
        )
    }
}

export const query = graphql`
    query ProjectQuery($slug: String!) {
        markdownRemark(frontmatter: {
            slug: {
                eq: $slug
            }
        }) {
            html
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
                lightboxImages {
                    childImageSharp {
                      fluid (maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
            }
        }
    }
`;