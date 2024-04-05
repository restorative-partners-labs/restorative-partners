import { cn } from '@/lib/utils'
import React from 'react'

const TextAreaFiled = ({placeholder, className, ...props}) => {
    return (
        <textarea {...props} placeholder={placeholder} required className={cn(`px-[15px] py-[14px] outline-none border-[2px] border-primary w-full bg-transparent ${className} `)} />
    )
}

export default TextAreaFiled