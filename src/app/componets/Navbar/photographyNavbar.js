"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import * as Icon from 'react-feather';

import { usePathname } from 'next/navigation'

export default function PhotographyNavbar(){
    const [isMenu, setisMenu] = useState(false);
    const [navbarSticky , setNavbarSticky] = useState(false);

    let [manu , setManu] = useState('');
    let pathname = usePathname();

    useEffect(() => {

        setManu(pathname)

        function windowScroll(){
            setNavbarSticky( document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50);
        }
        if (typeof window !== "undefined"){
            window.addEventListener("scroll", windowScroll);
        }
        
        window.scrollTo(0, 0)
        return () => {
            window.removeEventListener('scroll', windowScroll);
        };
        
    }, []);

    
    const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('dark')
        htmlTag.classList.remove('light');
    });


            return(
            <nav  id="topnav" className={`${navbarSticky ? "nav-sticky" :" defaultscroll"}`}>
                <div className="container relative">
                    <Link className="logo" href="/">
                        <span className="inline-block dark:hidden">
                            <Image src="/images/logo-dark.png" width={138}  className="l-dark" height={24} alt=""  />
                            <Image src="/images/logo-light.png" width={138} className="l-light" height={24} alt="" />
                        </span>
                        <Image src="/images/logo-light.png" width={138}  height={24} alt=""  className="hidden dark:inline-block" />
                    </Link>

                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <ul className="buy-button list-none space-x-1 mb-0">
                        <li className="inline mb-0">
                            <Link href="/" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><Icon.Settings className="h-4 w-4"></Icon.Settings></Link>
                        </li>

                        <li className="inline ps-1 mb-0">
                        <Link href="https://1.envato.market/techwind-next" target="_blank" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><Icon.ShoppingCart className="h-4 w-4"></Icon.ShoppingCart></Link>
                        </li>
                    </ul>

                    <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                        <ul className="navigation-menu nav-light justify-end">
                            <li className={manu === "/index-photography" ? "active" : ""}><Link href="/index-photography" className="sub-menu-item">Home</Link></li>
                            <li className={manu === "/photography-about" ? "active" : ""}><Link href="/photography-about" className="sub-menu-item">About Us</Link></li>
                            <li className={manu === "/photography-portfolio" ? "active" : ""}><Link href="/photography-portfolio" className="sub-menu-item">Portfolio</Link></li>
                            <li className={manu === "/contact-two" ? "active" : ""}><Link href="/contact-two" className="sub-menu-item">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            )
        }