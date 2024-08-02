"use client";
import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@/assets/icons/menuIcon";
import { IoMdClose } from "react-icons/io";
import { mobileMenuList } from "@/lib/fackData/menuList";
import Search from "@/assets/icons/search";
import ShopCart from "@/assets/icons/shopCart";
import { cn, countCartProductQuantity } from "@/lib/utils";
import Offcanvas from "./offCanvas";
import Cart from "./cart";
import { useSelector } from "react-redux";
import useOverflowHidden from "@/hooks/useOverflowHidden";
import Image from "next/image";
import img from "@/assets/images/rp-logo.png";

const MobileNavbar = () => {
  const { products } = useSelector((state) => state.addToCart);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [dropDownActive, setDropDownActive] = useState("");
  const [offcanvasActive, setOffcanvasActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);

  useOverflowHidden(isMenuActive);

  const handleDropDown = (e, id, isDropdown, isMegaMenu) => {
    if (isDropdown.length || isMegaMenu.length) {
      setDropDownActive(dropDownActive ? "" : id);
    } else {
      setIsMenuActive(false);
    }
  };

  return (
    <div className="mobile-navbar">
      <div className="bg-[#f9f9f9] relative overflow-x-clip px-2.5">
        <div className="container-fluid">
          <div className="flex items-center justify-between py-4">
            <Link href={"/"} className="text-primary-foreground">
              <Image src={img} loading="lazy" width={200} height={30} />
            </Link>
            <div>
              <nav
                className={`fixed top-0 left-0 w-full h-full overflow-y-auto bg-[#F9FFFC] transition-transform duration-500 ${
                  isMenuActive
                    ? "transform translate-x-0"
                    : "transform translate-x-full"
                } z-50 py-4 px-4`}
              >
                <div className="flex justify-between items-center">
                  <Link href={"/"} className="text-primary-foreground">
                    <Image src={img} loading="lazy" width={200} height={30} />
                  </Link>
                  <div onClick={() => setIsMenuActive(false)}>
                    <IoMdClose className="text-2xl cursor-pointer" />
                  </div>
                </div>
                <ul className="mt-7">
                  {mobileMenuList.map(
                    (
                      { id, isDropdown, name, path, isMegaMenu },
                      parentItem
                    ) => {
                      return (
                        <li
                          key={id}
                          onClick={(e) =>
                            handleDropDown(e, id, isDropdown, isMegaMenu)
                          }
                        >
                          <Link
                            href={path}
                            data-id={id}
                            className={`nav-link text-xl font-medium px-4 py-4 flex items-center gap-2 transition-all duration-500 text-primary-foreground ${
                              dropDownActive === id
                                ? "bg-primary text-secondary-foreground"
                                : ""
                            }`}
                          >
                            {name}
                            {(isDropdown || isMegaMenu) && (
                              <span
                                className={`transition-transform duration-500 ${
                                  dropDownActive === id
                                    ? "rotate-0 text-secondary-foreground"
                                    : "rotate-180"
                                }`}
                              >
                                <svg
                                  width="12"
                                  height="9"
                                  viewBox="0 0 12 9"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M11 8L6 2L1 8" />
                                </svg>
                              </span>
                            )}
                          </Link>
                          {isDropdown && (
                            <ul
                              className={`transition-all duration-500 max-h-0 overflow-hidden px-4 pb-2 ${
                                dropDownActive === id
                                  ? "max-h-[500px] bg-primary text-secondary-foreground"
                                  : ""
                              }`}
                            >
                              {isDropdown
                                .filter(
                                  (item) =>
                                    item.name !== "" &&
                                    item.path !== "/not-used"
                                )
                                .map(({ id, name, path }) => {
                                  return (
                                    <li key={id} className="leading-10">
                                      <Link
                                        data-id={parentItem.id}
                                        onClick={() => setIsMenuActive(false)}
                                        href={path}
                                        className='dropdown-item text-secondary-foreground text-xl font-medium inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full'
                                      >
                                        {name}
                                      </Link>
                                    </li>
                                  );
                                })}
                            </ul>
                          )}
                          {isMegaMenu && (
                            <ul
                              className={`transition-all duration-500 max-h-0 overflow-hidden px-4 pb-2 ${
                                dropDownActive === id
                                  ? "max-h-[700px] bg-primary text-secondary-foreground"
                                  : ""
                              }`}
                            >
                              {isMegaMenu.map(({ id, menus }) => {
                                return (
                                  <ul key={id}>
                                    {menus.map(({ id, name, path, desc }) => {
                                      return (
                                        <li key={id} className="pb-5">
                                          <Link
                                            data-id={parentItem.id}
                                            onClick={() =>
                                              setIsMenuActive(false)
                                            }
                                            href={path}
                                            className='dropdown-item text-secondary-foreground text-xl font-medium inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full'
                                          >
                                            {name}
                                          </Link>
                                          {/* Removing description until I figure out how to show it on mobile */}
                                          {/* <span className="block text-secondary-foreground_rgba text-sm">
                                            {desc}
                                          </span> */}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    }
                  )}
                </ul>
              </nav>
              <div
                className="text-primary-foreground"
                onClick={() => setIsMenuActive(true)}
              >
                <MenuIcon className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <Offcanvas
          setOffcanvasActive={setOffcanvasActive}
          offcanvasActive={offcanvasActive}
        />
        <Cart setCartActive={setCartActive} cartActive={cartActive} />
      </div>
    </div>
  );
};

export default MobileNavbar;
