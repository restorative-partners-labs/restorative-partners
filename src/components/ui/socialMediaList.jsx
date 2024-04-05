import Link from 'next/link'
import React from 'react'

const SocialMediaList = () => {
    return (
        <ul className='flex items-center gap-7.5'>
            <li>
                <Link href="" className='font-semibold text-lg relative after:contents-[""] after:absolute after:h-[20px] after:w-[1px] after:bg-black after:rotate-[22deg] after:top-1/2 after:-translate-y-1/2 after:right-[-15px] hover-underline'><span>FB</span></Link>
            </li>
            <li>
                <Link href="" className='font-semibold text-lg relative after:contents-[""] after:absolute after:h-[20px] after:w-[1px] after:bg-black after:rotate-[22deg] after:top-1/2 after:-translate-y-1/2 after:right-[-15px] hover-underline'><span>IN</span></Link>
            </li>
            <li>
                <Link href="" className='font-semibold text-lg relative after:contents-[""] after:absolute after:h-[20px] after:w-[1px] after:bg-black after:rotate-[22deg] after:top-1/2 after:-translate-y-1/2 after:right-[-15px] hover-underline'><span>TW</span></Link>
            </li>
            <li>
                <Link href="" className='font-semibold text-lg hover-underline'><span>LI</span></Link>
            </li>
        </ul>
    )
}

export default SocialMediaList