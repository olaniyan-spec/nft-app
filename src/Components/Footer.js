import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

import {Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer className='footer'>
    <div className='footer-wrapper'>
        <div className='content'>
            <div className='footer-socials'>
                <a href='https://linkedin.com/' target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
                <a href='https://twitter.com/@TofunmiOlaniyan' target='_blank' rel='noreferrer noopener'><AiOutlineTwitter className='blue'/></a>
                <a href='https://instagram.com/tofunmi_olaniyan' target='_blank' rel='noreferrer noopener'><AiFillInstagram className='green'/></a>
            </div>
        </div>
            <div className='content'>
                <h3>Marketplace</h3>
                <Link to='/'><small>Explore</small></Link>
                <Link to='/'><small>Nfts</small></Link>
                <Link to='/'><small>Collectibles</small></Link>
            </div>
            <div className='content'>
                <h3>Company</h3>
                <Link to='/'><small>Careers</small></Link>
                <Link to='/'><small>About us</small></Link>
                <Link to='/'><small>Support</small></Link>
            </div>
            <div className='content'>
                <h3>Resources</h3>
                <Link to='/'><small>Partners</small></Link>
                <Link to='/'><small>Blogs</small></Link>
                <Link to='/'><small>Help center</small></Link>
            </div>
    </div>
    <div className='footer-copyright'>
               <small>2023 TofunmiOlaniyan &copy; All rights reserved</small>
             </div>

    
   </footer>
  )
}

export default Footer