import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className='header-part'>
        <Link to='/' style={{textDecoration:'none',color:'white'}}>
        <h1>Techflix Store</h1>
        </Link>
       
        <Link to='/Logout'>
        <button className='logout-btn'>Log out</button>
        </Link>
        
        
    </header>
  )
}

export default Header