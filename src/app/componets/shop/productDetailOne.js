"use client"
import React,{useState} from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

import * as Icon from 'react-feather';
import { BsCheckCircle } from "../../assets/icons/icons"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css'

export default function ProductDetail(){
    const services = [
        {
            image: "/images/shop/single/single-2.jpg"
        },
        {
            image: "/images/shop/single/single-3.jpg"
        },
        {
            image: "/images/shop/single/single-4.jpg"
        },
        {
            image: "/images/shop/single/single-5.jpg"
        },
        {
            image: "/images/shop/single/single-6.jpg"
        }
    ]
    const settings = {
        container: '.tiny-single-item',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
    }
    const [isOpenTab, setisOpen] = useState(0);

    const handleTabClick = (index) => {
        setisOpen(index);
    };
    const handleStepDown = (e) => {
        const input = e.target.parentNode.querySelector('input[type="number"]')
        if (input) {
            input.stepDown();
        }
    };

    const handleStepUp = (e) => {
        const input = e.target.parentNode.querySelector('input[type="number"]')
        if (input) {
            input.stepUp();
        }
    };
    const shopItem = [
        {
            class: '',
            image:"/images/client/01.jpg",
            name: 'Calvin Carlo',
            time: '6th May 2022 at 01:25 pm',
            reply: 'Reply',
            desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour '
        },
        {
            class: 'mt-8',
            image: "/images/client/02.jpg",
            name: 'Calvin Carlo',
            time: '6th May 2022 at 01:25 pm',
            reply: 'Reply',
            desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour '
        },
        {
            class: 'mt-8',
            image: "/images/client/03.jpg",
            name: 'Calvin Carlo',
            time: '6th May 2022 at 01:25 pm',
            reply: 'Reply',
            desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour '
        },
        {
            class: 'mt-8',
            image: "/images/client/04.jpg",
            name: 'Calvin Carlo',
            time: '6th May 2022 at 01:25 pm',
            reply: 'Reply',
            desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour '
        },
    ]
    return(
        <>
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] items-center">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="tiny-single-item">
                            <TinySlider settings={settings}>
                                {services.map((item, index) => (
                                    <div className="tiny-slide" key={index}>
                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md shadow dark:shadow-gray-800" alt="" />
                                    </div>
                                ))}
                            </TinySlider>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-6">
                            <h5 className="text-2xl font-semibold">Branded T-Shirts</h5>
                            <div className="mt-2">
                                <span className="text-slate-400 font-semibold me-1">$16USD <del className="text-red-600">$21USD</del></span>

                                <ul className="list-none inline-block text-orange-400 space-x-1">
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline text-slate-400 font-semibold">4.8 (45)</li>
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h5 className="text-lg font-semibold">Overview :</h5>
                                <p className="text-slate-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptates ea omnis. Modi laborum soluta tempore unde accusantium.</p>

                                <ul className="list-none text-slate-400 mt-4">
                                    <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                    <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand</li>
                                </ul>
                            </div>

                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] mt-4">
                                <div className="flex items-center">
                                    <h5 className="text-lg font-semibold me-2">Size:</h5>
                                    <div className="space-x-1">
                                        <Link href="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">S</Link>
                                        <Link href="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">M</Link>
                                        <Link href="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">L</Link>
                                        <Link href="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">XL</Link>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <h5 className="text-lg font-semibold me-2">Quantity:</h5>
                                    <div className="qty-icons ms-3 space-x-1">
                                        <button onClick={handleStepDown} className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white minus"                                            >
                                            -
                                        </button>
                                        <input min="0" readOnly name="quantity" value="0" type="number" className="h-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity" />
                                        <button onClick={handleStepUp} className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus" >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">Shop Now</Link>
                                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white mt-2">Add to Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-10 gap-[30px]">
                    <div className="lg:col-span-3 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                <li role="presentation">
                                    <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Description</button>
                                </li>
                                <li role="presentation">
                                    <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Additional Information</button>
                                </li>
                                <li role="presentation">
                                    <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Review</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-9 md:col-span-7">
                        <div id="" className=" p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            {isOpenTab === 0 ? <div className="myTabContent active" id="description" role="tabpanel" aria-labelledby="profile-tab">
                                <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and words is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>
                            </div> :""}
                            
                            {isOpenTab === 1 ? <div className="myTabContent " id="addinfo" role="tabpanel" aria-labelledby="addinfo-tab">
                                <table className="w-full text-start">
                                    <tbody>
                                        <tr className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-700">
                                            <td className="font-semibold py-4" style={{ width: '100px' }}>Color</td>
                                            <td className="text-slate-400 py-4">Red, White, Black, Orange</td>
                                        </tr>

                                        <tr className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-700">
                                            <td className="font-semibold py-4">Material</td>
                                            <td className="text-slate-400 py-4">Cotton</td>
                                        </tr>

                                        <tr className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-700">
                                            <td className="font-semibold py-4">Size</td>
                                            <td className="text-slate-400 py-4">S, M, L, XL, XXL</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>:""}
                            
                            {isOpenTab === 2 ?
                                <div className="myTabContent" id="review" role="tabpanel" aria-labelledby="review-tab">

                                {
                                    shopItem.map((data,index) => {
                                        return (
                                        <div className={data.class} key={index}>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <Image src={data.image} width={44} height={44} className="h-11 w-11 rounded-full shadow" alt="" />

                                                    <div className="ms-3 flex-1">
                                                        <Link href="#" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">{data.name}</Link>
                                                        <p className="text-sm text-slate-400">{data.time}</p>
                                                    </div>
                                                </div>

                                                <Link href="#" className="text-slate-400 hover:text-indigo-600 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> {data.reply}</Link>
                                            </div>
                                            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                                <ul className="list-none inline-block text-orange-400">
                                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                    <li className="inline text-slate-400 font-semibold">5.0</li>
                                                </ul>

                                                <p className="text-slate-400 italic">{data.desc}</p>
                                            </div>
                                        </div>)
                                    })
                                }


                                <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                                    <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                                    <form className="mt-8">
                                        <div className="grid lg:grid-cols-12 lg:gap-6">
                                            <div className="lg:col-span-6 mb-5">
                                                <div className="text-start">
                                                    <label htmlFor="name" className="font-semibold">Your Name:</label>
                                                    <div className="form-icon relative mt-2">
                                                        <Icon.User className="w-4 h-4 absolute top-3 start-4"></Icon.User>
                                                        <input name="name" id="name" type="text" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name :" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="lg:col-span-6 mb-5">
                                                <div className="text-start">
                                                    <label htmlFor="email" className="font-semibold">Your Email:</label>
                                                    <div className="form-icon relative mt-2">
                                                        <Icon.Mail className="w-4 h-4 absolute top-3 start-4"></Icon.Mail>
                                                        <input name="email" id="email" type="email" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email :" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1">
                                            <div className="mb-5">
                                                <div className="text-start">
                                                    <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                                    <div className="form-icon relative mt-2">
                                                        <Icon.MessageCircle className="w-4 h-4 absolute top-3 start-4"></Icon.MessageCircle>
                                                        <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Send Message</button>
                                    </form>
                                </div>
                            </div> :"" 
                            }
                        </div>
                    </div>
                </div>

        </>
    )
}