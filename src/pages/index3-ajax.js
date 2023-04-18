import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const IndexPage = () => {

  const handleSubmit = (event) => {
    
  };
  

  return (
    <Layout>
      <div>
        <h3>Netlify Forms - Submit via AJAX</h3>
        <p>Exploring Netlify Forms - AJAX</p>
          <form method="post" 
                name="Data Collection Form" 
                data-netlify="true">
            <input type="hidden" name="form-name" value="Data Collection Form"/>
            <label>
              Name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" id="email" />
            </label>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
          </form>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
