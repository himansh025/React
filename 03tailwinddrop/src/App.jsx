import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

const obj= {
  name :" deolia"
}


  return (
    <>
    <div>
      <h1 className="bg-green-400 rounded text-black mb-4 ">
        THIS IS CARD
      </h1>

      <Card props= {"himanshu"}/>
      {/* or */}
    
      <Card props={obj.name} />



      </div>
    </>
  
  )

}

export default App
