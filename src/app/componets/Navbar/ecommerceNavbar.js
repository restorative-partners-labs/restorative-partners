"use client"
import React, { useState,useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'

import * as Icon from 'react-feather';
import {LuSearch,AiOutlineUser,LiaSignOutAltSolid,BsArrowDownCircle, BsHeartbreak,PiNoteDuotone} from "../../assets/icons/icons" 

export default function EcommerceNavbar() {
    let [isMenu, setisMenu] = useState(false);
    let [navbarSticky , setNavbarSticky] = useState(false);
    let [isCart , setIsCart] = useState(false);
    let [isAccount , setIsAccount] = useState(false);
    let [showModal, setShowModel] = useState(false)

    let [manu , setManu] = useState('');

    let pathname = usePathname();

    useEffect(() => {
        function windowScroll(){
            setNavbarSticky( document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50);
        }
        setManu(pathname)
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
        window.scrollTo(0, 0)
        let handler = ()=>setIsCart(false)
        document.addEventListener("mousedown", handler);
        let account = ()=>setIsAccount(false)
        document.addEventListener("mousedown", account);
        let modal = ()=>setShowModel(false)
        document.addEventListener("mousedown", modal);

        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.remove('dark');
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("mousedown", account);
            document.removeEventListener("mousedown", modal);
        };
       
    }, []);
    
    return (    
        <nav id="topnav" className={`${navbarSticky ? "nav-sticky" :" defaultscroll"}`}>
            <div className="container relative">
                <Link className="logo" href="/">
                    <Image src="/images/logo-dark.png" height={24} width={138} className="inline-block dark:hidden" alt="" />
                    <Image src="/images/logo-light.png" height={24} width={138} className="hidden dark:inline-block" alt="" />
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

                <ul className="buy-button list-none space-x-1 mb-0 flex items-center justify-center " style={{height:"74px"}}>
                    <li className="dropdown inline-block relative me-1">
                        <button data-dropdown-toggle="dropdown" className="dropdown-toggle " type="button">
                            <LuSearch className="align-middle text-xl"/>
                        </button>
                        <div className="dropdown-menu absolute overflow-hidden end-0 m-0 mt-4 z-10 w-52 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hidden">
                            <div className="relative">
                                <LuSearch className="text-xl absolute top-[3px] end-3"/>
                                <input type="text" className="form-input h-9 pe-10 sm:w-44 w-36 border-0 focus:ring-0" name="s" id="searchItem" placeholder="Search..." />
                            </div>
                        </div>
                    </li>

                    <li className="dropdown inline-block relative">
                        <button onClick={()=>setIsCart(!isCart)}  data-dropdown-toggle="dropdown" className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white" type="button">
                            <i className="mdi mdi-cart ms-1"></i>
                        </button>
                        {isCart ?
                             <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-60 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ">
                             <ul className="py-3 text-start" aria-labelledby="dropdownDefault">
                                 <li>
                                     <Link href="/" className="flex items-center justify-between py-1.5 px-4">
                                         <span className="flex items-center">
                                             <Image src="/images/shop/items/s1.jpg" width={36} height={45} className="rounded shadow dark:shadow-gray-800 w-9" alt="" />
                                             <span className="ms-3">
                                                 <span className="block font-semibold">T-shirt (M)</span>
                                                 <span className="block text-sm text-slate-400">$320 X 2</span>
                                             </span>
                                         </span>
 
                                         <span className="font-semibold">$640</span>
                                     </Link>
                                 </li>
 
                                 <li>
                                     <Link href="/" className="flex items-center justify-between py-1.5 px-4">
                                         <span className="flex items-center">
                                             <Image src="/images/shop/items/s2.jpg" width={36} height={45} className="rounded shadow dark:shadow-gray-800 w-9" alt="" />
                                             <span className="ms-3">
                                                 <span className="block font-semibold">Bag</span>
                                                 <span className="block text-sm text-slate-400">$50 X 5</span>
                                             </span>
                                         </span>
 
                                         <span className="font-semibold">$250</span>
                                     </Link>
                                 </li>
 
                                 <li>
                                     <Link href="/" className="flex items-center justify-between py-1.5 px-4">
                                         <span className="flex items-center">
                                             <Image src="/images/shop/items/s3.jpg" width={36} height={45} className="rounded shadow dark:shadow-gray-800 w-9" alt="" />
                                             <span className="ms-3">
                                                 <span className="block font-semibold">Watch (Men)</span>
                                                 <span className="block text-sm text-slate-400">$800 X 1</span>
                                             </span>
                                         </span>
 
                                         <span className="font-semibold">$800</span>
                                     </Link>
                                 </li>
 
                                 <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
 
                                 <li className="flex items-center justify-between py-1.5 px-4">
                                     <h6 className="font-semibold mb-0">Total($):</h6>
                                     <h6 className="font-semibold mb-0">$1690</h6>
                                 </li>
 
                                 <li className="py-1.5 px-4 space-x-1">
                                     <Link href="#" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-sm text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white">View Cart</Link>
                                     <Link href="#" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-sm text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white">Checkout</Link>
                                     <p className="text-sm text-slate-400 mt-1">*T&C Apply</p>
                                 </li>
 
                             </ul>
                         </div>    
                    :""}
                       
                    </li>

                    <li className="inline-block ms-1">
                        <Link href="#" onClick={()=>setShowModel(!showModal)}   className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white" data-modal-toggle="ContactUs">
                            <i className="mdi mdi-heart"></i>
                        </Link>
                    </li>
                    {showModal ? <div id="ContactUs"  className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 flex items-center justify-center">
                        <div className="relative w-full h-auto max-w-lg p-4">
                            <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                                <button type="button" className="absolute -top-4 -end-4 text-gray-400 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hover:text-gray-900 rounded-full text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="ContactUs">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                                <div className="p-6 py-10 text-center">

                                    <div className="relative overflow-hidden text-transparent -m-3">
                                        <Icon.Hexagon className="h-32 w-32 fill-red-600/5 mx-auto"></Icon.Hexagon>
                                        <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-red-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                            <BsHeartbreak className="h-9 w-9"/>
                                        </div>
                                    </div>

                                    <h4 className="text-xl font-semibold mt-6">Your wishlist is empty.</h4>
                                    <p className="text-slate-400 my-3">Create your first wishlist request...</p>
                                    <Link href="#" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-sm text-center bg-transparent hover:bg-indigo-600 border border-indigo-600 text-indigo-600 hover:text-white rounded-md mt-2">Create a new wishlist</Link>
                                </div>
                            </div>
                        </div>
                    </div>:""}
                    

                    <li className="dropdown inline-block relative ms-1">
                        <button onClick={()=>setIsAccount(!isAccount)} data-dropdown-toggle="dropdown" className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white" type="button">
                            <i className="mdi mdi-account"></i>
                        </button>
                        {isAccount ? <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ">
                            <ul className="py-2 text-start" aria-labelledby="dropdownDefault">
                                <li>
                                    <Link href="/shop-account" className="flex items-center py-1.5 px-4 hover:text-indigo-600"><AiOutlineUser className="me-2"/> Account</Link>
                                </li>
                                <li>
                                    <Link href="/shop-cart" className="flex items-center py-1.5 px-4 hover:text-indigo-600"><PiNoteDuotone className="align-middle me-1"/> Order History</Link>
                                </li>
                                <li>
                                    <Link href="/shop-checkout" className="flex items-center py-1.5 px-4 hover:text-indigo-600"><BsArrowDownCircle className="align-middle text-sm me-1"/> Download</Link>
                                </li>
                                <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                <li>
                                    <Link href="/auth-login" className="flex items-center py-1.5 px-4 hover:text-indigo-600"><LiaSignOutAltSolid className="align-middle me-2 w-5 h-5"/> Logout</Link>
                                </li>
                            </ul>
                        </div> :""}
                        
                    </li>
                </ul>

                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                    <ul className="navigation-menu">
                        <li className={manu === "/index-shop" || "" ? "active" : ""}><Link href="/index-shop" className="sub-menu-item">Home</Link></li>

                        <li className={manu === "/shop-about" || "" ? "active" : ""}><Link href="/shop-about" className="sub-menu-item">About Us</Link></li>

                        <li className={`${["/shop-grid", "/shop-grid-two","/shop-item-detail", "/shop-cart", "/shop-checkout","/shop-account"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                            <Link href="#">Shop</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className={manu === "/shop-grid" || "" ? "active" : ""}><Link href="/shop-grid" className="sub-menu-item">Product Grid</Link></li>
                                <li className={manu === "/shop-grid-two" || "" ? "active" : ""}><Link href="/shop-grid-two" className="sub-menu-item">Product Grid Two</Link></li>
                                <li className={manu === "/shop-item-detail" || "" ? "active" : ""}><Link href="/shop-item-detail" className="sub-menu-item">Product Detail</Link></li>
                                <li className={manu === "/shop-cart" || "" ? "active" : ""}><Link href="/shop-cart" className="sub-menu-item">Shop Cart</Link></li>
                                <li className={manu === "/shop-checkout" || "" ? "active" : ""}><Link href="/shop-checkout" className="sub-menu-item">Checkout</Link></li>
                                <li className={manu === "/shop-account" || "" ? "active" : ""}><Link href="/shop-account" className="sub-menu-item">My Account</Link></li>
                            </ul>
                        </li>

                        <li className={`${["/auth-login", "/auth-signup","/auth-re-password", "/auth-lock-screen", "/page-comingsoon","/page-maintenance","/page-error","/page-thankyou"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                            <Link href="#">Pages</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className={manu === "/auth-login" || "" ? "active" : ""}><Link href="/auth-login" className="sub-menu-item">Login</Link></li>
                                <li className={manu === "/auth-signup" || "" ? "active" : ""}><Link href="/auth-signup" className="sub-menu-item">Signup</Link></li>
                                <li className={manu === "/auth-re-password" || "" ? "active" : ""}><Link href="/auth-re-password" className="sub-menu-item">Reset Password</Link></li>
                                <li className={manu === "/auth-lock-screen" || "" ? "active" : ""}><Link href="/auth-lock-screen" className="sub-menu-item">Lock Screen</Link></li>
                                <li className={manu === "/page-comingsoon" || "" ? "active" : ""}><Link href="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                                <li className={manu === "/page-maintenance" || "" ? "active" : ""}><Link href="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                                <li className={manu === "/page-error" || "" ? "active" : ""}><Link href="/page-error" className="sub-menu-item">Error</Link></li>
                                <li className={manu === "/page-thankyou" || "" ? "active" : ""}><Link href="/page-thankyou" className="sub-menu-item">Thank you</Link></li>
                            </ul>
                        </li>

                        <li className={`${["/blog", "/blog-sidebar","/blog-detail"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                            <Link href="#">Blog</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className={manu === "/blog" || "" ? "active" : ""}><Link href="/blog" className="sub-menu-item">Blogs</Link></li>
                                <li className={manu === "/blog-sidebar" || "" ? "active" : ""}><Link href="/blog-sidebar" className="sub-menu-item">Blogs & Sidebar</Link></li>
                                <li className={manu === "/blog-detail" || "" ? "active" : ""}><Link href="/blog-detail" className="sub-menu-item">Blog Detail</Link></li>
                            </ul>
                        </li>

                        <li className={manu === "/contact-two" || "" ? "active" : ""}><Link href="/contact-two" className="sub-menu-item">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
