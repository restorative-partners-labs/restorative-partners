"use client"
import React from "react"

import { TypeAnimation } from 'react-type-animation';

export default function TextOne(){
    return(
    <h4 className="lg:text-[64px] lg:leading-[1.1] text-[40px] font-bold lg:text-black lg:dark:text-white text-white mb-0">John <br /> S
        <TypeAnimation
            sequence={[
                'tradford!',
                2000,
                'tradford!'
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="typewrite"
        />
    </h4>
    )
}