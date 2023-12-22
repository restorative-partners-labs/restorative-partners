import React from "react"

import Navbar from "../componets/Navbar/navbar";
import Switcher from "../componets/switcher";
import Footer from "../componets/Footer/footer";
import AvailableProject from "../componets/availaleProject";
import PortfolioDetailFilter from "../componets/portfolioDetailFilter";

export default function PortfolioDetailTwo(){
    return(
        <>
         <Navbar navClass="nav-light" />
            <section className="relative table w-full py-32 lg:py-48 bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/portfolio/bg-inner.jpg')"}}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="mb-3 text-3xl leading-normal font-medium text-white">New Trends in SEO</h3>

                        <ul className="list-none space-x-1">
                            <li className="inline font-semibold text-white/60 me-2"> <span className="text-white">Client :</span> Calvin Carlo</li>
                            <li className="inline font-semibold text-white/60"> <span className="text-white">Date :</span> 23th May, 2022</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0">
                            <PortfolioDetailFilter shuffle={4} columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}/>
                        </div></div>
                </div>
                <div className="container relative md:mt-24 mt-16">
                    <div className="flex mx-auto justify-center">
                        <div className="lg:w-2/3 md:w-full">
                            <div className="text-center">
                                <h4 className="text-3xl leading-normal font-semibold mb-6">Project Description</h4>
                                <p className="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.</p>
                                <p className="text-slate-400 mt-2">Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <AvailableProject/>
            </section>   
        <Footer/>
        <Switcher/>
        </>
    )
}