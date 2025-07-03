import React from 'react'
import ToggleTheme from './ToggleTheme'
import { Link } from 'react-router-dom'
import logo from '../../assets/SJ-Logo.png'
import NavbarCart from './NavbarCart'
import NavbarProfile from './NavbarProfile'
import NavbarLogin from './NavbarLogin'

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
        </div>
          <div className="flex-1">
            <Link to='/' className="normal-case text-xl"><img src={logo} alt='logo' className='h-16'/> </Link>
          </div> 
          <div className="flex-none">
            <ToggleTheme />
            <NavbarLogin />
            <NavbarCart />
            <NavbarProfile />
          </div>
      </nav>
  )
}

export default Navbar