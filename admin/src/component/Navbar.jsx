import React from 'react'
import { Link, Links, useNavigate } from 'react-router-dom'
import logo from '../assets/SJ-Logo.png';


const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    return navigate("/")
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className='text-5xl'><div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div></label>
            </div>
            <div className="z-50 drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="min-h-full p-4 menu bg-base-200 text-base-content w-80">
                {/* Sidebar content here */}
                <li><h1 className='text-xl'>Admin Menu</h1></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/category'>Category</Link></li>
                <li><Link to='/product'>Product</Link></li>
                <li><Link to='/userlist'>Userlist</Link></li>
                <li><a onClick={handleLogout}>📴Logout</a></li>
              </ul>
            </div>
          </div>
      </div>
      <div className="navbar-center">
        <img src={logo} alt='logo' className='h-16'/>
        <a className="text-xl btn btn-ghost">Shining Jewellary Admin Panel</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Navbar