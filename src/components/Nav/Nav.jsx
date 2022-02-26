import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = (props) => {
  return (
    <nav className='navbar'>
      <Link to="/signup">Sign UP</Link>
    </nav>
  )
}

export default Nav