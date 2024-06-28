import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contextprovider from './context/Contextprovider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {

  return (
   <div>
<Contextprovider>
<Login/>
  <Profile/>
 
</Contextprovider>
     </div>
  )
}

export default App
