

export default function getRandomJoke(){

  return fetch('http://api.icndb.com/jokes/random')
  .then(response => response.json())
  .then(data => {
      console.log(data);
      if(data.type !== 'success'){
        return {id: -1, joke: "Service not available (this is not a joke)"}
      }
      const { value } = data;
      let { id , joke } = value; 
      joke = joke.replace(/&quot;/g,'"')
      return { id, joke };
      
  })

}