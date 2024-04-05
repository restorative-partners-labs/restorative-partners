"use client"
import { cn } from "@/lib/utils"
import SlotCounter from "react-slot-counter"
const counterList = [
    {
        id: 1,
        count: "12",
        title: "Years of Experience"
    },
    {
        id: 2,
        count: '182+',
        title: "Projects Completed"
    },
    {
        id: 3,
        count: '425k',
        title: "Square Feet covered"
    },
    {
        id: 4,
        count: '93%',
        title: "Positive Feedbacks"
    },

]
const Counter = ({text_muted, bg_muted}) => {
    return (
        <div className='pt-20'>
            <div className='container'>
                <ul className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-10 '>
                    {
                        counterList.map(({ id, count, title }) => {
                            return (
                                <li key={id} className='flex flex-col'>
                                    <span className={cn(`[font-size:_clamp(48px,9vw,90px)] font-extrabold text-primary-foreground leading-120 overflow-y-hidden overflow-x-auto ${text_muted}`)}>
                                        <SlotCounter startValue={0} value={count} debounceDelay={5000} duration={2} animateOnVisible={{ triggerOnce: true, rootMargin: '0px 0px -100px 0px' }} />
                                    </span>
                                    <span className={cn(`w-[150px] h-[1px] bg-primary 2sm:mt-3.5 2sm:mb-4 mt-1 mb-2 ${bg_muted}`)}></span>
                                    <span className={cn(`2sm:text-2xl text-xl font-bold text-primary-foreground ${text_muted}`)}>{title}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Counter