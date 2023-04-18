import React, {useState, useEffect} from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import fetch from 'node-fetch'

const IndexPage = () => {

    const [info, setInfo] = useState({});
    useEffect(() => {
      fetch("/.netlify/functions/omdbApi?movieId=tt1371111", {
        method: "GET",
      })
      .then((result) => {
          return result.json()
      })
      .then(json => {
        console.log(json.data)
        setInfo(json.data)
      })
      .catch((error) => alert(error));
    },[info.title]);

  
  return (
    <Layout>
      <div>
        <h3>Cloud Atlas IMDB API Call</h3>
        <p>Building on the Atlas metaphor, exploring Fetlify Forms, and Serverless Functions</p>
        <StaticImage  src="../images/cloudatlas-poster.jpg" 
          height={600} 
          alt="Cloud Atlas Poster"
          placeholder="blurred"
          loading="eager"
          >
          </StaticImage>
          <ul>
          {
            Object.entries(info).map(([key, value]) => {
              return <li key={key}><b>{key}: </b>{value.toString()}</li>  
            })
          }</ul>
          
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
