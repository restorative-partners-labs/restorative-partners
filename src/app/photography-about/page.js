"use client"
import React, { useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"

import PhotographyNavbar from '../componets/Navbar/photographyNavbar'
import AvailableProject from '../componets/availaleProject'
import Switcher from '../componets/switcher'
import PhotographyFooter from '../componets/Footer/photographyFooter'

import { FaArrowRight } from '../assets/icons/icons'

import CountUp from 'react-countup';

import { photoAboutImage } from '../Data/dataFour'

export default function PhotographyAbout(){
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('dark')
        htmlTag.classList.remove('light')
    });

    
    return(
        <>
        <PhotographyNavbar/>
        <section className="relative md:py-56 py-44  bg-cover jarallax bg-fixed" id="aboutme" style={{backgroundImage:"url('/images/photography/photographer.jpg')"}}>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>

            <div className="absolute text-center p-6 bottom-0 start-0 end-0">
                <h5 className="text-slate-900 dark:text-white/70 font-semibold text-lg">I am Jack Jeffrey</h5>
                <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-bold">About Me</h3>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1">
                    <div className="rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                        <div className="md:flex items-center">
                            <div className="relative md:shrink-0">
                                <Image src="/images/photography/about.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="h-full w-full object-cover lg:w-[500px] md:w-80 lg:h-full md:h-96" alt="" />
                            </div>

                            <div className="p-8">
                                <div className="flex">
                                    <div className="w-1/2">
                                        <h2 className="text-3xl mb-2 font-bold"><CountUp className="counter-value" end={9} start={1} />+</h2>
                                        <h6 className="text-slate-400 mb-0">Years of Experience</h6>
                                    </div>
                                    <div className="w-1/2">
                                        <h2 className="text-3xl mb-2 font-bold"><CountUp className="counter-value" end={1542} start={40} />+</h2>
                                        <h6 className="text-slate-400 mb-0">Total Photo Click</h6>
                                    </div>
                                </div>

                                <p className="text-slate-400 dark:text-white mt-6">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>

                                <Link href="/contact-two" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 dark:text-white/70 dark:hover:text-white hover:text-indigo-600 after:bg-indigo-600 dark:after:bg-white duration-500 ease-in-out mt-6">Get in touch <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Brands</h3>

                    <p className="text-slate-400 max-w-2xl mx-auto">As a Freelance Designer & Developer, I am here to make you stand out in the digital world and my passion for design and your vision will ensure a great end result.</p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center gap-[30px]">
                    {photoAboutImage.map((data,index) => {
                        return (
                            <div className="mx-auto" key={index}>
                                <Image src={data} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="h-[110px] w-[110px] grayscale hover:grayscale-0 duration-500 ease-in-out" alt="" />
                            </div>
                        )
                    })}

                </div>
            </div>
            <AvailableProject/>
        </section>
        <PhotographyFooter/>
        <Switcher/>
        </>
    )
}