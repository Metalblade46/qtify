import React from 'react'
import styes from './Hero.module.css'
import HeadphoneLogo from '../../assets/vibrating-headphone 1.png'

const Hero = () => {
  return (
    <div className={styes.hero}>
        <div className={styes.text}>
            <h1>100 Thousand Songs, ad-free</h1><h1>Over thousands podcast episodes</h1>
        </div>
        <img src={HeadphoneLogo} alt="headphone" width='212px'/>
    </div>
  )
}

export default Hero