import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { useLocation } from 'react-router-dom'

const Layout:React.FC = () => {

  const { pathname } = useLocation();

  console.log("pathname", pathname)
  useEffect(() => {
  console.log("Before scrollTo:", window.scrollY);
  window.scrollTo(0, 0);
  console.log("After scrollTo:", window.scrollY);
}, [pathname]);


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
