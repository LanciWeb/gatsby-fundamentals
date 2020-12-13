import React from "react"
import Layout from "./../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const StarWars = () => {
  const data = useStaticQuery(query)
  const characters = data.allStarWarsCharacter.nodes
  return (
    <Layout>
      {characters.map(({ id, name, films }) => (
        <>
          <h2 key={id}>{name}</h2>
          {films && (
            <ul>
              {films.map(({ id, title }) => (
                <li key={id}>{title}</li>
              ))}
            </ul>
          )}
        </>
      ))}
    </Layout>
  )
}

const query = graphql`
  {
    allStarWarsCharacter {
      nodes {
        id
        name
        films {
          title
          id
        }
      }
    }
  }
`

export default StarWars
