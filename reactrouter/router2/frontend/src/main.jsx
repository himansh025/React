import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './component/Home.jsx'
import Footer from './component/Footer.jsx'
import Contact from './component/Contact.jsx'
import About from './component/About.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      </Route>
      <Route path='/about' element={<About/>}/>
      <Route  path='/contact'  element={<Contact/>}/>
    

  
    </Routes>
 
    </BrowserRouter>
  </React.StrictMode>,
)
