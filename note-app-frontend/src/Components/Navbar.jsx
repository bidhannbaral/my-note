import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/open-book.png'

const Navbar = () => {
    
    const [menu, setMenu] = useState(false);

  return (
    <>
        <nav>
            <div className="nav-container">
                <div className="title-logo">   
                    <div className="logo-container">
                        <Link to="/">
                            <img className="logo" src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="title">
                        <Link to="/">
                            <h1>MyNote</h1>
                        </Link>
                    </div>
                </div>
                <div className="menu" onClick={() => setMenu(!menu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`nav-wrapper${menu? '-open' : ''}`}>
                    <div>
                        <NavLink to="/about">
                            <button>About</button>
                        </NavLink>
                        <NavLink to="/year1">
                            <button>First Year</button>
                        </NavLink>
                        <NavLink to="/year2">
                            <button>Second Year</button>
                        </NavLink>
                        <NavLink to="/year3">
                            <button>Third Year</button>
                        </NavLink>
                        <NavLink to="/year4">
                            <button>Fourth Year</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar