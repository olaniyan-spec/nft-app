import React from 'react'
import arrow from '../images/Arrow.jpg'
import {RxDotsHorizontal} from 'react-icons/rx'
import avatar1 from '../images/avatar1.jpg'
import avatar2 from '../images/avatar2.jpg'
import image1 from '../images/nft1.jpg'
import {FaEthereum} from 'react-icons/fa'
import {RxHeart} from 'react-icons/rx'

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
<button>Explore Now</button>
        </div>
          <div className='nft-head'>
            <h2>Trending Posts</h2> 
              <img src={arrow} alt='arrow'/> 
          </div>
    </header>
  )
}

export default header