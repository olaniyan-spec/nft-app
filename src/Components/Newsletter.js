import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';


const Newsletter = () => {
  return (
   <section className='news-letter'>
    <div className='line-container'>
        <div className='news-container'>
            <div className='numbers'>
                <h3>10K </h3>
                <small>active users</small>
                <span></span>
                
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
            <div className='circles'>
            <div className='circle-one'></div>
            <div className='circle-two'></div>
            </div>
    </div>
        <div className='newsletter-container'>
            <div className='newsletter-wrapper'>
                    <div className='newsletter-left'>
                    <h1>Newsletter</h1>
                    <p>Submit to our newsletter and Get update with Nfts</p>
                    </div>
                    <div className='newsletter-right'>
                    <ButtonGroup
                        disableElevation
                        variant="contained"
                        aria-label="Disabled elevation buttons"
                        >
                        <Button sx={{background:'linear-gradient(91.84deg, #61DFF1 0%, #3ABC6B 100%)', padding:2}}><input type='text' placeholder='Enter your email address'/></Button>
                        <Button sx={{color:'black',
                    fontSize:10, background:'linear-gradient(91.84deg, #61DFF1 0%, #3ABC6B 100%)'}}>Subscribe</Button>
                        </ButtonGroup>
                    </div>
                   
                </div>
            </div>
      
   </section>
  )
}

export default Newsletter