"use client"
import React, { useEffect } from 'react'

const useActiveNavLink = (pathName, home) => {
    useEffect(() => {
        const dropdown_item = document.querySelectorAll(".dropdown-item")
        const nav_link = document.querySelectorAll(".nav-link")


        // active manin menu
        nav_link.forEach((e) => {
            let urlPathname = e?.getAttribute('href');
            let parentId = e?.getAttribute("data-id")

            if (pathName === urlPathname) {
                e?.classList.add("bg-primary", "text-secondary-foreground");
            }
            else {
                e?.classList.remove("bg-primary", "text-secondary-foreground");

                // add active main menu when her dropdown menu active
                dropdown_item.forEach((item) => {
                    let urlPathname = item?.getAttribute('href');
                    let dropdownId = item?.getAttribute("data-id")
                    if (urlPathname === pathName && !home) { // home from home page 4
                        if (parentId === dropdownId) {
                            e?.classList.add("bg-primary", "text-secondary-foreground");
                        }
                    }
                    if (home === urlPathname) {
                        if (parentId === dropdownId) {
                            e?.classList.add("bg-muted", "text-secondary-foreground");
                        }
                        // item.parentNode.parentNode.parentNode.previousSibling.classList.add("bg-muted", "text-secondary-foreground");
                    }
                })
            }
        })


    }, [pathName]);

}

export default useActiveNavLink