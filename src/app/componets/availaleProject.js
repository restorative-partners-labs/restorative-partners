"use client"
import React from "react"
import Link from "next/link"
import {FiPhone} from "react-icons/fi"

export default function AvailableProject(){
    return(
        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 text-center">
                <span className="text-slate-400 mb-4">Available for freelance projects</span>
                <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Do you have designing project? <br /> Lets talk.</h3>

                <div className="mt-6">
                    <Link href="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><FiPhone className="me-1 text-lg"/> Contact us</Link>
                </div>
            </div>
        </div>
    )
}