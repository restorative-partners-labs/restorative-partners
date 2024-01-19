"use client"

import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";
const ImageGridFour = ({img}) => {
  return (
    <Gallery>
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
        {/* <!--Simple Image--> */}
        <div className="ptf-simple-image">
          <Item
            original="/assets/img/service-detail.png"
            thumbnail="/assets/img/service-detail.png"
            width={1520}
            height={760}
          >
            {({ ref, open }) => (
              <Image
              width={1200}
              height={1200}
              style={{width : '100%' , height: '100%'}}
                src="/assets/img/service-detail.png"
                alt="service"
                role="button"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
        </div>
      </div>
    </Gallery>
  );
};

export default ImageGridFour;
