"use client"
import React from 'react'
import BottomNavbar from './bottomNavbar'
import MobileNavbar from './mobileNavbar'

const HeaderThree = () => {

    return (
        <header className='absolute top-0 left-0 w-full z-50 overflow-x-clip'>
            <div className=' container-fluid '>
                <div className='container border-white border-b'>
                    <div className=' hidden xl:block' >
                        <BottomNavbar linkColor="text-white" />
                    </div>
                </div>
            </div>
            <div className='xl:hidden block'>
                <MobileNavbar />
            </div>
        </header >
    )
}

export default HeaderThree