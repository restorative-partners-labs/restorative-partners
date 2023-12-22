"use client"
import React from 'react'

import { TypeAnimation } from 'react-type-animation';

export default function TextAnimation(){
    return(
        <h1
            className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">All-in-one SEO
            <TypeAnimation
                sequence={[
                    ' Plugin',
                    2000,
                    ' Website',
                    2000,
                    ' Toolkit',
                    2000,
                    ' Agency',
                    2000
                ]}
                wrapper="span"
                speed={50}
                className="typewrite"
                repeat={Infinity}
            />
        </h1>
    )
}