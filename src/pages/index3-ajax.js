import React, {useState, useRef} from "react"
import Layout from '../components/layout'

const IndexPage = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm); 
    const encData = new URLSearchParams(formData).toString()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encData,
    })
      .then(() => {
        console.log(encData)
        alert("Thank you for submitting your form!")
        navigate("/confirm/")
      })
      .catch((error) => alert(error));
  };
  
  return (
    <Layout>
      <div>
        <h3>Netlify Forms - Submit via AJAX</h3>
        <p>Exploring Netlify Forms - AJAX</p>
          <form method="post" 
                name="Data Collection Form" 
                data-netlify="true"
                onSubmit={handleSubmit}
                >
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
