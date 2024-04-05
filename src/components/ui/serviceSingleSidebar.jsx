import React from 'react'
import RightArrow from '@/assets/icons/rightArrow'
import Link from 'next/link'
import Title from '@/components/ui/title'
import InputFiled from '@/components/ui/inputFiled'
import TextAreaFiled from '@/components/ui/textAreaFiled'
import ButtonFill from './buttons/buttonFill'
import { servicesData } from '@/lib/fackData/servicesData'
const ServiceSingleSidebar = () => {
    return (
        <div className='sticky top-16'>
            <div>
                <Title title_text={"All Services"} />
                <ul>
                    {
                        servicesData.map(({id, link, service_name}) => {
                            return (
                                <li key={id} className='text-primary-foreground flex items-center gap-[27px] mb-[22px] last:mb-0'>
                                    <RightArrow width={"35"} height={"22"} />
                                    <Link href={link} className='text-xl leading-160 inline-block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-500 hover:after:w-full '>
                                        <span className='font-medium text-primary-foreground'>{service_name}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='mt-17.5'>
                <Title title_text={"Search"} />
                <InputFiled placeholderc={"Type & Hit Enter"} type={'text'} />
            </div>
            <div className='mt-17.5'>
                <form action="">
                    <Title title_text={"Schedule a Call"} />
                    <InputFiled placeholderc={"Your Name"} type={'text'} className="mb-[15px]" />
                    <InputFiled placeholderc={"Phone Number"} type={'number'} className="mb-[15px]" />
                    <InputFiled placeholderc={"Phone Number"} type={'date'} className="mb-[15px]" />
                    <TextAreaFiled placeholder={"Your massage"} className={"min-h-[187px]"} />
                    <ButtonFill type="submit" className={"sm:px-7.5 sm:py-2.5"}>Send massage</ButtonFill>
                </form>
            </div>
        </div>
    )
}

export default ServiceSingleSidebar