"use client";

import React from "react";
import Image from "next/image";
const iconList = [
  { delayAnimation: "0", icon: "logo-1" },
  { delayAnimation: "100", icon: "logo-2" },
  { delayAnimation: "200", icon: "logo-3" },
  { delayAnimation: "300", icon: "logo-4" },
  { delayAnimation: "400", icon: "logo-5" },
  { delayAnimation: "0", icon: "logo-6" },
  { delayAnimation: "100", icon: "logo-7" },
  { delayAnimation: "200", icon: "logo-8" },
  { delayAnimation: "300", icon: "logo-9" },
  { delayAnimation: "400", icon: "logo-10" },
  { delayAnimation: "0", icon: "logo-11" },
  { delayAnimation: "100", icon: "logo-12" },
  { delayAnimation: "200", icon: "logo-13" },
];

const BrandTwo = () => {
  return (
    <ul
      className="
          ptf-clients-list
          ptf-clients-list--start
          ptf-clients-list--style-1
        "
      data-columns="5"
    >
      {iconList.map((val, i) => (
        <li
          className="ptf-clients-list__item"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <Image
            width={1200}
            height={1200}
            style={{ width: "132px", height: "54px" }}
            src={`/assets/img/root/clients/${val.icon}.png`}
            alt="brand logo"
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
};

export default BrandTwo;
