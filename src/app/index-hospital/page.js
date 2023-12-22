import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import Clientsthree from '../componets/clientsThree'
import BlogTwo from '../componets/blogTwo'
import CompanyLogo from '../componets/companyLogo'
import VideoModal from '../componets/videoModal/videoModal'
import HospitalCounter from '../componets/hospitalCounter'

import * as Icon from 'react-feather';

import { FaArrowRight,RiHospitalLine,AiOutlineClockCircle  } from '../assets/icons/icons'
import {IoMedkitOutline} from "react-icons/io5"
import { teamData } from '../Data/data'

import { hospitalServices } from '../Data/dataThree'

export default function Hospital(){
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative table w-full py-36 lg:py-64  bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/hospital/bg.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10">
                    <Image src="/images/logo-icon-40.png" width={46} height={40} alt="" />
                    <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6 mt-3">Meet The <br /> Best Doctor</h1>
                    <p className="text-white/60 text-lg max-w-xl">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>

                    <div className="mt-8">
                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Make Appointment</Link>
                        <p className="text-white/60 text-base mt-2">T&C apply. Please read <Link href="#" className="text-white inline-flex items-center">Terms and Conditions <FaArrowRight className="ms-2 text-[10px]"/></Link></p>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="flex justify-center">
                    <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0 lg:w-10/12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md p-6">
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-[24px]">
                            <div>
                                <div
                                    className="w-16 h-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                    <RiHospitalLine className ="w-6 h-6"/>
                                </div>

                                <div className="content mt-6">
                                    <h5 className="text-lg font-medium">Emergency Cases</h5>
                                    <p className="text-slate-400 mt-3">This is required when, for example, the is not yet available. Dummy text is also known as fill that.</p>

                                    <div className="mt-5">
                                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="w-16 h-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                    <IoMedkitOutline className='w-6 h-6'/>
                                </div>

                                <div className="content mt-6">
                                    <h5 className="text-lg font-medium">Doctors Timetable</h5>
                                    <p className="text-slate-400 mt-3">This is required when, for example, the is not yet available. Dummy text is also known as fill that.</p>

                                    <div className="mt-5">
                                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div
                                    className="w-16 h-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                    <AiOutlineClockCircle className="w-6 h-6"/>
                                </div>

                                <div className="content mt-6">
                                    <h5 className="text-lg font-medium">Opening Hours</h5>
                                    <ul className="list-none mt-3 space-x-1">
                                        <li className="flex justify-between">
                                            <p className="text-slate-400">Monday - Friday</p>
                                            <p className="text-indigo-600">8.00 - 20.00</p>
                                        </li>
                                        <li className="flex justify-between">
                                            <p className="text-slate-400">Saturday</p>
                                            <p className="text-indigo-600">8.00 - 18.00</p>
                                        </li>
                                        <li className="flex justify-between">
                                            <p className="text-slate-400">Sunday</p>
                                            <p className="text-indigo-600">8.00 - 14.00</p>
                                        </li>
                                    </ul>

                                    <div className="mt-5">
                                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-5">
                        <div className="relative">
                            <Image src="/images/hospital/about-2.png" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md" alt="" />
                            <VideoModal/>
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <div className="lg:ms-4">
                            <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">About Our Treatments</h4>
                            <p className="text-slate-400 max-w-xl">Great doctor if you need your family member to get effective immediate assistance, examination, emergency treatment or a simple consultation. Thank you.</p>
                            <p className="text-slate-400 max-w-xl mt-3">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words.</p>
                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Medical Services</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                    {hospitalServices.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div className="text-center md:px-6" key={index}>
                                <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                    <Icons className='w-7 h-7'/>
                                </div>
    
                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 md:pb-0 pb-0 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Doctors Time Table</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                </div>
            </div>

            <div className="container-fluid relative">
                <div className="grid grid-cols-1 mt-8">
                    <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                        <table className="w-full text-sm text-start">
                            <thead
                                className="text-lg">
                                <tr>
                                    <th className="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[120px]">Time Table</th>
                                    <th className="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Monday</th>
                                    <th className="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Tuesday</th>
                                    <th className="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Wednesday</th>
                                    <th className="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Thursday</th>
                                    <th className="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Friday</th>
                                    <th className="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Saturday</th>
                                    <th className="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Sunday</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="text-center border border-gray-100 dark:border-gray-700 py-5">09:00AM</th>
                                    <td className="p-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center mb-3">
                                            <Image src="/images/client/01.jpg" width={48} height={48} className="h-12 w-12 rounded-full shadow" alt="" />
                                            <div className="ms-3">
                                                <h6 className="block font-medium text-lg">Calvin Carlo</h6>
                                                <span className="text-slate-400">Eye Care</span>
                                            </div>
                                        </div>
                                        <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00AM - 10:00AM</span>
                                    </td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="p-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center mb-3">
                                            <Image src="/images/client/03.jpg" width={46} height={46} className="h-12 w-12 rounded-full shadow" alt="" />
                                            <div className="ms-3">
                                                <h6 className="block font-medium text-lg">Alia Reddy</h6>
                                                <span className="text-slate-400">Psychotherapy</span>
                                            </div>
                                        </div>
                                        <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00AM - 01:00PM</span>
                                    </td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                </tr>

                                <tr>
                                    <th className="text-center border border-gray-100 dark:border-gray-700 py-5">11:00AM</th>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="p-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center mb-3">
                                            <Image src="/images/client/02.jpg" width={46} height={46} className="h-12 w-12 rounded-full shadow" alt="" />
                                            <div className="ms-3">
                                                <h6 className="block font-medium text-lg">Cristino Murphy</h6>
                                                <span className="text-slate-400">Gynecology</span>
                                            </div>
                                        </div>
                                        <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">11:00AM - 04:00PM</span>
                                    </td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="p-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center mb-3">
                                            <Image src="/images/client/05.jpg" width={46} height={46} className="h-12 w-12 rounded-full shadow" alt="" />
                                            <div className="ms-3">
                                                <h6 className="block font-medium text-lg">Jennifer Ballance</h6>
                                                <span className="text-slate-400">Cardiology</span>
                                            </div>
                                        </div>
                                        <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">11:00AM - 12:00PM</span>
                                    </td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="p-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center mb-3">
                                            <Image src="/images/client/04.jpg" width={46} height={46} className="h-12 w-12 rounded-full shadow" alt="" />
                                            <div className="ms-3">
                                                <h6 className="block font-medium text-lg">Toni Kovar</h6>
                                                <span className="text-slate-400">Orthopedic</span>
                                            </div>
                                        </div>
                                        <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00AM - 10:00AM</span>
                                    </td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                </tr>

                                <tr>
                                    <th className="text-center border border-gray-100 dark:border-gray-700 py-5">02:00PM</th>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="p-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center mb-3">
                                            <Image src="/images/client/06.jpg" width={46} height={46} className="h-12 w-12 rounded-full shadow" alt="" />
                                            <div className="ms-3">
                                                <h6 className="block font-medium text-lg">Tara Arrington</h6>
                                                <span className="text-slate-400">Neurology</span>
                                            </div>
                                        </div>
                                        <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">02:00PM - 04:00PM</span>
                                    </td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="p-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center mb-3">
                                            <Image src="/images/client/05.jpg" width={46} height={46} className="h-12 w-12 rounded-full shadow" alt="" />
                                            <div className="ms-3">
                                                <h6 className="block font-medium text-lg">Jennifer Ballance</h6>
                                                <span className="text-slate-400">Cardiology</span>
                                            </div>
                                        </div>
                                        <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">11:00AM - 12:00PM</span>
                                    </td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                </tr>

                                <tr>
                                    <th className="text-center border border-gray-100 dark:border-gray-700 py-5">04:00PM</th>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="p-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center mb-3">
                                            <Image src="/images/client/06.jpg" width={46} height={46} className="h-12 w-12 rounded-full shadow" alt="" />
                                            <div className="ms-3">
                                                <h6 className="block font-medium text-lg">Tara Arrington</h6>
                                                <span className="text-slate-400">Neurology</span>
                                            </div>
                                        </div>
                                        <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">04:00PM - 05:00PM</span>
                                    </td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="p-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center mb-3">
                                            <Image src="/images/client/06.jpg" width={46} height={46} className="h-12 w-12 rounded-full shadow" alt="" />
                                            <div className="ms-3">
                                                <h6 className="block font-medium text-lg">Tara Arrington</h6>
                                                <span className="text-slate-400">Neurology</span>
                                            </div>
                                        </div>
                                        <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">04:30PM - 06:00PM</span>
                                    </td>
                                </tr>

                                <tr>
                                    <th className="text-center border border-gray-100 dark:border-gray-700 py-5">06:00PM</th>
                                    <td className="p-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center mb-3">
                                            <Image src="/images/client/03.jpg" width={46} height={46} className="h-12 w-12 rounded-full shadow" alt="" />
                                            <div className="ms-3">
                                                <h6 className="block font-medium text-lg">Alia Reddy</h6>
                                                <span className="text-slate-400">Psychotherapy</span>
                                            </div>
                                        </div>
                                        <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">06:00PM - 09:00PM</span>
                                    </td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="p-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center mb-3">
                                            <Image src="/images/client/04.jpg" width={46} height={46} className="h-12 w-12 rounded-full shadow" alt="" />
                                            <div className="ms-3">
                                                <h6 className="block font-medium text-lg">Toni Kovar</h6>
                                                <span className="text-slate-400">Orthopedic</span>
                                            </div>
                                        </div>
                                        <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">07:00PM - 08:00PM</span>
                                    </td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="p-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center mb-3">
                                            <Image src="/images/client/05.jpg" width={46} height={46} className="h-12 w-12 rounded-full shadow" alt="" />
                                            <div className="ms-3">
                                                <h6 className="block font-medium text-lg">Jennifer Ballance</h6>
                                                <span className="text-slate-400">Cardiology</span>
                                            </div>
                                        </div>
                                        <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">06:00PM - 07:00PM</span>
                                    </td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="p-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center mb-3">
                                            <Image src="/images/client/03.jpg" width={46} height={46} className="h-12 w-12 rounded-full shadow" alt="" />
                                            <div className="ms-3">
                                                <h6 className="block font-medium text-lg">Alia Reddy</h6>
                                                <span className="text-slate-400">Psychotherapy</span>
                                            </div>
                                        </div>
                                        <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">06:00PM - 07:00PM</span>
                                    </td>
                                </tr>

                                <tr>
                                    <th className="text-center border border-gray-100 dark:border-gray-700 py-5">09:00PM</th>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="p-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center mb-3">
                                            <Image src="/images/client/04.jpg" width={46} height={46} className="h-12 w-12 rounded-full shadow" alt="" />
                                            <div className="ms-3">
                                                <h6 className="block font-medium text-lg">Toni Kovar</h6>
                                                <span className="text-slate-400">Orthopedic</span>
                                            </div>
                                        </div>
                                        <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00PM - 10:00PM</span>
                                    </td>
                                    <td className="p-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center mb-3">
                                            <Image src="/images/client/05.jpg" width={46} height={46} className="h-12 w-12 rounded-full shadow" alt="" />
                                            <div className="ms-3">
                                                <h6 className="block font-medium text-lg">Jennifer Ballance</h6>
                                                <span className="text-slate-400">Cardiology</span>
                                            </div>
                                        </div>
                                        <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00PM - 10:00PM</span>
                                    </td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="p-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center mb-3">
                                            <Image src="/images/client/04.jpg" width={46} height={46} className="h-12 w-12 rounded-full shadow" alt="" />
                                            <div className="ms-3">
                                                <h6 className="block font-medium text-lg">Toni Kovar</h6>
                                                <span className="text-slate-400">Orthopedic</span>
                                            </div>
                                        </div>
                                        <span className="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00PM - 10:00PM</span>
                                    </td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                    <td className="border border-gray-100 dark:border-gray-700"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Doctors Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    {teamData.slice(0,4).map((item,index)=>{
                        return(
                            <div className="lg:col-span-3 md:col-span-6" key={index}>
                            <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
                                <Image src={item.image} width={96} height={96} className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />

                                <div className="content mt-4">
                                    <Link href="#" className="text-lg font-medium hover:text-indigo-600 block">{item.name}</Link>
                                    <span className="text-slate-400 block">{item.title}</span>

                                    <p className="text-slate-400 mt-4">{item.desc}</p>

                                    <ul className="list-none  space-x-1 mt-4 flex">
                                        <li><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Facebook className="h-4 w-4"></Icon.Facebook></Link></li>
                                        <li><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Instagram className="h-4 w-4"></Icon.Instagram></Link></li>
                                        <li><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Twitter className="h-4 w-4"></Icon.Twitter></Link></li>
                                        <li><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Linkedin className="h-4 w-4"></Icon.Linkedin></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 md:pt-0 pt-0">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-1">
                        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                            <div className="lg:col-start-2 lg:col-span-10">
                                <div className="relative">
                                    <Image src="/images/hospital/bg.jpg" width={0} height={0} sizes='100vw' style={{width:"100%",height:"auto"}} className="rounded-md shadow-lg" alt="" />
                                   <VideoModal/>
                                </div>
                            </div>
                        </div>
                        <HospitalCounter/>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Patients Says</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                </div>
                <Clientsthree/>
            </div>

            <div className="container relative md:mt-24 mt-16">
               <BlogTwo title={false}/>
            </div>
        </section>

        <section className="py-6 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
               <CompanyLogo/>
            </div>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}