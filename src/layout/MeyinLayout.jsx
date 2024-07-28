import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function MeyinLayout() {
  return (
    <>
     <Navbar/>
     <main>
     <Outlet/>
     </main>
     <Footer/>
    </>
  )
}

export default MeyinLayout