import React from "react"
import Link from "next/link"

import Navbar from "../../componets/Navbar/navbar"
import Footer from "../../componets/Footer/footer"
import Switcher from "../../componets/switcher"
import Propreties from "../../componets/real-estate/propreties"

import { propertyData } from "../../Data/data"

import {FiPhone, LiaCompressArrowsAltSolid,LuBedDouble,LuBath} from "../../assets/icons/icons"

export default function PropretiesDetails(props){
    let data = propertyData.find((propertys)=>propertys?.id === parseInt(props?.params?.id || 0));

   
    return(
        <>
        <Navbar navClass="nav-sticky"/>
        <section className="relative md:pb-24 pb-16 mt-20">
           <Propreties/>
            <div className="container relative md:mt-24 mt-16">
                <div className="md:flex">
                    <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
                        <h4 className="text-2xl font-medium">{data?.address}</h4>

                        <ul className="py-6 flex items-center list-none">
                            <li className="flex items-center lg:me-6 me-4">
                                <LiaCompressArrowsAltSolid className=" lg:text-3xl text-2xl me-2 text-indigo-600"/>
                                <span className="lg:text-xl">8000sqf</span>
                            </li>

                            <li className="flex items-center lg:me-6 me-4">
                                <LuBedDouble className="lg:text-3xl text-2xl me-2 text-indigo-600"/>
                                <span className="lg:text-xl">4 Beds</span>
                            </li>

                            <li className="flex items-center">
                                <LuBath className="lg:text-3xl text-2xl me-2 text-indigo-600"/>
                                <span className="lg:text-xl">4 Baths</span>
                            </li>
                        </ul>

                        <p className="text-slate-400">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        <p className="text-slate-400 mt-4">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                        <p className="text-slate-400 mt-4">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>

                        <div className="w-full leading-[0] border-0 mt-6">
                            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" title="Google Maps Embed" style={{ "border": "0" }} className="w-full h-[500px]" allowFullScreen></iframe>

                        </div>
                    </div>

                    <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
                        <div className="sticky top-20">
                            <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-800">
                                <div className="p-6">
                                    <h5 className="text-2xl font-medium">Price:</h5>

                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-xl font-medium">$ 45,231</span>

                                        <span className="bg-indigo-600/10 text-indigo-600 text-sm px-2.5 py-0.75 rounded h-6">For Sale</span>
                                    </div>

                                    <ul className="list-none space-x-1 mt-4">
                                        <li className="flex justify-between items-center">
                                            <span className="text-slate-400 text-sm">Days on Hously</span>
                                            <span className="font-medium text-sm">124 Days</span>
                                        </li>

                                        <li className="flex justify-between items-center mt-2">
                                            <span className="text-slate-400 text-sm">Price per sq ft</span>
                                            <span className="font-medium text-sm">$ 186</span>
                                        </li>

                                        <li className="flex justify-between items-center mt-2">
                                            <span className="text-slate-400 text-sm">Monthly Payment (estimate)</span>
                                            <span className="font-medium text-sm">$ 1497/Monthly</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex">
                                    <div className="p-1 w-1/2">
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Book Now</Link>
                                    </div>
                                    <div className="p-1 w-1/2">
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Offer Now</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 text-center">
                                <h3 className="mb-6 text-xl leading-normal font-medium">Have Question ? Get in touch!</h3>

                                <div className="mt-6">
                                    <Link href="/contact-one" className="py-2 px-5 inline-flex font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center bg-transparent hover:bg-indigo-600 border border-indigo-600 text-indigo-600 hover:text-white rounded-md"><FiPhone className="me-1 text-lg"/> Contact us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}