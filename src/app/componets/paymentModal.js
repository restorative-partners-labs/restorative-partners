"use client"
import React,{useState} from 'react'
import Link from "next/link"

export default function PaymentModal(){
    let [isModal, setIsmodal] = useState(false)
    let month = [
        { month: 'Jan' }, { month: 'Feb' }, { month: 'Mar' }, { month: 'Apr' }, { month: 'May' }, { month: 'Jne' }, { month: 'July' }, { month: 'Aug' }, { month: 'Sep' }, { month: 'Oct' }, { month: 'Nov' }, { month: 'Dec' }
    ]
    return(
        <>
        <li className="py-6 border-t border-gray-100 dark:border-gray-700">
            <Link href="#" onClick={()=>setIsmodal(!isModal)} scroll={false} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Add Payment Method</Link>
        </li>
        {isModal ? 
                <div id="paymentMethod" className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 flex items-center justify-center">
                    <div className="relative w-full h-auto max-w-md p-4">
                        <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                                <h5 className="text-xl font-semibold">Add Payment Method</h5>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={()=>setIsmodal(!isModal)} >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className="p-6 text-center">
                                <form>
                                    <div className="grid grid-cols-1">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="name" className="font-semibold">Your Name :</label>
                                                <input name="name" id="name" type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required placeholder="Name :" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="ex_month" className="form-label font-medium">Month :</label>
                                                <select id="ex_month" className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">

                                                    {month.map((data, index) => {
                                                        return (
                                                            <option key={index}>{data.month}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="ex_year" className="form-label font-medium">Year :</label>
                                                <select id="ex_year" className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                                    <option>2022</option>
                                                    <option>2023</option>
                                                    <option>2024</option>
                                                    <option>2025</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="name" className="font-semibold">Card no. :</label>
                                                <input name="number" id="card_number" type="number" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required placeholder="number :" />
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="name" className="font-semibold">CVV :</label>
                                                <input name="number" id="cvv_number" type="number" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required placeholder="number :" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <div className="text-start">
                                                <label htmlFor="card_names" className="form-label font-medium">Cards :</label>
                                                <select id="card_names" className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                                    <option>Visa</option>
                                                    <option>Ame. Express</option>
                                                    <option>Master</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="py-2 px-5  font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center">Add Card</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>:""
            }
        </>
    )
}