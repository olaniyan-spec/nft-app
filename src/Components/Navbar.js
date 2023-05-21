import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import {MdOutlineClose} from 'react-icons/md'
import {GoThreeBars} from 'react-icons/go'
import './Navbar.css'

const Navbar = () => {
  const [navShowing, setNavshowing] = useState(false)
  return (
    <nav>
      <div>
        <ul className={`nav-links ${navShowing? 'show-nav' : 'hide-nav'}`}>
          <li><input type='text' placeholder='Explore' className='input'/></li>
          <li><NavLink to='/explore'>Explore</NavLink></li>
          <li><NavLink to='/following'>following</NavLink></li>
          <li><NavLink to='/community'>community</NavLink></li>
          <li><Link to='/' className='create'>Create</Link></li>
          <li><Link to='/' className='sign'>Sign in</Link></li>
        </ul>
        <button className='nav-toggle' onClick={()=>setNavshowing(prev=>!prev)}>
                    { navShowing ? <MdOutlineClose/> : <GoThreeBars/>}
                </button>
      </div>
    </nav>
  )
}

export default Navbar