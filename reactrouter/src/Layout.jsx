import React from 'react'
import Header from './component/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/footer/Footer'
import About from './component/About/About'


function Layout() {
    return (

        <>
          <div>
            <Header />
          <Outlet/>
            <Footer/>
        </div>


        </>

    )
}

export default Layout