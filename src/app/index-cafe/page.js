"use client"
import React, { useState,useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

import Navbar from '../componets/Navbar/navbar'
import CafeFooter from '../componets/Footer/cafeFooter'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../node_modules/tiny-slider/dist/tiny-slider.css'

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"
import { FaArrowRight } from '../assets/icons/icons'

import { cafeData,clientsData,blogData,service2 } from '../Data/data'
import { cafeImage } from '../Data/dataThree'

const settings = {
    items: 1,
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
}
const settings2 = {
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
        1025: {
            items: 12
        },

        992: {
            items: 8
        },

        767: {
            items: 6
        },

        320: {
            items: 2
        },
    },
}

export default function IndexCafe(){
    let [lightBox, setLightbox] = useState(false);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + cafeImage.length - 1) % cafeImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cafeImage.length);
    };
    let handleImageClick = (index) => {
        console.log(index);
        setCurrentImageIndex(index);
        setLightbox(true);
    };
    let currentImage = cafeImage[currentImageIndex];

    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('dark');
        }
      }, []);
     
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative py-40 md:h-screen flex items-center overflow-hidden" id="home" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundImage: `url('/images/cafe/bg1.jpg')` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10 text-center">
                    <div className="md:-rotate-12 -rotate-6">
                        <span className="font-cursive-kaushan text-white/70 block mb-2">Since 1993</span>
                        <span className="font-cursive-kaushan text-white lg:text-9xl lg:leading-tight md:text-8xl md:leading-tight text-6xl leading-tight block">Great Coffee <br /> Good Vibes</span>

                        <div className="mt-8">
                            <Link href="#" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Explore More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">Welcome to Techwind Cafe</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.</p>
                </div>

                <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-8 gap-[30px] items-center">
                    <div className="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
                        <div className="grid grid-cols-1 gap-[30px]">
                            <div className="group transition-all duration-500 ease-in-out md:text-end text-start">
                                <Image src="/images/cafe/icons/coffee-time.svg" width={64} height={64} className="h-16 w-16 md:ms-auto p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="" />
                                <div className="mt-2 md:order-1 order-2">
                                    <Link href="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600">High Quality</Link>
                                    <p className="text-slate-400 mt-3">Composed in a pseudo-Latin language which more or less pseudo-Latin.</p>
                                </div>
                            </div>


                            <div className="group transition-all duration-500 ease-in-out md:text-end text-start">
                                <Image src="/images/cafe/icons/pot.svg" width={64} height={64} className="h-16 w-16 md:ms-auto p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="" />
                                <div className="mt-2 md:order-1 order-2">
                                    <Link href="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600">Pure Grades</Link>
                                    <p className="text-slate-400 mt-3">Composed in a pseudo-Latin language which more or less pseudo-Latin.</p>
                                </div>
                            </div>


                            <div className="group transition-all duration-500 ease-in-out md:text-end text-start">
                                <Image src="/images/cafe/icons/coffee-beans.svg" width={64} height={64} className="h-16 w-16 md:ms-auto p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="" />
                                <div className="mt-2 md:order-1 order-2">
                                    <Link href="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600">Proper Roasting</Link>
                                    <p className="text-slate-400 mt-3">Composed in a pseudo-Latin language which more or less pseudo-Latin.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-12 lg:order-2 order-1">
                        <Image src="/images/cafe/cafe-services.png" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="lg:w-auto md:w-80 mx-auto" alt="" />
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 order-3">
                        <div className="grid grid-cols-1 gap-[30px]">
                            <div className="group transition-all duration-500 ease-in-out">
                                <Image src="/images/cafe/icons/coffee.svg" width={64} height={64} className="h-16 w-16 p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="" />
                                <div className="mt-2">
                                    <Link href="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600">The Perfect Cup</Link>
                                    <p className="text-slate-400 mt-3">Composed in a pseudo-Latin language which more or less pseudo-Latin.</p>
                                </div>
                            </div>


                            <div className="group transition-all duration-500 ease-in-out">
                                <Image src="/images/cafe/icons/drip-glass.svg" width={64} height={64} className="h-16 w-16 p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="" />
                                <div className="mt-2">
                                    <Link href="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600">Coffee Machine</Link>
                                    <p className="text-slate-400 mt-3">Composed in a pseudo-Latin language which more or less pseudo-Latin.</p>
                                </div>
                            </div>


                            <div className="group transition-all duration-500 ease-in-out">
                                <Image src="/images/cafe/icons/coffee-cup.svg" width={64} height={64} className="h-16 w-16 p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="" />
                                <div className="mt-2">
                                    <Link href="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600">Coffee to Go</Link>
                                    <p className="text-slate-400 mt-3">Composed in a pseudo-Latin language which more or less pseudo-Latin.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:pt-0 pt-48  bg-center bg-no-repeat bg-cover jarallax bg-fixed" style={{backgroundImage:"url('/images/cafe/cta.jpg')"}}>
            <div className="container relative">
                <div className="md:flex justify-end">
                    <div className="md:w-1/2 md:py-36 py-10 lg:px-16 md:px-10 px-6 bg-white dark:bg-slate-900 text-center">
                        <Image src="/images/cafe/icons/coffee.svg" width={64} height={64} className="h-16 w-16 p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white mx-auto" alt="" />

                        <h4 className="font-head-ebgaramond text-3xl font-medium mt-4">Happy Hours</h4>

                        <p className="text-indigo-600 font-head-ebgaramond text-lg font-medium mt-2">Starts at 3pm</p>

                        <p className="text-slate-400 mt-4">The restaurant will open at 3pm for happy hour and dinner service starting at 5pm. We will continue to offer brunch on weekends from 10am-3pm with bottomless mimosas. We will also continue with our late night lounge on Friday and Saturdays until 2am.</p>

                        <div className="mt-4">
                            <Link href="/tel:+152534-468-854" className="relative inline-block font-semibold tracking-wide align-middle text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 font-head-ebgaramond text-lg">+152 534-468-854</Link>
                        </div>

                        <div className="mt-8">
                            <Link href="#" className="py-2.5 px-6 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-lg text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">Explore Our Menu</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.</p>
                </div>

                <div className="grid md:grid-cols-2 mt-8 gap-[30px]">
                    {
                        cafeData.map((data,index) => {
                            return (
                                <div className="flex " key={index}>
                                    <Image src={data.image} width={64} height={64} className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />

                                    <div className="ms-3 w-full">
                                        <div className="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
                                            <Link href="#" className="font-head-ebgaramond hover:text-indigo-600 text-xl font-semibold">{data.name}</Link>
                                            <h6 className="text-indigo-600 font-semibold">${data.price}</h6>
                                        </div>
                                        <p className="text-slate-400 mt-2">A reader will be distracted by the readable</p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">Customer Reviews</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.</p>
                </div>

                <div className="flex justify-center relative mt-8">
                    <div className="relative lg:w-1/2 md:w-3/4 w-full">
                        <div className="tiny-one-item">

                            <TinySlider settings={settings}>
                                {clientsData.map((item, index) => (
                                    <div className="tiny-slide" key={index}>
                                        <div className="text-center">
                                            <p className="text-lg text-slate-400 italic font-head-ebgaramond">{item.description}  </p>

                                            <div className="text-center mt-5">
                                                <ul className="text-xl font-medium text-orange-500 list-none mb-2">
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                </ul>

                                                <Image src={item.image} width={64} height={64} className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="" />
                                                <h6 className="mt-2 font-semibold font-head-ebgaramond text-lg">{item.name}</h6>
                                                <span className="text-slate-400 text-sm">{item.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TinySlider>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 gap-[30px] items-center">
                    <div className="">
                        <Image src="/images/cafe/ab.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow dark:shadow-gray-800 rounded" alt="" />
                    </div>

                    <div className="lg:ms-8">
                        <h4 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">The Best Quality Coffee <br /> Tastes At One Place</h4>
                        <p className="text-slate-400 max-w-xl mx-auto">Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.</p>

                        <div className="grid grid-cols-1 gap-[30px] mt-6">
                            <div className="group flex transition-all duration-500 ease-in-out items-center">
                                <Image src="/images/cafe/icons/coffee.svg" width={64} height={64} className="h-16 w-16 p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="" />
                                <div className="flex-1 ms-3">
                                    <Link href="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600">The Perfect Cup</Link>
                                    <p className="text-slate-400 mt-3">Composed in a pseudo-Latin language which more or less pseudo-Latin.</p>
                                </div>
                            </div>


                            <div className="group flex transition-all duration-500 ease-in-out items-center">
                                <Image src="/images/cafe/icons/drip-glass.svg" width={64} height={64} className="h-16 w-16 p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="" />
                                <div className="flex-1 ms-3">
                                    <Link href="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600">Coffee Machine</Link>
                                    <p className="text-slate-400 mt-3">Composed in a pseudo-Latin language which more or less pseudo-Latin.</p>
                                </div>
                            </div>

                        </div>

                        <div className="mt-8">
                            <Link href="#" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Explore More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">Latest News</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    {blogData.slice(3,7).map((item,index)=>{
                        return(
                            <div key={index} className="blog relative rounded shadow dark:shadow-gray-800 overflow-hidden">
                            <Image src={item.Image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="" alt="" />
    
                            <div className="content p-6">
                                <Link href={`/blog-detail/${item.id}`} className="title h5 text-xl font-semibold font-head-ebgaramond hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.desc}</p>
    
                                <div className="mt-4">
                                    <Link href={`/blog-detail/${item.id}`} className="relative inline-flex items-center font-normal tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/> </Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <div className="container-fluid relative">
            <div className="grid grid-cols-1 relative">
                <div className="tiny-twelve-item">

                    <TinySlider settings={settings2}>
                        {service2.map((item, index) => (
                            <div className="tiny-slide" key={index}>
                                <div className="card border-0 rounded-0">
                                    <div className="card-body p-0">
                                        <Link href="#" onClick={() => handleImageClick(index)} className="lightbox d-inline-block" title="">
                                            <Image src={item.imageList} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="" alt="Insta Post" />
                                            <div className="overlay bg-dark"></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TinySlider>
                </div>
                {lightBox && (
                            <Lightbox
                                mainSrc={currentImage}
                                prevSrc={cafeImage[(currentImageIndex + cafeImage.length - 1) % cafeImage.length]}
                                nextSrc={cafeImage[(currentImageIndex + 1) % cafeImage.length]}

                                onCloseRequest={() => setLightbox(false)}
                                onMovePrevRequest={handleMovePrev}
                                onMoveNextRequest={handleMoveNext}
                            />
                        )}

                <div className="absolute top-2/4 -translate-y-2/4 start-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center hidden md:block">
                    <Link href="https://www.instagram.com/shreethemes/" target="_blank" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Follow Now</Link>
                </div>
            </div>
        </div>
        <CafeFooter/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}