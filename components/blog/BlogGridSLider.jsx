"use client";

import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { BlogGridContent } from "../../data/blog";

const BlogGridSLider = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="swiper-slide grid-slider">
        <Slider {...settings} className="arrow-none">
          {BlogGridContent.map((val, i) => (
            <div className="ptf-news-slide" key={i}>
              <div className="ptf-news-slide__media">
                <Image
                  width={1200}
                  height={1200}
                  style={{ width: "100%", height: "100%" }}
                  src={val.img}
                  alt="news"
                  loading="lazy"
                />
              </div>
              <div className="ptf-news-slide__content">
                <div className="ptf-news-slide__meta">
                  <span className="cat">Inspiration</span>
                  <span className="date">{val.date}</span>
                </div>
                <h3 className="ptf-news-slide__title">
                  <Link
                    href={`/blog/${val.id}`}
                  >
                    {val.title}
                  </Link>
                </h3>
                <div className="ptf-news-slide__excerpt">
                  <p>{val.descriptions}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BlogGridSLider;
