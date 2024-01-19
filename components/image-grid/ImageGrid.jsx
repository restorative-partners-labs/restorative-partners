"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";
const imageList = [
  { img: "/assets/img/about-us-image-1.png", delayAnimation: "0" },
  { img: "/assets/img/about-us-image-2.png", delayAnimation: "100" },
];

const ImageGrid = () => {
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
                  width={636}
                  height={512}
                >
                  {({ ref, open }) => (
                    <Image
                      width={1200}
                      height={1200}
                      style={{ width: "100%", height: "100%" }}
                      src={val.img}
                      alt="gallery"
                      role="button"
                      ref={ref}
                      onClick={open}
                    />
                  )}
                </Item>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Gallery>
  );
};

export default ImageGrid;
