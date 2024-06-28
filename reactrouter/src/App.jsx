import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import Home from './component/Homey/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1 className="bg-green-500 text-2xl"> React router</h1>
    {/* <Header/> */}
    {/* <Footer/>
    <Home/> */}
        </>
  )
}

export default App
