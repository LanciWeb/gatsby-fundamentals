import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const WorkingWithImages = ({ data }) => {
  const fixedImage = data.fixedImage.childImageSharp.fixed
  const fluidImage = data.fluidImage.childImageSharp.fluid
  return (
    <div>
      <Img fixed={fixedImage} alt="fixed" />
      <p>
        <Img fluid={fluidImage} alt="fluid" />
      </p>
    </div>
  )
}

export const query = graphql`
  {
    fixedImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluidImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

export default WorkingWithImages
