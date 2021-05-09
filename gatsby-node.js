const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const result = await graphql(`
      query {
        allMarkdownRemark {
            edges {
              node {
                excerpt(pruneLength: 500)
                html
                timeToRead
                frontmatter {
                  author
                  date
                  title
                  slug
                  titlePlacement
                  image {
                    publicURL
                  }
                  video {
                      publicURL
                  }
                }
              }
            }
          }
      }
    `)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        actions.createPage({
            path: `/blog/${node.frontmatter.slug}`,
            component: path.resolve(`./src/templates/blogPost.jsx`),
            context: { ...node },
        })
    })
}