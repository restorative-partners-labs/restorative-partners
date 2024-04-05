import Image from 'next/image'
import Link from 'next/link'
import SideBar from '@/components/ui/sideBar'
import blog_single_image from "@/assets/images/blog-single-image.jpg"
import blog_inner_img from "@/assets/images/blog-inner-image.jpg"
import QuoteIcon from '@/assets/icons/quoteIcon'
import { blogData } from '@/lib/fackData/blogData'
import Feedback from '@/components/section/feedback'
import BlogSlider from '@/components/section/blogSlider'
import NextPrevPost from '@/components/ui/nextPrevPost'
import ButtonOutline from '@/components/ui/buttons/buttonOutline'
import Comments from '@/components/ui/comments'
import Leavecomment from '@/components/ui/leaveComment'
import SocialMediaList from '@/components/ui/socialMediaList'

export const metadata = {
    title: "Architronix -- Blog Single",
    description: "Architronix is a next js and tailwind css website",
};

const BlogSingle = () => {
    const tagList = [
        {
            id: "1",
            tag: "Art and Decor",
            link: ""
        },
        {
            id: "2",
            tag: "Modern Living",
            link: ""
        },
        {
            id: "3",
            tag: "Renovations",
            link: ""
        },
        {
            id: "4",
            tag: "Vintage Style",
            link: ""
        },

    ]
    return (
        <>
            <section className=''>
                <div className='object-cover bg-no-repeat 2xl:pt-[448px] xl:pt-[300px] lg:pt-[200px] pt-[150px] pb-[68px] relative z-[1] after:contents-[""] after:z-[-1] after:absolute after:left-0 after:bottom-0 after:w-full after:h-full after:bg-bottom-liner' style={{ backgroundImage: `url(${blog_single_image.src})` }}>
                    <div className='container '>
                        <h1 className='text-[#F9FFFC] [font-size:_clamp(48px,6vw,90px)] font-extrabold leading-110'>Maximizing Small Spaces: Tips for Cozy Apartment Living</h1>
                        <p className='mt-14 text-secondary-foreground flex sm:gap-[9px] gap-[1px]'> <span>15 November ‘23</span>  / <span>Interior</span> / <span>5 min read</span> </p>
                    </div>
                </div>
                <div className='container lg:pt-30 2sm:pt-20 pt-14'>
                    <div className='grid 2xl:grid-cols-[auto_427px] lg:grid-cols-[auto_400px] 2xl:gap-[130px] lg:gap-16 items-start'>

                        <div>
                            <div>
                                <p className='text-primary-foreground'>In the fast-paced world of urban living, the allure of compact city apartments iundeniable. The challenge lies in transforming these small spaces into comfortable, stylish havens that cater to both function and aesthetics. With a touch of creativity and a keen eye for design, you can create a cozy, inviting apartment that maximizes every inch of space. Into this blog we'll explore some key tips for making the most of your small apartment, turning it into a to warm and functional home.</p>
                                <h3 className='text-3xl 2sm:text-4xl font-bold text-primary-foreground leading-135 pt-[23px] mb-[14px]'>Embrace Minimalism:</h3>
                                <p className='text-primary-foreground'>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
                            </div>

                            <div>
                                <h3 className='text-3xl 2sm:text-4xl font-bold text-primary-foreground leading-135 pt-[23px] mb-[14px]'>Multi-Functional Furniture:</h3>
                                <Image src={blog_inner_img} loading='lazy'   width={"auto"} height={"auto"} alt='Multi-Functional Furniture' className='pt-9 pb-12.5 w-full h-full' />
                                <p className='text-primary-foreground'>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
                            </div>

                            <div>
                                <h3 className='text-3xl 2sm:text-4xl font-bold text-primary-foreground leading-135 pt-[23px] mb-[14px]'>Vertical Storage Solutions:</h3>
                                <p className='text-primary-foreground'>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
                                <blockquote className='pt-20 pb-16 flex gap-6'>
                                    <span className='text-secondary-foreground'><QuoteIcon width={"121"} /></span>
                                    <div>
                                        Lighting plays a vital role in enhancing the atmosphere of your apartment. Choose ambient and task lighting that complements your decor. Well an placed fixtures not only visually expand your space but also contribute to a warm and cozy ambiance.
                                        <div className='mt-4 relative after:contents-[""] after:absolute after:-left-5 after:top-0 after:h-full  after:w-[1px] after:bg-primary left-5'>
                                            <p className='font-extrabold text-primary-foreground'>John Smith</p>
                                            <span>Smith & Co. Architecture.</span>
                                        </div>
                                    </div>
                                </blockquote>

                                <p className='text-primary-foreground'>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
                                <p className='text-primary-foreground pt-[18px]'>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
                                <p className='text-primary-foreground pt-[18px]'>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
                            </div>

                            <div>
                                <h3 className='text-3xl 2sm:text-4xl font-bold text-primary-foreground leading-135 pt-12.5 mb-[14px]'>Use Light Colors:</h3>
                                <p className='text-primary-foreground '>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
                            </div>

                            <div>
                                <h3 className='text-3xl 2sm:text-4xl font-bold text-primary-foreground leading-135 pt-[54px] mb-[14px]'>Smart Storage Solutions:</h3>
                                <p className='text-primary-foreground '>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
                                <p className='text-primary-foreground pt-[18px]'>In a smaller living space, less is often more. Embrace minimalism by selecting furniture with clean lines, uncluttered surfaces, and a neutral color palette. A minimalist to approach not only creates a sleek and open environment but also instills an sense of calm and tranquility in your apartment.</p>
                            </div>

                            <div className='pt-[54px] flex gap-3 flex-wrap'>
                                {
                                    tagList.map(({ id, link, tag }) => {
                                        return (
                                            <Link href={""} key={id}>
                                                <ButtonOutline className={"font-normal px-2.5 sm:py-[5px] py-[5px] border"}> <span className='text-lg'>{tag}</span> </ButtonOutline>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            <div className='flex gap-7 items-center pt-7.5'>
                                <strong>Share on:</strong>
                                <SocialMediaList />
                            </div>
                            <hr className='mt-[22px] mb-12.5' />
                        </div>
                        {/* ---------- sidebar */}
                        <SideBar />
                    </div>
                    {/* ------ next and prev post */}
                    <NextPrevPost />
                    <hr className='mt-12.5 mb-17.5 max-w-[830px] w-full' />
                    {/* ------- comments */}
                    <Comments />
                    <Leavecomment />
                    {/* ---------- related post */}
                    <div>
                        <h2 className='[font-size:_clamp(33px,5vw,48px)] font-bold leading-120 text-primary-foreground pb-[32px]'>Related Post</h2>
                        <BlogSlider data={blogData.slice(0, 4)} />
                    </div>
                </div>
            </section>
            <Feedback />
        </>
    )
}

export default BlogSingle