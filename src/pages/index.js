import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <div>
    <h3>Cloud Atlas Stuff</h3>
    <p>Building on the Atlas metaphor, exploring Fetlify Forms, and Serverless Functions</p>
    <StaticImage  src="../images/cloudatlas-poster.jpg" 
      height={600} 
      alt="Cloud Atlas Poster"
      placeholder="blurred"
      loading="eager"
      >
      </StaticImage>
      <form method="post" data-netlify="true">
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
  </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
