"use client"
import React, { useEffect, useState } from 'react'

export default function Maintenance(){
    let [minutes, setMinutes] = useState(0);
    let [remainingSeconds, setRemainingSeconds] = useState(0);

    useEffect(() => {

        let intervalId = setInterval(() => {
            calculateTimeRemaining()
        }, 1000);

        var seconds = 3599;
        function calculateTimeRemaining() {

            let minutes = Math.round((seconds - 30) / 60);
            let remainingSeconds = seconds % 60;

            setMinutes(minutes);
            setRemainingSeconds(remainingSeconds);

            if (seconds === 0) {
                clearInterval(intervalId);
            } else {
                seconds = seconds - 1;
            }
        }

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return(
        <div className="grid grid-cols-1 mt-10">
            <div className="text-center">
                <span id="maintenance" className="timer text-white text-[56px] tracking-[1px]">{ minutes }:{ remainingSeconds }</span>
                <span className="block text-base font-semibold uppercase text-white">Minutes</span>
            </div>
        </div>
    )
}