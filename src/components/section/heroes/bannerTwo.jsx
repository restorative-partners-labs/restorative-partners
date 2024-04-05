"use client"
import Image from 'next/image'
import Link from 'next/link'
import hero_2 from "@/assets/images/hero-2.jpg"
import hero_3 from "@/assets/images/hero-3.jpg"
import hero_vector from "@/assets/images/hero-vector-bg.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import 'swiper/css';

import hero_5 from "@/assets/images/hero-5.jpg"
import hero_6 from "@/assets/images/hero-6.jpg"
import hero_7 from "@/assets/images/hero-7.jpg"
import hero_8 from "@/assets/images/hero-8.jpg"
import ButtonFill from '@/components/ui/buttons/buttonFill'
import ButtonOutline from '@/components/ui/buttons/buttonOutline'
import { useRef } from 'react'
import RightArrow from '@/assets/icons/rightArrow'

const bannerData = [
    {
        id: 1,
        title: "Elegant Design Showcase",
        heading: "<span class='text-primary-foreground'> Elegance </span> <span class='outline-text'> Redefined </span>",
        banner_img: hero_8,
    },
    {
        id: 2,
        title: "Designing Interior Elegance",
        heading: "<span class='text-primary-foreground'> Elegance </span> <span class='outline-text'> Redefined </span>",
        banner_img: hero_2,
    },
    {
        id: 3,
        title: "Crafting Interior Brilliance",
        heading: "<span class='text-primary-foreground'> Elegance </span> <span class='outline-text'> Redefined </span>",
        banner_img: hero_3,
    },
]
const bannerBottomContent = [
    {
        id: 1,
        banner_img: hero_5,
        title: "Space Alchemy"
    },
    {
        id: 2,
        banner_img: hero_6,
        title: "Design Symphony"
    },
    {
        id: 3,
        banner_img: hero_7,
        title: "Personalized Elegance"
    },

]
const BannerTwo = () => {
    const swiperRef = useRef()
    const pagination = {
        clickable: true,
        el: ".hero-pagination",
        renderBullet: function (index, className) {
            return `<span class='${className} text-white translate-y-16 opacity-0 absolute h-0 leading-[90%] [font-size:_clamp(60px,10vw,150px)] font-extrabold lg:text-right'>${bannerData[index].title}</span>`;
        },
    };
    return (
        <section className='banner-two'>
            <div className='grid grid-cols-2'>
                {/* --------- Banner left side */}
                <div className='bg-primary pt-[136px] pb-[148px] bg-cover bg-no-repeat bg-right' style={{ backgroundImage: `url(${hero_vector.src})` }}>
                    <div className='z-10 relative px-3 md:px-0 '>
                        <div className='hero-pagination flex ' ></div>
                        <div className='flex flex-col lg:flex-row lg:items-end justify-end gap-5 xl:pr-10 pr-3 lg:mt-10 mt-5'>
                            <Link href={"/about-us"} className='mt-10 inline-block'>
                                <ButtonOutline className={"px-[35px] sm:py-2.5 py-2.5 border-secondary text-secondary-foreground after:bg-secondary hover:text-primary after:left-0"}><span className='text-base'>Who we are</span></ButtonOutline>
                            </Link>
                            <Link href={"/project-archive"} className='lg:mt-10 mt-2 inline-block'>
                                <ButtonFill className={"px-[35px] sm:py-2.5 py-2.5 after:bg-secondary text-primary-foreground border-secondary hover:text-secondary-foreground"}><span className='text-base'>View Projects</span></ButtonFill>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* ------- Banner right side */}
                <div>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={pagination}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper
                        }}
                        autoplay={{
                            delay: 4000,
                        }}
                        loop={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        className='h-full'
                    >
                        {
                            bannerData.map(({ id, banner_img, heading }) => {
                                return (
                                    <SwiperSlide key={id} className='relative'>
                                        <Image src={banner_img} loading='lazy'     width={"auto"} height={"auto"} alt='bg image' className='h-full object-cover' />
                                    </SwiperSlide>
                                )
                            })
                        }
                        <div className='flex justify-between absolute right-0 bottom-0 z-40'>
                            {/* ------- Next and prev arrow */}
                            <div className='flex flex-col sm:w-[90px] w-[70px] xl:h-[181px] h-[136px] '>
                                <button onClick={() => swiperRef.current?.slideNext()} className={`bg-primary text-secondary-foreground flex justify-center items-center h-1/2 `}> <RightArrow width={"35"} height={"22"} /> </button>
                                <button onClick={() => swiperRef.current?.slidePrev()} className={`bg-secondary text-primary-foreground flex justify-center items-center h-1/2 rotate-180`}> <RightArrow width={"35"} height={"22"} /> </button>
                            </div>
                            {/* ------- Next and prev arrow */}
                        </div>
                    </Swiper>
                </div>
            </div>
            {/* ---------- banner bottom  */}
            <div className='grid lg:grid-cols-3 2sm:grid-cols-2'>
                {
                    bannerBottomContent.map(({ id, banner_img, title }) => {
                        return (
                            <div key={id} className='relative overflow-hidden after:contents-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-overlay '>
                                <Image src={banner_img} loading='lazy'     alt='banner-bottom-bg' width={780} height={408} />
                                <h4 className='text-background 2xl:text-[82px] md:text-6xl text-5xl leading-120 font-extrabold absolute xl:left-12.5 md:left-9 sm:left-7 left-3 top-1/2 -translate-y-1/2 z-10'>{title}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default BannerTwo