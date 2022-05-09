import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Signin from './signin'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setloading] = useState(false)
  const [user, setUser] = useState(false)
  const [tours, settours] = useState([])
  const fetchTours = async ()=>{
    setloading(true);
    try {
      const response = await fetch(url);// fetching data from API
    const php = await response.json(); //Assigning the fetched data json to php, this php will transfer to tours 
    setloading(false);
    settours(php);
    } catch (error) {
      console.log(error);
    }
    
  };
  useEffect(()=>{
    fetchTours();
  }, []);

  const removeTour = (id)=>{
    const newTour = tours.filter((t)=>t.id!==id)
    settours(newTour);
  }

  const submit=(props)=>{
    console.log('Here');
    setUser(false);
  }
 

 
//before fetching the loading is true and if statement is executed and display loading in page
  if(loading)
  return (
    <main>
    <Loading/>
    </main>
  )

   if(user)
   return (
     <main>
     <Signin submit = {submit} />
     </main>
     )
  //if length of tours become 0, this if condition executes and it again call fetchTours function
  if(tours.length===0){
    return(
      <main>
      <button onClick={() => setUser(true)}>ADD USER</button>
      <div className='title'>
      <button onClick={()=>fetchTours()}>Refresh</button>
      </div>
      </main>
    )
  }
  // After getting response the fuction fetchtours sets selloading to false and execute else statement
  else 
  return (
    <main>
    <button className='mySubmitButton' onClick={()=>setUser(true)}>ADD USER</button>
    <Tours tours ={tours} //pass tours oject to Tours.js for UI printing
    removeTour={removeTour}/> // this will pass function to tours.js and from tours.js this function is called
    </main>
  )
}

export default App
