import { cn } from '@/lib/utils'
import React from 'react'

const ButtonOutline = ({children, className, ...props}) => {
    return (
        <button {...props} className={cn(`flex items-center justify-center gap-2.5 whitespace-nowrap sm:text-2xl text-xl font-bold border-2 border-primary px-10 sm:py-[15px] py-3 relative overflow-hidden after:absolute after:right-0 after:bottom-0 after:top-0 after:z-[-1] after:bg-primary after:w-0 after:transition-all after:duration-500 hover:after:w-full hover:text-secondary-foreground transition-all duration-500 ${className}`)}>
            {children}
        </button>
    )
}

export default ButtonOutline