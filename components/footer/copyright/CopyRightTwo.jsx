"use client";

import React from "react";
import SocialTwo from "../../social/SocialTwo";

const logo = "/assets/img/root/rp-logo-white.png";
import Image from "next/image";
const CopyRightTwo = () => {
  return (
    <div className="row align-items-center">
      <div className="col-12 col-md-3">
        <a href="#">
          <Image
            width={1200}
            height={1200}
            style={{ width: "151px", height: "46px" }}
            src={logo}
            alt="logo"
            loading="lazy"
          />
        </a>
      </div>
      {/* End .col */}

      <div className="col-12 col-md-5">
        <p className="ptf-footer-copyright has-3-color">
          ©{new Date().getFullYear()}{" "}
          <span className="has-white-color">
            <a
              href="https://themeforest.net/user/ib-themes"
              rel="noopener noreferrer"
              target="_blank"
            >
              Restorative Partners
            </a>
          </span>
          <br />
          Non-Profit #354654654 in San Luis Obispo, California.
          <br />
          Tax ID 47-4825349
        </p>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg">
        <div className="ptf-footer-socials has-white-color">
          <SocialTwo />
          {/* <!--Social Icon--> */}
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyRightTwo;
