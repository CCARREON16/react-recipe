import React from "react"
import Axios from 'axios'
import "./App.css";


const App = () => {
  const APP_ID = "ca253be7";
  
  const APP_KEY = "3aae923868ef77dd3110514cc501e886";

  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  

  const getData = async ()=> {
        const result = await Axios.get(url);
        

        console.log(result)
      }



  return (
    <div className= "App">
    <h1 onClick={getData}>Food searching app</h1>  
      
    </div>
  );
};

export default App;



