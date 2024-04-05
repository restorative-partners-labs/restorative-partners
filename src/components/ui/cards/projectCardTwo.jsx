import Link from 'next/link'
import React from 'react'
import project_img_2 from "@/assets/images/project-overview-img-2.jpg"
import project_img_3 from "@/assets/images/project-overview-img-3.jpg"
import project_img_4 from "@/assets/images/project-overview-img-4.jpg"
import Image from 'next/image'
const ProjectCardTwo = () => {
    return (

        <div className='bg-white px-[9px] pt-[9px] pb-[15px] hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-500'>
            <div className='mb-[9px] grid grid-cols-[70%_auto] gap-[9px]'>
                <Image src={project_img_2} loading='lazy'      alt='project-img-2' className='h-full w-auto' />
                <div className='gap-[9px] flex flex-col'>
                    <Image src={project_img_2} loading='lazy'      alt='project-img-2' className='h-full w-auto' />
                    <Image src={project_img_3} loading='lazy'      alt='project-img-2' className='h-full w-auto' />
                    <Image src={project_img_4} loading='lazy'      alt='project-img-2' className='h-full w-auto' />
                </div>
            </div>
            <Link href={"/project-single"} className='text-2xl font-bold text-primary-foreground leading-135'>Breit-Fronzig House</Link>
            <p className='text-xl font-medium'>Eindohaven, Natherlands</p>
        </div>
    )
}

export default ProjectCardTwo