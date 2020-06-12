import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

export default class postLayout extends Component {
    render() {
        const { html, frontmatter: { title, date } } = this.props.data.markdownRemark;

        return (
            <Layout>
                <h1>{title}</h1>
                <p>{date}</p>
                <div dangerouslySetInnerHTML={{
                    __html: html
                }} />
            </Layout>
        )
    }
}

export const query = graphql`
    query PostQuery($slug: String!) {
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
            }
        }
    }
`;