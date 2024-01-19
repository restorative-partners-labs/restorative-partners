"use client";

import React from "react";
import SocialTwo from "../../social/SocialTwo";
import Image from "next/image";
const logo = "/assets/img/root/logo-dark.png";

const CopyRight = () => {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-md">
        <a href="#">
          <Image
            width={1200}
            height={1200}
            style={{ width: "141px", height: "46px" }}
            src={logo}
            alt="logo"
            loading="lazy"
          />
        </a>
      </div>
      <div className="col-12 col-md text-md-center text-lg-center">
        <p className="ptf-footer-copyright has-black-color">
          ©{new Date().getFullYear()}{" "}
          <span>
            Moonex by{" "}
            <a
              href="https://themeforest.net/user/ib-themes"
              rel="noopener noreferrer"
              target="_blank"
            >
              ib-themes
            </a>
          </span>
          . All Rights Reserved.
        </p>
      </div>
      <div className="col-12 col-lg text-md-center text-lg-end">
        <div className="ptf-footer-socials has-black-color ">
          <SocialTwo />
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
