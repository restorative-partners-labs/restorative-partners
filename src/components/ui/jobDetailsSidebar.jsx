import React from 'react'
import Title from './title'
import Link from 'next/link'
import RightArrow from '@/assets/icons/rightArrow'
import ButtonOutline from './buttons/buttonOutline'

const jobOverview = [ 
    {
        id:1,

    }
]
const JobDetailsSidebar = () => {
    return (
        <div className='bg-primary py-12.5 sm:px-9 px-5 mt-10 lg:mt-0 sticky top-10 '>
            <Title title_text={"Job Overview"} className={"mb-11 text-secondary-foreground font-semibold"} />
            <ul className='mb-16 flex flex-col gap-y-[34px]'>
                <li>
                    <strong className='text-secondary-foreground block'>Employment type:</strong>
                    <span className='text-secondary-foreground block'>Full time</span>
                </li>
                <li >
                    <strong className='text-secondary-foreground block'>Location:</strong>
                    <span className='text-secondary-foreground block'>USA,California</span>
                </li>
                <li >
                    <strong className='text-secondary-foreground block'>Experience:</strong>
                    <span className='text-secondary-foreground block'>5+ years</span>
                </li>
                <li >
                    <strong className='text-secondary-foreground block'>Qualifications:</strong>
                    <span className='text-secondary-foreground block'>MCA</span>
                </li>
                <li >
                    <strong className='text-secondary-foreground block'>Salary Range:</strong>
                    <span className='text-secondary-foreground block'>$45k -$60k / year</span>
                </li>
                <li >
                    <strong className='text-secondary-foreground block'>Date posted:</strong>
                    <span className='text-secondary-foreground block'>28th  Feb, 2024</span>
                </li>
                <li >
                    <strong className='text-secondary-foreground block'>Expiration date:</strong>
                    <span className='text-secondary-foreground block'>28th  Apr, 2024</span>
                </li>
            </ul>
            <Link href={""} >
                <button className={"flex items-center justify-center gap-3 text-2xl font-bold text-secondary-foreground  border-2 border-secondary  hover:text-primary-foreground px-10 py-[15px] whitespace-nowrap w-full relative after:absolute after:left-0 after:right-0 after:top-0 after:bg-secondary after:w-full after:h-0 hover:after:h-full after:transition-all after:duration-500 after:z-[-1] hover:after:bg-secondary transition-all duration-500"}>
                    Download Brochures <span className='rotate-90'><RightArrow height={"25"} width={"22"} /></span> 
                </button>
            </Link>
        </div>
    )
}

export default JobDetailsSidebar