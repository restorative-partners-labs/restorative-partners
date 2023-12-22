import React from 'react'
import Link from "next/link"

import EcommerceNavbar from '../componets/Navbar/ecommerceNavbar';
import Switcher from '../componets/switcher';
import MobileApp from '../componets/mobileApp';
import ShopFooter from '../componets/Footer/shopFooter';

import {MdKeyboardArrowRight,PiAtBold} from "../assets/icons/icons"

export default function CheckOut(){
    return(
        <>
        <EcommerceNavbar/>

        <section className="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 mt-14">
                    <h3 className="text-3xl leading-normal font-semibold">Checkout</h3>
                </div>

                <div className="relative mt-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="/index-shop">Techwind</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600"aria-current="page">Checkout</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-8">
                        <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                            <h3 className="text-xl leading-normal font-semibold">Billing address</h3>

                            <form>
                                <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
                                    <div className="lg:col-span-6">
                                        <label className="form-label font-semibold">First Name : <span className="text-red-600">*</span></label>
                                        <input type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="First Name:" id="firstname" name="name" required="" />
                                    </div>

                                    <div className="lg:col-span-6">
                                        <label className="form-label font-semibold">Last Name : <span className="text-red-600">*</span></label>
                                        <input type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Last Name:" id="lastname" name="name" required="" />
                                    </div>

                                    <div className="lg:col-span-6">
                                        <label className="form-label font-semibold">Username</label>
                                        <div className="relative mt-2">
                                            <span className="absolute top-0.5 start-0.5 w-9 h-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="basic-addon1"><PiAtBold/></span>
                                            <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" min="1" max="1000" placeholder="Enter Amount" id="amount" aria-describedby="inputGroupPrepend" required />
                                        </div>
                                    </div>

                                    <div className="lg:col-span-6">
                                        <label className="form-label font-semibold">Your Email : <span className="text-red-600">*</span></label>
                                        <input type="email" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Email" name="email" required="" />
                                    </div>

                                    <div className="lg:col-span-12">
                                        <label className="form-label font-semibold">Address : <span className="text-red-600">*</span></label>
                                        <input type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Address:" id="address" name="name" required="" />
                                    </div>

                                    <div className="lg:col-span-12">
                                        <label className="form-label font-semibold">Address 2 : </label>
                                        <input type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Address:" id="address" name="name" required="" />
                                    </div>

                                    <div className="lg:col-span-4">
                                        <label className="font-semibold">Country:</label>
                                        <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                            <option value="USA">USA</option>
                                            <option value="CAD">Canada</option>
                                            <option value="CHINA">China</option>
                                        </select>
                                    </div>

                                    <div className="lg:col-span-4">
                                        <label className="font-semibold">State:</label>
                                        <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                            <option value="CAL">California</option>
                                            <option value="TEX">Texas</option>
                                            <option value="FLOR">Florida</option>
                                        </select>
                                    </div>

                                    <div className="lg:col-span-4">
                                        <label className="form-label font-semibold">Zip Code : <span className="text-red-600">*</span></label>
                                        <input type="number" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Zip:" id="zipcode" name="number" required="" />
                                    </div>

                                    <div className="lg:col-span-12">
                                        <div className="flex items-center w-full mb-0">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="sameaddress" />
                                            <label className="form-check-label text-slate-400" htmlFor="sameaddress">Shipping address is the same as my billing address</label>
                                        </div>

                                        <div className="flex items-center w-full mb-0">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="savenexttime" />
                                            <label className="form-check-label text-slate-400" htmlFor="savenexttime">Save this information for next time</label>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <h3 className="text-xl leading-normal font-semibold mt-6">Payment</h3>
                                    <form>
                                        <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
                                            <div className="lg:col-span-12">
                                                <div className="block">
                                                    <div>
                                                        <label className="inline-flex items-center">
                                                            <input type="radio" readOnly className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" name="radio-colors" value="1" checked />
                                                            <span className="text-slate-400">Credit card</span>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="block mt-2">
                                                    <div>
                                                        <label className="inline-flex items-center">
                                                            <input type="radio" readOnly className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" name="radio-colors" value="1" />
                                                            <span className="text-slate-400">Debit Card</span>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="block mt-2">
                                                    <div>
                                                        <label className="inline-flex items-center">
                                                            <input type="radio" readOnly className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" name="radio-colors" value="1" />
                                                            <span className="text-slate-400">PayPal</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="lg:col-span-6">
                                                <label className="form-label font-semibold">Account Holder Name : <span className="text-red-600">*</span></label>
                                                <input type="text" readOnly className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Name:" id="accountname" name="name" required="" />
                                            </div>

                                            <div className="lg:col-span-6">
                                                <label className="form-label font-semibold">Credit card number : <span className="text-red-600">*</span></label>
                                                <input type="number" readOnly className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="**** **** **** ****" id="cardnumber" name="number" required="" />
                                            </div>

                                            <div className="lg:col-span-3">
                                                <label className="form-label font-semibold">Expiration : <span className="text-red-600">*</span></label>
                                                <input type="number" readOnly className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="" id="expiration" name="number" required="" />
                                            </div>

                                            <div className="lg:col-span-3">
                                                <label className="form-label font-semibold">CVV : <span className="text-red-600">*</span></label>
                                                <input type="number" readOnly className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="" id="cvv" name="number" required="" />
                                            </div>
                                        </div>
                                    </form>       
                            
                            <div className="mt-4">
                                <input type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Continue to checkout" />
                            </div>
                        </div>

                    </div>

                    <div className="lg:col-span-4">
                        <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                            <div className="flex justify-between items-center">
                                <h5 className="text-lg font-semibold">Your Cart</h5>

                                <Link href="#" className="bg-indigo-600 flex justify-center items-center text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full h-5">3</Link>
                            </div>

                            <div className="mt-4 rounded-md shadow dark:shadow-gray-800">
                                <div className="p-3 flex justify-between items-center">
                                    <div>
                                        <h5 className="font-semibold">Product Name</h5>
                                        <p className="text-sm text-slate-400">Brief description</p>
                                    </div>

                                    <p className="text-slate-400 font-semibold">$ 12</p>
                                </div>
                                <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                                    <div>
                                        <h5 className="font-semibold">Second product</h5>
                                        <p className="text-sm text-slate-400">Brief description</p>
                                    </div>

                                    <p className="text-slate-400 font-semibold">$ 18</p>
                                </div>
                                <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                                    <div>
                                        <h5 className="font-semibold">Third item</h5>
                                        <p className="text-sm text-slate-400">Brief description</p>
                                    </div>

                                    <p className="text-slate-400 font-semibold">$ 20</p>
                                </div>
                                <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-slate-800 text-green-600">
                                    <div>
                                        <h5 className="font-semibold">Promo code</h5>
                                        <p className="text-sm text-green-600">EXAMPLECODE</p>
                                    </div>

                                    <p className="text-red-600 font-semibold">-$ 10</p>
                                </div>
                                <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                                    <div>
                                        <h5 className="font-semibold">Total (USD)</h5>
                                    </div>

                                    <p className="font-semibold">$ 30</p>
                                </div>
                            </div>

                            <div className="subcribe-form mt-6">
                                <form className="relative max-w-xl">
                                    <input type="email" id="subcribe" name="email" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" placeholder="Promo code" />
                                    <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Redeem</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileApp/>
        </section>

        <ShopFooter/>
        <Switcher/>
        </>
    )
}