import React from 'react'
import Image from 'next/image'
import SectionTitle from '../../ui/sectionTitle'
import about_bg from "@/assets/images/about-image-2.jpg"
import SectionSidebarImg from '@/components/ui/sectionSidebarImg'

const AboutTwo = () => {
    return (
        <section >
            <div className='container-fluid'>
                <SectionTitle sectionName={"About Us"} sectionTitle={"Our Artistic Journey"} sectionDesc={"Unveiling the Passion, Vision, and Expertise Behind Our Designs"} />
                <div className={`bg-primary xl:mt-[220px] lg:mt-25 md:mt-44 mt-[540px] xl:mb-20 mb-0`}>
                    <div className='container'>
                        <div className='flex lg:flex-row flex-col items-center justify-between gap-[66px]'>
                            <div className='md:-mt-25 -mt-[470px] -mb-25'>
                                <SectionSidebarImg img={about_bg} section_name={"about-bg"}/>
                            </div>
                            <div className='max-w-[533px] lg:pt-0 pt-20 lg:pb-0 pb-10'>
                                <h2 className='text-secondary-foreground text-3xl 2sm:text-4xl font-bold leading-120 mb-14 max-w-[400px]'>Designing Dreams: Our Story</h2>
                                <p className=' text-secondary-foreground'>
                                    At Architronix, design is our canvas, and spaces are our masterpieces. With a vision for elegance, functionality, and innovation, our creative team curates environments that reflect dreams. From chic urban apartments to countryside estates, we're committed to sustainable design practices that enrich lives and the planet.
                                </p>
                                <p className='text-secondary-foreground mt-7'>
                                    oin us on a journey where every room is a canvas for creativity, and design transcends the ordinary. Together, let's craft your vision, one design at a time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTwo