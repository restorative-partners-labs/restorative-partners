'use client'
import React, { useState,useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import {LuSearch,BiWallet,AiOutlineCopy, AiOutlineUser,LiaSignOutAltSolid} from "../../assets/icons/icons"
import {IoSettingsOutline} from "react-icons/io5"

import { usePathname } from 'next/navigation'

export default function NftNavbar() {
    const [isMenu, setisMenu] = useState(false);
    const [isDropdown, openDropdown] = useState(true);

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
    const metamask = async () => {
        try {
            //Basic Actions Section
            const onboardButton = document.getElementById('connectWallet')

            //   metamask modal
            const modal = document.getElementById('modal-metamask')
            const closeModalBtn = document.getElementById('close-modal')

            //   wallet address
            const myPublicAddress = document.getElementById('myPublicAddress')

            //Created check function to see if the MetaMask extension is installed
            const isMetaMaskInstalled = () => {
                //Have to check the ethereum binding on the window object to see if It is installed
                const { ethereum } = window
                return Boolean(ethereum && ethereum.isMetaMask)
            }

            const onClickConnect = async () => {
                if (!isMetaMaskInstalled()) {
                    //meta mask not installed
                    modal.classList.add('show')
                    modal.style.display = 'block'
                    return
                }
                try {
                    // eslint-disable-next-line no-undef
                    await ethereum.request({ method: 'eth_requestAccounts' })
                    // eslint-disable-next-line no-undef
                    const accounts = await ethereum.request({ method: 'eth_accounts' })
                    myPublicAddress.innerHTML =
                        accounts[0].split('').slice(0, 6).join('') +
                        '...' +
                        accounts[0]
                            .split('')
                            .slice(accounts[0].length - 7, accounts[0].length)
                            .join('')
                } catch (error) {
                    console.error(error)
                }
            }

            const closeModal = () => {
                modal.classList.remove('show')
                modal.style.display = 'none'
            }

            if (isMetaMaskInstalled()) {
                // eslint-disable-next-line no-undef
                const accounts = await ethereum.request({ method: 'eth_accounts' })
                if (!!accounts[0]) {
                    myPublicAddress.innerHTML =
                        accounts[0].split('').slice(0, 6).join('') +
                        '...' +
                        accounts[0]
                            .split('')
                            .slice(accounts[0].length - 7, accounts[0].length)
                            .join('')
                }
            }

            onboardButton.addEventListener('click', onClickConnect)
            closeModalBtn.addEventListener('click', closeModal)
        } catch (error) { }
    }


    return (
        <nav id="topnav" className={`${navbarSticky ? "nav-sticky" :" defaultscroll"}`}>
            <div className="container relative">
                <Link className="logo ps-0" href="/">
                    <Image src="/images/logo-icon-30.png" width={30} height={30} className="inline-block sm:hidden" alt="" />
                    <div className="sm:block hidden">
                        <Image src="/images/logo-dark.png" width={138} height={24} className="inline-block dark:hidden" alt="" />
                        <Image src="/images/logo-light.png" width={138} height={24} className="hidden dark:inline-block" alt="" />
                    </div>
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
                    {/* <!-- <li className="sm:inline-block hidden mb-0"> --> */}
                    <li className="inline-block mb-0">
                        <div className="form-icon relative">
                            <LuSearch className="text-xl absolute top-1/2 -translate-y-1/2 start-3"/>
                            <input type="text" className="form-input sm:w-44 w-28 ps-10 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 bg-white" name="s" id="searchItem" placeholder="Search..." />
                        </div>
                    </li>

                    <li className="inline-block ps-1 mb-0">
                        <Link href="#" id="connectWallet" onClick={metamask}  className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><BiWallet/></Link>
                    </li>

                    <li className="dropdown inline-block relative ps-1">
                        <button onClick={() => openDropdown(!isDropdown)}  data-dropdown-toggle="dropdown" className="dropdown-toggle h-9 w-9  items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white inline-flex" type="button">
                            <Image  src="/images/client/05.jpg" width={34} height={34} className="rounded-full" alt="" />
                        </button>

                        <div className= {`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800  ${isDropdown ? 'hidden' : 'block'}`}>
                       
                            <div className="relative">
                                <div className="py-8 bg-gradient-to-tr from-indigo-600 to-red-600"></div>
                                <div className="absolute px-4 -bottom-7 start-0">
                                    <div className="flex items-end">
                                        <Image src="/images/client/05.jpg" width={34} height={34} className="rounded-full w-10 h-w-10 shadow dark:shadow-gray-700" alt="" />

                                        <span className="font-semibold text-[15px] ms-1">Cristina Murfy</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 px-4">
                                <h5 className="font-semibold text-[15px]">Wallet:</h5>
                                <div className="flex items-center justify-between">
                                    <span className="text-[13px] text-slate-400">qhut0...hfteh45</span>
                                    <Link href="#!" className="text-indigo-600"><AiOutlineCopy/></Link>
                                </div>
                            </div>

                            <div className="mt-4 px-4">
                                <h5 className="text-[15px]">Balance: <span className="text-indigo-600 font-semibold">0.00045ETH</span></h5>
                            </div>

                            <ul className="py-2 text-start">
                                <li>
                                    <Link href="/nft-creator-profile" className="flex items-center text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"><AiOutlineUser className="me-2"/> Profile</Link>
                                </li>
                                <li>
                                    <Link href="/nft-creator-profile-edit" className="flex items-center text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"><IoSettingsOutline className="me-1 w-5"/> Settings</Link>
                                </li>
                                <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                <li>
                                    <Link href="/auth-login" className="flex items-center text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"><LiaSignOutAltSolid className="me-2 h-4 w-4"/> Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                    <ul className="navigation-menu justify-start">
                        <li className={manu === "/index-nft" ? "active" : ""}><Link href="/index-nft" className="sub-menu-item">Home</Link></li>

                        <li className={`${["/nft-explore", "/nft-auction","/nft-collection", "/nft-creators","/nft-creator-profile","/nft-creator-profile-edit","/nft-create-item","/nft-detail"].includes(manu)? "active" : ""} has-submenu parent-parent-menu-item`}>
                            <Link href="#!">NFTs</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className={manu === "/nft-explore" ? "active" : ""}><Link href="/nft-explore" className="sub-menu-item">Explore</Link></li>
                                <li className={manu === "/nft-auction" ? "active" : ""}><Link href="/nft-auction" className="sub-menu-item">Auction</Link></li>
                                <li className={manu === "/nft-collection" ? "active" : ""}><Link href="/nft-collection" className="sub-menu-item">Collections</Link></li>
                                <li className={`${["/nft-creators", "/nft-creator-profile","/nft-creator-profile-edit"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#!"> Creator  </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "/nft-creators" ? "active" : ""}><Link href="/nft-creators" className="sub-menu-item"> Creators</Link></li>
                                        <li className={manu === "/nft-creator-profile" ? "active" : ""}><Link href="/nft-creator-profile" className="sub-menu-item"> Creator Profile </Link></li>
                                        <li className={manu === "/nft-creator-profile-edit" ? "active" : ""}><Link href="/nft-creator-profile-edit" className="sub-menu-item"> Profile Edit </Link></li>
                                    </ul>
                                </li>
                                <li className={manu === "/nft-create-item" ? "active" : ""}><Link href="/nft-create-item" className="sub-menu-item">Create NFT</Link></li>
                                <li className={manu === "/nft-detail" ? "active" : ""}><Link href="/nft-detail" className="sub-menu-item">Single NFT</Link></li>
                            </ul>
                        </li>

                        <li className={manu === "/nft-wallet" ? "active" : ""}><Link href="/nft-wallet" className="sub-menu-item">Wallet</Link></li>

                        <li className={`${["/auth-login", "/auth-signup","/auth-re-password", "/auth-lock-screen","/page-terms","/page-privacy","/page-comingsoon","/page-maintenance","/page-error","/page-thankyou"].includes(manu)? "active" : ""} has-submenu parent-parent-menu-item`}>
                            <Link href="#!">Pages</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className={`${["/auth-login", "/auth-signup","/auth-re-password", "/auth-lock-screen"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#!"> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "/auth-login" ? "active" : ""}><Link href="/auth-login" className="sub-menu-item">Login</Link></li>
                                        <li className={manu === "/auth-signup" ? "active" : ""}><Link href="/auth-signup" className="sub-menu-item">Signup</Link></li>
                                        <li className={manu === "/auth-re-password" ? "active" : ""}><Link href="/auth-re-password" className="sub-menu-item">Reset Password</Link></li>
                                        <li className={manu === "/auth-lock-screen" ? "active" : ""}><Link href="/auth-lock-screen" className="sub-menu-item">Lock Screen</Link></li>
                                    </ul>
                                </li>
                                <li className={`${["/page-terms", "/page-privacy"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#!"> Utility </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "/page-terms" ? "active" : ""}><Link href="/page-terms" className="sub-menu-item">Terms of Services</Link></li>
                                        <li className={manu === "/page-privacy" ? "active" : ""}><Link href="/page-privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                    </ul>
                                </li>
                                <li className={`${["/page-comingsoon", "/page-maintenance","/page-error","/page-thankyou"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#!"> Special</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "/page-comingsoon" ? "active" : ""}><Link href="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                                        <li className={manu === "/page-maintenance" ? "active" : ""}><Link href="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                                        <li className={manu === "/page-error" ? "active" : ""}><Link href="/page-error" className="sub-menu-item">Error</Link></li>
                                        <li className={manu === "/page-thankyou" ? "active" : ""}><Link href="/page-thankyou" className="sub-menu-item">Thank you</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={manu === "/contact-one" ? "active" : ""}><Link href="/contact-one" className="sub-menu-item">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
