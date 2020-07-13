const path = require('path');
const _ = require('lodash');
const { createFilePath } = require("gatsby-source-filesystem")

const {fmImagesToRelative} = require('gatsby-remark-relative-images')

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions
  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode})
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        graphql(`
        {
            postsGroup: allMarkdownRemark (sort: {order: ASC, fields: frontmatter___order}) {
              edges {
                node {
                  frontmatter {
                    tags
                    category
                    posttype
                    slug
                  }
                }
              }
            }
            tagsGroup: allMarkdownRemark(limit: 50) {
                group(field: frontmatter___tags) {
                  fieldValue
                }
              }
          }
        `).then(results => {
            const tags = results.data.tagsGroup.group
                  tags.forEach(tag => {
                      createPage({
                      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
                      component: path.resolve('./src/components/templates/tags/tagsLayout.js'),
                      context: {
                          tag: tag.fieldValue,
                      },
                      })
                  })
            
            const post = results.data.postsGroup.edges
            post.forEach(({ node }, index) => {
                if (node.frontmatter.posttype === 'project') {
                    createPage({
                      path: `/projects${node.frontmatter.slug}`,
                      component: path.resolve('./src/components/templates/project/projectLayout.js'),
                      context: {
                        slug:  node.frontmatter.slug,
                        category: node.frontmatter.category,
                        tags: node.frontmatter.tags,
                        prev: index === 0 ? null : post[index - 1].node.frontmatter.posttype !== "project" ? null : post[index - 1].node,
                        next: index === (post.length - 1) ? null : post[index + 1].node.frontmatter.posttype !== "project" ? null : post[index + 1].node,
                      }
                    });
                  }
                  if (node.frontmatter.posttype === 'hackathon') {
                    createPage({
                      path: `/hackathon${node.frontmatter.slug}`,
                      component: path.resolve('./src/components/templates/hackathon/hackathonLayout.js'),
                      context: {
                        slug:  node.frontmatter.slug,
                        category: node.frontmatter.category,
                        tags: node.frontmatter.tags,
                        prev: index === 0 ? null : post[index - 1].node.frontmatter.posttype !== "hackathon" ? null : post[index - 1].node,
                        next: index === (post.length - 1) ? null : post[index + 1].node.frontmatter.posttype !== "hackathon" ? null : post[index + 1].node,
                      }
                    });
                  }
                })
                
            resolve();
        })
    })
    
}
