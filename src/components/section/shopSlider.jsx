"use client"
import React from 'react'
import SectionTitle from '../ui/sectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"
import 'swiper/css';
import ProductCard from '../ui/cards/productCard';
import ProgressAndNatigation from '../ui/progressAndNatigation';

const ShopSlider = ({ data, text_muted, bg_muted }) => {
    const pagination = {
        clickable: true,
        el: ".progressbar-pagination",
        type: 'progressbar'
    };
    return (
        <section className='pt-20'>
            <div className='container-fluid '>
                <SectionTitle
                    sectionName={"Shop"}
                    sectionTitle={"Design Elegance Emporium"}
                    sectionDesc={"Discover Unparalleled Luxury for Your Space"}
                    link={"/product-single"}
                    button_text={"View Shop"}
                    bg_muted={bg_muted}
                    text_muted={text_muted}
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
                            data.map(({ id, product_name, product_img, price, rating }) => {
                                return (
                                    <SwiperSlide key={id}>
                                        <ProductCard id={id} price={price} product_img={product_img} product_name={product_name} rating={rating} bg_muted={bg_muted} text_muted={text_muted} />
                                    </SwiperSlide>
                                )
                            })
                        }
                        <div className='container'><ProgressAndNatigation /></div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default ShopSlider