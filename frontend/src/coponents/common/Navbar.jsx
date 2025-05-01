import React from 'react'
import ToggleTheme from './ToggleTheme'

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Online Store</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Online Store</a>
          </div>
          <div className="flex-none">
            <ToggleTheme />
          </div>

      </nav>
  )
}

export default Navbar