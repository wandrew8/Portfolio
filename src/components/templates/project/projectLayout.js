import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import ProjectArchive from '../../projectArchive'
import Img from "gatsby-image"
import Layout from '../../layout'

export default class projectLayout extends Component {
    render() {
        const { html, frontmatter: { title, date, tags } } = this.props.data.markdownRemark;
        const { location, pageContext: { next, prev } } = this.props;
        const image = this.props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
        return (
            <Layout location={location}>
                <div>
                    <h1>{title}</h1>
                    <p>{date}</p>
                    <Img fluid={image} />
                    <div dangerouslySetInnerHTML={{
                        __html: html
                    }} />
                    <div className="tags">
                        {tags.map(tag => (
                            <Link to={`/projects/type/${tag}`} ><p>#{tag}</p></Link>
                        ))}
                    </div>
                    {next &&
                        <Link to={`/projects${next.frontmatter.slug}`}>
                            Next
                        </Link> }
                    {prev &&
                        <Link to={`/projects${prev.frontmatter.slug}`}>
                            Prev
                        </Link>}   
                </div>
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
                date(formatString: "MMMM DD, YYYY")
                slug
                tags
                posttype
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