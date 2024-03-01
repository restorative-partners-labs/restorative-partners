"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";

import Social from "../../social/Social";

const menuContent = [
  {
    name: "Home",
    activeClass: "sf-with-ul",
    page: "home",
    menuClass: "two-columns current-menu-item",
    dropDownItems: [],
  },
  {
    name: "Our Mission",
    page: "works",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      {
        name: "About Restorative Partners",
        routerPath: "/works-grid",
      },
      {
        name: "About Restorative Justice",
        routerPath: "/works-grid",
      },
      {
        name: "Our Leaders",
        routerPath: "/works-masonry",
      },
      {
        name: "Annual Reports",
        routerPath: "/works-listing",
      },
      {
        name: "Get in Touch",
        routerPath: "/works-carousel",
      },
    ],
  },
  {
    name: "Programs",
    activeClass: "",
    menuClass: "",
    page: "blog",

    dropDownItems: [
      {
        name: "In Custody",
        routerPath: "/blog-grid",
      },
      {
        name: "System Navigation",
        routerPath: "/blog-masonry",
      },
      {
        name: "Mentorship",
        routerPath: "/blog-sidebar",
      },
      {
        name: "Housing",
        routerPath: "/blog/2",
      },
      {
        name: "Treatment",
        routerPath: "/blog-details-sidebar/7",
      },
      {
        name: "Workforce Development",
        routerPath: "/blog-details-sidebar/7",
      },
      ,
      {
        name: "Reentry Resources",
        routerPath: "/blog-details-sidebar/7",
      },
    ],
  },
  {
    name: "Get Involved",
    activeClass: "",
    page: "others",
    menuClass: "two-columns",
    dropDownItems: [
      {
        name: "Events",
        routerPath: "/about-us",
      },
      {
        name: "Volunteer",
        routerPath: "/about-me",
      },
      {
        name: "Careers",
        routerPath: "/service",
      },
      {
        name: "Donations",
        routerPath: "/service/5",
      },
    ],
  },
];

const MobileMenu = () => {
  let currentPage = "";
  const pathname = usePathname();

  currentPage = pathname.split("-")[0].split("/")[1];

  if (
    currentPage !== "works" &&
    currentPage !== "blog" &&
    currentPage !== "home"
  ) {
    currentPage = "others";
  }
  // titleStyle={item.page == currentPage ? {color: '#fa4529'}:''}

  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <SubMenu
                  className={item.page == currentPage ? "active-page" : ""}
                  title={item.name}
                  key={i}
                >
                  {item.dropDownItems.map((val, i) => (
                    <MenuItem key={i}>
                      <Link
                        className={
                          val.routerPath == pathname ? "active-page" : ""
                        }
                        href={val.routerPath}
                      >
                        {val.name}
                      </Link>
                    </MenuItem>
                  ))}
                </SubMenu>
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          @{new Date().getFullYear()} <span>Restorative Partners</span>. All a
          Non-Profit #354654654 in San Luis Obispo, California.
          <br />
          Tax ID 47-4825349
        </p>
        <Social />
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;
