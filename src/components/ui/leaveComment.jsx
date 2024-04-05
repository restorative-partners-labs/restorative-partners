import React from 'react'
import TextAreaFiled from './textAreaFiled'
import InputFiled from './inputFiled'
import ButtonFill from './buttons/buttonFill'
import RightArrow from '@/assets/icons/rightArrow'

const LeaveComment = () => {
    return (
        <div className='grid 2xl:grid-cols-[auto_25%] lg:grid-cols-[auto_32%] 2xl:gap-[143px] lg:gap-16 pb-20'>
            <div>
                <h2 className='[font-size:_clamp(33px,5vw,48px)] font-bold text-primary-foreground pb-7.5'>Leave a comment</h2>
                <form>
                    <TextAreaFiled placeholder={"Write your comment"} className={"min-h-[225px] mb-7.5"} />
                    <div className='flex sm:flex-row flex-col gap-4'>
                        <InputFiled placeholderc={"Your name*"} type={"text"} />
                        <InputFiled placeholderc={"Your Email*"} type={"email"} />
                    </div>
                    <div className='mt-7.5 flex justify-end'>
                        <ButtonFill>Submit <RightArrow width={"35"} height={"22"}/> </ButtonFill>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LeaveComment