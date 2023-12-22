import React from "react"
import Link from "next/link"

import Navbar from "../componets/Navbar/navbar"
import SmallFooter from "../componets/Footer/smallFooter"
import Switcher from "../componets/switcher"
import CookieModal from "../componets/cookieModal"
import PortfolioItem from "../componets/portfolio/portfolioItem"
import AvailableProject from "../componets/availaleProject"

import { FaRegEnvelope } from "../assets/icons/icons"

export default function Portfolio(){

    return(
        <>
        <Navbar/>
        <section className="relative table w-full pt-28 lg:pt-36">
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10 text-center">
                    <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text mb-5">Building <br /> digital products, brands, <br /> and experience.</h4>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">A <span className="text-black dark:text-white font-semibold">Product Designer</span> and <span className="text-black dark:text-white font-semibold">Visual Developer</span> in NY. We specialize in UI/UX Design, Responsive Web Design, and Visual Development.</p>

                    <div className="mt-6">
                        <Link href="/contact-one" className="py-2 px-5 inline-flex items-center  font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><FaRegEnvelope className="me-2 text-sm"/> Contact Us</Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <PortfolioItem/>
            <AvailableProject/>
        </section>
        <SmallFooter/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}