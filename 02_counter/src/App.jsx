import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)



  // let counter=5;

 const increase= () => {

  counter=counter+1;
  console.log("value is",counter);
  // console.log(value);
  setCounter(counter);
  console.log(counter);
     
  
} 


const decrease= ()=>{
  if(counter==0){
    counter=0;
    setCounter(counter)
} 
  else{
  counter=counter-1;
  setCounter(counter)
  }}


  return (
<div>
    <h1>counter program in jsx</h1>
    <h2>couter is {counter}</h2>
    <button  onClick={decrease} >decrease   </button>
    <button  onClick={increase} >increse   </button>
    
    </div>
  )
}

export default App
