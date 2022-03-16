// create your App component here
import React,{ useState,useEffect } from "react";
//Create an App component from scratch
function App(){
//Use the useEffect hook in the App component. 
//Inside the callback for useEffect, 
//send a fetch request to https://dog.ceo/api/breeds/image/random, 
//a free API that returns a random image of a dog.
const [randomDog, setRandomDog] = useState("")
  useEffect(()=>{
      fetch("https://dog.ceo/api/breeds/image/random")
            .then(resp=> resp.json())
            .then(resp=>{
                
                setRandomDog(resp.message)
            })
  },[])
  return (
      randomDog ? <img src={randomDog} alt="A Random Dog" /> : <p>Loading...</p>
  )
}

export default App;