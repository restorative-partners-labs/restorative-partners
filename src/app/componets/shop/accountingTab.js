"use client"
import React,{ useState } from 'react'
import Link from "next/link"

import {FiPhone,FiEdit,FaArrowRight,AiOutlineUser,AiOutlineDashboard,LiaSignOutAltSolid,RiMapPinLine,BsArrowDownCircle} from "../../assets/icons/icons"
import {HiOutlineListBullet} from "react-icons/hi2"

import * as Icon from 'react-feather';

export default function AccountingTab(){
    const [isOpenTab, setisOpen] = useState(0);

    const handleTabClick = (index) => {
        setisOpen(index);
    };
    return(
        <>
        <div className="lg:col-span-3 md:col-span-5">
            <div className="sticky top-20">
                <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <li role="presentation">
                        <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out flex items-center`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false"><AiOutlineDashboard className="text-[20px] me-2 align-middle"/><i ></i>Dashboard</button>
                    </li>
                    <li role="presentation">
                        <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out flex items-center`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false"><HiOutlineListBullet className="text-[20px] me-2 align-middle"/>Orders</button>
                    </li>
                    <li role="presentation">
                        <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out flex items-center`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false"><BsArrowDownCircle className="text-[18px] me-2 align-middle"/>Download</button>
                    </li>
                    <li role="presentation">
                        <button onClick={() => handleTabClick(3)} className={`${isOpenTab === 3 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out flex items-center`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false"><RiMapPinLine className="text-[20px] me-2 align-middle" />Addresses</button>
                    </li>
                    <li role="presentation">
                        <button onClick={() => handleTabClick(4)} className={`${isOpenTab === 4 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out flex items-center`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false"><AiOutlineUser className="text-[20px] me-2 align-middle"/>account Detail</button>
                    </li>
                    <li role="presentation">
                        <Link href = "/auth-login" onClick={() => handleTabClick(5)} className={`${isOpenTab === 5 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out flex items-center`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false"><LiaSignOutAltSolid className="text-[20px] me-2 align-middle" />Logout</Link>
                    </li>
                </ul>
            </div>
        </div>

        <div className="lg:col-span-9 md:col-span-7">
            <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                {isOpenTab === 0 ?  <div className="" id="dashboard" role="tabpanel" aria-labelledby="profile-tab">
                        <p className="text-slate-400 font-semibold">Hello <span className="text-slate-900 dark:text-white">cally_joseph</span> (not <span className="text-slate-900 dark:text-white">cally_joseph</span>? <Link href="#" className="text-red-600">Log out</Link>)</p>

                        <p className="text-slate-400 font-semibold mt-4">From your account dashboard you can view your <Link href="#" className="text-red-600">recent orders</Link>, manage your <Link href="#" className="text-red-600">shipping and billing addresses</Link>, and <Link href="#" className="text-red-600">edit your password and account details</Link>.</p>
                    </div> :""}
                
                {isOpenTab === 1 ? <div id="order" role="tabpanel" aria-labelledby="order-tab">
                    <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
                        <table className="w-full text-start text-slate-500 dark:text-slate-400">
                            <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                <tr className="text-start">
                                    <th scope="col" className="px-2 py-3 text-start">Order no.</th>
                                    <th scope="col" className="px-2 py-3 text-start">Date</th>
                                    <th scope="col" className="px-2 py-3 text-start">Status</th>
                                    <th scope="col" className="px-2 py-3 text-start">Total</th>
                                    <th scope="col" className="px-2 py-3 text-start">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white dark:bg-slate-900 text-start">
                                    <th className="px-2 py-3 text-start" scope="row">7107</th>
                                    <td className="px-2 py-3 text-start">1st November 2021</td>
                                    <td className="px-2 py-3 text-start text-green-600">Delivered</td>
                                    <td className="px-2 py-3 text-start">$ 320 <span className="text-slate-400">for 2items</span></td>
                                    <td className="px-2 py-3 text-start"><Link href="#" className="text-indigo-600 flex items-center">View <FaArrowRight className="ms-2 text-[10px]"/></Link></td>
                                </tr>

                                <tr className="bg-white dark:bg-slate-900 text-start border-t border-gray-100 dark:border-gray-700">
                                    <th className="px-2 py-3 text-start" scope="row">8007</th>
                                    <td className="px-2 py-3 text-start">4th November 2021</td>
                                    <td className="px-2 py-3 text-start text-slate-400">Processing</td>
                                    <td className="px-2 py-3 text-start">$ 800 <span className="text-slate-400">for 1item</span></td>
                                    <td className="px-2 py-3 text-start"><Link href="#" className="text-indigo-600 flex items-center">View <FaArrowRight className="ms-2 text-[10px]"/></Link></td>
                                </tr>

                                <tr className="bg-white dark:bg-slate-900 text-start border-t border-gray-100 dark:border-gray-700">
                                    <th className="px-2 py-3 text-start" scope="row">8008</th>
                                    <td className="px-2 py-3 text-start">4th November 2021</td>
                                    <td className="px-2 py-3 text-start text-red-600">Canceled</td>
                                    <td className="px-2 py-3 text-start">$ 800 <span className="text-slate-400">for 1item</span></td>
                                    <td className="px-2 py-3 text-start"><Link href="#" className="text-indigo-600 flex items-center">View <FaArrowRight className="ms-2 text-[10px]"/></Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>: ""}
                
                {isOpenTab === 2 ? <div id="download" role="tabpanel" aria-labelledby="download-tab">
                    <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
                        <table className="w-full text-start text-slate-500 dark:text-slate-400">
                            <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                <tr className="text-start">
                                    <th scope="col" className="px-2 py-3 text-start min-w-[160px]">Product Name</th>
                                    <th scope="col" className="px-2 py-3 text-start min-w-[360px]">Description</th>
                                    <th scope="col" className="px-2 py-3 text-start min-w-[160px]">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white dark:bg-slate-900 text-start">
                                    <th className="px-2 py-3 text-start" scope="row">Quick heal</th>
                                    <td className="px-2 py-3 text-start">It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a ready-made text to sing with the melody.</td>
                                    <td className="px-2 py-3 text-start text-green-600">Downloaded</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> :""}
                
                {isOpenTab === 3 ? <div id="address" role="tabpanel" aria-labelledby="address-tab">
                    <h6 className="text-slate-400 mb-0">The following addresses will be used on the checkout page by default.</h6>
                    <div className="md:flex mt-6">
                        <div className="md:w-1/2 md:px-3">
                            <div className="flex items-center mb-4 justify-between">
                                <h5 className="text-xl font-semibold">Billing Address:</h5>
                                <Link href="/#" className="text-indigo-600 text-lg"><FiEdit/></Link>
                            </div>
                            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                <p className="text-lg font-semibold mb-2">Cally Joseph</p>

                                <ul className="list-none">
                                    <li className="flex items-start">
                                        <RiMapPinLine className="me-2 mt-1"/>
                                        <p className="text-slate-400">C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485</p>
                                    </li>

                                    <li className="flex mt-1 items-center"><FiPhone className="me-2 text-lg"/>
                                        <p className="text-slate-400">+123 897 5468</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="md:w-1/2 md:px-3 mt-[30] md:mt-0">
                            <div className="flex items-center mb-4 justify-between">
                                <h5 className="text-xl font-semibold">Shipping Address:</h5>
                                <Link href="/#" className="text-indigo-600 text-lg"><FiEdit/></Link>
                            </div>
                            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                <p className="text-lg font-semibold mb-2">Cally Joseph</p>

                                <ul className="list-none">
                                    <li className="flex items-start">
                                        <RiMapPinLine className="me-2 mt-1"/>
                                        <p className="text-slate-400">C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485</p>
                                    </li>

                                    <li className="flex items-center mt-1"><FiPhone className=" text-lg me-2"/> 
                                        <p className="text-slate-400">+123 897 5468</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> :""}

                {isOpenTab === 4 ? <div id="accountdetail" role="tabpanel" aria-labelledby="accountdetail-tab">
                    <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
                    <form>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                            <div>
                                <label className="form-label font-medium">First Name : <span className="text-red-600">*</span></label>
                                <div className="form-icon relative mt-2">
                                    <Icon.User className="w-4 h-4 absolute top-3 start-4"></Icon.User>
                                    <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="First Name:" id="firstname" name="name" required="" />
                                </div>
                            </div>
                            <div>
                                <label className="form-label font-medium">Last Name : <span className="text-red-600">*</span></label>
                                <div className="form-icon relative mt-2">
                                    <Icon.UserCheck className="w-4 h-4 absolute top-3 start-4"></Icon.UserCheck>
                                    <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Last Name:" id="lastname" name="name" required="" />
                                </div>
                            </div>
                            <div>
                                <label className="form-label font-medium">Your Email : <span className="text-red-600">*</span></label>
                                <div className="form-icon relative mt-2">
                                    <Icon.Mail className="w-4 h-4 absolute top-3 start-4"></Icon.Mail>
                                    <input type="email" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email" name="email" required="" />
                                </div>
                            </div>
                            <div>
                                <label className="form-label font-medium">Occupation : </label>
                                <div className="form-icon relative mt-2">
                                    <Icon.Bookmark className="w-4 h-4 absolute top-3 start-4"></Icon.Bookmark>
                                    <input name="name" id="occupation" type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Occupation :" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1">
                            <div className="mt-5">
                                <label className="form-label font-medium">Description : </label>
                                <div className="form-icon relative mt-2">
                                    <Icon.MessageCircle className="w-4 h-4 absolute top-3 start-4"></Icon.MessageCircle>
                                    <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                </div>
                            </div>
                        </div>

                        <input type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5" value="Save Changes" />
                    </form>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-6">
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Contact Info :</h5>

                            <form>
                                <div className="grid grid-cols-1 gap-5">
                                    <div>
                                        <label className="form-label font-medium">Phone No. :</label>
                                        <div className="form-icon relative mt-2">
                                            <Icon.Phone className="w-4 h-4 absolute top-3 start-4"></Icon.Phone>
                                            <input name="number" id="number" type="number" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Phone :" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="form-label font-medium">Website :</label>
                                        <div className="form-icon relative mt-2">
                                            <Icon.Globe className="w-4 h-4 absolute top-3 start-4"></Icon.Globe>
                                            <input name="url" id="url" type="url" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Url :" />
                                        </div>
                                    </div>
                                </div>

                                <button className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Add</button>
                            </form>
                        </div>

                        <div>
                            <h5 className="text-lg font-semibold mb-4">Change password :</h5>
                            <form>
                                <div className="grid grid-cols-1 gap-5">
                                    <div>
                                        <label className="form-label font-medium">Old password :</label>
                                        <div className="form-icon relative mt-2">
                                            <Icon.Key className="w-4 h-4 absolute top-3 start-4"></Icon.Key>
                                            <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Old password" required="" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="form-label font-medium">New password :</label>
                                        <div className="form-icon relative mt-2">
                                            <Icon.Key className="w-4 h-4 absolute top-3 start-4"></Icon.Key>
                                            <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="New password" required="" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="form-label font-medium">Re-type New password :</label>
                                        <div className="form-icon relative mt-2">
                                            <Icon.Key className="w-4 h-4 absolute top-3 start-4"></Icon.Key>
                                            <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Re-type New password" required="" />
                                        </div>
                                    </div>
                                </div>

                                <button className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Save password</button>
                            </form>
                        </div>
                    </div>
                </div>:""}
            </div>
        </div>
        </>
    )
}