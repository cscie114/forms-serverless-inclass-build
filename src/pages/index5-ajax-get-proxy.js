import React, {useState, useEffect} from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import fetch from 'node-fetch'

const IndexPage = () => {

    
  
  return (
    <Layout>
      <div>
        <h3>Cloud Atlas IMDB API Call</h3>
        <p>Building on the Atlas metaphor: Serverless Functions</p>
          <ul>
          </ul>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
