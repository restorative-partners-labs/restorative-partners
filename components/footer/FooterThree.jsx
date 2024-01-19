"use client";

import React from "react";
import FooterList from "../list/FooterList";
import Image from "next/image";
const FooterThree = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <a href="#">
            <Image
              width={1200}
              height={1200}
              style={{ width: "141px", height: "46px" }}
              src="/assets/img/root/logo-dark.png"
              alt=""
              loading="lazy"
            />
          </a>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-black-color">
            <FooterList />
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
            <a className="fz-36 has-black-color" href="mailto:hello@moonex.co">
              hello@moonex.co
            </a>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "0.625rem" }}
            ></div>
            <p className="fz-18">90 Fairground Rd, FL 3290, United States</p>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FooterThree;
