"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import DropDownMenu from "./dropDownMenu";
import MegaMenu from "./megaMenu";
import Image from "next/image";
import img from "@/assets/images/rp-logo.png";
import { cn } from "@/lib/utils";
import Offcanvas from "./offCanvas";
import Cart from "./cart";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import useActiveNavLink from "@/hooks/useActiveNavLink";
import useStickyHeader from "@/hooks/useStickyHeader";
import { menuList } from "@/lib/fackData/menuList"; // Corrected import

const BottomNavbar = ({ linkColor }) => {
  const { products } = useSelector((state) => state.addToCart);
  const [offcanvaseActive, setOffcanvaseActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [fontSize, setFontSize] = useState("1rem"); // Default font size

  useStickyHeader(linkColor);
  const pathName = usePathname();
  useActiveNavLink(pathName);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Check if it's a landscape mode and screen width fits iPad landscape
      if (width >= 768 && width <= 1024 && width > height) {
        setFontSize("0.7rem"); // Reduce font size by 30%
      } else {
        setFontSize("1rem"); // Default font size
      }
    };

    // Add event listener on resize
    window.addEventListener("resize", handleResize);

    // Initial check when the component mounts
    handleResize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="bottom-navbar flex justify-between items-center">
        <div>
          <Link href="/" className={cn(`logo text-primary-foreground ${linkColor}`)}>
            <Image src={img} loading="lazy" width={200} height={30} alt="logo" />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center">
            {menuList.map(({ id, isDropdown, name, path, isMegaMenu }) => {
              return (
                <li key={id} className="group">
                  <Link
                    href={path}
                    data-id={id}
                    className={cn(
                      `nav-link text-xl font-medium px-7 py-[34px] pb-6 flex items-center gap-2 group-hover:bg-primary group-hover:text-secondary-foreground ${linkColor}`
                    )}
                    style={{ fontSize: fontSize }} // Apply dynamic font size
                  >
                    {name}
                    {(isDropdown || isMegaMenu) && (
                      <span className={`transition-all duration-500 rotate-180 group-hover:rotate-0 group-hover:text-secondary-foreground`}>
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 8L6 2L1 8" />
                        </svg>
                      </span>
                    )}
                  </Link>
                  {isDropdown.length && <DropDownMenu dropDownList={isDropdown} parentId={id} />}
                  {isMegaMenu.length && <MegaMenu dropDownList={isMegaMenu} parentId={id} />}
                </li>
              );
            })}

            <li
              className={cn(
                `other_icon text-primary-foreground px-6 cursor-pointer ${linkColor}`
              )}
              onClick={() => setOffcanvaseActive(true)}
            >
              {/* <Search height={"24"} width={"24"} /> */}
            </li>
            <li
              className={cn(
                `other_icon text-primary-foreground pl-6 cursor-pointer flex relative ${linkColor}`
              )}
              onClick={() => setCartActive(true)}
            >
              {/* <ShopCart height={"24"} width={"24"} />
              {products.length ? (
                <span className="font-medium flex items-center justify-center text-secondary-foreground text-sm absolute -top-3 -right-4 w-6 h-6 bg-primary rounded-full">
                  {countCartProductQuantity(products)}
                </span>
              ) : (
                ""
              )} */}
            </li>
          </ul>
        </nav>
      </div>
      <Offcanvas setOffcanvaseActive={setOffcanvaseActive} offcanvaseActive={offcanvaseActive} />
      <Cart setCartActive={setCartActive} cartActive={cartActive} />
    </>
  );
};

export default BottomNavbar;
