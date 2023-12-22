import React from 'react'
import Link from "next/link"

import NftNavbar from '../componets/Navbar/nftNavbar';
import Footer from '../componets/Footer/footer';
import Switcher from '../componets/switcher';

import {MdKeyboardArrowRight} from "../assets/icons/icons"

export default function CreateNft(){
   return(
    <>
    <NftNavbar/>

    <section className="relative table w-full py-32 lg:py-40 bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
        <div className="container relative">
            <div className="grid grid-cols-1 text-center mt-10">
                <h3 className="text-3xl leading-normal font-medium">Create Your Item</h3>
            </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul className="tracking-[0.5px] mb-0 inline-flex items-center space-x-1">
                <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="/">Techwind</Link></li>
                <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="/index-nft">NFT</Link></li>
                <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600" aria-current="page">Create</li>
            </ul>
        </div>
    </section>
    <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
            <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>

    <section className="relative md:py-24 py-16">
        <div className="container relative">
            <div className="md:flex p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800">
                <div className="lg:w-1/3 md:w-2/5">
                    <p className="font-semibold mb-6">Upload your ART here, Please click Upload Image Button.</p>
                    <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small">Supports JPG, PNG and MP4 videos. Max file size : 10MB.</div>
                    <input type="file" id="input-file" name="input-file" accept="image/*"  hidden />
                    <label className="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full mt-6 cursor-pointer" htmlFor="input-file">Upload Image</label>
                </div>

                <div className="lg:w-2/3 md:w-3/5 mt-8 md:mt-0">
                    <div className="md:ms-6">
                        <form>
                            <div className="grid grid-cols-12 gap-6">
                                <div className="col-span-12">
                                    <label className="font-semibold">Art Title <span className="text-red-600">*</span></label>
                                    <input name="name" id="name" type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Title :" />
                                </div>

                                <div className="col-span-12">
                                    <label className="font-semibold"> Description : </label>
                                    <textarea name="comments" id="comments" className="form-input mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Description :"></textarea>
                                </div>

                                <div className="md:col-span-6 col-span-12">
                                    <label htmlFor= "NftItems" className="font-semibold">Type :</label>
                                    <select id="NftItems" className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                        <option>GIFs</option>
                                        <option>Music</option>
                                        <option>Video</option>
                                        <option>Tech</option>
                                    </select>
                                </div>

                                <div className="md:col-span-6 col-span-12">
                                    <label className="font-semibold"> Rate : </label>
                                    <input name="time" type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" id="time"  />
                                </div>

                                <div className="col-span-12">
                                    <h6 className="font-semibold text-lg">Auction :</h6>
                                </div>

                                <div className="md:col-span-6 col-span-12">
                                    <label className="font-semibold"> Starting Date : </label>
                                    <input name="date" type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 start" placeholder="Select date :" />
                                </div>

                                <div className="md:col-span-6 col-span-12">
                                    <label className="font-semibold"> Expiration date : </label>
                                    <input name="date" type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 end" placeholder="Select date :" />
                                </div>

                                <div className="col-span-12">
                                    <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Create Item</button>
                                </div>
                            </div>
                        </form>
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