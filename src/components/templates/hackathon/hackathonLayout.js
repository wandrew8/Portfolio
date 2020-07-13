import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faGlobe, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Img from "gatsby-image"
import Layout from '../../layout'
import styled from 'styled-components'
import Author from '../../author'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { variables } from '../../../styles/variables'
import ReactTooltip from "react-tooltip";


const StyledHTML = styled.div`
    p {
        text-align: justify;
        margin: 2rem 0rem;
    }
    h2 {
        position: relative;
        padding: 0rem 1.5rem;
    }

   
`;

const Container = styled.div`
    position: relative;
    width: 90%;
    min-width: 300px;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    iframe {
        margin: 0 auto;
    }
    .aspect-ratio {
        width: 90vw;
        max-width: 900px;
        position: relative;
        iframe {
            outline: none;
            border: none;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
            border-radius: 10px;
            margin: 1.5rem 0rem;
        }
        button {
            position: absolute;
            bottom: 40px;
            left: 8px;
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
            background: ${variables.primaryWhite};
            z-index: 100;
            &:hover {
                background: ${variables.primaryLightGray};
                color: ${variables.primaryWhite};
            }
    }
    a 
        text-decoration: none;
    }
    .icon {
        display: flex;
        align-items: center;
        
    }
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
        width: 100%;
        text-align: left;
        p {
        margin: 0;
        padding: 0;
        display: inline-block;

        }
        a {
            margin-right: 1rem;
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
    ul {
        list-style: none;
        text-align: left;
        margin: 0;
        margin-bottom: 2rem;
        li {
            margin: 0;
            padding: 0.2rem 0rem; 
        }
    }
    .lightboxContainer {
        width: 100%;
        margin-bottom: 1rem;
    }
    .imageContainer {
        position: relative;
        transition: .3s ease-in-out;
        margin: 1rem 0rem 3rem 0rem;
        &:hover .imageOverlay{
            background: rgba(0,0,0,0);
        }
        &:hover button{
            opacity: 1;
        }
        .imageOverlay{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 30;
            transition: .3s ease-in-out;
            background: rgba(0,0,0,0);
            border-radius: 5px;
        }
        button {
            cursor: pointer;
            letter-spacing: 1px;
            font-weight: 400;
            transition: 200ms ease-in;
            position: absolute;
            opacity: 0;
            top: 50%;
            z-index: 50;
            left: 50%;
            outline: none;
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
            .exLink {
                margin-left: 0.5rem;
            }
        }
    }
    .mainPhoto {
        border-radius: 5px;
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
        transition: 200ms linear; 
        box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.15);
        &:hover {

        }
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
    .info {
        color: ${variables.primaryLightGray};
        font-size: 0.9rem;
        text-align: left;
        p {
            margin: 0.1rem;
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


export default class hackathonLayout extends Component {
    render() {
        const { html, frontmatter: { title, dateFinished, github, website, date, tags, primaryTech, category, subtitle, timeAlloted, urlLink, heading  } } = this.props.data.markdownRemark;
        const { location, pageContext: { next, prev } } = this.props;
        return (
            <Layout grid={true} location={location}>
                <Container>
                    <h1>{title}</h1>
                    <p className="subtitle">{subtitle}</p>
                    <Author date={date} category={category} primaryTech={primaryTech} />
                    <div className="aspect-ratio">
                    <a href={website} target="_blank"><button>Visit Website</button></a>
                        <iframe src={urlLink} width="100%" height="500px" data-url={urlLink}></iframe>
                    </div>
                    <h2>{heading}</h2>
                    <div className="info">
                        <p>Length: {timeAlloted}</p>
                        <p>Date: {dateFinished}</p>
                    </div>
                    <StyledHTML dangerouslySetInnerHTML={{
                        __html: html
                    }} />
                    <div className="metaInfo">
                        <div className="links">
                        <ReactTooltip />
                            <div data-tip="Visit Website" className="link" ><a href={website} target="_blank"><FontAwesomeIcon icon={faGlobe}/></a></div>
                            <div data-tip="View Source Code" className="link" ><a href={github} target="_blank"><FontAwesomeIcon icon={faCode}/></a></div>
                        </div>
                        <div className="tags">
                            {tags.map(tag => (
                                <Link key={tag} to={`/tags/${kebabCase(tag)}`} ><p>#{tag}{`  `}</p></Link>
                            ))}
                        </div>
                    </div>
                    <div className="navigation">
                        {prev ?
                            <Link className="icon" to={`/hackathon${prev.frontmatter.slug}`}>
                            <ArrowBackIosIcon /> Prev
                            </Link> : <div></div>}   
                        {next ?
                            <Link className="icon" to={`/hackathon${next.frontmatter.slug}`}>
                                Next <ArrowForwardIosIcon />
                            </Link> : <div></div>}
                    </div>
                </Container>
            </Layout>
        )
    }
}

export const query = graphql`
    query HackathonQuery($slug: String!) {
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
                urlLink
                heading
                dateFinished(formatString: "MMMM DD, YYYY")
                timeAlloted
                featuredImage {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 800) {
                            ...GatsbyImageSharpFluid_tracedSVG
                      }
                   }
                }
            }
        }
    }
`;