import fetch from 'node-fetch'

async function callAPI(method, uri, params, body){
    const jsonMimeType = {
      'Content-type':'application/json'
    }
    try{
      /*  Set up our fetch.
       *   'body' to be included only when method is POST
       *   If 'PUT', we need to be sure the mimetype is set to json
       *      (so bodyparser.json() will deal with it) and the body
       *      will need to be stringified.
       *   '...' syntax is the ES6 spread operator.
       *      It assigns new properties to an object, and in this case
       *      lets us use a conditional to create, or not create, a property
       *      on the object. (an empty 'body' property will cause an error
       *      on a GET request!)
       */
      var response = await fetch(uri, {
        method: method, // GET, POST, PUT, DELETE, etc.
        ...(method=='POST' ? {body: body} : {}),
        ...(method=='PUT' ?  {headers: jsonMimeType, body:JSON.stringify(body)} : {})
      });
      // response.json() parses the textual JSON data to a JSON object. 
      // Returns a Promise that resolves with the value of the JSON object 
      //  which you can pick up as the argument passed to the .then()
      return await response.json(); 
    }catch(err){
      console.error(err);
      return "{'status':'error'}";
    }
  }
  //module.exports = callAPI;
  export default callAPI;