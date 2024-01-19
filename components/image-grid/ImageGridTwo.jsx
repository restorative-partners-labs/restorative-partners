"use client"

import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";

const imageList = [
  {
    img: "/assets/img/blog/single-post/content-image-1.png",
    delayAnimation: "0",
    imageOwner: "@element5digital",
    link: "https://element5digital.com/",
  },
  {
    img: "/assets/img/blog/single-post/content-image-2.png",
    delayAnimation: "100",
    imageOwner: "@insideweather",
    link: "https://insideweather.com/",
  },
];

const ImageGridTwo = () => {
  return (
    <Gallery>
      <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
        {imageList.map((val, i) => (
          <div className="col-6" key={i}>
            {/* <!--Animated Block--> */}
            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay={val.delayAnimation}
            >
              {/* <!--Simple Image--> */}
              <div className="ptf-simple-image">
                <Item
                  original={val.img}
                  thumbnail={val.img}
                  width={416}
                  height={335}
                >
                  {({ ref, open }) => (
                    <Image
                    width={1200}
                    height={1200}
                    style={{width : '100%' , height: '100%'}}
                      src={val.img}
                      alt="service"
                      role="button"
                      ref={ref}
                      onClick={open}
                    />
                  )}
                </Item>
              </div>
              {/* End  .ptf-simple-image */}
              <div className="ptf-simple-image-caption">
                Image by{" "}
                <a href={val.link} target="_blank" rel="noopener noreferrer">
                  {val.imageOwner}
                </a>
              </div>
              {/* End .ptf-simple-image-caption */}
            </div>
          </div>
        ))}
      </div>
    </Gallery>
  );
};

export default ImageGridTwo;
