"use client"
import React from 'react'
import SectionTitle from '../ui/sectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"
import 'swiper/css';

import ProgressAndNatigation from '../ui/progressAndNatigation';
import ServiceCard from '../ui/cards/serviceCard';
import { servicesData } from '@/lib/fackData/servicesData';


const ServicesSlider = ({ text_muted, bg_muted }) => {
    const pagination = {
        clickable: true,
        el: ".progressbar-pagination",
        type: 'progressbar'
    };
    return (
        <section className='pt-20'>
            <div className='container-fluid'>
                <SectionTitle
                    sectionName={"Services"}
                    sectionTitle={"Explore Our Design Offerings"}
                    sectionDesc={"Exploring Excellence in Every Meticulous Design Detail"}
                    link={"/services"}
                    button_text={"View All Services"}
                    text_muted={text_muted}
                    bg_muted={bg_muted}
                />
                <div className='lg:pt-30 2sm:pt-20 pt-14'>
                    <Swiper
                        spaceBetween={30}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            560: {
                                slidesPerView: 2
                            },
                            1200: {
                                slidesPerView: 3
                            },
                            1400: {
                                slidesPerView: 4
                            }
                        }}
                        pagination={pagination}
                        loop={true}
                        modules={[Pagination, Navigation]}
                        className=''
                    >
                        {
                            servicesData.map(({ id, service_name, service_desc, link }) => <SwiperSlide key={id}> <ServiceCard id={id} service_desc={service_desc} service_name={service_name} text_muted={text_muted}  link={link}/> </SwiperSlide>)
                        }
                        <div className='container'>
                            <ProgressAndNatigation />
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default ServicesSlider
