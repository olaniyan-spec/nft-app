import React from 'react'
import headerImage from '../images/header-image.jpg'
import {Link} from 'react-router-dom'


const header = () => {
  return (
    <header className='container header-container'>
      <div className='header-circle'>
        <div className='f-circle'></div>
        <div className='s-circle'></div>
      </div>
        <div className='header-left'>
            <div className='header-image'>
              <img src={headerImage} alt='header'/>
            </div>
            <div className='first-circle'></div>
            <div className='second-circle'></div>
        </div>
        <div className='header-right'>
          <h1>The Home of <span>NFT</span> Creation 
and World to CRPTO VERSE</h1>
<p>Discover the most Expensive NFT sales, Top NFT 
collection, and NFT marketplace rankings.</p>
<Link to='/Explore'><button>Explore Now</button></Link>
        </div>
    </header>
  )
}

export default header