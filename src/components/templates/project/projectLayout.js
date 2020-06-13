import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import ProjectArchive from '../../projectArchive'
import Img from "gatsby-image"
import Layout from '../../layout'
import styled from 'styled-components'
import Author from '../../author'
import { variables } from '../../../styles/variables'

const StyledHTML = styled.div`
    p {
        text-align: justify;
    }
   
`;

const Container = styled.div`
    position: relative;
    h1 {
        margin: 3rem 0rem 0rem 0rem;
        font-weight: 700;
    }
    .subtitle {
        color: ${variables.primaryLightGray};
        font-size: 1.3rem;
        margin-bottom: 2rem;
    }
    .tags {
        display: flex;
        a {
            margin-left: 1rem;
            text-decoration: none;
            color: ${variables.primaryLightGray}
        }
    }
    .navigation {
        display: flex;
        justify-content: space-between;
    }
    .mainPhoto {
        border-radius: 5px;
    }
`;


export default class projectLayout extends Component {
    render() {
        const { html, frontmatter: { title, date, tags, primaryTech, category, subtitle } } = this.props.data.markdownRemark;
        const { location, pageContext: { next, prev } } = this.props;
        const image = this.props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
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
                    <div className="tags">
                        {tags.map(tag => (
                            <Link to={`/projects/type/${tag}`} ><p>#{tag}</p></Link>
                        ))}
                    </div>
                    <div className="navigation">
                        {prev ?
                            <Link to={`/projects${prev.frontmatter.slug}`}>
                                Prev
                            </Link> : <div></div>}   
                        {next ?
                            <Link to={`/projects${next.frontmatter.slug}`}>
                                Next
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
`;