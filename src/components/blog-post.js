import SEO from "./seo"
import React from "react"
import Layout from "./layout"
import PropTypes from "prop-types"

const BlogPost = ({ title, abstract, author, children }) => {
  return (
    <Layout>
      <SEO title="blog" />

      <h1>{title}</h1>

      {author && (
        <div>
          {author.firstName} {author.lastName}
        </div>
      )}

      <div dangerouslySetInnerHTML={{ __html: abstract }} />
      <article>{children}</article>
    </Layout>
  )
}

BlogPost.protTypes = {
  title: PropTypes.string,
  author: PropTypes.shape({
    lastName: PropTypes.string,
    firstName: PropTypes.string,
  }),
  abstract: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}
BlogPost.defaultProps = {
  title: "Default Title",
}

export default BlogPost
