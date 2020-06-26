import React from "react"
import Layout2 from "../components/layout2"
import kebabCase from "lodash/kebabCase"
import styled from 'styled-components'
import Img from 'gatsby-image'
import { variables } from '../styles/variables'
import { Link, StaticQuery, graphql } from 'gatsby'
import SEO from "../components/seo"

const Tags = ({location}) => (
  <>
    <SEO title="Tags" />
        <Layout2>
        <div>
            <h1>Tags</h1>
            <StaticQuery 
                query={TAG_QUERY}
                render={({ allMarkdownRemark }) => {
                    return (
                    <TagContainer>
                        {allMarkdownRemark.group.map((edge, i) => {
                            return (
                                <Link 
                                  key={edge.tag} 
                                  to={`/tags/${kebabCase(edge.tag)}/`}>
                                  <div className="tag">
                                    <h3>{edge.tag}</h3>
                                    <p>({edge.totalCount} {edge.totalCount > 1 ? "projects" : "project"})</p>
                                    <div className="imageContainer">
                                      {edge.nodes.map(image => {
                                        return(
                                          <Img className="image" fluid={image.frontmatter.featuredImage.childImageSharp.fluid} />
                                        )
                                      })}
                                    </div>
                                  </div>
                                </Link>
                                
                            )
                        })}
                    </TagContainer>
                    )
                }}

            />
        </div>
      </Layout2>
  </>
)

export default Tags

const TAG_QUERY = graphql`
query AllTags {
  allMarkdownRemark {
    group(field: frontmatter___tags) {
      tag: fieldValue
      totalCount
      nodes {
        frontmatter {
          title
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
        }
      }
    }
  }
}


`

const TagContainer = styled.div`
  a {
    text-decoration: none;
    color: ${variables.primaryLight};

  }
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
  .tag {
    width: 300px;
    height: auto;
    border-radius: 10px;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.15);
    transition: 200ms linear;
    .imageContainer {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .image {
      width: 50px;
      height: 50px;
      min-width: 50px;
      min-height: 50px;
      border-radius: 5px;
      margin: 0rem 0.25rem;

    }
    h3 {
      font-size: 1.2rem;
      margin: 0;
      margin-bottom: 0.5rem;
      padding: 0;
    }
    &:hover{
      box-shadow: 0px 3px 20px rgba(25, 17, 34, 0.2);

    }
  }
`;