"use client"
import React, { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"

import PhotographyNavbar from '../componets/Navbar/photographyNavbar'
import PhotographyFooter from '../componets/Footer/photographyFooter'
import CookieModal from '../componets/cookieModal'
import Switcher from '../componets/switcher'

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import { FaArrowRight,FiArrowUpRight,FiCamera } from '../assets/icons/icons'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { photoImages } from '../Data/dataThree'


export default function IndexPhotography() {
    const [isOpen, setisOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + photoImages.length - 1) % photoImages.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photoImages.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    const currentImage = photoImages[currentImageIndex];

   
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('dark');
        }
      }, []);

    return (
        <>
            <PhotographyNavbar/>
            <section className="relative flex md:h-screen  py-44 items-center bg-cover bg-center self-center">
                <div className="absolute inset-0 h-full w-full  jarallax" data-jarallax data-speed="0.8" style={{ background: `url('/images/photography/first.jpg') bottom` }}></div>
                <div className="absolute inset-0 h-full w-full md:block hidden jarallax" data-jarallax data-speed="0.5" style={{ background: `url('/images/photography/hero-text-lg.png') center` }}></div>
                <div className="absolute inset-0 h-full w-full block md:hidden jarallax" data-jarallax data-speed="0.5" style={{ background:`url('/images/photography/hero-text-sm.png') center` }}></div>
                <div className="absolute inset-0 h-full w-full jarallax" data-jarallax data-speed="1.1" style={{ background: `url('/images/photography/last.png') bottom` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t to-transparent via-transparent from-slate-900 hidden dark:block"></div>
                <div className="absolute inset-0 bg-gradient-to-t to-transparent via-transparent from-white dark:hidden block"></div>
            </section>
            <section className="relative md:py-24 py-16">
                <div className="container relative"> 
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Photography</h3>

                        <p className="text-slate-400 max-w-2xl mx-auto">As a Freelance Designer & Developer, I am here to make you stand out in the digital world and my passion for design and your vision will ensure a great end result.</p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        <div className="relative overflow-hidden h-fit">
                            <Image src="/images/photography/01.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md" alt="" />
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>

                            <div className="absolute text-center p-6 bottom-0 start-0 end-0">
                                <Link href="/photography-about" className="font-semibold text-lg flex items-center">Jack Jeffrey <FiArrowUpRight className="ms-2"/></Link>
                            </div>
                        </div>

                        <div className="relative overflow-hidden h-fit lg:mt-16">
                            <Image src="/images/photography/02.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md" alt="" />
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>

                            <div className="absolute text-center p-6 bottom-0 start-0 end-0">
                                <Link href="/photography-portfolio" className="font-semibold text-lg flex items-center">Portfolio <FiArrowUpRight className="ms-2"/></Link>
                            </div>
                        </div>

                        <div className="relative overflow-hidden h-fit">
                            <Image src="/images/photography/03.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md" alt="" />
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>

                            <div className="absolute text-center p-6 bottom-0 start-0 end-0">
                                <Link href="/contact-two" className="font-semibold text-lg flex items-center">Contact <FiArrowUpRight className="ms-2"/></Link>
                            </div>
                        </div>

                        <div className="relative overflow-hidden h-fit lg:mt-16">
                            <Image src="/images/photography/04.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md" alt="" />
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>

                            <div className="absolute text-center p-6 bottom-0 start-0 end-0">
                                <Link href="/aboutme" className="font-semibold text-lg flex items-center">About Me <FiArrowUpRight className="ms-2"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-56 py-44 bg-cover jarallax bg-fixed" id="aboutme" style={{backgroundImage:"url('/images/photography/photographer.jpg')"}}>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>

                <div className="absolute text-center p-6 bottom-0 start-0 end-0">
                    <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Jack Jeffrey</h3>
                </div>
            </section>

            <section className="relative pt-8 md:pb-24 py-16">
                <div className="container relative">
                    <div className="flex justify-center">
                        <div className="lg:max-w-768 w-full text-center">
                            <p>The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words.</p>
                            <p className="text-slate-400 mt-6">This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
                            <p className="text-slate-400 mt-6">Moreover, in Latin only words at the beginning of sentences are capitalized; this means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.</p>
                            <p className="text-slate-400 mt-6">If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                            <p className="text-slate-400 mt-6">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions. Due to the age of the Lorem Ipsum text there are no copyright issues to contend with.</p>

                            <div className="mt-6 text-center">
                                <Link href="/photography-about" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 dark:text-white/70 dark:hover:text-white hover:text-indigo-600 after:bg-indigo-600 dark:after:bg-white duration-500 ease-in-out">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Portfolio / Photography</h3>

                        <p className="text-slate-400 max-w-2xl mx-auto">As a Freelance Designer & Developer, I am here to make you stand out in the digital world and my passion for design and your vision will ensure a great end result.</p>
                    </div>    
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
                    >
                        <Masonry columnsCount={4}>
                         {photoImages.map((item,index)=>{
                             return(
                            <div key={index} className="p-1 picture-item" >
                                 <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                     <Image width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} src={item} className="" alt="" />
                                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                        <Link href="#" onClick={()=>handleImageClick(index)} className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white lightbox"><FiCamera className='w-4 h-4'/></Link>
                                    </div>
                                </div>
                            </div>
                                 )
                                 })}
                        {isOpen && (
                            <Lightbox
                                mainSrc={currentImage}
                                prevSrc={photoImages[(currentImageIndex + photoImages.length - 1) % photoImages.length]}
                                nextSrc={photoImages[(currentImageIndex + 1) % photoImages.length]}

                                onCloseRequest={() => setisOpen(false)}
                                onMovePrevRequest={handleMovePrev}
                                onMoveNextRequest={handleMoveNext}
                            />
                        )}
                         </Masonry>
                    </ResponsiveMasonry>
                    <div className="grid grid-cols-1 mt-8">
                        <div className="text-center">
                            <Link href="/photography-portfolio" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 dark:text-white/70 dark:hover:text-white hover:text-indigo-600 after:bg-indigo-600 dark:after:bg-white duration-500 ease-in-out">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>
            </section>

            <PhotographyFooter/>
           <CookieModal/>
           <Switcher/>
        </>
    )
}
