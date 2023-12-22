"use client"
import React,{useState} from 'react'
import Link from 'next/link';

import {LiaTimesSolid} from "react-icons/lia"

export default function CookieModal(){

    const [display,setDisplay] = useState(true);

    return(
             <div className="cookie-popup fixed max-w-lg bottom-3 end-3 start-3 sm:start-0 mx-auto bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md py-5 px-6 z-50" style={{display: display ? 'block' :'none'}}>
                <p className="text-slate-400">This website uses cookies to provide you with a great user experience. By using it, you accept our <Link href="https://shreethemes.in" target="_blank" className="text-emerald-600 dark:text-emerald-500 font-semibold">use of cookies</Link></p>
                <div className="cookie-popup-actions text-end">
                    <button onClick={() => setDisplay(false)} className="absolute border-none bg-none p-0 cursor-pointer font-semibold top-2 end-2"><LiaTimesSolid/></button> 
                </div>
            </div>
    )
}