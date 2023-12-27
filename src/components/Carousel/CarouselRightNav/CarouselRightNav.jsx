import React, { useEffect, useState } from 'react'
import styles from './CarouselrightNav.module.css'
import { ReactComponent as RightArrow } from '../../../assets/rightNav.svg' 
import { useSwiper } from 'swiper/react'
const CarouselRightNav = ({isEnd, setisBeginning, setisEnd }) => {
    const swiper = useSwiper();
    useEffect(()=>{
      swiper.on('slideChange',function(swiper){
        setisBeginning(swiper.isBeginning)
        setisEnd(swiper.isEnd)
      })
    })
  return (
    <div className={styles.RightNavigation}>
        {!isEnd && <RightArrow onClick={()=>{
          swiper.slideNext();
          setisBeginning(swiper.isBeginning);
          setisEnd(swiper.isEnd);
          }}/>}
    </div>
  )
}

export default CarouselRightNav;