import React, {useState, useEffect} from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import callAPI from '../util/callApi'
import fetch from 'node-fetch'

const IndexPage = () => {
    const apiUrl = '/.netlify/functions/graphqlApi'
    
    const [charData, setCharData] = useState({characters: []});
    useEffect(() => {
      fetch(apiUrl, {
        method: 'post',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({'action': 'get'})
      })
        .then((response) => {
          return response.json();
      })
        .then((cJson)=>{
          console.log(cJson.data.data)
          setCharData(cJson.data.data)
        })
         .catch((error) => alert(error));
    },[charData.characters.length]);

  
  return (
    <Layout>
      <div>
        <h3>Cloud Atlas Characters API Call</h3>
        <p>Building on the Atlas metaphor, exploring Netlify Forms, and Serverless Functions</p>
        <StaticImage  src="../images/cloudatlas-poster.jpg" 
          height={200} 
          alt="Cloud Atlas Poster"
          placeholder="blurred"
          loading="eager"
          >
        </StaticImage>
        <table>
          <thead><tr>
            <th>Character Name</th>
            <th>Actor</th>
            <th>Story</th>
            <th>Role</th>
          </tr></thead> 
          <tbody>     
          {
          charData.characters.map((c) => {
            return <Character char={c}/>  
          })
          }
          </tbody>
      </table> 
      <CharacterForm /> 
      </div>
    </Layout>
  )


  function Character({char}){
    return <tr key={char._id}><td >{char.name}</td><td> {char.film_actor} </td><td>{char.story}</td><td>{char.role}</td></tr>
  }

  function CharacterForm(){

    const handleNewCharacter = (event) => {
      event.preventDefault();
      const myForm = event.target;
      const formData = new FormData(myForm);
      formData.append('action', 'post');
      
      const data = JSON.stringify(Object.fromEntries(formData));
      console.log(data)
      fetch(apiUrl, {
        method: 'post',
        headers: { "Content-Type": "application/json" },
        body: data
      })
        .then((response) => {
          console.log(response)
          return response.text();
        })
        .then(json=>{
          console.log(json)
          setCharData({characters: []})
        })
        .catch((error) => alert(error));
    };
    
    return (
      <div>
        <form onSubmit={handleNewCharacter}>
      
        <label>Character Name <input name="name" type="text" id="name"/></label><br/>
        <label>Actor <input name="film_actor" type="text" id="film_actor"/></label><br/>
        <label>Story <input name="story" type="text" id="story"/></label><br/>
        <label>Role <input name="role" type="text" id="role"/></label><br/>
        <input type="submit"/><br/>
        </form>
      </div>
        
    )
  }

  
}
export default IndexPage

export const Head = () => <title>Home Page</title>
