import React from "react"
import Layout from "./../components/layout"
import { graphql } from "gatsby"

const RepubblicaTemplate = ({ data }) => {
  const item = data.feedRepubblica
  if (!item) return null

  const { title, content, pubDate } = item
  // Repubblica home page does not provide content
  return (
    <Layout>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: content }} />
      <time>{pubDate}</time>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    feedRepubblica(id: { eq: $id }) {
      pubDate
      title
      content
    }
  }
`

export default RepubblicaTemplate
