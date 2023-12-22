'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {LuSettings,BsCart3} from '../../assets/icons/icons'
import Image from 'next/image';
import { usePathname } from 'next/navigation'

export default function Navbar(props) {
    let { navClass, navJustify } = props;
    let [isMenu, setisMenu] = useState(false);
    
    let [manu , setManu] = useState('');
    let pathname = usePathname();
    
    useEffect(()=>{
        setManu(pathname)

        function windowScroll() {
            const navbar = document.getElementById("topnav");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                if (navbar !== null) {
                    navbar?.classList.add("nav-sticky");
                }
            } else {
                if (navbar !== null) {
                    navbar?.classList.remove("nav-sticky");
                }
            }
        }
        window.addEventListener("scroll", windowScroll);
        window.scrollTo(0, 0)
        return () => {
            window.removeEventListener('scroll', windowScroll);
        };

    },[setManu])
    

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


    return (
        <nav id="topnav" className={`defaultscroll ${navClass === "nav-light" ? '' : navClass === "nav-sticky" ?
        'bg-white dark:bg-slate-900' : ''}`}>
        <div className="container relative">
            {
                navClass === "nav-light" ?
                    <Link className="logo" href="/index">
                        <span className="inline-block dark:hidden">
                            <Image src='/images/logo-dark.png' className="l-dark" width={138} height={24}  alt="" />
                            <Image src='/images/logo-light.png' className="l-light" width={138} height={24} alt="" />
                        </span>
                        <Image src='/images/logo-light.png' width={138} height={24} className="hidden dark:inline-block" alt="" />
                    </Link>
                    :
                    <Link className="logo" href="/index">
                        <Image src='/images/logo-dark.png' width={138} height={24} className="inline-block dark:hidden" alt="" />
                        <Image src='/images/logo-light.png' width={138} height={24} className="hidden dark:inline-block" alt="" />
                    </Link>
            }

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

            {
                navClass !== 'nav-light' ? <ul className={`buy-button list-none space-x-1 mb-0`} >
                        <li className="inline mb-0">
                            <Link href="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><LuSettings className="h-4 w-4" /></Link>
                        </li>

                        <li className="inline ps-1 mb-0">
                            <Link href="https://1.envato.market/techwind-next" target="_blank" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><BsCart3 className="h-4 w-4" /></Link>
                        </li>
                        
                    </ul>
                    :
                    <ul className="buy-button list-none space-x-1 mb-0">
                    <li className="inline mb-0">
                        <Link href="#">
                            <span className="login-btn-primary"><span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><LuSettings className="h-4 w-4" /></span></span>
                            <span className="login-btn-light"><span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><LuSettings className="h-4 w-4" /></span></span>
                        </Link>
                    </li>
            
                    <li className="inline ps-1 mb-0">
                        <Link href="https://1.envato.market/techwind-next" target="_blank">
                            <div className="login-btn-primary"><span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><BsCart3 className="h-4 w-4" /></span></div>
                            <div className="login-btn-light"><span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><BsCart3 className="h-4 w-4" /></span></div>
                        </Link>
                    </li>
                </ul>
            }
           
            <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                <ul className={`navigation-menu ${navClass} ${navJustify}`}>
                    <li className={manu === "/" || "" ? "active" : ""}><Link href="/" className="sub-menu-item">Home</Link></li>

                    <li className={`${["/index-saas", "/index-classic-saas","/index-modern-saas", "/index-apps","/index-classic-app","/index-ai","/index-smartwatch","/index-marketing","/index-seo","/index-software","/index-payment","/index-charity","/index-it-solution","/index-it-solution-two","/index-digital-agency","/index-restaurent","/index-hosting","/index-nft","/index-hotel","/index-travel","/index-cafe","/index-gym","/index-yoga","/index-spa","/index-job","/index-startup","/index-business","/index-corporate","/index-corporate-two","/index-real-estate","/index-consulting","/index-insurance","/index-construction","/index-law","/index-video","/index-personal","/index-portfolio","/index-photography","/index-studio","/index-coworking","/index-course","/index-event","/index-podcast","/index-hospital","/index-phone-number","/index-forums","/index-shop","/index-crypto","/index-landing-one","/index-landing-two","/index-landing-three","/index-landing-four","/index-service","/index-food-blog","/index-blog","/index-furniture","/index-landing-five"].includes(manu)? "active" : ""} has-submenu parent-parent-menu-item`} >
                        <Link href="#" >Landings</Link><span className="menu-arrow"></span>

                        <ul className="submenu megamenu">
                            <li>
                                <ul>
                                    <li className={manu === "/index-saas" || "" ? "active" : ""}><Link href="/index-saas" className="sub-menu-item">Saas</Link></li>
                                    <li className={manu === "/index-classic-saas" || "" ? "active" : ""}><Link href="/index-classic-saas" className="sub-menu-item">Classic Saas </Link></li>
                                    <li className={manu === "/index-modern-saas" || "" ? "active" : ""}><Link href="/index-modern-saas" className="sub-menu-item">Modern Saas </Link></li>
                                    <li className={manu === "/index-apps" || "" ? "active" : ""}><Link href="/index-apps" className="sub-menu-item">Application</Link></li>
                                    <li className={manu === "/index-classic-app" || "" ? "active" : ""}><Link href="/index-classic-app" className="sub-menu-item">Classic App </Link></li>
                                    <li className={manu === "/index-ai" || "" ? "active" : ""}><Link href="/index-ai" className="sub-menu-item">AI Tools</Link></li>
                                    <li className={manu === "/index-smartwatch" || "" ? "active" : ""}><Link href="/index-smartwatch" className="sub-menu-item">Smartwatch</Link></li>
                                    <li className={manu === "/index-marketing" || "" ? "active" : ""}><Link href="/index-marketing" className="sub-menu-item">Marketing</Link></li>
                                    <li className={manu === "/index-seo" || "" ? "active" : ""}><Link href="/index-seo" className="sub-menu-item">SEO Agency </Link></li>
                                    <li className={manu === "/index-software" || "" ? "active" : ""}><Link href="/index-software" className="sub-menu-item">Software </Link></li>
                                    <li className={manu === "/index-payment" || "" ? "active" : ""}><Link href="/index-payment" className="sub-menu-item">Payments</Link></li>
                                    <li className={manu === "/index-charity" || "" ? "active" : ""}><Link href="/index-charity" className="sub-menu-item">Charity </Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className={manu === "/index-it-solution" || "" ? "active" : ""}><Link href="/index-it-solution" className="sub-menu-item">IT Solution</Link></li>
                                    <li className={manu === "/index-it-solution-two" || "" ? "active" : ""}><Link href="/index-it-solution-two" className="sub-menu-item">It Solution Two </Link></li>
                                    <li className={manu === "/index-digital-agency" || "" ? "active" : ""}><Link href="/index-digital-agency" className="sub-menu-item">Digital Agency</Link></li>
                                    <li className={manu === "/index-restaurent" || "" ? "active" : ""}><Link href="/index-restaurent" className="sub-menu-item">Restaurent</Link></li>
                                    <li className={manu === "/index-hosting" || "" ? "active" : ""}><Link href="/index-hosting" className="sub-menu-item">Hosting</Link></li>
                                    <li className={manu === "/index-nft" || "" ? "active" : ""}><Link href="/index-nft" className="sub-menu-item">NFT Marketplace <span className="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Full</span></Link></li>
                                    <li className={manu === "/index-hotel" || "" ? "active" : ""}><Link href="/index-hotel" className="sub-menu-item">Hotel & Resort</Link></li>
                                    <li className={manu === "/index-travel" || "" ? "active" : ""}><Link href="/index-travel" className="sub-menu-item">Travels</Link></li>
                                    <li className={manu === "/index-cafe" || "" ? "active" : ""}><Link href="/index-cafe" className="sub-menu-item">Cafe <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                    <li className={manu === "/index-gym" || "" ? "active" : ""}><Link href="/index-gym" className="sub-menu-item">Gym <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                    <li className={manu === "/index-yoga" || "" ? "active" : ""}><Link href="/index-yoga" className="sub-menu-item">Yoga </Link></li>
                                    <li className={manu === "/index-spa" || "" ? "active" : ""}><Link href="/index-spa" className="sub-menu-item">Spa & Salon </Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className={manu === "/index-job" || "" ? "active" : ""}><Link href="/index-job" className="sub-menu-item">Job<span className="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Full</span></Link></li>
                                    <li className={manu === "/index-startup" || "" ? "active" : ""}><Link href="/index-startup" className="sub-menu-item">Startup</Link></li>
                                    <li className={manu === "/index-business" || "" ? "active" : ""}><Link href="/index-business" className="sub-menu-item">Business</Link></li>
                                    <li className={manu === "/index-corporate" || "" ? "active" : ""}><Link href="/index-corporate" className="sub-menu-item">Corporate</Link></li>
                                    <li className={manu === "/index-corporate-two" || "" ? "active" : ""}><Link href="/index-corporate-two" className="sub-menu-item">Corporate Two </Link></li>
                                    <li className={manu === "/index-real-estate" || "" ? "active" : ""}><Link href="/index-real-estate" className="sub-menu-item">Real Estate <span className="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Full</span></Link></li>
                                    <li className={manu === "/index-consulting" || "" ? "active" : ""}><Link href="/index-consulting" className="sub-menu-item">Consulting </Link></li>
                                    <li className={manu === "/index-insurance" || "" ? "active" : ""}><Link href="/index-insurance" className="sub-menu-item">Insurance </Link></li>
                                    <li className={manu === "/index-construction" || "" ? "active" : ""}><Link href="/index-construction" className="sub-menu-item">Construction </Link></li>
                                    <li className={manu === "/index-law" || "" ? "active" : ""}><Link href="/index-law" className="sub-menu-item">Law Firm </Link></li>
                                    <li className={manu === "/index-video" || "" ? "active" : ""}><Link href="/index-video" className="sub-menu-item">Video </Link></li>
                                    <li className={manu === "/index-christmas" || "" ? "active" : ""}><Link href="/index-christmas" className="sub-menu-item">Christmas <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New</span></Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className={manu === "/index-personal" || "" ? "active" : ""}><Link href="/index-personal" className="sub-menu-item">Personal</Link></li>
                                    <li className={manu === "/index-portfolio" || "" ? "active" : ""}><Link href="/index-portfolio" className="sub-menu-item">Portfolio <span className="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Full</span></Link></li>
                                    <li className={manu === "/index-photography" || "" ? "active" : ""}><Link href="/index-photography" className="sub-menu-item">Photography <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                    <li className={manu === "/index-studio" || "" ? "active" : ""}><Link href="/index-studio" className="sub-menu-item">Studio</Link></li>
                                    <li className={manu === "/index-coworking" || "" ? "active" : ""}><Link href="/index-coworking" className="sub-menu-item">Co-Woriking</Link></li>
                                    <li className={manu === "/index-classic-business" || "" ? "active" : ""}><Link href="/index-classic-business" className="sub-menu-item">Classic Business <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New</span></Link></li>
                                    <li className={manu === "/index-course" || "" ? "active" : ""}><Link href="/index-course" className="sub-menu-item">Online Courses </Link></li>
                                    <li className={manu === "/index-event" || "" ? "active" : ""}><Link href="/index-event" className="sub-menu-item">Event / Conference </Link></li>
                                    <li className={manu === "/index-podcast" || "" ? "active" : ""}><Link href="/index-podcast" className="sub-menu-item">Podcasts</Link></li>
                                    <li className={manu === "/index-hospital" || "" ? "active" : ""}><Link href="/index-hospital" className="sub-menu-item">Hospital</Link></li>
                                    <li className={manu === "/index-phone-number" || "" ? "active" : ""}><Link href="/index-phone-number" className="sub-menu-item">Phone Number</Link></li>
                                    <li className={manu === "/index-forums" || "" ? "active" : ""}><Link href="/index-forums" className="sub-menu-item">Forums </Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className={manu === "/index-shop" || "" ? "active" : ""}><Link href="/index-shop" className="sub-menu-item">Shop / eCommerce <span className="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Full</span> </Link></li>
                                    <li className={manu === "/index-crypto" || "" ? "active" : ""}><Link href="/index-crypto" className="sub-menu-item">Cryptocurrency  <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></Link></li>
                                    <li className={manu === "/index-landing-one" || "" ? "active" : ""}><Link href="/index-landing-one" className="sub-menu-item">Landing One</Link></li>
                                    <li className={manu === "/index-landing-two" || "" ? "active" : ""}><Link href="/index-landing-two" className="sub-menu-item">Landing Two</Link></li>
                                    <li className={manu === "/index-landing-three" || "" ? "active" : ""}><Link href="/index-landing-three" className="sub-menu-item">Landing Three</Link></li>
                                    <li className={manu === "/index-landing-four" || "" ? "active" : ""}><Link href="/index-landing-four" className="sub-menu-item">Landing Four</Link></li>
                                    <li className={manu === "/index-service" || "" ? "active" : ""}><Link href="/index-service" className="sub-menu-item">Service Provider</Link></li>
                                    <li className={manu === "/index-food-blog" || "" ? "active" : ""}><Link href="/index-food-blog" className="sub-menu-item">Food Blog </Link></li>
                                    <li className={manu === "/index-blog" || "" ? "active" : ""}><Link href="/index-blog" className="sub-menu-item">Blog </Link></li>
                                    <li className={manu === "/index-furniture" || "" ? "active" : ""}><Link href="/index-furniture" className="sub-menu-item">Furniture </Link></li>
                                    <li className={manu === "/index-landing-five" || "" ? "active" : ""}><Link href="/index-landing-five" className="sub-menu-item">Landing Five <span className="bg-green-600 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Onepage</span></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className={`${["/page-aboutus", "/page-services","/page-team", "/page-pricing","/page-testimonial","/user-profile","/user-billing","/user-payment","/user-invoice","/user-notification","/user-setting","/property-listing","/property-detail","/course-listing","/course-detail","/nft-explore","/nft-auction","/nft-collection","/nft-creators","/nft-creator-profile","/nft-creator-profile-edit","/nft-wallet","/nft-create-item","/nft-detail","/food-recipe","/shop-grid","/shop-grid","/shop-grid-two","/shop-item-detail","/shop-cart","/shop-checkout","/food-recipe","/shop-grid","/shop-grid-two","/shop-item-detail","/shop-cart","/shop-checkout","/shop-account","/food-recipe","/shop-grid","/shop-grid-two","/shop-item-detail","/shop-cart","/shop-checkout","/shop-account","/photography-about","/photography-portfolio","/page-job-grid","/page-job-detail","/page-job-apply","/page-job-post","/page-job-career","/page-job-candidates","/page-job-candidate-detail","/page-job-companies","/page-Job-company-detail","/forums-topic","/forums-comments","/helpcenter-overview","/helpcenter-faqs","/helpcenter-guides","/helpcenter-support","/blog","/blog-sidebar","/blog-detail","/blog-standard-post","/blog-slider-post","/blog-gallery-post","/blog-youtube-post","/blog-vimeo-post","/blog-audio-post","/blog-blockquote-post","/blog-left-sidebar-post","/email-confirmation","/email-password-reset","/email-alert","/email-invoice","/auth-login","/auth-signup","/auth-re-password","/auth-lock-screen","/page-terms","/page-privacy","/page-comingsoon","/page-maintenance","/page-error","/page-thankyou","/contact-detail","/contact-one","/contact-two"].includes(manu)? "active" : ""} has-submenu parent-parent-menu-item`}>
                        <Link href="#!">Pages</Link><span className="menu-arrow"></span>
                        <ul className="submenu">
                            <li className={`${["page-aboutus", "page-services","page-team", "page-pricing", "page-testimonial"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#"> Company </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/page-aboutus" || "" ? "active" : ""}><Link href="/page-aboutus" className="sub-menu-item"> About Us</Link></li>
                                    <li className={manu === "/page-services" || "" ? "active" : ""}><Link href="/page-services" className="sub-menu-item">Services</Link></li>
                                    <li className={manu === "/page-team" || "" ? "active" : ""}><Link href="/page-team" className="sub-menu-item"> Team</Link></li>
                                    <li className={manu === "/page-pricing" || "" ? "active" : ""}><Link href="/page-pricing" className="sub-menu-item">Pricing</Link></li>
                                    <li className={manu === "/page-testimonial" || "" ? "active" : ""}><Link href="/page-testimonial" className="sub-menu-item">Testimonial </Link></li>
                                </ul>
                            </li>
                            <li className={`${["/user-profile", "/user-billing","/user-payment", "/user-invoice", "/user-social","/user-notification","/user-setting"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#"> Accounts</Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/user-profile" || "" ? "active" : ""}><Link href="/user-profile" className="sub-menu-item">User Profile</Link></li>
                                    <li className={manu === "/user-billing" || "" ? "active" : ""}><Link href="/user-billing" className="sub-menu-item">Billing</Link></li>
                                    <li className={manu === "/user-payment" || "" ? "active" : ""}><Link href="/user-payment" className="sub-menu-item">Payment</Link></li>
                                    <li className={manu === "/user-invoice" || "" ? "active" : ""}><Link href="/user-invoice" className="sub-menu-item">Invoice</Link></li>
                                    <li className={manu === "/user-social" || "" ? "active" : ""}><Link href="/user-social" className="sub-menu-item">Social</Link></li>
                                    <li className={manu === "/user-notification" || "" ? "active" : ""}><Link href="/user-notification" className="sub-menu-item">Notification</Link></li>
                                    <li className={manu === "/user-setting" || "" ? "active" : ""}><Link href="/user-setting" className="sub-menu-item">Setting</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/property-listing", "/property-detail"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#"> Real Estate</Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/property-listing" || "" ? "active" : ""}><Link href="/property-listing" className="sub-menu-item">Listing</Link></li>
                                    <li className={manu === "/property-detail" || "" ? "active" : ""}><Link href="/property-detail" className="sub-menu-item">Property Detail</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/course-listing", "/course-detail"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#"> Courses </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/course-listing" || "" ? "active" : ""}><Link href="/course-listing" className="sub-menu-item">Course Listing</Link></li>
                                    <li className={manu === "/course-detail" || "" ? "active" : ""}><Link href="/course-detail" className="sub-menu-item">Course Detail</Link></li>
                                </ul>
                            </li>

                            <li className={`${["/nft-explore", "/nft-auction","/nft-collection","/nft-creators","/nft-creator-profile","/nft-creator-profile-edit","/nft-wallet","/nft-create-item","/nft-detail"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#">  NFT Market </Link><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                    <li className={manu === "/nft-explore" || "" ? "active" : ""}><Link href="/nft-explore" className="sub-menu-item">Explore</Link></li>
                                    <li className={manu === "/nft-auction" || "" ? "active" : ""}><Link href="/nft-auction" className="sub-menu-item">Auction</Link></li>
                                    <li  className={manu === "/nft-collection" || "" ? "active" : ""}><Link href="/nft-collection" className="sub-menu-item">Collections</Link></li>
                                    <li className={`${["/nft-creators", "/nft-creator-profile","/nft-creator-profile-edit"].includes(manu)? "active" : ""} has-submenu child-menu-item`}><Link href="#"> Creator  </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li className={manu === "/nft-creators" || "" ? "active" : ""}><Link href="/nft-creators" className="sub-menu-item"> Creators</Link></li>
                                            <li className={manu === "/nft-creator-profile" || "" ? "active" : ""}><Link href="/nft-creator-profile" className="sub-menu-item"> Creator Profile </Link></li>
                                            <li className={manu === "/nft-creator-profile-edit" || "" ? "active" : ""}><Link href="/nft-creator-profile-edit" className="sub-menu-item"> Profile Edit </Link></li>
                                        </ul>
                                    </li>
                                    <li className={manu === "/nft-wallet" || "" ? "active" : ""}><Link href="/nft-wallet" className="sub-menu-item">Wallet</Link></li>
                                    <li className={manu === "/nft-create-item" || "" ? "active" : ""}><Link href="/nft-create-item" className="sub-menu-item">Create NFT</Link></li>
                                    <li className={manu === "/nft-detail" || "" ? "active" : ""}><Link href="/nft-detail" className="sub-menu-item">Single NFT</Link></li>
                                </ul>
                            </li>

                            <li className={manu === "/food-recipe" || "" ? "active" : ""}><Link href="/food-recipe" className="sub-menu-item">Food Recipe </Link></li>
                            <li className={`${["/shop-grid", "/shop-grid-two","/shop-item-detail","/shop-cart","/shop-checkout","/shop-account"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#"> eCommerce </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/shop-grid" || "" ? "active" : ""}><Link href="/shop-grid" className="sub-menu-item">Product Grid</Link></li>
                                    <li className={manu === "/shop-grid-two" || "" ? "active" : ""}><Link href="/shop-grid-two" className="sub-menu-item">Product Grid Two</Link></li>
                                    <li className={manu === "/shop-item-detail" || "" ? "active" : ""}><Link href="/shop-item-detail" className="sub-menu-item">Product Detail</Link></li>
                                    <li className={manu === "/shop-cart" || "" ? "active" : ""}><Link href="/shop-cart" className="sub-menu-item">Shop Cart</Link></li>
                                    <li className={manu === "/shop-checkout" || "" ? "active" : ""}><Link href="/shop-checkout" className="sub-menu-item">Checkout</Link></li>
                                    <li className={manu === "/shop-account" || "" ? "active" : ""}><Link href="/shop-account" className="sub-menu-item">My Account</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/photography-about", "/photography-portfolio"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#"> Photography </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/photography-about" || "" ? "active" : ""}><Link href="/photography-about" className="sub-menu-item">About Us</Link></li>
                                    <li className={manu === "/photography-portfolio" || "" ? "active" : ""}><Link href="/photography-portfolio" className="sub-menu-item">Portfolio</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/page-job-grid", "/page-job-detail","/page-job-apply","/page-job-post","/page-job-career","/page-job-candidates","/page-job-candidate-detail","/page-job-companies","/page-Job-company-detail"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#"> Job / Careers </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/page-job-grid" || "" ? "active" : ""}><Link href="/page-job-grid" className="sub-menu-item">All Jobs</Link></li>
                                    <li className={manu === "/page-job-detail" || "" ? "active" : ""}><Link href="/page-job-detail" className="sub-menu-item">Job Detail</Link></li>
                                    <li className={manu === "/page-job-apply" || "" ? "active" : ""}><Link href="/page-job-apply" className="sub-menu-item">Job Apply</Link></li>
                                    <li className={manu === "/page-job-post" || "" ? "active" : ""}><Link href="/page-job-post" className="sub-menu-item">Job Post </Link></li>
                                    <li className={manu === "/page-job-career" || "" ? "active" : ""}><Link href="/page-job-career" className="sub-menu-item">Job Career </Link></li>
                                    <li className={manu === "/page-job-candidates" || "" ? "active" : ""}><Link href="/page-job-candidates" className="sub-menu-item">Job Candidates</Link></li>
                                    <li className={manu === "/page-job-candidate-detail" || "" ? "active" : ""}><Link href="/page-job-candidate-detail" className="sub-menu-item">Candidate Detail</Link></li>
                                    <li className={manu === "/page-job-companies" || "" ? "active" : ""}><Link href="/page-job-companies" className="sub-menu-item">All Companies</Link></li>
                                    <li className={manu === "/page-Job-company-detail" || "" ? "active" : ""}><Link href="/page-Job-company-detail" className="sub-menu-item">Company Detail</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/forums-topic", "/forums-comments"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#"> Forums </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/forums-topic" || "" ? "active" : ""}><Link href="/forums-topic" className="sub-menu-item">Forum Topic</Link></li>
                                    <li className={manu === "/forums-comments" || "" ? "active" : ""}><Link href="/forums-comments" className="sub-menu-item">Forum Comments</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/helpcenter-overview", "/helpcenter-faqs","/helpcenter-guides","/helpcenter-support"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#"> Helpcenter </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/helpcenter-overview" || "" ? "active" : ""}><Link href="/helpcenter-overview" className="sub-menu-item">Overview</Link></li>
                                    <li className={manu === "/helpcenter-faqs" || "" ? "active" : ""}><Link href="/helpcenter-faqs" className="sub-menu-item">FAQs</Link></li>
                                    <li className={manu === "/helpcenter-guides" || "" ? "active" : ""}><Link href="/helpcenter-guides" className="sub-menu-item">Guides</Link></li>
                                    <li className={manu === "/helpcenter-support" || "" ? "active" : ""}><Link href="/helpcenter-support" className="sub-menu-item">Support</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/blog", "/blog-sidebar","/blog-detail","/helpcenter-support","/blog-standard-post","/blog-slider-post","/blog-gallery-post","/blog-youtube-post","/blog-vimeo-post","/blog-audio-post","/blog-blockquote-post","/blog-left-sidebar-post"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#"> Blog </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/blog" || "" ? "active" : ""}><Link href="/blog" className="sub-menu-item">Blogs</Link></li>
                                    <li className={manu === "/blog-sidebar" || "" ? "active" : ""}><Link href="/blog-sidebar" className="sub-menu-item">Blogs & Sidebar</Link></li>
                                    <li className={manu === "/blog-detail" || "" ? "active" : ""}><Link href="/blog-detail" className="sub-menu-item">Blog Detail</Link></li>
                                    <li className={`${["/blog-standard-post","/blog-slider-post","/blog-gallery-post","/blog-youtube-post","/blog-vimeo-post","/blog-audio-post","/blog-blockquote-post","/blog-left-sidebar-post"].includes(manu)? "active" : ""} has-submenu child-menu-item`}><Link href="#"> Blog Posts </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li className={manu === "/blog-standard-post" || "" ? "active" : ""}><Link href="/blog-standard-post" className="sub-menu-item">Standard Post</Link></li>
                                            <li className={manu === "/blog-slider-post" || "" ? "active" : ""}><Link href="/blog-slider-post" className="sub-menu-item">Slider Post</Link></li>
                                            <li className={manu === "/blog-gallery-post" || "" ? "active" : ""}><Link href="/blog-gallery-post" className="sub-menu-item">Gallery Post</Link></li>
                                            <li className={manu === "/blog-youtube-post" || "" ? "active" : ""}><Link href="/blog-youtube-post" className="sub-menu-item">Youtube Post</Link></li>
                                            <li className={manu === "/blog-vimeo-post" || "" ? "active" : ""}><Link href="/blog-vimeo-post" className="sub-menu-item">Vimeo Post</Link></li>
                                            <li className={manu === "/blog-audio-post" || "" ? "active" : ""}><Link href="/blog-audio-post" className="sub-menu-item">Audio Post</Link></li>
                                            <li className={manu === "/blog-blockquote-post" || "" ? "active" : ""}><Link href="/blog-blockquote-post" className="sub-menu-item">Blockquote</Link></li>
                                            <li className={manu === "/blog-left-sidebar-post" || "" ? "active" : ""}><Link href="/blog-left-sidebar-post" className="sub-menu-item">Left Sidebar</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className={`${["/email-confirmation", "/email-password-reset","/email-alert","/email-invoice"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#"> Email Template</Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/email-confirmation" || "" ? "active" : ""}><Link href="/email-confirmation" className="sub-menu-item">Confirmation</Link></li>
                                    <li className={manu === "/email-password-reset" || "" ? "active" : ""}><Link href="/email-password-reset" className="sub-menu-item">Reset Password</Link></li>
                                    <li className={manu === "/email-alert" || "" ? "active" : ""}><Link href="/email-alert" className="sub-menu-item">Alert</Link></li>
                                    <li className={manu === "/email-invoice" || "" ? "active" : ""}><Link href="/email-invoice" className="sub-menu-item">Invoice</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/auth-login", "/auth-signup","/auth-re-password","/auth-lock-screen"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#"> Auth Pages </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/auth-login" || "" ? "active" : ""}><Link href="/auth-login" className="sub-menu-item">Login</Link></li>
                                    <li className={manu === "/auth-signup" || "" ? "active" : ""}><Link href="/auth-signup" className="sub-menu-item">Signup</Link></li>
                                    <li className={manu === "/auth-re-password" || "" ? "active" : ""}><Link href="/auth-re-password" className="sub-menu-item">Reset Password</Link></li>
                                    <li className={manu === "/auth-lock-screen" || "" ? "active" : ""}><Link href="/auth-lock-screen" className="sub-menu-item">Lock Screen</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/page-terms", "/page-privacy"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#"> Utility </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/page-terms" || "" ? "active" : ""}><Link href="/page-terms" className="sub-menu-item">Terms of Services</Link></li>
                                    <li className={manu === "/page-privacy" || "" ? "active" : ""}><Link href="/page-privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/page-comingsoon", "/page-maintenance","/page-error","/page-thankyou"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#"> Special</Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/page-comingsoon" || "" ? "active" : ""}><Link href="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                                    <li className={manu === "/page-maintenance" || "" ? "active" : ""}><Link href="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                                    <li className={manu === "/page-error" || "" ? "active" : ""}><Link href="/page-error" className="sub-menu-item">Error</Link></li>
                                    <li className={manu === "/page-thankyou" || "" ? "active" : ""}><Link href="/page-thankyou" className="sub-menu-item">Thank you</Link></li>
                                </ul>
                            </li>
                            <li className={`${["/contact-detail", "/contact-one","/contact-two"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#"> Contact </Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li className={manu === "/contact-detail" || "" ? "active" : ""}><Link href="/contact-detail" className="sub-menu-item">Contact Detail</Link></li>
                                    <li className={manu === "/contact-one" || "" ? "active" : ""}><Link href="/contact-one" className="sub-menu-item">Contact One</Link></li>
                                    <li className={manu === "/contact-two" || "" ? "active" : ""}><Link href="/contact-two" className="sub-menu-item">Contact Two</Link></li>
                                </ul>
                            </li>
                            <li className="has-submenu parent-menu-item"><Link href="#!"> Multi Level Menu</Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li><Link href="#!" className="sub-menu-item">Level 1.0</Link></li>
                                    <li className="has-submenu child-menu-item"><Link href="#!"> Level 2.0 </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link href="#!" className="sub-menu-item">Level 2.1</Link></li>
                                            <li><Link href="#!" className="sub-menu-item">Level 2.2</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className={`${["/portfolio-modern-two", "/portfolio-modern-three","/portfolio-modern-four","/portfolio-modern-five","/portfolio-modern-six","/portfolio-classic-two","/portfolio-classic-three","/portfolio-classic-four","/portfolio-classic-five","/portfolio-classic-six","/portfolio-creative-two","/portfolio-creative-three","/portfolio-creative-four","/portfolio-creative-five","/portfolio-creative-six","/portfolio-masonry-two","/portfolio-masonry-three","/portfolio-masonry-four","/portfolio-masonry-five","/portfolio-masonry-six","/portfolio-detail-one","/portfolio-detail-two","/portfolio-detail-three",'/portfolio-detail-four'].includes(manu)? "active" : ""} has-submenu parent-parent-menu-item`} >
                        <Link href="#">Portfolio</Link><span className="menu-arrow"></span>
                        <ul className="submenu megamenu">
                            <li>
                                <ul>
                                    <li className="megamenu-head">Modern Portfolio</li>
                                    <li className={manu === "/portfolio-modern-two" || "" ? "active" : ""}><Link href="/portfolio-modern-two" className="sub-menu-item">Two Column</Link></li>
                                    <li className={manu === "/portfolio-modern-three" || "" ? "active" : ""}><Link href="/portfolio-modern-three" className="sub-menu-item">Three Column</Link></li>
                                    <li className={manu === "/portfolio-modern-four" || "" ? "active" : ""}><Link href="/portfolio-modern-four" className="sub-menu-item">Four Column</Link></li>
                                    <li className={manu === "/portfolio-modern-five" || "" ? "active" : ""}><Link href="/portfolio-modern-five" className="sub-menu-item">Five Column</Link></li>
                                    <li className={manu === "/portfolio-modern-six" || "" ? "active" : ""}><Link href="/portfolio-modern-six" className="sub-menu-item">Six Column</Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className="megamenu-head">Classic Portfolio</li>
                                    <li className={manu === "/portfolio-classic-two" || "" ? "active" : ""}><Link href="/portfolio-classic-two" className="sub-menu-item">Two Column</Link></li>
                                    <li className={manu === "/portfolio-classic-three" || "" ? "active" : ""}><Link href="/portfolio-classic-three" className="sub-menu-item">Three Column</Link></li>
                                    <li className={manu === "/portfolio-classic-four" || "" ? "active" : ""}><Link href="/portfolio-classic-four" className="sub-menu-item">Four Column</Link></li>
                                    <li className={manu === "/portfolio-classic-five" || "" ? "active" : ""}><Link href="/portfolio-classic-five" className="sub-menu-item">Five Column</Link></li>
                                    <li className={manu === "/portfolio-classic-six" || "" ? "active" : ""}><Link href="/portfolio-classic-six" className="sub-menu-item">Six Column</Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className="megamenu-head">Creative Portfolio</li>
                                    <li className={manu === "/portfolio-creative-two" || "" ? "active" : ""}><Link href="/portfolio-creative-two" className="sub-menu-item">Two Column</Link></li>
                                    <li className={manu === "/portfolio-creative-three" || "" ? "active" : ""}><Link href="/portfolio-creative-three" className="sub-menu-item">Three Column</Link></li>
                                    <li className={manu === "/portfolio-creative-four" || "" ? "active" : ""}><Link href="/portfolio-creative-four" className="sub-menu-item">Four Column</Link></li>
                                    <li className={manu === "/portfolio-creative-five" || "" ? "active" : ""}><Link href="/portfolio-creative-five" className="sub-menu-item">Five Column</Link></li>
                                    <li className={manu === "/portfolio-creative-six" || "" ? "active" : ""}><Link href="/portfolio-creative-six" className="sub-menu-item">Six Column</Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className="megamenu-head">Masonry Portfolio</li>
                                    <li className={manu === "/portfolio-masonry-two" || "" ? "active" : ""}><Link href="/portfolio-masonry-two" className="sub-menu-item">Two Column</Link></li>
                                    <li className={manu === "/portfolio-masonry-three" || "" ? "active" : ""}><Link href="/portfolio-masonry-three" className="sub-menu-item">Three Column</Link></li>
                                    <li className={manu === "/portfolio-masonry-four" || "" ? "active" : ""}><Link href="/portfolio-masonry-four" className="sub-menu-item">Four Column</Link></li>
                                    <li className={manu === "/portfolio-masonry-five" || "" ? "active" : ""}><Link href="/portfolio-masonry-five" className="sub-menu-item">Five Column</Link></li>
                                    <li className={manu === "/portfolio-masonry-six" || "" ? "active" : ""}><Link href="/portfolio-masonry-six" className="sub-menu-item">Six Column</Link></li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li className="megamenu-head">Portfolio Detail</li>
                                    <li className={manu === "/portfolio-detail-one" || "" ? "active" : ""}><Link href="/portfolio-detail-one" className="sub-menu-item">Portfolio One</Link></li>
                                    <li className={manu === "/portfolio-detail-two" || "" ? "active" : ""}><Link href="/portfolio-detail-two" className="sub-menu-item">Portfolio Two</Link></li>
                                    <li className={manu === "/portfolio-detail-three" || "" ? "active" : ""}><Link href="/portfolio-detail-three" className="sub-menu-item">Portfolio Three</Link></li>
                                    <li className={manu === "/portfolio-detail-four" || "" ? "active" : ""}><Link href="/portfolio-detail-four" className="sub-menu-item">Portfolio Four</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className={`${["/ui-components", "/documentation","/changelog"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                        <Link href="#">Docs</Link><span className="menu-arrow"></span>
                        <ul className="submenu">
                            <li className={manu === "/ui-components" || "" ? "active" : ""}><Link href="/ui-components" className="sub-menu-item">Components</Link></li>
                            <li className={manu === "/documentation" || "" ? "active" : ""}><Link href="/documentation" className="sub-menu-item">Documentation</Link></li>
                            <li className={manu === "/changelog" || "" ? "active" : ""}><Link href="/changelog" className="sub-menu-item">Changelog</Link></li>
                        </ul>
                    </li>

                    <li className={manu === "/contact-one" || "" ? "active" : ""}><Link href="/contact-one" className="sub-menu-item">Contact</Link></li>
                </ul>
            </div>
        </div >
    </nav >
    )
}
