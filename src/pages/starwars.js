import React from "react"
import Layout from "./../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const StarWars = () => {
  const data = useStaticQuery(query)
  const characters = data.allInternalStarWarsCharacter.nodes
  return (
    <Layout>
      {characters.map(({ id, name }) => (
        <h2 key={id}>{name}</h2>
      ))}
    </Layout>
  )
}

const query = graphql`
  {
    allInternalStarWarsCharacter {
      nodes {
        id
        name
      }
    }
  }
`

export default StarWars
