import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let [count,setCount] = useState(5)

  // const increase= () => {

  //   count=count+1;
  //       console.log(count);
  //   setCount(count);
  //   console.log(count);


  // } 


  // const decrease= ()=>{
  //   count=count-1;
  //       console.log(count);
  //   setCount(count)
  //       console.log(count);
  //   }

  let product = [
    {
      name: "js ",
      id: 1,
    },
    {
      name: "css ",
      id: 2,
    },
    {
      name: "react ",
      id: 3,
    }
  ]


  let Productdetails = product.map(product =>
    <li key={product.id} > {product.name}</li>

  )

  return (
    <div  >
      {/* <h1>counter </h1>
<h2> Couter is : {count} </h2>
      <button onClick={increase}> increse counter</button>
      <button onClick={decrease}>Counter Down </button> */
      }
      <div> {Productdetails}</div>
    </div>

  )
}

export default App
