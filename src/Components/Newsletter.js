import React from 'react'
import line from '../images/Line.jpg'
import small from '../images/small.jpg'

const Newsletter = () => {
  return (
   <section className='news-letter'>
    <div className='line-container'>
    <div className='circle-one'></div>
        <div className='circle-two'></div>
        <div className='line-one'><img src={line} alt='line'/></div>
        <div className='line-two'><img src={line} alt='line'/></div>
        <div className='small-container'>
        <img src={small} alt='small' className='small-line'/>
        <img src={small} alt='small' className='small-line2'/>
        <img src={small} alt='small' className='small-line3'/>
        </div>
    
        <div className='news-container'>
            <div className='numbers'>
                <h3>10K </h3>
                <small>active users</small>
                
            </div>
            <div className='numbers'>
                <h3>55K </h3>
                <small>Created Artwork</small>
            </div>
            <div className='numbers'>
                <h3>30K </h3>
                <small>Earned Profits</small>
            </div>
            <div className='numbers'>
                <h3>100 </h3>
                <small>Artist</small>
            </div>
        </div>
    </div>
        
        <div className='newsletter-container'>
            <div className='newsletter-wrapper'>
                <div className='news-letter-content'>
                    <div className='newsletter-left'>
                    <h2>Newsletter</h2>
                    <p>Submit to our newsletter and Get update with Nfts</p>
                    </div>
                    <div className='newsletter-right'>
                        <form>
                            <input type='text' name='' />
                            <input type='submit' name='' value="Subscribe"/>
                        </form>
                    </div>
                   
                </div>
            </div>
        </div>
      
   </section>
  )
}

export default Newsletter