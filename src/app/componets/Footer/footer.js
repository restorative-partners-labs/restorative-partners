"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import * as Icon from 'react-feather';

import {FaRegEnvelope,FaDribbble,FaLinkedin, FaFacebookF, FaInstagram, FaTwitter,FaRegFile,FaBehance} from 'react-icons/fa';
import {PiShoppingCart} from "react-icons/pi"
import {MdKeyboardArrowRight} from "react-icons/md"

export default function Footer() {
    const footerLinks = [
        {
            liClass: '',
            route: '/page-terms',
            title: 'Terms of Services',

        },
        {
            liClass: 'mt-[10px]',
            route: '/page-privacy',
            title: 'Privacy Policy',

        },
        {
            route: '/documentation',
            title: 'Documentation',
            liClass: 'mt-[10px]',
        },
        {
            route: '/changelog',
            title: 'Changelog',
            liClass: 'mt-[10px]',
        },
        {
            route: '#!',
            title: 'Widget',
            liClass: 'mt-[10px]',
        }
    ];
    const footerCompany = [
        {
            liClass: '',
            route: '/page-aboutus',
            title: 'About us',
        },
        {
            liClass: 'mt-[10px]',
            route: '/page-services',
            title: 'Services',

        },
        {
            route: '/page-team',
            title: 'Team',
            liClass: 'mt-[10px]',

        },
        {
            route: '/page-pricing',
            title: 'Pricing',
            liClass: 'mt-[10px]',

        },
        {
            route: '/portfolio-creative-four',
            title: 'Project',
            liClass: 'mt-[10px]',

        },
        {
            route: '/blog',
            title: 'Blog',
            liClass: 'mt-[10px]',

        },
        {
            route: '/auth-login',
            title: 'Login',
            liClass: 'mt-[10px]',

        }
    ]
    return (
        <div>
            <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
                <div className="container relative">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="py-[60px] px-0">
                                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                    <div className="lg:col-span-4 md:col-span-12">
                                        <Link href="/#" className="text-[22px] focus:outline-none">
                                            <Image src="/images/logo-light.png" width={138} height={24} alt="" />
                                        </Link>
                                        <p className="mt-6 text-gray-300">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                        <ul className="list-none mt-5 space-x-1 space-y-1">
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

                                    <div className="lg:col-span-2 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Company</h5>
                                        <ul className="list-none footer-list mt-6">
                                            {footerCompany.map((data, index) => (
                                                <li key={index} className={data.liClass}><Link href={data.route} className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> {data.title}</Link></li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-3 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Usefull Links</h5>
                                        <ul className="list-none footer-list mt-6">
                                            {footerLinks.map((data, index) => (
                                                <li key={index} className={data.liClass}><Link href={data.route} className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> {data.title}</Link></li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-3 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
                                        <p className="mt-6">Sign up and receive the latest tips via email.</p>
                                        <form>
                                            <div className="grid grid-cols-1">
                                                <div className="foot-subscribe my-3">
                                                    <label className="form-label">Write your email <span className="text-red-600">*</span></label>
                                                    <div className="form-icon relative mt-2">
                                                        <Icon.Mail className="w-4 h-4 absolute top-3 start-4" />
                                                        <input type="email" className="form-input ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0" placeholder="Email" name="email" required="" />
                                                    </div>
                                                </div>

                                                <button type="submit" id="submitsubscribe" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-[30px] px-0 border-t border-slate-800">
                    <div className="container relative text-center">
                        <div className="grid md:grid-cols-2 items-center">
                            <div className="md:text-start text-center">
                                <p className="mb-0">© {new Date().getFullYear()} Techwind. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link href="/https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>

                            <ul className="list-none md:text-end text-center space-x-1 mt-6 md:mt-0">
                                <li className="inline"><Link href="#"><Image width={35} height={24} src="/images/payments/american-ex.png" className="max-h-6 inline" title="American Express" alt="" /></Link></li>
                                <li className="inline"><Link href="#"><Image width={35} height={24} src="/images/payments/discover.png" className="max-h-6 inline" title="Discover" alt="" /></Link></li>
                                <li className="inline"><Link href="#"><Image width={35} height={24} src="/images/payments/master-card.png" className="max-h-6 inline" title="Master Card" alt="" /></Link></li>
                                <li className="inline"><Link href="#"><Image width={35} height={24} src="/images/payments/paypal.png" className="max-h-6 inline" title="Paypal" alt="" /></Link></li>
                                <li className="inline"><Link href="#"><Image width={35} height={24} src="/images/payments/visa.png" className="max-h-6 inline" title="Visa" alt="" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}