"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import SectionTitle from '../ui/sectionTitle'
import expertise_bg from "@/assets/images/expertise.jpg"
import Title from '../ui/title'
import { cardSlideAnimation } from '@/lib/utils'
import SectionSidebarImg from '../ui/sectionSidebarImg'


const skillList = [
    {
        id: 1,
        skill_name: "Interior Design",
        achive: "50%"
    },
    {
        id: 2,
        skill_name: "Sustainability",
        achive: "85%"
    },
    {
        id: 3,
        skill_name: "Decor",
        achive: "90%"
    },
    {
        id: 4,
        skill_name: "Visualization",
        achive: "93%"
    },

]
const Expertise = () => {
    return (
        <section className='mt-20'>
            <div className='container-fluid '>
                <SectionTitle sectionName={"Expertise"} sectionTitle={"Mastering the Art of Design"} sectionDesc={"Where Creativity Meets Proficiency"} />
                <div className='lg:mt-30 2sm:mt-20 mt-14 bg-secondary'>
                    <div className='flex lg:flex-row flex-col items-center gap-15 '>
                        <div>
                            <SectionSidebarImg img={expertise_bg} section_name={"Expertise-bg"} className={"w-full h-full"} />
                        </div>
                        <div className='px-3 2xl:py-0 py-7 max-w-[609px] w-full'>
                            <Title title_text={"Expertise Progress"} className={"2xl:mb-20 mb-14"} />
                            <div className=''>
                                {
                                    skillList.map(({ id, achive, skill_name }) => {
                                        return (
                                            <div key={id} className='bg-primary_rgba relative h-[1px] w-full mt-16 '>
                                                <div className={`bg-primary absolute -top-[2.5px] left-0 h-[5px]`} style={{ width: achive, transition: "width 1s ease-in-out" }}>
                                                    <span className='absolute left-0 bottom-full mb-2 font-semibold text-primary-foreground'>{skill_name}</span>
                                                    <span className='absolute -right-4 bottom-full mb-2 font-semibold text-primary-foreground'>{achive}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expertise