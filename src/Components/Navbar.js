import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../images/TradeNFT.jpg'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container'>
      <div className='container nav-wrapper'>
        <div className='nav-content1'>
          <ul>
            <li>
            <Link to='/' ><img className='nav-logo' src={logo} alt='logo'/></Link>
          <input type='text' placeholder='Explore'/>
          <NavLink to='/Explore'>Explore</NavLink>
          <NavLink to='/Following'>Following</NavLink>
          <NavLink to='/Community'>Community</NavLink>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar