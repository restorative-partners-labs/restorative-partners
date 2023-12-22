"use client"
import React,{useState} from "react"
import Link from "next/link"
import Image from "next/image"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { portfolio,portfolioImage } from "../../Data/dataTwo";

export default function PortfolioItem(){
    let [isOpen, setisOpen] = useState(false);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let [selectedCategory, setSelectedCategory] = useState(null);

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + portfolioImage.length - 1) % portfolioImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImage.length);
    };
    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    let currentImage = portfolioImage[currentImageIndex];
    let matchCategory = (category) => {
        setSelectedCategory(category);
    };

    let filteredData = selectedCategory
        ? portfolio.filter((item) => item.category === selectedCategory)
        : portfolio;
    return(
        <>
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

            <div className="container-fluid relative mt-8">
                <div>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900:3, 1200:5}} >
                    <Masonry columnsCount={5}>
                        {
                            filteredData.map((data, index) => {
                                return (
                                    <div className="p-1 picture-item" data-groups='["branding"]' key={index}>
                                        <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                            <Link href="#" onClick={() => handleImageClick(data.id)} className="lightbox transition-all duration-500 group-hover:scale-105" title="">
                                                <Image src={data.image} width={0} height={0} sizes="100vw" style={{height:"auto", width:"100%"}} className="" alt="" />
                                            </Link>
                                            <div className="absolute -bottom-52 group-hover:bottom-2 start-2 end-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
                                                <Link href="/portfolio-detail-two" className="hover:text-indigo-600 text-lg transition duration-500 font-medium">Iphone mockup</Link>
                                                <h6 className="text-slate-400">Branding</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Masonry>
                </ResponsiveMasonry>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={currentImage}
                        prevSrc={portfolioImage[(currentImageIndex + portfolioImage.length - 1) % portfolioImage.length]}
                        nextSrc={portfolioImage[(currentImageIndex + 1) % portfolioImage.length]}

                        onCloseRequest={() => setisOpen(false)}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}

                <div className="flex justify-center mt-8">
                    <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">See More</Link>
                </div>
            </div>
        </>
    )
}