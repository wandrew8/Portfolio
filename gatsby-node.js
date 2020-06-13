const path = require('path');
const { createFilePath } = require("gatsby-source-filesystem")


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        graphql(`
        {
            allMarkdownRemark (sort: {order: ASC, fields: frontmatter___title}) {
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
          }
        `).then(results => {
            const post = results.data.allMarkdownRemark.edges
            post.forEach(({ node }, index) => {
                if (node.frontmatter.posttype === 'project') {
                    createPage({
                      path: `/projects${node.frontmatter.slug}`,
                      component: path.resolve('./src/components/templates/project/projectLayout.js'),
                      context: {
                        slug:  node.frontmatter.slug,
                        category: node.frontmatter.category,
                        tags: node.frontmatter.tags,
                        prev: index === 0 ? null : post[index - 1].node.frontmatter.posttype === "post" ? null : post[index - 1].node,
                        next: index === (post.length - 1) ? null : post[index + 1].node.frontmatter.posttype === "post" ? null : post[index + 1].node,
                      }
                    });
                  } else { // blog post
                    createPage({
                        path: `/posts${node.frontmatter.slug}`,
                        component: path.resolve('./src/components/templates/post/postLayout.js'),
                        context: {
                        slug: node.frontmatter.slug,
                        category: node.frontmatter.category,
                        tags: node.frontmatter.tags,
                        prev: index === 0 ? null : post[index - 1].node.frontmatter.posttype === "project" ? null : post[index - 1].node,
                        next: index === (post.length - 1) ? null : post[index + 1].node.frontmatter.posttype === "project" ? null : post[index + 1].node,
                    }  
                    });
                  }
            })
            resolve();
        })
    })
    
}
