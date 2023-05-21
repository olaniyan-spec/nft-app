import React from 'react'
import {IoMdArrowDropdown} from 'react-icons/io'
import cr1 from '../images/cr1.jpg'
import cr2 from '../images/cr2.jpg'
import cr3 from '../images/cr3.jpg'
import cr4 from '../images/cr4.jpg'
import cr5 from '../images/cr5.jpg'
import cr6 from '../images/cr6.jpg'
import cr7 from '../images/cr7.jpg'
import cr8 from '../images/cr8.jpg'


const Creators = () => {
  return (
    <section className='creators'>
        <div className='creator-head'>Top Creators <span>This week<IoMdArrowDropdown/></span></div>
        <div className='creator-container'>
            <div className='creator-content'>
                <span>1</span> <img src={cr1} alt='creator'/>
                <div className='text'>
                    <h4>Silver Bird</h4>
                    <small>$30,000,000</small>
                </div>
            </div>
            <div className='creator-content'>
                <span>2</span> <img src={cr2} alt='creator'/>
                <div className='text'>
                    <h4>Handyma</h4>
                    <small>$30,000,000</small>
                </div>
                
            </div>
            <div className='creator-content'>
                <span>3</span> <img src={cr3} alt='creator'/>
                <div className='text'>
                    <h4>NotBlack</h4>
                    <small>$30,000,000</small>
                </div>
                
            </div>
            <div className='creator-content'>
                <span>4</span> <img src={cr4} alt='creator'/>
                <div className='text'>
                    <h4>Fitings</h4>
                    <small>$30,000,000</small>
                </div>
                
            </div>
            <div className='creator-content'>
                <span>5</span> <img src={cr5} alt='creator'/>
                <div className='text'>
                    <h4>Acquila</h4>
                    <small>$30,000,000</small>
                </div>
                
            </div>
            <div className='creator-content'>
                <span>6</span> <img src={cr6} alt='creator'/>
                <div className='text'>
                    <h4>3ratot</h4>
                    <small>$30,000,000</small>
                </div>
                
            </div>
            <div className='creator-content'>
                <span>7</span> <img src={cr7} alt='creator'/>
                <div className='text'>
                    <h4>fundz</h4>
                    <small>$30,000,000</small>
                </div>
                
            </div>
            <div className='creator-content'>
                <span>8</span> <img src={cr8} alt='creator'/>
                <div className='text'>
                    <h4>Bangd</h4>
                    <small>$30,000,000</small>
                </div>
                
            </div>
        </div>
           
        
    </section>
  )
}

export default Creators