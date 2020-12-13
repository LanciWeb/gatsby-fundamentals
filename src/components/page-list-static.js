import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

const query = graphql`
  {
    allSitePage(filter: { path: { ne: "/sitemap/" } }) {
      edges {
        node {
          id
          path
        }
      }
    }
  }
`
const PageList = props => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <ul>
          <li>
            {data.allSitePage.edges.map(({ node }) => (
              <li key={node.id}>
                <Link to={node.path}>{node.id}</Link>
              </li>
            ))}
          </li>
        </ul>
      )}
    />
  )
}

export default PageList
