import { cn } from '@/lib/utils'
import React from 'react'

const Title = ({ title_text, className}) => {
    return (
        <h3 className={cn(`text-[30px] 2sm:text-4xl font-bold leading-135 text-primary-foreground mb-7.5 ${className}`)}>{title_text}</h3>
    )
}

export default Title