import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionSidebarImg from '../sectionSidebarImg'
const TeamCardTwo = ({ img, name, link, position, desc }) => {
    return (
        <div className='flex lg:flex-row flex-col gap-[34px] items-center'>
            <Link href={link} className='w-full h-full lg:min-w-52'>
                <SectionSidebarImg img={img} section_name={"team"} className={"w-full h-full"}/>
            </Link>
            <div >
                <Link href={link} className='text-2xl font-bold leading-160 text-primary-foreground hover-underline'><span>{name}</span></Link>
                <p className='font-bold text-primary-foreground'>{position}</p>
                <p className='mt-[18px] text-primary-foreground'>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default TeamCardTwo