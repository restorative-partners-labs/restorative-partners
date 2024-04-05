import { cn } from '@/lib/utils'
import React from 'react'

const ButtonFill = ({ children, className, ...props }) => {
    return (
        <button {...props} className={cn(`flex items-center justify-center gap-2.5 whitespace-nowrap sm:text-2xl text-xl font-bold border-2 border-primary px-10 sm:py-[15px] py-3 relative z-10 overflow-hidden after:absolute after:right-0 after:top-0 after:bottom-0 after:z-[-1] after:bg-primary after:w-full after:transition-all after:duration-500 hover:after:w-0 text-secondary-foreground hover:text-primary-foreground transition-all duration-500 ${className}`)}>
            {children}
        </button>
    )
}

export default ButtonFill