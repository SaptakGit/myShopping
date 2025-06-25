import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  //console.log('✅ Layout mounted');
  return (
    <>
      <Navbar/>
      <div className='page-body'>
        <Outlet/>
      </div>
    </>
    
  )
}

export default Layout