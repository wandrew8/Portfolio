const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        graphql(`
        {
            allMarkdownRemark {
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
            results.data.allMarkdownRemark.edges.forEach(({ node }) => {
                if (node.frontmatter.posttype === 'project') {
                    createPage({
                      path: `/projects${node.frontmatter.slug}`,
                      component: path.resolve('./src/components/templates/project/projectLayout.js'),
                      context: {
                        slug:  node.frontmatter.slug,
                        category: node.frontmatter.category,
                      }
                    });
                  } else { // blog post
                    createPage({
                        path: `/posts${node.frontmatter.slug}`,
                        component: path.resolve('./src/components/templates/post/postLayout.js'),
                        context: {
                        slug: node.frontmatter.slug,
                        category: node.frontmatter.category,
                      }
                    });
                  }
            })
            resolve();
        })
    })
    
}
