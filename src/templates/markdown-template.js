import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const MarkdownTemplate = ({ data }) => {
  const item = data.markdownRemark
  if (!item) return null

  const { html } = item
  const { title, author } = item.frontmatter
  // Repubblica home page does not provide content
  return (
    <Layout>
      <h1>{title}</h1>
      <cite>{author}</cite>
      <p dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        author
        title
      }
      html
    }
  }
`

export default MarkdownTemplate
