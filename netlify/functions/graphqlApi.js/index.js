const fetch = require('node-fetch');

const handler = async function (event, context) {
    const apiUrl = 'https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/photosapp-zxrdq/graphql'    
    const { action, name, role, story, film_actor } = JSON.parse(event.body);
    console.log(action)
    let graphqlQuery={};

    // Example modeling a REST GET request in graphql
    if (action == 'get'){
        graphqlQuery = {
            query: `query characters {
              characters {
                _id
                name
                film_actor
                role
                story
              }
            }`
        } 
    }else if (action == 'post'){
    // Example modeling a REST POST (create) request in graphql
        graphqlQuery = {
            query: `mutation {
                insertOneCharacter(data: {
                    name: "${name}",
                    story: "${story}",
                    role: "${role}",
                    film_actor: "${film_actor}"
                })
                {
                  _id
                  name
                  role
                  story
                  film_actor
                }
              }`
        }
    }

  try {
    const response = await fetch(apiUrl,  {
      method: "post",
      headers: { 
        Accept: 'application/json',
        apiKey: `${process.env.MONGO_API_KEY}`,
        },
      body:JSON.stringify(graphqlQuery)
    }) 
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json() 
    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}
  
module.exports = {handler}