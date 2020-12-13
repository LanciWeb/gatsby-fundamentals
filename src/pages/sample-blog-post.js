import React from "react"
import BlogPost from "../components/blog-post"

const SampleBlogPostPage = () => {
  return (
    <BlogPost
      title="Primo post"
      abstract="abstract stuff"
      author={{ firstName: "Marco", lastName: "Lanci" }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rem iure
        sunt magni! Asperiores quis assumenda, ad voluptate distinctio libero
        sit debitis modi eligendi id, ut quasi eveniet minima magni.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias ut
        fugit rerum rem recusandae exercitationem incidunt impedit dolorum
        repellat nesciunt quibusdam voluptates, voluptate quaerat at, quisquam
        obcaecati minus quasi.
      </p>
    </BlogPost>
  )
}

export default SampleBlogPostPage
