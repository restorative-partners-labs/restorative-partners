"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, FreeMode } from "swiper/modules"
import 'swiper/css';

import project_img_1 from "@/assets/images/project-gallery-1.jpg"
import project_img_2 from "@/assets/images/project-gallery-2.jpg"
import project_img_3 from "@/assets/images/project-gallery-3.jpg"
import project_img_4 from "@/assets/images/project-gallery-4.jpg"
import project_img_5 from "@/assets/images/project-gallery-5.jpg"
import project_img_6 from "@/assets/images/project-gallery-6.jpg"
import RightArrow from '@/assets/icons/rightArrow';
import ButtonFill from '@/components/ui/buttons/buttonFill';

const projectImg = [
    {
        id: 1,
        img: project_img_1
    },
    {
        id: 2,
        img: project_img_2
    },
    {
        id: 3,
        img: project_img_3
    },
    {
        id: 4,
        img: project_img_4
    },
    {
        id: 5,
        img: project_img_5
    },
    {
        id: 6,
        img: project_img_6
    },
    {
        id: 7,
        img: project_img_1
    },
    {
        id: 8,
        img: project_img_2
    },
    {
        id: 9,
        img: project_img_3
    },

]
const ProjectSingleSliderTwo = () => {
    const swiperRef = useRef()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='container'>
            <div className='relative'>
                <Swiper
                    slidesPerView={1}
                    loop
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className=''
                >
                    {
                        projectImg?.map(({ id, img }) => {
                            return (
                                <SwiperSlide key={id}>
                                    <Image src={img} loading='lazy'      alt='img' className='w-full h-full max-h-[720px]' />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className='absolute top-1/2 -translate-y-1/2 z-10 w-full flex justify-between items-center gap-5'>
                    <div onClick={() => swiperRef.current?.slidePrev()}>
                        <ButtonFill className='rotate-180 2sm:h-[90px] h-10 2sm:w-[90px] w-10 2sm:px-6 px-1.5 after:bg-secondary border-secondary hover:border-primary text-primary-foreground hover:text-secondary-foreground hover:bg-primary'><RightArrow width={"35"} height={"22"} /></ButtonFill>
                    </div>
                    <div onClick={() => swiperRef.current?.slideNext()}>
                        <ButtonFill className='2sm:h-[90px] h-10 2sm:w-[90px] w-10 2sm:px-6 px-1.5 border-secondary hover:border-primary after:bg-secondary text-primary-foreground hover:text-secondary-foreground hover:bg-primary'><RightArrow width={"35"} height={"22"} /></ButtonFill>
                    </div>
                </div>
            </div>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={27}
                speed={500}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    750: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1320: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                }}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mt-[35px]"
            >
                {
                    projectImg?.map(({ id, img }) => {
                        return (
                            <SwiperSlide key={id}>
                                <Image src={img} loading='lazy'      alt='img' className='w-full lg:min-h-[250px] min-h-[100px] max-h-[100px] h-full ' />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default ProjectSingleSliderTwo