const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allFeedRepubblica {
        edges {
          node {
            title
            id
            content
            pubDate
          }
        }
      }
    }
  `)

  result.data.allFeedRepubblica.edges.forEach(({ node }) => {
    createPage({
      path: node.id,
      context: { id: node.id },
      component: path.resolve("./src/templates/repubblica-template.js"),
    })
  })
}
