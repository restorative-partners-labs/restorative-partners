"use client"
import React, { useState,useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"

import PhotographyNavbar from '../componets/Navbar/photographyNavbar'
import PhotographyFooter from '../componets/Footer/photographyFooter'
import Switcher from '../componets/switcher'

import { FaArrowRight } from 'react-icons/fa'
import {FiCamera} from "react-icons/fi"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import { photoPortfolio,photoPortfolioImage } from '../Data/dataFour'

export default function PhotographyPortfolio(){
    let [isOpen, setisOpen] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('dark');
        }
      }, []);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let [selectedCategory, setSelectedCategory] = useState(null);

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + photoPortfolioImage.length - 1) % photoPortfolioImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photoPortfolioImage.length);
    };
    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };

    

    let matchCategory = (category) => {
        setSelectedCategory(category);
    };

    let filteredData = selectedCategory
    ? photoPortfolio.filter((item) => item.category === selectedCategory)
    : photoPortfolio;

    let currentImage = photoPortfolioImage[currentImageIndex];

    return(
        <>
        <PhotographyNavbar/>

        <section className="relative md:py-56 py-44 bg-cover jarallax bg-fixed" id="aboutme" style={{backgroundImage:"Url('/images/photography/photographer.jpg')"}}>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>

            <div className="absolute text-center p-6 bottom-0 start-0 end-0">
                <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-bold">Portfolio</h3>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="container relative">
                    <div className="grid grid-cols-1 items-center gap-[30px]">
                        <div className="filters-group-wrap text-center">
                            <div className="filters-group">
                                <ul className="mb-0 list-none container-filter-border-bottom filter-options">
                                    <li className={`${selectedCategory === null ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                    <li className={`${selectedCategory === 'branding' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="branding" onClick={() => matchCategory('branding')} >Branding</li>
                                    <li className={`${selectedCategory === 'designing' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                                    <li className={`${selectedCategory === 'photography' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                    <li className={`${selectedCategory === 'development' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <ResponsiveMasonry  columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} >
                    <Masonry columnsCount={3}>

                        {
                            filteredData.map((data, index) => {
                                return (
                                    <div className="p-1 picture-item" data-groups='["branding"]' key={index}>
                                        <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                            <Image src={data.iamge} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="" alt="" />
                                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500" >
                                                <Link href="#" onClick={() => handleImageClick(data.id)} className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white lightbox"><FiCamera className="w-4 h-4"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Masonry>
                </ResponsiveMasonry>
                {isOpen && (
                    <Lightbox
                        mainSrc={currentImage}
                        prevSrc={photoPortfolioImage[(currentImageIndex + photoPortfolioImage.length - 1) % photoPortfolioImage.length]}
                        nextSrc={photoPortfolioImage[(currentImageIndex + 1) % photoPortfolioImage.length]}

                        onCloseRequest={() => setisOpen(false)}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}
                <div className="grid grid-cols-1 mt-8">
                    <div className="text-center">
                        <Link href="/photography-portfolio" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 dark:text-white/70 dark:hover:text-white hover:text-indigo-600 after:bg-indigo-600 dark:after:bg-white duration-500 ease-in-out">See More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>
            </div>
        </section>
        <PhotographyFooter/>
        <Switcher/>
        </>
    )
}