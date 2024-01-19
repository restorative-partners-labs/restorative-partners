"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
const HeaderPreview = () => {
  return (
    <header className="ptf-header ptf-header--landing">
      <div className="ptf-navbar ptf-navbar--main ptf-navbar--sticky">
        <div className="container-xxl">
          <div className="ptf-navbar-inner">
            {/* <!--Logo--> */}
            <Link className="ptf-navbar-logo" href="/">
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
                alt="brand"
                loading="lazy"
              />
            </Link>
            {/* <!--Navigation--> */}
            <nav className="ptf-nav ptf-nav--default">
              {/* <!--Menu--> */}
              <ul className="sf-menu sf-menu-onepage">
                <li>
                  <a href="#demo">
                    <span>Demo</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio">
                    <span>Portfolio</span>
                  </a>
                </li>
                <li>
                  <a href="#blog">
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a href="#pages">
                    <span> Pages</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!--Button--> */}
            <a
              className="ptf-btn ptf-btn--underlined"
              href="https://themeforest.net/item/moonex-nextjs-agency-nextjs-portfolio-template/46179136"
              target="_blank"
            >
              Purchase Now $12
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPreview;
