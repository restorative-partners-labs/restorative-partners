import React from 'react'
import SwiperNavigation from './swiperNavigation'

const ProgressAndNatigation = () => {
    return (
        <div className='sm:mt-17.5 mt-10'>
            <div className='flex justify-between items-center relative'>
                <div className='progressbar-pagination lg:w-[90%] w-[70%] h-[1px] bg-[#253b2f33]'></div>
                <SwiperNavigation />
            </div>
        </div>
    )
}

export default ProgressAndNatigation