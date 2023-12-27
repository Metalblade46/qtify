import React, { useEffect, useState } from 'react'
import styles from './CarouselLeftNav.module.css'
import { ReactComponent as LeftArrow } from '../../../assets/leftNav.svg'
import { useSwiper } from 'swiper/react'
const CarouselLeftNav = ({ isBeginning, setisBeginning, setisEnd }) => {
  const swiper = useSwiper()
  useEffect(()=>{
    swiper.on('slideChange',function(swiper){
      setisEnd(swiper.isEnd);
      setisBeginning(swiper.isBeginning)
    })
  })
  return (
    <div className={styles.LeftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => {
        swiper.slidePrev();
        setisBeginning(swiper.isBeginning);
        setisEnd(swiper.isEnd);
      }} />}
    </div>
  )
}

export default CarouselLeftNav;