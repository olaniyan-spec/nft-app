import React from 'react'
import avater from '../images/avatar1.jpg'
import avater2 from '../images/avatar2.jpg'
import {RxDotsHorizontal} from 'react-icons/rx'
import {FaEthereum} from 'react-icons/fa'
import image from '../images/nft1.jpg'
import image2 from '../images/nft2.jpg'
import image3 from '../images/nft3.jpg'
import {RxHeart} from 'react-icons/rx'

const Nft = () => {
  return (
    <section className='Nft'>
        <div className='container nft-container'>
                <div className='box'>
                    <div className='header-icon'>
                        <img src={avater} alt='avater'/>
                        <img className="avater" src={avater2} alt='avater'/>
                        <span><RxDotsHorizontal/></span>
                    </div>
                    <img src={image} alt='main' className='nft1'/>
                    <h2>ColoredskullMint <span className='second-icon'><FaEthereum/></span></h2>
                    <h3><FaEthereum className='eth'/>100ETH 1/10 <span className='love'><RxHeart/> 400</span></h3>  
                </div>
                <div className='box'>
                <div className='header-icon'>
                        <img src={avater} alt='avater'/>
                        <img className="avater" src={avater2} alt='avater'/>
                        <span><RxDotsHorizontal/></span>
                    </div>
                    <img src={image2} alt='main' className='nft2'/>
                    <h2>ScribbleVerse <span className='sec-icon'><FaEthereum/></span></h2>
                    <h3><FaEthereum className='eth'/>100ETH 1/1 <span className='love'><RxHeart/> 400</span></h3>
                </div>
                <div className='box'>
                <div className='header-icon'>
                        <img src={avater} alt='avater'/>
                        <img className="avater" src={avater2} alt='avater'/>
                        <span><RxDotsHorizontal/></span>
                    </div>
                    <img src={image3} alt='main' className='nft3'/>
                    <h2>WaterDrop<span className='third-icon'><FaEthereum/></span></h2>
                    <h3><FaEthereum className='eth'/>100ETH 1/1 <span className='love'><RxHeart/> 400</span></h3>
                </div>
        </div>
    </section>
  )
}

export default Nft

// {
//     Nfts.map((data, id)=>{
//         return(
//             <Card key={id} className='nfts-nft'>
//                 <div className='header-icon'>
//                 <img src={data.avater} alt='avater'/>
//                  <span>{data.icon}</span>
//                 </div>
//                 <img src={data.image} alt='main'/>
//                 <h2>{data.title}<span className='second-icon'>{data.second_icon}</span></h2>
//                 <h3 ><FaEthereum className='eth'/>100ETH 1/10 <span className='love'><RxHeart/> 400</span></h3>
//             </Card>
            
//         )
//     })
// }