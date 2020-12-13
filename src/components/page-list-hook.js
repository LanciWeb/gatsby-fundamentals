import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const PageList = () => {
  const data = useStaticQuery(query)
  return (
    <ul>
      <li>
        {data.allSitePage.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.path}>{node.id}</Link>
          </li>
        ))}
      </li>
    </ul>
  )
}

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

export default PageList
