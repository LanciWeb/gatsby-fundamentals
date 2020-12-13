import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "./../components/layout"

const SitemapPage = props => {
  const { data } = props

  return (
    <Layout>
      <ul>
        <li>
          {data.allSitePage.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={node.path}>{node.id}</Link>
            </li>
          ))}
        </li>
      </ul>
    </Layout>
  )
}

export const query = graphql`
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

export default SitemapPage
