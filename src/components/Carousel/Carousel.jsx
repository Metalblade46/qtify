import React, { useEffect,useState } from 'react'
import { Navigation } from 'swiper/modules';

import { Swiper, useSwiper, SwiperSlide } from 'swiper/react';
import styles from './Carousel.module.css'
import CarouselLeftNav from './CarouselLeftnav/CarouselLeftNav';
import CarouselRightNav from './CarouselRightNav/CarouselRightNav';
// Import Swiper styles
import 'swiper/css';

const Controls = ({data})=>{
const swiper = useSwiper();
useEffect(()=>{
    swiper.slideTo(0,300);
},[data])
return <></>
}

const Carousel = ({data,renderComponent}) => {
  const swiper = useSwiper();
  const [isBeginning, setisBeginning] = useState(true);
  const [isEnd, setisEnd] = useState(false);
  return (
    <div className={styles.wrapper}>
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          style={{padding:'0px 20px'}}
          initialSlide={0}
          spaceBetween={40}
          slidesPerView={'auto'}
          allowTouchMove
        >
            <Controls data={data}/>
            <CarouselRightNav isEnd={isEnd} setisBeginning={setisBeginning} setisEnd={setisEnd}/>
            <CarouselLeftNav isBeginning={isBeginning} setisBeginning={setisBeginning} setisEnd={setisEnd}/>
            {data.map(ele=><SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>)}
        </Swiper>
    </div>
  )
}

export default Carousel