import React from 'react'
import arrow from '../images/Arrow.jpg'
import {Link} from 'react-router-dom'


const header = () => {
  return (
    <header className='container header-container'>
        <div className='header-left'>
            <div className='header-image'></div>
            <div className='first-circle'></div>
            <div className='second-circle'></div>
        </div>
        <div className='header-right'>
          <h1>The Home of NFT Creation 
and World to CRPTO VERSE</h1>
<p>Discover the most Expensive NFT sales, Top NFT 
collection, and NFT marketplace rankings.</p>
<Link to='/Explore'><button>Explore Now</button></Link>
        </div>
          <div className='nft-head'>
            <h2>Trending Posts</h2> 
              <img src={arrow} alt='arrow'/> 
          </div>
    </header>
  )
}

export default header