import React from 'react'
import {FaEthereum} from 'react-icons/fa'
import {RxHeart} from 'react-icons/rx'
import { Nfts } from '../data'
import Card from './Card'
const Nft = () => {
  return (
    <section className='Nft'>
         <div className='nft-head'>
            <h2>Trending Posts</h2> 
              
          </div>
        <div className='container nft-container'>
        {
    Nfts.map((data, id)=>{
        return(
            <Card key={id} className='nfts-nft'>
                <div className='header-icon'>
                    <div>
                    <img src={data.avater} alt='avater'/>
                    <img src={data.avater2} alt='avater'/>
                    </div>
                 <span>{data.icon}</span>
                </div>
                <img src={data.image} alt='main'/>
                <div className='body1'>
                <h3>{data.title}</h3>
                <span>{data.second_icon}</span>
                </div>
                <div className='body2'>
                <h5><FaEthereum className='eth'/>100ETH 1/10</h5>
                <span><RxHeart/> 400</span>
                </div>
                
            </Card>
        )
    })
}
        </div>
    </section>
  )
}

export default Nft
