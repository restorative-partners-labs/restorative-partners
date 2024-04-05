import Link from 'next/link'
import RightArrow from '@/assets/icons/rightArrow'

const NextPrevPost = ({ link, title, arrowRotate }) => {
    return (
        <div className='flex justify-between lg:items-center lg:flex-row flex-col gap-5 pt-8 lg:pt-0'>
            <div className='flex items-center gap-[26px]'>
                <Link href={""} className='text-primary-foreground rotate-180'><RightArrow width={"50"} height={"40px"} /></Link>
                <Link href={""} className='text-2xl font-semibold max-w-[427px] leading-160 hover-underline '>
                    <span>Sustainable Living: Eco-Friendly Design Choices for Your Home</span>
                </Link>
            </div>
            <p className='min-h-[77px] h-full w-0.5 bg-primary lg:block hidden'></p>
            <div className='flex items-center gap-[26px] self-end'>
                <Link href={""} className='text-2xl font-semibold max-w-[427px] leading-160 text-right hover-underline'>
                    <span>Sustainable Living: Eco-Friendly Design Choices for Your Home</span>
                </Link>
                <Link href={""} className='text-primary-foreground '><RightArrow width={"50"} height={"40px"} /></Link>
            </div>
        </div>
    )
}

export default NextPrevPost