import React from 'react'
import RightArrow from '@/assets/icons/rightArrow'
import DotIcon from '@/assets/icons/dotIcon'
import ButtonFill from './buttons/buttonFill'

const Pagination = () => {
    return (
        <div className='container'>
            <ul className='flex justify-center'>
                <li className='2sm:mr-[22px] mr-1'>
                    <ButtonFill className={"rotate-180 py-[23px] h-[75px] 2sm:px-6 px-3 after:bg-secondary border-secondary hover:border-primary text-primary-foreground after:left-0"}><RightArrow width={"35"} height={"22"} /></ButtonFill>
                    
                </li>
                <li className='flex justify-center items-center w-[74px] h-[75px] border-[2px] font-semibold cursor-pointer border-r-0 border-primary bg-primary text-secondary-foreground transition-all duration-500 hover:bg-primary hover:text-secondary-foreground'>01</li>
                <li className='flex justify-center items-center w-[74px] h-[75px] border-[2px] font-semibold cursor-pointer border-r-0 border-primary transition-all duration-500 hover:bg-primary hover:text-secondary-foreground'>02</li>
                <li className='flex justify-center items-center w-[74px] h-[75px] border-[2px] font-semibold cursor-pointer  border-primary transition-all duration-500 hover:bg-primary hover:text-secondary-foreground'>03</li>
                <li className='flex justify-center items-end w-[74px] h-[75px] pb-2'> <DotIcon /> </li>
                <li className='flex justify-center items-center w-[74px] h-[75px] border-[2px] font-semibold cursor-pointer  border-primary transition-all duration-500 hover:bg-primary hover:text-secondary-foreground'>39</li>
                <li className='2sm:ml-[22px] ml-1'>
                    <ButtonFill className={"py-[18px] h-[75px] hover:border-primary 2sm:px-10 px-4 after:left-0"}> <span className='sm:block hidden'>Next</span> <RightArrow width={"35"} height={"22"} /></ButtonFill>
                    
                </li>
            </ul>
        </div>
    )
}

export default Pagination