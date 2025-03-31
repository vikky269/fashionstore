import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'


const Layout:React.FC = () => {

  return (
    <div>
       <div>
         <Navbar />
       </div>

       <main>
         <Outlet />
       </main>

       <div>
        <Footer />
       </div>
    </div>
  )
}

export default  Layout
