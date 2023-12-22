"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"


import Lightbox from 'react-18-image-lightbox';

import "react-18-image-lightbox/style.css"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { masonryimages } from '../Data/data'
import { mesonaryData } from '../Data/data'

export default function PortfolioDetailFilter(props) {

    const [isOpen, setisOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + masonryimages.length - 1) % masonryimages.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % masonryimages.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    const currentImage = masonryimages[currentImageIndex];
   
    return (
        <div>
            <ResponsiveMasonry
                    columnsCountBreakPoints={props.columnsCountBreakPoints}
            >
              <Masonry columnsCount={props.shuffle}>

                {
                    mesonaryData.map((data, index) => {
                        return (
                            <div className="p-1 picture-item" data-groups={data.dataGroup} key={index}>
                                <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                    <Link href="#" className="lightbox transition-all duration-500 group-hover:scale-105" title="">
                                        <Image src={data.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="" alt="" onClick={() => handleImageClick(index)} />
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
                {isOpen && (
                    <Lightbox
                        mainSrc={currentImage}
                        prevSrc={masonryimages[(currentImageIndex + masonryimages.length - 1) % masonryimages.length]}
                        nextSrc={masonryimages[(currentImageIndex + 1) % masonryimages.length]}

                        onCloseRequest={() => setisOpen(false)}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}
               </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}
