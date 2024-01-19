"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

import {portfolioContent} from '../../data/works'

const Portfolio = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    centerPadding: "0",
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="ptf-content-slider swiper-container slide-portfolio">
      <div className="swiper-wrapper">
        <Slider {...settings}>
          {/* <!--Portfolio Item--> */}
          {portfolioContent.map((item, i) => (
            <article className="ptf-work ptf-work--style-3" key={i}>
              <div className="ptf-work__media">
                <Link
                  href={`/works/${item.id
                   }`}
                  className="ptf-work__link"
                ></Link>
                <Image
                      width={1200}
                      height={1200}
                      style={{width : '100%' , height: '100%'}} src={item.img} alt="work" loading="lazy" />
              </div>
              <div className="ptf-work__meta">
                <div className="ptf-work__category">{item.categorie}</div>
                <h4 className="ptf-work__title">
                  <Link
                    href={`/works/${item.id}`}
                  >
                    {item.title}
                  </Link>
                </h4>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
