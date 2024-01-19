"use client";

import React, { useState } from "react";
import Link from "next/link";
import Social from "../social/SocialTwo";
import DropdownMenu from "./menu/DropdownMenu";
import MobileMenu from "./menu/MobileMenu";
import Image from "next/image";

const HeaderFreelancer = () => {
  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);
  return (
    <>
      <header className="ptf-header ptf-header--style-7 ptf-header--opaque">
        <div className="ptf-navbar ptf-navbar--main">
          <div className="container-xxl">
            <div className="ptf-navbar-inner">
              {/* <!--Navigation--> */}
              <nav className="ptf-nav ptf-nav--default">
                {/* <!--Menu--> */}
                <DropdownMenu />
              </nav>
              {/* <!--Buttons--> */}
              {/* <!--Offcanvas Menu Toggle--> */}
              <div
                className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle bar right"
                onClick={handleClick1}
              >
                <i className="lnir lnir-menu-alt-5"></i>
              </div>
              {/* Toggle bar icon */}

              {/* <!--Logo--> */}
              <Link className="ptf-navbar-logo" href="/">
                <Image
                  width={69}
                  height={103}
                  style={{ objectFit: "contain" }}
                  className="black"
                  src="/assets/img/root/logo-center-dark.png"
                  alt="logo"
                  loading="lazy"
                />
                <Image
                  width={69}
                  height={103}
                  style={{ objectFit: "contain" }}
                  className="white"
                  src="/assets/img/root/logo-center-white.png"
                  alt="logo"
                  loading="lazy"
                />
              </Link>

              {/* <!--Socials--> */}
              <div className="ptf-navbar-socials">
                {/* <!--Social Icon--> */}
                <Social />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End Header */}

      <div
        className={
          click1 ? "ptf-offcanvas-menu is-open" : "ptf-offcanvas-menu "
        }
      >
        <div className="ptf-offcanvas-menu__header">
          <div className="ptf-language-switcher">
            <a className="is-active" href="#">
              Eng
            </a>
            <a href="#">Fra</a>
            <a href="#">Ger</a>
          </div>
          <span
            className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle"
            onClick={handleClick1}
          >
            <i className="lnir lnir-close"></i>
          </span>
        </div>
        {/* End .ptf-offcanvas-menu__header */}

        <MobileMenu />
      </div>
      {/* End sidebar menu */}
    </>
  );
};

export default HeaderFreelancer;
