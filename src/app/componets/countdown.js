'use client'
import React, { useEffect, useState } from 'react'

export default function CountDown(){
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
    <div id="countdown">
        <ul className="count-down list-none inline-block text-white text-center mt-8">
            <li id="days" className="text-[48px] font-bold leading-[110px] h-[130px] w-[130px] rounded-md shadow-md bg-slate-950/40 backdrop-opacity-30 inline-block m-2">{days}<p className='count-head'>Days</p></li>
            <li id="hours" className="text-[48px] font-bold leading-[110px] h-[130px] w-[130px] rounded-md shadow-md bg-slate-950/40 backdrop-opacity-30 inline-block m-2">{hours}<p className='count-head'>Hours</p></li>
            <li id="mins" className="text-[48px] font-bold leading-[110px] h-[130px] w-[130px] rounded-md shadow-md bg-slate-950/40 backdrop-opacity-30 inline-block m-2">{minutes}<p className='count-head'>Mins</p></li>
            <li id="secs" className="text-[48px] font-bold leading-[110px] h-[130px] w-[130px] rounded-md shadow-md bg-slate-950/40 backdrop-opacity-30 inline-block m-2">{seconds}<p className='count-head'>Secs</p></li>
            <li id="end" className="h1"></li>
        </ul>
    </div>
    )
}
