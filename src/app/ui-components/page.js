"use client"
import React,{useState, useEffect} from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { Link as Link2 } from 'react-scroll';

import Switcher from "../componets/switcher";
import Navbar from "../componets/Navbar/navbar"
import Footer from "../componets/Footer/footer"

import * as Icon from 'react-feather';
import {TbPhotoPlus,AiOutlineAndroid, AiOutlinePieChart, AiOutlineExclamationCircle, AiOutlineCheckCircle, AiOutlineInfoCircle, AiOutlineSetting,RiBitCoinLine,MdOutlineCalendarMonth, MdKeyboardArrowRight, MdKeyboardArrowDown, MdKeyboardArrowLeft,VscMention,BsHeartbreak,LiaClipboardCheckSolid,FiLock} from '../assets/icons/icons'

import { accordionData } from '../Data/dataTwo';
export default function UiComponents(){
    const [isOpen, setOpen] = useState(0)
    const [isOpen1, setOpen1] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0);
    const [modal, setModal] = useState(false)

   

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }
    const handleTabClick = (index) => {
        setOpen(index);
    };
    const handleTabClick1 = (index) => {
        setOpen1(index);
    };

    const [manu1, setManu1] = useState(false)
    const [manu2, setManu2] = useState(false)
    const [manu3, setManu3] = useState(false)
    const [manu4, setManu4] = useState(false)
    const [manu5, setManu5] = useState(false)
    const [manu6, setManu6] = useState(false)
    const [manu7, setManu7] = useState(false)
    const [manu8, setManu8] = useState(false)
    const [manu9, setManu9] = useState(false)
    const [manu10, setManu10] = useState(false)
    const [manu11, setManu11] = useState(false)
    const [manu12, setManu12] = useState(false)
    const [manu13, setManu13] = useState(false)
    const [manu14, setManu14] = useState(false)
    const [manu15, setManu15] = useState(false)
    const [manu16, setManu16] = useState(false)
    const [manu17, setManu17] = useState(false)
    const [manu18, setManu18] = useState(false)
    const [manu19, setManu19] = useState(false)
    const [manu20, setManu20] = useState(false)

    useEffect(()=>{
        let handleClick1 = () =>{setManu1(false)}
        let handleClick2 = () =>{setManu2(false)}
        let handleClick3 = () =>{setManu3(false)}
        let handleClick4 = () =>{setManu4(false)}
        let handleClick5 = () =>{setManu5(false)}
        let handleClick6 = () =>{setManu6(false)}
        let handleClick7 = () =>{setManu7(false)}
        let handleClick8 = () =>{setManu8(false)}
        let handleClick9 = () =>{setManu9(false)}
        let handleClick10 = () =>{setManu10(false)}
        let handleClick11 = () =>{setManu11(false)}
        let handleClick12 = () =>{setManu12(false)}
        let handleClick13 = () =>{setManu13(false)}
        let handleClick14 = () =>{setManu14(false)}
        let handleClick15 = () =>{setManu15(false)}
        let handleClick16 = () =>{setManu16(false)}
        let handleClick17 = () =>{setManu17(false)}
        let handleClick18 = () =>{setManu18(false)}
        let handleClick19 = () =>{setManu19(false)}
        let handleClick20 = () =>{setManu20(false)}

        document.addEventListener("mousedown", handleClick1);
        document.addEventListener("mousedown", handleClick2);
        document.addEventListener("mousedown", handleClick3);
        document.addEventListener("mousedown", handleClick4);
        document.addEventListener("mousedown", handleClick5);
        document.addEventListener("mousedown", handleClick6);
        document.addEventListener("mousedown", handleClick7);
        document.addEventListener("mousedown", handleClick8);
        document.addEventListener("mousedown", handleClick9);
        document.addEventListener("mousedown", handleClick10);
        document.addEventListener("mousedown", handleClick11);
        document.addEventListener("mousedown", handleClick12);
        document.addEventListener("mousedown", handleClick13);
        document.addEventListener("mousedown", handleClick14);
        document.addEventListener("mousedown", handleClick15);
        document.addEventListener("mousedown", handleClick16);
        document.addEventListener("mousedown", handleClick17);
        document.addEventListener("mousedown", handleClick18);
        document.addEventListener("mousedown", handleClick19);
        document.addEventListener("mousedown", handleClick20);
    },[])
  
    return(
        <>
       <Navbar/>
        <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="text-3xl leading-normal font-semibold">UI Components</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-flex items-center">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="/">Techwind</Link></li>
                    <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight/></li>
                    <li className="inline-block uppercase text-[13px] font-bold text-indigo-600" aria-current="page">Components</li>
                </ul>
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
                <div className="grid md:grid-cols-12 gap-[30px]">
                    <div className="md:col-span-4">
                        <div className="rounded-md shadow dark:shadow-gray-800 p-6 sticky top-20">
                            <ul className="list-none sidebar-nav mb-0 py-0" id="navmenu-nav">
                                <li className="navbar-item p-0"><Link2 spy={true} activeClass="active" smooth={true} to="buttons" className="text-base font-medium cursor-pointer navbar-link">UI Buttons</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="badges" className="text-base font-medium cursor-pointer navbar-link">UI Badges</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="alerts" className="text-base font-medium cursor-pointer navbar-link">UI Alerts</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="dropdowns" className="text-base font-medium cursor-pointer navbar-link">UI Dropdowns</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="text-colors" className="text-base font-medium cursor-pointer navbar-link">UI Text Colors</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="backgrounds" className="text-base font-medium cursor-pointer navbar-link">UI Background Colors</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="accordions" className="text-base font-medium cursor-pointer navbar-link">UI Accordions Colors</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="nav-tabs" className="text-base font-medium cursor-pointer navbar-link">UI Nav Tabs</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="form-inputs" className="text-base font-medium cursor-pointer navbar-link">UI Form Elements</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="shadows" className="text-base font-medium cursor-pointer navbar-link">UI Shadow</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="borders" className="text-base font-medium cursor-pointer navbar-link">UI Borders</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="breadcrumbs" className="text-base font-medium cursor-pointer navbar-link">UI Breadcrumbs</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="paginations" className="text-base font-medium cursor-pointer navbar-link">UI Paginations</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="modals" className="text-base font-medium cursor-pointer navbar-link">UI Modals</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="tables" className="text-base font-medium cursor-pointer navbar-link">UI Tables</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="headings" className="text-base font-medium cursor-pointer navbar-link">UI Headings</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="font-weights" className="text-base font-medium cursor-pointer navbar-link">UI Font Weights</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} to="icons" className="text-base font-medium cursor-pointer navbar-link">UI Icons</Link2></li>
                            </ul>
                        </div>
                    </div>

                    <div className="md:col-span-8">
                        <div className="grid grid-cols-1 gap-[30px]">
                            <div className="" id="buttons">
                                <h5 className="font-bold text-xl mb-6">Buttons</h5>

                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Default Buttons</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none">
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Indigo</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md">Emerald</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md">Red</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-white rounded-md">Yellow</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md">Blue</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-sky-500 hover:bg-sky-600 border-sky-500 hover:border-sky-600 text-white rounded-md">Sky</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-cyan-500 hover:bg-cyan-600 border-cyan-500 hover:border-cyan-600 text-white rounded-md">Cyan</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">Orange</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700 text-white rounded-md">Purple</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-800 hover:bg-gray-950 border-gray-800 hover:border-gray-950 text-white rounded-md">Dark</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-500 hover:bg-gray-600 border-gray-500 hover:border-gray-600 text-white rounded-md">Secondary</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-50 hover:bg-gray-100 border-gray-50 hover:border-gray-100 text-slate-900 rounded-md">Light</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Rounded Buttons</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none">
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">Indigo</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-full">Emerald</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-full">Red</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-white rounded-full">Yellow</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-full">Blue</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-sky-500 hover:bg-sky-600 border-sky-500 hover:border-sky-600 text-white rounded-full">Sky</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-cyan-500 hover:bg-cyan-600 border-cyan-500 hover:border-cyan-600 text-white rounded-full">Cyan</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full">Orange</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700 text-white rounded-full">Purple</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-800 hover:bg-gray-950 border-gray-800 hover:border-gray-950 text-white rounded-full">Dark</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-500 hover:bg-gray-600 border-gray-500 hover:border-gray-600 text-white rounded-full">Secondary</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-50 hover:bg-gray-100 border-gray-50 hover:border-gray-100 text-slate-900 rounded-full">Light</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Outline Buttons</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none">
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white rounded-md">Indigo</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-emerald-600 border-emerald-600 text-emerald-600 hover:text-white rounded-md">Emerald</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-red-600 border-red-600 text-red-600 hover:text-white rounded-md">Red</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-yellow-500 border-yellow-500 text-yellow-500 hover:text-white rounded-md">Yellow</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-blue-600 border-blue-600 text-blue-600 hover:text-white rounded-md">Blue</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-sky-500 border-sky-500 text-sky-500 hover:text-white rounded-md">Sky</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-cyan-500 border-cyan-500 text-cyan-500 hover:text-white rounded-md">Cyan</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-orange-600 border-orange-600 text-orange-600 hover:text-white rounded-md">Orange</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-purple-600 border-purple-600 text-purple-600 hover:text-white rounded-md">Purple</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-gray-800 border-gray-800 text-gray-800 dark:text-white hover:text-white rounded-md">Dark</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-gray-500 border-gray-500 text-gray-500 hover:text-white rounded-md">Secondary</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-gray-100 border-gray-100 hover:border-gray-100 text-slate-900 dark:text-white dark:hover:text-slate-900 rounded-md">Light</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Outline Rounded Buttons</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none">
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white rounded-full">Indigo</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-emerald-600 border-emerald-600 text-emerald-600 hover:text-white rounded-full">Emerald</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-red-600 border-red-600 text-red-600 hover:text-white rounded-full">Red</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-yellow-500 border-yellow-500 text-yellow-500 hover:text-white rounded-full">Yellow</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-blue-600 border-blue-600 text-blue-600 hover:text-white rounded-full">Blue</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-sky-500 border-sky-500 text-sky-500 hover:text-white rounded-full">Sky</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-cyan-500 border-cyan-500 text-cyan-500 hover:text-white rounded-full">Cyan</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-orange-600 border-orange-600 text-orange-600 hover:text-white rounded-full">Orange</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-purple-600 border-purple-600 text-purple-600 hover:text-white rounded-full">Purple</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-gray-800 border-gray-800 text-gray-800 dark:text-white hover:text-white rounded-full">Dark</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-gray-500 border-gray-500 text-gray-500 hover:text-white rounded-full">Secondary</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-gray-100 border-gray-100 hover:border-gray-100 text-slate-900 dark:text-white dark:hover:text-slate-900 rounded-full">Light</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Soft Buttons</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none">
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Indigo</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md">Emerald</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white rounded-md">Red</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-yellow-500/5 hover:bg-yellow-500 border-yellow-500/10 hover:border-yellow-500 text-yellow-500 hover:text-white rounded-md">Yellow</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-blue-600/5 hover:bg-blue-600 border-blue-600/10 hover:border-blue-600 text-blue-600 hover:text-white rounded-md">Blue</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-sky-500/5 hover:bg-sky-500 border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white rounded-md">Sky</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-cyan-500/5 hover:bg-cyan-500 border-cyan-500/10 hover:border-cyan-500 text-cyan-500 hover:text-white rounded-md">Cyan</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-orange-600/5 hover:bg-orange-600 border-orange-600/10 hover:border-orange-600 text-orange-600 hover:text-white rounded-md">Orange</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-purple-600/5 hover:bg-purple-600 border-purple-600/10 hover:border-purple-600 text-purple-600 hover:text-white rounded-md">Purple</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-800/5 hover:bg-gray-800 border-gray-800/10 hover:border-gray-800 text-gray-800 dark:text-white hover:text-white rounded-md">Dark</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-500/5 hover:bg-gray-500 border-gray-500/10 hover:border-gray-500 text-gray-500 hover:text-white rounded-md">Secondary</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-50/5 hover:bg-gray-100 border-gray-50 dark:border-gray-100/5 hover:border-gray-100 text-slate-900 dark:text-white dark:hover:text-slate-900 rounded-md">Light</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Soft Rounded Buttons</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none">
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full">Indigo</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full">Emerald</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white rounded-full">Red</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-yellow-500/5 hover:bg-yellow-500 border-yellow-500/10 hover:border-yellow-500 text-yellow-500 hover:text-white rounded-full">Yellow</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-blue-600/5 hover:bg-blue-600 border-blue-600/10 hover:border-blue-600 text-blue-600 hover:text-white rounded-full">Blue</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-sky-500/5 hover:bg-sky-500 border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white rounded-full">Sky</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-cyan-500/5 hover:bg-cyan-500 border-cyan-500/10 hover:border-cyan-500 text-cyan-500 hover:text-white rounded-full">Cyan</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-orange-600/5 hover:bg-orange-600 border-orange-600/10 hover:border-orange-600 text-orange-600 hover:text-white rounded-full">Orange</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-purple-600/5 hover:bg-purple-600 border-purple-600/10 hover:border-purple-600 text-purple-600 hover:text-white rounded-full">Purple</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-800/5 hover:bg-gray-800 border-gray-800/10 hover:border-gray-800 text-gray-800 dark:text-white hover:text-white rounded-full">Dark</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-500/5 hover:bg-gray-500 border-gray-500/10 hover:border-gray-500 text-gray-500 hover:text-white rounded-full">Secondary</Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-50/5 hover:bg-gray-100 border-gray-50 dark:border-gray-100/5 hover:border-gray-100 text-slate-900 dark:text-white dark:hover:text-slate-900 rounded-full">Light</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Button Size</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none">
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Small</Link>
                                                </li>
                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Default</Link>
                                                </li>
                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="py-2.5 px-8 inline-block font-semibold tracking-wide border align-middle duration-500 text-lg text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Large</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Button Icons</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none">
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><Icon.ShoppingCart className="h-4 w-4"/></Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><Icon.ShoppingCart className="h-4 w-4"/></Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white"><Icon.ShoppingCart className="h-4 w-4"/></Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white"><Icon.ShoppingCart className="h-4 w-4"/></Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white"><Icon.ShoppingCart className="h-4 w-4"/></Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white"><Icon.ShoppingCart className="h-4 w-4"/></Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><Icon.ShoppingCart className="h-4 w-4"/></Link>
                                                </li>
                                                
                                                <li className="inline-block m-0.5">
                                                    <Link href="" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><Icon.ShoppingCart className="h-4 w-4"/></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="" id="badges">
                                <h5 className="font-bold text-xl mb-6">Badges</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Default Badges</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none space-x-1">
                                                <li className="inline-block">
                                                    <span className="bg-indigo-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Indigo</span>
                                                </li>
                                                
                                                <li className="inline-block ">
                                                    <span className="bg-emerald-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Emerald</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-red-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Red</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-yellow-500 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Yellow</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-blue-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Blue</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-sky-500 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Sky</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-cyan-500 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Cyan</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-orange-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Orange</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-purple-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Purple</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-gray-800 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Dark</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-gray-500 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Secondary</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-gray-50 text-slate-900 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Light</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Rounded Badges</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none space-x-1">
                                                <li className="inline-block">
                                                    <span className="bg-indigo-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Indigo</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-emerald-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Emerald</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-red-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Red</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-yellow-500 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Yellow</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-blue-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Blue</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-sky-500 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Sky</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-cyan-500 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Cyan</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-orange-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Orange</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-purple-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Purple</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-gray-800 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Dark</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-gray-500 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Secondary</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-gray-50 text-slate-900 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Light</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Outline Badges</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none space-x-1">
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-indigo-600 text-indigo-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Indigo</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-emerald-600 text-emerald-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Emerald</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-red-600 text-red-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Red</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-yellow-500 text-yellow-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Yellow</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-blue-600 text-blue-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Blue</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-sky-500 text-sky-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Sky</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-cyan-500 text-cyan-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Cyan</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-orange-600 text-orange-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Orange</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-purple-600 text-purple-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Purple</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-gray-800 text-gray-800 dark:text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Dark</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-gray-500 text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Secondary</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-gray-50 text-gray-50 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Light</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Outline Rounded Badges</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none space-x-1">
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-indigo-600 text-indigo-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Indigo</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-emerald-600 text-emerald-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Emerald</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-red-600 text-red-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Red</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-yellow-500 text-yellow-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Yellow</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-blue-600 text-blue-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Blue</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-sky-500 text-sky-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Sky</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-cyan-500 text-cyan-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Cyan</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-orange-600 text-orange-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Orange</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-purple-600 text-purple-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Purple</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-gray-800 text-gray-800 dark:text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Dark</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-gray-500 text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Secondary</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-transparent border border-gray-50 text-gray-50 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Light</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Soft Badges</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none space-x-1">
                                                <li className="inline-block">
                                                    <span className="bg-indigo-600/5 border border-indigo-600/5 text-indigo-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Indigo</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-emerald-600/5 border border-emerald-600/5 text-emerald-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Emerald</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-red-600/5 border border-red-600/5 text-red-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Red</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-yellow-500/5 border border-yellow-500/5 text-yellow-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Yellow</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-blue-600/5 border border-blue-600/5 text-blue-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Blue</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-sky-500/5 border border-sky-500/5 text-sky-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Sky</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-cyan-500/5 border border-cyan-500/5 text-cyan-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Cyan</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-orange-600/5 border border-orange-600/5 text-orange-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Orange</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-purple-600/5 border border-purple-600/5 text-purple-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Purple</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-gray-800/5 border border-gray-800/5 text-gray-800 dark:text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Dark</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-gray-500/5 border border-gray-500/5 text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Secondary</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-gray-50/5 border border-gray-50/5 text-gray-900 dark:text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Light</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Soft Rounded Badges</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none space-x-1">
                                                <li className="inline-block">
                                                    <span className="bg-indigo-600/5 border border-indigo-600/5 text-indigo-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Indigo</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-emerald-600/5 border border-emerald-600/5 text-emerald-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Emerald</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-red-600/5 border border-red-600/5 text-red-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Red</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-yellow-500/5 border border-yellow-500/5 text-yellow-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Yellow</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-blue-600/5 border border-blue-600/5 text-blue-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Blue</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-sky-500/5 border border-sky-500/5 text-sky-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Sky</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-cyan-500/5 border border-cyan-500/5 text-cyan-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Cyan</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-orange-600/5 border border-orange-600/5 text-orange-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Orange</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-purple-600/5 border border-purple-600/5 text-purple-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Purple</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-gray-800/5 border border-gray-800/5 text-gray-800 dark:text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Dark</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-gray-500/5 border border-gray-500/5 text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Secondary</span>
                                                </li>
                                                
                                                <li className="inline-block">
                                                    <span className="bg-gray-50/5 border border-gray-50/5 text-gray-900 dark:text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5">Light</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="" id="alerts">
                                <h5 className="font-bold text-xl mb-6">Alerts</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Alerts</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <div className="space-y-3">
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-indigo-600 border border-indigo-600 text-white block">A simple alert—check it out!</div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-emerald-600 border border-emerald-600 text-white block">A simple alert—check it out!</div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-yellow-500 border border-yellow-500 text-white block">A simple alert—check it out!</div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-red-600 border border-red-600 text-white block">A simple alert—check it out!</div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-sky-500 border border-sky-500 text-white block">A simple alert—check it out!</div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-slate-900 border border-slate-900 text-white block">A simple alert—check it out!</div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-gray-400 border border-gray-400 text-white block">A simple alert—check it out!</div>
                                            </div>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Soft Alerts</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <div className="space-y-3">
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-indigo-600/10 border border-indigo-600/10 text-indigo-600 block">A simple alert—check it out!</div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-emerald-600/10 border border-emerald-600/10 text-emerald-600 block">A simple alert—check it out!</div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-yellow-500/10 border border-yellow-500/10 text-yellow-500 block">A simple alert—check it out!</div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-red-600/10 border border-red-600/10 text-red-600 block">A simple alert—check it out!</div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-sky-500/10 border border-sky-500/10 text-sky-500 block">A simple alert—check it out!</div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-slate-900/10 border border-slate-900/10 text-slate-900 dark:text-white block">A simple alert—check it out!</div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-gray-400/10 border border-gray-400/10 text-gray-400 block">A simple alert—check it out!</div>
                                            </div>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Alert with icon</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <div className="space-y-3">
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-indigo-600/10 border border-indigo-600/10 text-indigo-600 flex items-center"><AiOutlineExclamationCircle className="me-1"/>A simple alert—check it out!</div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-emerald-600/10 border border-emerald-600/10 text-emerald-600 flex items-center"><AiOutlineCheckCircle className="me-1"/> A simple alert—check it out!</div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-yellow-500/10 border border-yellow-500/10 text-yellow-500 flex items-center"><AiOutlineExclamationCircle className="me-1"/> A simple alert—check it out!</div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-red-600/10 border border-red-600/10 text-red-600 flex items-center"><AiOutlineExclamationCircle className="me-1"/> A simple alert—check it out!</div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-sky-500/10 border border-sky-500/10 text-sky-500 flex items-center"><AiOutlineInfoCircle className="me-1"/> A simple alert—check it out!</div>
                                            </div>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Alert with Link</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <div className="space-y-3">
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-indigo-600/10 border border-indigo-600/10 text-indigo-600 block">A simple alert—check it out! <Link href="" className="font-bold ms-1">Click here!</Link></div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-emerald-600/10 border border-emerald-600/10 text-emerald-600 block">A simple alert—check it out! <Link href="" className="font-bold ms-1">Click here!</Link></div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-yellow-500/10 border border-yellow-500/10 text-yellow-500 block">A simple alert—check it out! <Link href="" className="font-bold ms-1">Click here!</Link></div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-red-600/10 border border-red-600/10 text-red-600 block">A simple alert—check it out! <Link href="" className="font-bold ms-1">Click here!</Link></div>
                                                <div className="relative px-4 py-2 rounded-md font-medium bg-sky-500/10 border border-sky-500/10 text-sky-500 block">A simple alert—check it out! <Link href="" className="font-bold ms-1">Click here!</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="" id="dropdowns">
                                <h5 className="font-bold text-xl mb-6">Dropdowns</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Dropdowns</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none">
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu1(!manu1)} className="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md" type="button">
                                                        Indigo <MdKeyboardArrowDown className="text-[20px] align-middle inline-block"/>
                                                    </button>
                                                   
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu1 ? 'block' : 'hidden'}`} >
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-indigo-600">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-indigo-600">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-indigo-600">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-indigo-600">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu2(!manu2)} className="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md" type="button">
                                                        Emerald <MdKeyboardArrowDown className="text-[20px] align-middle inline-block"/>
                                                    </button>
                                                    
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu2 ? 'block' : 'hidden'}`} >
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-emerald-600">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-emerald-600">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-emerald-600">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-emerald-600">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu3(!manu3)} className="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-white rounded-md" type="button">
                                                        Yellow <MdKeyboardArrowDown className="text-[20px] align-middle inline-block"/>
                                                    </button>
                                                
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu3 ? 'block' : 'hidden'}`} >
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-yellow-500">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-yellow-500">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-yellow-500">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-yellow-500">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu4(!manu4)} className="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md" type="button">
                                                        Red <MdKeyboardArrowDown className="text-[20px] align-middle inline-block"/>
                                                    </button>
                                                    
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu4 ? 'block' : 'hidden'}`} >
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-red-600">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-red-600">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-red-600">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-red-600">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu5(!manu5)} className="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-sky-500 hover:bg-sky-600 border-sky-500 hover:border-sky-600 text-white rounded-md" type="button">
                                                        Sky <MdKeyboardArrowDown className="text-[20px] align-middle inline-block"/>
                                                    </button>
                                                 
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu5 ? 'block' : 'hidden'}`}>
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-sky-500">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-sky-500">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-sky-500">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-sky-500">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu6(!manu6)} className="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-cyan-500 hover:bg-cyan-600 border-cyan-500 hover:border-cyan-600 text-white rounded-md" type="button">
                                                        Cyan <MdKeyboardArrowDown className="text-[20px] align-middle inline-block"/>
                                                    </button>
                                                    
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu6 ? 'block' : 'hidden'}`}>
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu7(!manu7)} className="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md" type="button">
                                                        Blue <MdKeyboardArrowDown className="text-[20px] align-middle inline-block"/>
                                                    </button>
                                                   
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu7 ? 'block' : 'hidden'}`}>
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-blue-600">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-blue-600">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-blue-600">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-blue-600">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu8(!manu8)} className="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md" type="button">
                                                        Orange <MdKeyboardArrowDown className="text-[20px] align-middle inline-block"/>
                                                    </button>
                                                 
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu8 ? 'block' : 'hidden'}`}>
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-orange-600">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-orange-600">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-orange-600">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-orange-600">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu9(!manu9)} className="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700 text-white rounded-md" type="button">
                                                        Purple <MdKeyboardArrowDown className="text-[20px] align-middle inline-block"/>
                                                    </button>
                                                  
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu9 ? 'block' : 'hidden'}`}>
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-purple-600">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-purple-600">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-purple-600">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-purple-600">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu10(!manu10)} className="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-800 hover:bg-gray-950 border-gray-800 hover:border-gray-950 text-white rounded-md" type="button">
                                                        Dark <MdKeyboardArrowDown className="text-[20px] align-middle inline-block"/>
                                                    </button>
                                               
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu10 ? 'block' : 'hidden'}`}>
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-gray-800 dark:hover:text-white">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-gray-800 dark:hover:text-white">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-gray-800 dark:hover:text-white">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-gray-800 dark:hover:text-white">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Icon Dropdowns</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none">
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu11(!manu11)} className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md" type="button">
                                                        <AiOutlineSetting/>
                                                    </button>
                                                    
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu11 ? 'block' : 'hidden'}`}>
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-indigo-600">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-indigo-600">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-indigo-600">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-indigo-600">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu12(!manu12)} className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md" type="button">
                                                        <AiOutlineSetting/>
                                                    </button>
                                               
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu12 ? 'block' : 'hidden'}`}>
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-emerald-600">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-emerald-600">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-emerald-600">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-emerald-600">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu13(!manu13)} className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-white rounded-md" type="button">
                                                        <AiOutlineSetting/>
                                                    </button>
                                                   
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu13 ? 'block' : 'hidden'}`}>
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-yellow-500">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-yellow-500">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-yellow-500">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-yellow-500">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu14(!manu14)} className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md" type="button">
                                                        <AiOutlineSetting/>
                                                    </button>
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu14 ? 'block' : 'hidden'}`}>
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-red-600">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-red-600">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-red-600">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-red-600">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu15(!manu15)} className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-sky-500 hover:bg-sky-600 border-sky-500 hover:border-sky-600 text-white rounded-md" type="button">
                                                        <AiOutlineSetting/>
                                                    </button>
                                                
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu15 ? 'block' : 'hidden'}`}>
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-sky-500">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-sky-500">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-sky-500">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-sky-500">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu16(!manu16)} className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-cyan-500 hover:bg-cyan-600 border-cyan-500 hover:border-cyan-600 text-white rounded-md" type="button">
                                                        <AiOutlineSetting/>
                                                    </button>
                                               
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu16 ? 'block' : 'hidden'}`}>
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu17(!manu17)} className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md" type="button">
                                                        <AiOutlineSetting/>
                                                    </button>
                                                    
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu17 ? 'block' : 'hidden'}`}>
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-blue-600">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-blue-600">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-blue-600">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-blue-600">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu18(!manu18)} className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md" type="button">
                                                        <AiOutlineSetting/>
                                                    </button>
                                                   
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu18 ? 'block' : 'hidden'}`}>
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-orange-600">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-orange-600">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-orange-600">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-orange-600">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu19(!manu19)} className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700 text-white rounded-md" type="button">
                                                        <AiOutlineSetting/>
                                                    </button>
                                                   
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu19 ? 'block' : 'hidden'}`}>
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-purple-600">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-purple-600">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-purple-600">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-purple-600">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                
                                                <li className="dropdown inline-block relative m-0.5">
                                                    <button onClick={() => setManu20(!manu20)} className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-gray-800 hover:bg-gray-950 border-gray-800 hover:border-gray-950 text-white rounded-md" type="button">
                                                        <AiOutlineSetting/>
                                                    </button>
                                              
                                                    <div className={`dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ${manu20 ? 'block' : 'hidden'}`}>
                                                        <ul className="py-2 text-start">
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-gray-800 dark:hover:text-white">Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-gray-800 dark:hover:text-white">Service</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-gray-800 dark:hover:text-white">About us</Link>
                                                            </li>
                                                            <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                            <li>
                                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-gray-800 dark:hover:text-white">Contact</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="" id="text-colors">
                                <h5 className="font-bold text-xl mb-6">Text Colors</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Text Colors</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none">
                                                <li>
                                                    <span className="text-indigo-600 font-semibold">.text-indigo-600</span>
                                                </li>
                                                <li>
                                                    <span className="text-emerald-600 font-semibold">.text-emerald-600</span>
                                                </li>
                                                <li>
                                                    <span className="text-red-600 font-semibold">.text-red-600</span>
                                                </li>
                                                <li>
                                                    <span className="text-yellow-500 font-semibold">.text-yellow-500</span>
                                                </li>
                                                <li>
                                                    <span className="text-amber-500 font-semibold">.text-amber-500</span>
                                                </li>
                                                <li>
                                                    <span className="text-blue-600 font-semibold">.text-blue-600</span>
                                                </li>
                                                <li>
                                                    <span className="text-sky-500 font-semibold">.text-sky-500</span>
                                                </li>
                                                <li>
                                                    <span className="text-cyan-500 font-semibold">.text-cyan-500</span>
                                                </li>
                                                <li>
                                                    <span className="text-orange-600 font-semibold">.text-orange-600</span>
                                                </li>
                                                <li>
                                                    <span className="text-purple-600 font-semibold">.text-purple-600</span>
                                                </li>
                                                <li>
                                                    <span className="text-slate-900 font-semibold">.text-slate-900</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="" id="backgrounds">
                                <h5 className="font-bold text-xl mb-6">Background Colors</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Background Colors</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none">
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-indigo-600">.bg-indigo-600</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-emerald-600">.bg-emerald-600</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-red-600">.bg-red-600</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-yellow-500">.bg-yellow-500</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-blue-600">.bg-blue-600</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-sky-500">.bg-sky-500</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-cyan-500">.bg-cyan-500</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-orange-600">.bg-orange-600</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-purple-600">.bg-purple-600</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-slate-800">.bg-slate-800</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-slate-900">.bg-slate-900</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-slate-900 bg-gray-50">.bg-gray-50</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-slate-900 bg-white">.bg-white</li>
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Opacity</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none">
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 bg-indigo-600">.bg-indigo-600</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 bg-indigo-600/95">.bg-indigo-600 .opacity-95</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 bg-indigo-600/90">.bg-indigo-600 .opacity-90</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 bg-indigo-600/80">.bg-indigo-600 .opacity-80</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 bg-indigo-600/75">.bg-indigo-600 .opacity-75</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 bg-indigo-600/70">.bg-indigo-600 .opacity-70</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 bg-indigo-600/60">.bg-indigo-600 .opacity-60</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 bg-indigo-600/50">.bg-indigo-600 .opacity-50</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 bg-indigo-600/40">.bg-indigo-600 .opacity-40</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 bg-indigo-600/30">.bg-indigo-600 .opacity-30</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 bg-indigo-600/25">.bg-indigo-600 .opacity-25</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 bg-indigo-600/20">.bg-indigo-600 .opacity-20</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 bg-indigo-600/10">.bg-indigo-600 .opacity-10</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 bg-indigo-600/5">.bg-indigo-600 .opacity-5</li>
                                                <li className="inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 bg-indigo-600/0">.bg-indigo-600 .opacity-0</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="" id="accordions">
                                <h5 className="font-bold text-xl mb-6">Accordions</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Accordion</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <div id="accordion-collapseone" data-accordion="collapse">
                                                {accordionData.slice(0,4).map((item, index) => (
                                                    <div key={index} className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                                            <button type="button" onClick={() => toggleAccordion(index)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                                <span>{item.title}</span>
                                                                <svg data-accordion-icon className={`${activeIndex === index ? "rotate-180" : "rotate-270" } w-4 h-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                                </svg>
                                                            </button>
                                                        </h2>
                                                        {activeIndex === index && (
                                                            <div>
                                                                <div className="p-5">
                                                                    <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>

                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="" id="nav-tabs">
                                <h5 className="font-bold text-xl mb-6">Nav Tabs</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Horizontal Nav Tabs</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                                <li role="presentation" className="inline-block">
                                                    <button className={`${ isOpen === 0 ? 'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-md w-full hover:text-indigo-600 duration-500`} onClick={() => handleTabClick(0)}>Tab One</button>
                                                </li>
                                                <li role="presentation" className="inline-block">
                                                    <button className={`${ isOpen === 1 ? 'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-md w-full hover:text-indigo-600 duration-500`} onClick={() => handleTabClick(1)} >Tab Two</button>
                                                </li>
                                            </ul>
                                            <div id="StarterContent" className="mt-6">
                                            { isOpen === 0 ? 
                                                <div className="" id="tab-one" role="tabpanel" aria-labelledby="tab-one-tab">
                                                    <p className="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum vero quae officiis earum odio, consequatur perferendis sapiente quo illum ipsam illo harum maiores minima dolor adipisci recusandae labore? Harum.</p>
                                                </div> : ''
                                                
                                            }
                                            {isOpen === 1 ?
                                                <div  id="tab-two" role="tabpanel" aria-labelledby="tab-two-tab">
                                                    <p className="text-slate-400">1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum vero quae officiis earum odio, consequatur perferendis sapiente quo illum ipsam illo harum maiores minima dolor adipisci recusandae labore? Harum.</p>
                                                </div> :''
                                            }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Vertical Nav Tabs</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                                <div className="lg:col-span-4 md:col-span-5">
                                                    <ul className="flex-column text-center space-y-2">
                                                        <li role="presentation">
                                                            <button className={`${ isOpen1 === 0 ? 'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-md w-full hover:text-indigo-600 duration-500`} onClick={() => handleTabClick1(0)}>Tab One</button>
                                                        </li>
                                                        <li role="presentation">
                                                            <button className={`${ isOpen1 === 1 ? 'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-1 text-sm font-semibold rounded-md w-full hover:text-indigo-600 duration-500`} onClick={() => handleTabClick1(1)}>Tab Two</button>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="lg:col-span-8 md:col-span-7">
                                                    <div id="myTabContent">
                                                        {isOpen1 === 0 ? 
                                                        <div >
                                                            <p className="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum vero quae officiis earum odio, consequatur perferendis sapiente quo illum ipsam illo harum maiores minima dolor adipisci recusandae labore? Harum.</p>
                                                        </div> :''
                                                        }
                                                        {isOpen1 === 1 ? 
                                                        <div>
                                                            <p className="text-slate-400">1  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum vero quae officiis earum odio, consequatur perferendis sapiente quo illum ipsam illo harum maiores minima dolor adipisci recusandae labore? Harum.</p>
                                                        </div>:''
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="" id="form-inputs">
                                <h5 className="font-bold text-xl mb-6">Form Inputs</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Form Inputs</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <form>
                                                <div className="grid grid-cols-1 gap-5">
                                                    <div className="">
                                                        <label className="form-label font-semibold">First Name:</label>
                                                        <input type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="First Name:" id="firstname" name="name" required=""/>
                                                    </div>
                
                                                    <div className="">
                                                        <label className="form-label font-semibold">Username:</label>
                                                        <div className="relative mt-2">
                                                            <span className="absolute top-0.5 start-0.5 w-9 h-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="basic-addon1"><VscMention/></span>
                                                            <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Username" required/>
                                                        </div>
                                                    </div>
                
                                                    <div className="">
                                                        <label className="form-label font-semibold">Your Email:</label>
                                                        <input type="email" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Email" name="email" required=""/>
                                                    </div>
                
                                                    <div className="">
                                                        <label className="font-semibold">Select Input:</label>
                                                        <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                                            <option value="USA">USA</option>
                                                            <option value="CAD">Canada</option>
                                                            <option value="CHINA">China</option>
                                                        </select>
                                                    </div>

                                                    <div className="">
                                                        <label className="form-label font-semibold">Number:</label>
                                                        <input type="number" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Zip:" id="zipcode" name="number" required=""/>
                                                    </div>

                                                    <div className="">
                                                        <h6 className="font-semibold">Form Checkbox</h6>

                                                        <div className="flex items-center w-full mb-0">
                                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" defaultChecked value="" id="sameaddress"/>
                                                            <label className="form-check-label text-slate-400" htmlFor="sameaddress">Checkbox 1</label>
                                                        </div>
                
                                                        <div className="flex items-center w-full mb-0">
                                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="savenexttime"/>
                                                            <label className="form-check-label text-slate-400" htmlFor="savenexttime">Checkbox 2</label>
                                                        </div>
                
                                                        <div className="flex items-center w-full mb-0">
                                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" disabled value="" id="checkbox-d"/>
                                                            <label className="form-check-label text-slate-400" htmlFor="checkbox-d">Disabled Checkbox</label>
                                                        </div>
                                                    </div>

                                                    <div className="">
                                                        <h6 className="font-semibold">Form Radio</h6>

                                                        <div className="block">
                                                            <div>
                                                                <label className="inline-flex items-center">
                                                                    <input type="radio" className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" defaultChecked name="radio-colors" value="1"/>
                                                                    <span className="text-slate-400">Radio 1</span>
                                                                </label>
                                                            </div>
                                                        </div>
                
                                                        <div className="block mt-2">
                                                            <div>
                                                                <label className="inline-flex items-center">
                                                                    <input type="radio" className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" name="radio-colors" value="1"/>
                                                                    <span className="text-slate-400">Radio 2</span>
                                                                </label>
                                                            </div>
                                                        </div>
                
                                                        <div className="block mt-2">
                                                            <div>
                                                                <label className="inline-flex items-center">
                                                                    <input type="radio" className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" disabled name="radio-colors" value="1"/>
                                                                    <span className="text-slate-400">Disabled Radio</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="" id="shadows">
                                <h5 className="font-bold text-xl mb-6">Shadows</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Shadows</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none space-y-6">
                                                <li className="shadow dark:shadow-gray-800 py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.shadow</li>
                                                <li className="shadow-sm dark:shadow-gray-800 py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.shadow-sm</li>
                                                <li className="shadow-md dark:shadow-gray-800 py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.shadow-md</li>
                                                <li className="shadow-lg dark:shadow-gray-800 py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.shadow-lg</li>
                                                <li className="shadow-xl dark:shadow-gray-800 py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.shadow-xl</li>
                                                <li className="shadow-2xl dark:shadow-gray-800 py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.shadow-2xl</li>
                                                <li className="shadow-none dark:shadow-gray-800 py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.shadow-none</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="" id="borders">
                                <h5 className="font-bold text-xl mb-6">Borders</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Borders</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none space-x-4 space-y-4">
                                                <li className="inline-block border-0 dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.border-0</li>
                                                <li className="inline-block border-2 dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.border-2</li>
                                                <li className="inline-block border-4 dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.border-4</li>
                                                <li className="inline-block border-8 dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.border-8</li>
                                                <li className="inline-block border dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.border</li>
                                                <li className="inline-block border-t dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.border-t</li>
                                                <li className="inline-block border-s dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.border-s</li>
                                                <li className="inline-block border-b dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.border-b</li>
                                                <li className="inline-block border-e dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.border-e</li>
                                                <li className="inline-block border-x dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.border-x</li>
                                                <li className="inline-block border-y dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.border-y</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Border Styles</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none space-x-4 space-y-4">
                                                <li className="inline-block border-solid border-2 dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.border-solid</li>
                                                <li className="inline-block border-dashed border-2 dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.border-dashed</li>
                                                <li className="inline-block border-dotted border-2 dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.border-dotted</li>
                                                <li className="inline-block border-double border-4 dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.border-double</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Border Radious</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none space-x-4 space-y-4">
                                                <li className="inline-block rounded-none shadow dark:shadow-gray-800 py-6 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.rounded-none</li>
                                                <li className="inline-block rounded-sm shadow dark:shadow-gray-800 py-6 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.rounded-sm</li>
                                                <li className="inline-block rounded shadow dark:shadow-gray-800 py-6 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.rounded</li>
                                                <li className="inline-block rounded-md shadow dark:shadow-gray-800 py-6 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.rounded-md</li>
                                                <li className="inline-block rounded-lg shadow dark:shadow-gray-800 py-6 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.rounded-lg</li>
                                                <li className="inline-block rounded-xl shadow dark:shadow-gray-800 py-6 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.rounded-xl</li>
                                                <li className="inline-block rounded-2xl shadow dark:shadow-gray-800 py-6 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.rounded-2xl</li>
                                                <li className="inline-block rounded-3xl shadow dark:shadow-gray-800 py-6 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.rounded-3xl</li>
                                                <li className="inline-block rounded-full shadow dark:shadow-gray-800 py-6 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400">.rounded-full</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="" id="breadcrumbs">
                                <h5 className="font-bold text-xl mb-6">Breadcrumb</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Breadcrumb</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="tracking-[0.5px] mb-0 inline-flex items-center">
                                                <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="index.html">Techwind</Link></li>
                                                <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight/></li>
                                                <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="">Components</Link></li>
                                                <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight/></li>
                                                <li className="inline-block uppercase text-[13px] font-bold text-indigo-600" aria-current="page">Typography</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="" id="paginations">
                                <h5 className="font-bold text-xl mb-6">Pagination</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Pagination</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <nav aria-label="Page navigation example">
                                                <ul className="inline-flex items-center -space-x-px">
                                                    <li>
                                                        <Link href="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                                            <MdKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">1</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">2</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" aria-current="page" className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600">3</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">4</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">5</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                                            <MdKeyboardArrowRight className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="" id="modals">
                                <h5 className="font-bold text-xl mb-6">Modals</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Modals</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md" onClick={() => setModal(!modal)}>
                                                Modal
                                            </Link>

                                          
                                            <div className={`bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 flex items-center justify-center ${modal ? '' : 'hidden'}`}>
                                                <div className="relative w-full h-auto max-w-lg p-4">
                                                    <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                                                        <button type="button" onClick={() => setModal(!modal)} className="absolute -top-4 -end-4 text-gray-400 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hover:text-gray-900 rounded-full text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" >
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                                        </button>
                                                        <div className="p-6 py-10 text-center">

                                                            <div className="relative overflow-hidden text-transparent -m-3">
                                                                <Icon.Hexagon  className="h-32 w-32 fill-red-600/5 mx-auto"></Icon.Hexagon>
                                                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-red-600 rounded-xl duration-500 text-4xl flex align-middle justify-center items-center">
                                                                    <BsHeartbreak/>
                                                                </div>
                                                            </div>
                                                    
                                                            <h4 className="text-xl font-semibold mt-6">Your wishlist is empty.</h4>
                                                            <p className="text-slate-400 my-3">Create your first wishlist request...</p>

                                                            <Link href="" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-transparent hover:bg-indigo-600 border border-indigo-600 text-indigo-600 hover:text-white rounded-md mt-2">Create a new wishlist</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                      
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="" id="tables">
                                <h5 className="font-bold text-xl mb-6">Tables</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Tables</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                                <table className="w-full text-start">
                                                    <thead>
                                                        <tr>
                                                            <th className="px-4 py-5 text-start">Lessons</th>
                                                            <th className="px-4 py-5 text-end">Time</th>
                                                        </tr>
                                                    </thead>
                    
                                                    <tbody>
                                                        <tr className="border-t border-gray-100 dark:border-gray-700">
                                                            <td className="p-4"><Link href="" className="flex items-center"><LiaClipboardCheckSolid className='me-1'/> Lesson 1</Link></td>
                                                            <td className="p-4 text-end"><span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Watch Free</span></td>
                                                        </tr>
                    
                                                        <tr className="border-t border-gray-100 dark:border-gray-700">
                                                            <td className="p-4"><Link href="" className="flex items-center"><LiaClipboardCheckSolid className='me-1'/> Lesson 2</Link></td>
                                                            <td className="p-4 flex justify-end"><FiLock/></td>
                                                        </tr>
                    
                                                        <tr className="border-t border-gray-100 dark:border-gray-700">
                                                            <td className="p-4"><Link href="" className="flex items-center"><LiaClipboardCheckSolid className='me-1'/> Lesson 3</Link></td>
                                                            <td className="p-4 flex justify-end"><FiLock/></td>
                                                        </tr>
                    
                                                        <tr className="border-t border-gray-100 dark:border-gray-700">
                                                            <td className="p-4"><Link href="" className="flex items-center"><LiaClipboardCheckSolid className='me-1'/> Lesson 4</Link></td>
                                                            <td className="p-4 flex justify-end"><FiLock/></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="" id="headings">
                                <h5 className="font-bold text-xl mb-6">Heading</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Heading</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <ul className="list-none">
                                                <li><span className="text-xs font-semibold text-slate-400">Hello</span> (.text-xs)</li>
                                                <li className="mt-2"><span className="text-sm font-semibold text-slate-400">Hello</span> (.text-sm)</li>
                                                <li className="mt-2"><span className="text-base font-semibold text-slate-400">Hello</span> (.text-base)</li>
                                                <li className="mt-2"><span className="text-lg font-semibold text-slate-400">Hello</span> (.text-lg)</li>
                                                <li className="mt-2"><span className="text-xl font-semibold text-slate-400">Hello</span> (.text-xl)</li>
                                                <li className="mt-2"><span className="text-2xl font-semibold text-slate-400">Hello</span> (.text-2xl)</li>
                                                <li className="mt-2"><span className="text-3xl font-semibold text-slate-400">Hello</span> (.text-3xl)</li>
                                                <li className="mt-2"><span className="text-4xl font-semibold text-slate-400">Hello</span> (.text-4xl)</li>
                                                <li className="mt-2"><span className="text-5xl font-semibold text-slate-400">Hello</span> (.text-5xl)</li>
                                                <li className="mt-2"><span className="text-6xl font-semibold text-slate-400">Hello</span> (.text-6xl)</li>
                                                <li className="mt-2"><span className="text-7xl font-semibold text-slate-400">Hello</span> (.text-7xl)</li>
                                                <li className="mt-2"><span className="text-8xl font-semibold text-slate-400">Hello</span> (.text-8xl)</li>
                                                <li className="mt-2"><span className="text-9xl font-semibold text-slate-400">Hello</span> (.text-9xl)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="" id="font-weights">
                                <h5 className="font-bold text-xl mb-6">Font Weight</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Font Weight</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <p className="text-lg text-red-600">.font-thin <span className="font-thin text-slate-400">: The quick brown fox jumps over the lazy dog.</span></p>
                                            <p className="text-lg text-red-600 mt-2">.font-extralight <span className="font-extralight text-slate-400">: The quick brown fox jumps over the lazy dog.</span></p>
                                            <p className="text-lg text-red-600 mt-2">.font-light <span className="font-light text-slate-400">: The quick brown fox jumps over the lazy dog.</span></p>
                                            <p className="text-lg text-red-600 mt-2">.font-normal <span className="font-normal text-slate-400">: The quick brown fox jumps over the lazy dog.</span></p>
                                            <p className="text-lg text-red-600 mt-2">.font-medium <span className="font-medium text-slate-400">: The quick brown fox jumps over the lazy dog.</span></p>
                                            <p className="text-lg text-red-600 mt-2">.font-semibold <span className="font-semibold text-slate-400">: The quick brown fox jumps over the lazy dog.</span></p>
                                            <p className="text-lg text-red-600 mt-2">.font-bold <span className="font-bold text-slate-400">: The quick brown fox jumps over the lazy dog.</span></p>
                                            <p className="text-lg text-red-600 mt-2">.font-extrabold <span className="font-extrabold text-slate-400">: The quick brown fox jumps over the lazy dog.</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="" id="icons">
                                <h5 className="font-bold text-xl mb-6">Icons</h5>
                                
                                <div className="grid grid-cols-1 gap-[30px]">
                                    <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                        <div className="p-5">
                                            <h5 className="text-lg font-semibold">Icons</h5>
                                        </div>
                                        <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                                            <h6 className="text-lg font-medium">Feather Icons</h6>
                                            <p className="text-slate-400">There are 280+ feather icons and you can get all icons info from here: <Link href="https://feathericons.com/" target="_blank"><code className="text-indigo-600">https://feathericons.com/</code></Link></p>
                                            <h6 className="text-slate-400 mb-4 pb-2">Ex. <code className="text-red-600">&lt;i data-feather=&quot;mail&quot; className=&quot;h-8 w-8&quot;&gt; &lt;/i&gt;</code></h6>

                                            <ul className="list-none">
                                                <li className="inline-block"><Icon.User className="h-8 w-8 me-2"/></li>
                                                <li className="inline-block"><Icon.Facebook className="h-8 w-8 me-2"/></li>
                                                <li className="inline-block"><Icon.MapPin className="h-8 w-8 me-2"/></li>
                                                <li className="inline-block"><Icon.Linkedin className="h-8 w-8 me-2"/></li>
                                                <li className="inline-block"><Icon.Camera className="h-8 w-8 me-2"/></li>
                                                <li className="inline-block"><Icon.Mail className="h-8 w-8 me-2"/></li>
                                            </ul>

                                            <h6 className="mt-6 text-lg font-medium">Material Design Icons</h6>
                                            <p className="text-slate-400">There are 4400+ Material Design icons and you can get all icons info from here: <Link href="https://materialdesignicons.com/" target="_blank"><code className="text-indigo-600">https://materialdesignicons.com/</code></Link></p>
                                            <h6 className="text-slate-400 mb-4 pb-2">Ex. <code className="text-red-600">&lt;i className=&quot;mdi mdi-home&quot;&gt; &lt;/i&gt;</code></h6>

                                            <i className="mdi mdi-home text-lg me-2"></i>
                                            <i className="mdi mdi-facebook text-lg me-2"></i>
                                            <i className="mdi mdi-chevron-tight text-lg me-2"></i>
                                            <i className="mdi mdi-camera-image text-lg me-2"></i>
                                            <i className="mdi mdi-car-light-high text-lg me-2"></i>
                                            <i className="mdi mdi-silverware-fork-knife text-lg me-2"></i>

                                            <h6 className="mt-6 text-lg font-medium">React Icons</h6>
                                            <p className="text-slate-400">There are 2200+ React Icons and you can get all icons info from here: <Link href="https://react-icons.github.io/react-icons/search" target="_blank"><code className="text-indigo-600">https://react-icons.github.io/react-icons/search</code></Link></p>
                                            <h6 className="text-slate-400 mb-4 pb-2">Ex. <code className="text-red-600"><br/>&lt;FaBeer className=&quot;h-7 w-7&quot;/&gt;</code></h6>
                                            <span className="text-lg text-indigo-600 me-2"><TbPhotoPlus className="inline"/></span>
                                            <span className="text-lg text-indigo-600 me-2 "><AiOutlineAndroid className="inline"/></span>
                                            <span className="text-lg text-indigo-600 me-2"><RiBitCoinLine className="inline"/></span>
                                            <span className="text-lg text-indigo-600 me-2"><MdOutlineCalendarMonth className="inline"/></span>
                                            <span className="text-lg text-indigo-600"><AiOutlinePieChart className="inline"/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
       <Footer/>
       <Switcher/>
        </>
    )
}