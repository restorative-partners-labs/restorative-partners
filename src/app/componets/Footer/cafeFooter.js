"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FaRegEnvelope,FaDribbble,FaLinkedin, FaFacebookF, FaInstagram, FaTwitter,FaRegFile,FaBehance} from 'react-icons/fa';
import {PiShoppingCart} from "react-icons/pi"

export default function CafeFooter(){
    return(
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="py-[60px] px-0">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-[30px]">
                                <div className="text-center">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold mb-4">Open Hours</h5>
                                    <p className="mb-2">Monday - Friday: 10 AM - 11 PM</p>
                                    <p className="mb-0">Saturday - Sunday: 9 AM - 1 PM</p>
                                </div>

                                <div className="text-center">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold mb-4">Reservation</h5>
                                    <p className="mb-2"><Link href="/tel:+152534-468-854" className="text-gray-200">+152 534-468-854</Link></p>
                                    <p className="mb-0"><Link href="/mailto:contact@example.com" className="text-gray-200">contact@example.com</Link></p>
                                </div>

                                <div className="text-center">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold mb-4">Address</h5>
                                    <p className="mb-2">Techwind Cafe & Restro</p>
                                    <p className="mb-0">C/54 Northwest Freeway, Suite 558, USA 485</p>
                                </div>
                            </div>


                            <div className="grid grid-cols-1 mt-12">
                                <div className="text-center">
                                    <Image src="/images/logo-icon-80.png" width={91} height={80} className="block mx-auto" alt="" />
                                    <p className="max-w-xl mx-auto mt-6">Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs</p>
                                </div>

                                <ul className="list-none text-center mt-6 space-x-1">
                                    <li className="inline"><Link href="https://1.envato.market/techwind-next" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><PiShoppingCart className='text-sm'/></Link></li>
                                    <li className="inline"><Link href="https://www.behance.net/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaBehance className='text-sm'/></Link></li>
                                    <li className="inline"><Link href="https://dribbble.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaDribbble className='text-sm'/></Link></li>
                                    <li className="inline"><Link href="http://linkedin.com/company/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaLinkedin className='text-sm'/></Link></li>
                                    <li className="inline"><Link href="https://www.facebook.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaFacebookF className='text-sm'/></Link></li>
                                    <li className="inline"><Link href="https://www.instagram.com/shreethemes/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaInstagram className='text-sm'/></Link></li>
                                    <li className="inline"><Link href="https://twitter.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaTwitter className='text-sm'/></Link></li>
                                    <li className="inline"><Link href="mailto:support@shreethemes.in" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaRegEnvelope  className=" text-sm"/></Link></li>
                                    <li className="inline"><Link href="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaRegFile className='text-sm'/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid md:grid-cols-1">
                        <p className="mb-0">© {new Date().getFullYear()} Techwind. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link href="/https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}