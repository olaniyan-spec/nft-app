import React from 'react'
import './Home.css'
import Header from '../Components/Header'
import Nft from '../Components/Nft'
import Creators from '../Components/Creators'
import Newsletter from '../Components/Newsletter'

const Home = () => {
  return (
    <div>
      <Header/>
      <Nft/>
      <Creators/>
      <Newsletter/>
    </div>
  )
}

export default Home