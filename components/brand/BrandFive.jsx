"use client";

import React from "react";

import {brandContent} from '../../data/service'

const BrandFive = () => {
  return (
    <>
      {brandContent.map((item, i) => (
        <div className="col-md-6 col-lg-6" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            {/* <!--Services List--> */}
            <ul
              className="ptf-services-list ptf-services-list--style-4"
              style={{
                "--ptf-font-family": "var(--ptf-primary-font)",
              }}
            >
              {item.serviceList.map((val, i) => (
                <li key={i}>
                  <a href={val.webLink}>{val.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default BrandFive;
