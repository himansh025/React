import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route ,Router,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Header from './component/header/Header.jsx'
import Contact from './component/contact/Contact.jsx'
import About from './component/About/About.jsx'
import Home from './component/Homey/Home.jsx'
import Github from './component/Github/Github.jsx'
import User from './component/userid/User.jsx'
// import Github from './component/github/Github.jsx'
// import User from './component/userid/User.jsx'
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<Layout/>}>
      <Route index element= {<Home/>} />
      <Route path="about" element= {<About/>} />
      <Route path="contact" element= {<Contact/>} />
        <Route path="github" element= {<Github/>} />
        <Route path="user/:userid" element= {<User/>} />
       
 

      </Route>
  )
) 

// const router = createBrowserRouter([
//   {
//     path : '/', element:<Layout/>,
//   children : [
//     {
//       path:"",
//       element : <Home/>
//     },
//     {
//       path :'/about',
//       element: <About/>
//     },         
//     {
//       path :"/contact",
//       element : <Contact/>

//     }
//   ]}
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    < RouterProvider router={router} />

  </React.StrictMode>,
)
