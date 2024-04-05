"use client"
import React from 'react'
import {motion} from "framer-motion"
import { cardSlideAnimation } from '@/lib/utils'
import Image from 'next/image'
const SectionSidebarImg = ({img, section_name, className}) => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cardSlideAnimation()}
            viewport={{ once: true, amount: 0.2 }}
            className={className}
        >
            <Image src={img} loading='lazy'      width={"auto"} height={"auto"} alt={section_name} />
        </motion.div>
    )
}

export default SectionSidebarImg