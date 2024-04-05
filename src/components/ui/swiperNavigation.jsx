import React from 'react'
import { useSwiper } from 'swiper/react';
import RightArrow from '@/assets/icons/rightArrow';

const SwiperNavigation = () => {
    const swiper = useSwiper();

    return (
        <div className='flex items-center gap-[22px]'>
            <button onClick={() => swiper.slidePrev()} className='text-primary-foreground rotate-180'> <RightArrow width={"35"} height={"22"} /> </button>
            <button onClick={() => swiper.slideNext()} className='text-primary-foreground'> <RightArrow width={"35"} height={"22"} /> </button>
        </div>
    )
}

export default SwiperNavigation