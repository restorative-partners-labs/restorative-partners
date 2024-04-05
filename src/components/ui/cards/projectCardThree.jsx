import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ProjectCardThree = ({project_name, img}) => {
  return (
    <div className='relative hover-underline'>
        <Image src={img} loading='lazy'      alt='portfolio_1'/>
        <div className='absolute bottom-0 left-0 w-full h-full bg-white-liner flex items-end px-7.5 pb-6'>
            <Link href={"/project-single"}><span className='md:text-4xl sm:text-3xl text-2xl font-bold'>{project_name}</span></Link>
        </div>
    </div>
  )
}

export default ProjectCardThree