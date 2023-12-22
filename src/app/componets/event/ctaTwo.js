"use client"
import React, { useState,useEffect } from 'react'

export default function CtaTwo(){
    let [days,setDays] = useState();
    let [hours,setHours] = useState();
    let [minutes,setMinutes] = useState();
    let [seconds,setSeconds] = useState();

    let deadline = "December, 31, 2024";
  
    let getTime = () => {
      let time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
    let interval = setInterval(() => getTime(deadline), 1000);
      return () => clearInterval(interval);
      }, []);
    return(
        <section className="relative table w-full py-36  bg-no-repeat bg-bottom bg-cover" style={{backgroundImage:"url('/images/event/bg3.jpg')"}}>
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-fuchsia-600/90"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <div className="pb-8">
                        <h6 className="text-white/50 text-sm font-bold uppercase mb-2">Hurry up & Register</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">Not yet registered? <br /> Hurry up!</h3>
                        <p className="text-white/50 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                    <div id="countdown">
                        <ul className="count-down list-none inline-block text-white text-center mt-8">
                            <li id="days" className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{days} <p className="count-head">Days</p></li>
                            <li id="hours" className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{hours}<p className="count-head">Hours</p></li>
                            <li id="mins" className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{minutes}<p className="count-head">Mins</p></li>
                            <li id="secs" className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{seconds}<p className="count-head">Secs</p></li>
                            <li id="end" className="h1"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}