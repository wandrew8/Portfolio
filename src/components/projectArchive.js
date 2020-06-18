import React from "react"
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { variables } from '../styles/variables'
import { useStaticQuery, graphql } from "gatsby"

const StyledAside = styled.aside`
  min-width: 300px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: ${variables.large}) {
        grid-template-columns: 1fr;
        min-width: none;
        max-width: 600px;
    }
`;

const ArchiveList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .title {
      font-weight: 500;
      font-family: ${variables.headingFont};
      font-size: 1.2rem;
      margin: 0;
      padding: 0;
    }
    a {
        font-family: ${variables.primaryFont};
        font-size: 0.8rem;
        text-decoration: none;
        color: #524567;
        transition: 200ms linear;
        &:hover {
        box-shadow: 0px 3px 20px rgba(25, 17, 34, 0.1);
      }
    }
    .image {
      border-radius: 50%;
      height: 50px;
      min-width: 50px;
      width: 50px;
      object-fit: cover;
      margin: 0rem 2rem 0.2rem 0.2rem;
    }
    hr {
      margin-bottom: 1rem;
    }
   
`;

const POST_ARCHIVE_QUERY = graphql`
query ProjectArchive {
  allMarkdownRemark(limit: 10, filter: {frontmatter: {posttype: {eq: "project"}}}, sort: {order: ASC, fields: frontmatter___order}) {
    edges {
      node {
        frontmatter {
          title
          slug
          tags
          subtitle
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 75) {
                ...GatsbyImageSharpFluid
              }
           }
        }
        }
        excerpt(pruneLength: 100)
      }
    }
  }
}
`

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)
  const { edges } = data.allMarkdownRemark;

  return (
    <>
      <StyledAside>
          <h3>Top Projects</h3>
          <ArchiveList>
            {edges.map((edge) => {
                const { excerpt, frontmatter: { title, slug, subtitle, featuredImage }} = edge.node;
               return ( 
                   <Link key={slug} to={`/projects${slug}`}>
                        <li>
                            <hr/>
                            <div className="container">
                              <p className="title">{title}</p>
                              <Img className="image" fluid={featuredImage.childImageSharp.fluid} />
                            </div>
                            <p>{excerpt}</p>
                        </li>
                    </Link>
               )
            })}
          </ArchiveList>
      </StyledAside>
    </>
  )
}

export default Archive
