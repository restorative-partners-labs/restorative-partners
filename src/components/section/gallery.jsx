"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import SectionTitle from '../ui/sectionTitle'
import { galleryData } from '@/lib/fackData/galleryData'


const Gallery = ({ text_muted, bg_muted }) => {
    const [expendItem, setExpendItem] = useState("02")
    return (
        <section className='pt-20'>
            <div className='container-fluid '>
                <SectionTitle
                    sectionName={"Gallery"}
                    sectionTitle={"Exploring Our Creations"}
                    sectionDesc={"Where Imagination Takes Flight, and Excellence Blossoms"}
                    link={"/project-archive"}
                    button_text={"View All Projects"}
                    bg_muted={bg_muted}
                    text_muted={text_muted}
                />
            </div>
            <div className='flex flex-col sm:flex-row lg:flex-nowrap flex-wrap lg:pt-30 2sm:pt-20 pt-14'>
                {
                    galleryData.map(({ id, img, img_desc, img_title, link }) => {
                        return (
                            <div key={id} onMouseEnter={() => setExpendItem(id)} onMouseLeave={() => setExpendItem("02")} className={` ${expendItem === id ? "lg:basis-[47%] basis-[50%]" : "lg:basis-[20%] basis-[30%]"} flex-grow sm:min-h-[750px] min-h-[420px] overflow-hidden group transition-all duration-700 relative`}>
                                <div className='absolute w-full h-full top-0 left-0 flex flex-col justify-between 2xl:pl-[30px] pl-5 pr-5 2xl:pr-0 py-[30px] after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-full after:h-1/2 after:bg-bottom-liner after:z-[-1] z-10'>
                                    <h3 className={`text-6xl font-extrabold leading-120 transition-all duration-700 text-transparent webkit-text-stroke-width-1 webkit-text-stroke-white ${expendItem === id ? "webkit-text-stroke-primary" :""}`}>{id}</h3>
                                    <div className={`flex 2xl:flex-row ${expendItem === id ? "flex-col" : "flex-col sm:flex-row"} items-start justify-between 2xl:items-end`}>
                                        <Link href={link} className='text-3xl 2sm:text-4xl font-bold leading-135 text-white max-w-60 2xl:min-w-56 min-w-48 relative'>{img_title}</Link>
                                        <p className={`text-secondary-foreground font-semibold 3xl:max-w-[421px] 2xl:max-w-80 transition-all duration-700 3xl:min-w-[420px] xl:min-w-80 min-w-72 overflow-hidden  ${expendItem === id ? "opacity-100" : "sm:opacity-0 opacity-100"}`}>{img_desc}</p>
                                    </div>
                                </div>
                                <Image src={img} alt={img_title} loading='lazy'     width={"auto"} height={"auto"} className='h-full sm:min-h-[750px] min-h-[420px] w-full object-cover' />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Gallery