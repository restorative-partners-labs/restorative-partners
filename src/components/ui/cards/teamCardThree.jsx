import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TeamCardThree = ({ img, name, position, link }) => {
    return (
        <div className='w-full h-full hover-underline'>
            <Link href={link} >
                <Image src={img}loading='lazy'      alt='team-img'  />
            </Link>
            <div className='mt-7.5'>
                <Link href={link} className='text-2xl font-bold leading-160 text-primary-foreground '><span>{name}</span></Link>
                <p className=' text-primary-foreground'>{position}</p>
            </div>
        </div>
    )
}

export default TeamCardThree