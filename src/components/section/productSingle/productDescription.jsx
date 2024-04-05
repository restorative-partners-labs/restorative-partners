"use client"
import { useState } from 'react'
import { motion } from "framer-motion";
import InputFiled from '../../ui/inputFiled'
import TextAreaFiled from '../../ui/textAreaFiled'
import RightArrow from '@/assets/icons/rightArrow'
import ButtonOutline from '@/components/ui/buttons/buttonOutline';

const initialTabs = ["Description", "Product Details", "Reviews"]
const ProductDescription = () => {
    const [activeTab, setActiveTab] = useState(initialTabs[0])
    return (
        <div className='mt-30'>
            <ul className='flex xm:flex-wrap gap-5 justify-between mb-2.5'>
                {
                    initialTabs.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => setActiveTab(item)}
                                className="relative xl:text-4xl md:text-3xl sm:text-2xl font-bold leading-135"
                            >
                                {activeTab === item && (
                                    <motion.span
                                        layoutId="bubble"
                                        className="absolute inset-0 -bottom-[13px] z-10 border-b-[5px] border-b-primary"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
            <hr className='' />
            <div className='mt-7.5 max-w-[958px] w-full relative overflow-hidden'>
                <div className={`${activeTab === "Description" ? "relative opacity-100 translate-y-0 transition-all duration-500" : "absolute top-0 left-0 opacity-0 translate-y-10 transition-all duration-500"} bg-background `}>
                    <p>The Ratio Pendant Lamp featurees a wide lampshade, referring  the bold and elegant shape  classic metal penwdants. The lamp to features a spun steel shade with a seweamlessly embedded LED module. The Ratio Pendant Lamp featurees a wide lampshade, referring  the bold and elegant shape  classic metal penwdants. The lamp to features a spun steel shade with a seweamlessly embedded LED module.</p>
                    <p className='mt-6'>The Ratio Pendant Lamp featurees a wide lampshade, referring  the bold and elegant shape  classic metal penwdants. The lamp to features a spun steel shade with. </p>
                </div>
                <div className={`${activeTab === "Product Details" ? "relative opacity-100 translate-y-0 transition-all duration-500" : "absolute top-0 left-0 opacity-0 translate-y-10 transition-all duration-500"} bg-background `}>
                    <p >The Ratio Pendant Lamp featurees a wide lampshade, referring  the bold and elegant shape  classic metal penwdants. The lamp to features a spun steel shade with. </p>
                    <p className='mt-6'>The Ratio Pendant Lamp featurees a wide lampshade, referring  the bold and elegant shape  classic metal penwdants. The lamp to features a spun steel shade with a seweamlessly embedded LED module. The Ratio Pendant Lamp featurees a wide lampshade, referring  the bold and elegant shape  classic metal penwdants. The lamp to features a spun steel shade with a seweamlessly embedded LED module.</p>
                </div>
                <div className={`${activeTab === "Reviews" ? "relative opacity-100 translate-y-0 transition-all duration-500" : "absolute top-0 left-0 opacity-0 translate-y-10 transition-all duration-500"} bg-background `}>
                    <form>
                        <InputFiled placeholderc={"Your Name"} type={"text"} className={"mb-[13px]"} />
                        <div className='flex sm:flex-row flex-col gap-x-5'>
                            <InputFiled placeholderc={"Phone Number"} type={"number"} className={"mb-[13px]"} />
                            <InputFiled placeholderc={"Your Email"} type={"email"} className={"mb-[13px]"} />
                        </div>
                        <TextAreaFiled placeholder={'Type your massage'} className={"min-h-[223px]"} />
                        <div className='flex justify-end'>
                            <ButtonOutline>Send massage <RightArrow height={"22"} width={"35"} /></ButtonOutline>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription