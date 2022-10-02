import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='main-nav'>
            <div className='logo'>
                <h2>
                    <span>B</span>HARGAV
                </h2>
            </div>
            <div className='menu-link'>
                <ul className='menu-list'>
                    <Link to='/'>
                        <div className='links'>
                            <p>Home</p>
                        </div>
                    </Link>
                    <Link to='/about'>
                    <div className='links'>
                            <p>About</p>
                        </div>
                    </Link>
                    <Link to='/service'>
                    <div className='links'>    
                        <p>Service</p>
                    </div>    
                    </Link>
                    <Link to='/contact'>
                    <div className='links'>    
                        <p>Contact</p>
                    </div>    
                    </Link>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar