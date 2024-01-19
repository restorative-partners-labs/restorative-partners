"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        name: "Abot RP",
        routerPath: "/works-grid",
      },
      {
        name: "Abot Restorative Justice",
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
      },,
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
      {
        name: "Pricing",
        routerPath: "/pricing",
      },
    ],
  },
];

const DropdownMenu = () => {
  let currentPage = "";
  const pathname = usePathname();

  if (pathname.split("/")[1].trim() != "home-default") {
    currentPage = pathname.split("-")[0].split("/")[1];

    if (
      currentPage !== "works" &&
      currentPage !== "blog" &&
      currentPage !== "home"
    ) {
      currentPage = "others";
    }
  }

  return (
    <ul className="sf-menu">
      {menuContent.map((item, i) => (
        <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
          <a href="#" className={item.activeClass}>
            <span className={item.page == currentPage ? "active-page" : ""}>
              {item.name}
            </span>
          </a>

          <ul className="sub-menu mega">
            {item.dropDownItems.map((val, i) => (
              <li key={i}>
                <Link href={val.routerPath}>
                  {" "}
                  <span
                    className={val.routerPath == pathname ? "active-page" : ""}
                  >
                    {val.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
