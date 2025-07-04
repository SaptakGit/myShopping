import React,{ useState } from 'react'
import LoginModal from './LoginModal';

const NavbarLogin = () => {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <>
        <div className="dropdown dropdown-end text-center">
              <div tabIndex={1} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator ml-2">
                    <svg width="80%" height="80%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C8.8299 15 6.01077 16.5306 4.21597 18.906C3.82968 19.4172 3.63653 19.6728 3.64285 20.0183C3.64773 20.2852 3.81533 20.6219 4.02534 20.7867C4.29716 21 4.67384 21 5.4272 21H18.5727C19.3261 21 19.7028 21 19.9746 20.7867C20.1846 20.6219 20.3522 20.2852 20.3571 20.0183C20.3634 19.6728 20.1703 19.4172 19.784 18.906C17.9892 16.5306 15.17 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51469 3 7.49997 5.01472 7.49997 7.5C7.49997 9.98528 9.51469 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
              </div>
              <div tabIndex={1}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                <div className="card-body">
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block" onClick={() => setShowLogin(true)}>Login</button>
                  </div>
                </div>
              </div>
            </div>
            {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}</>
    )
}

export default NavbarLogin