import React, {useState, useEffect} from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import fetch from 'node-fetch'

const IndexPage = () => {

    const [charData, setCharData] = useState({});
    useEffect(() => {
      fetch("/.netlify/functions/omdbApi?movieId=tt1371111", {
        method: "GET",
      })
      .then((result) => {
          return result.json()
      })
      .then(json => {
        console.log(json.data)
        setCharData(json.data)
      })
      .catch((error) => alert(error));
    },[charData.title]);

  
  return (
    <Layout>
      <div>
        <h3>Cloud Atlas IMDB API Call</h3>
        <p>Building on the Atlas metaphor: Serverless Functions</p>
          <ul>
          {
            Object.entries(charData).map(([key, value]) => {
              return <li key={key}><b>{key}: </b>{value.toString()}</li>  
            })
          }</ul>
          
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
