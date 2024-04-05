import { cn } from '@/lib/utils'

const InputFiled = ({placeholderc, type, className, ...props }) => {
    return (
        <input {...props} type={type} placeholder={placeholderc} name={type} required className={cn(`px-[15px] py-[14px] outline-none border-[2px] border-primary w-full bg-transparent ${className} `)} />
    )
}

export default InputFiled