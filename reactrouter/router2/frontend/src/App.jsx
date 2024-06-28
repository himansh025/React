import './App.css'
import { Outlet } from 'react-router'
import Footer from './component/Footer'
import Header from './component/Header'
function App() {

  return (
    <>
    <Header/>
    <Outlet/>
   <Footer/>
    </>
  )
}

export default App
