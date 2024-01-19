"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
const HeaderComingSoon = () => {
  return (
    <header className="ptf-header ptf-header--empty">
      <div className="ptf-navbar ptf-navbar--main ptf-navbar--transparent">
        <div className="container-xxl">
          <div className="ptf-navbar-inner">
            {/* <!--Logo--> */}
            <Link href="/" className="ptf-navbar-logo">
              <Image
                width={151}
                height={146}
                style={{ objectFit: "contain" }}
                className="black"
                src="/assets/img/root/logo-dark.png"
                alt="logo"
                loading="lazy"
              />
              <Image
                width={151}
                height={146}
                style={{ objectFit: "contain" }}
                className="white"
                src="/assets/img/root/logo-white.png"
                alt="logo"
                loading="lazy"
              />
            </Link>
            {/* <!--Socials--> */}
            <div className="ptf-navbar-socials">
              {/* <!--Social Icon--> */}
              <a
                className="ptf-social-icon ptf-social-icon--style-3 twitter"
                href="#"
                target="_blank"
              >
                <i className="socicon-twitter"></i>
              </a>
              {/* <!--Social Icon--> */}
              <a
                className="ptf-social-icon ptf-social-icon--style-3 facebook"
                href="#"
                target="_blank"
              >
                <i className="socicon-facebook"></i>
              </a>
              {/* <!--Social Icon--> */}
              <a
                className="ptf-social-icon ptf-social-icon--style-3 instagram"
                href="#"
                target="_blank"
              >
                <i className="socicon-instagram"></i>
              </a>
              {/* <!--Social Icon--> */}
              <a
                className="ptf-social-icon ptf-social-icon--style-3 pinterest"
                href="#"
                target="_blank"
              >
                <i className="socicon-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComingSoon;
