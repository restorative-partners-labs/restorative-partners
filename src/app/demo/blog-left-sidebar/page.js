import Feedback from '@/components/section/feedback'
import BlogCard from '@/components/ui/cards/blogCard'
import Pagination from '@/components/ui/pagination'
import SectionTitle from '@/components/ui/sectionTitle'
import SideBar from '@/components/ui/sideBar'
import { blogData } from '@/lib/fackData/blogData'

export const metadata = {
    title: "Architronix -- Blog Left Sidebar",
    description: "Architronix is a next js and tailwind css website",
};

const BlogLeftSidebar = () => {
    return (
        <>
            <section>
                <div className='container-fluid '>
                    <SectionTitle sectionName={"Blog"} sectionTitle={"Design Insights & Inspiration"} sectionDesc={"Unveil the Secrets to Transforming Spaces"} />
                </div>
                <div className='container lg:py-30 2sm:py-20 py-14'>
                    <div className='grid 2xl:grid-cols-[385px_auto] lg:grid-cols-[300px_auto] items-start gap-x-[62px]'>
                        <SideBar order={"order-1 lg:order-0"} />
                        <div className='grid 2sm:grid-cols-2 gap-x-5 gap-y-[75px] order-0 lg:order-1'>
                            {
                                blogData.map(({ id, date, tag, thumb, title }) => {
                                    return (
                                        <BlogCard
                                            key={id}
                                            date={date}
                                            tag={tag}
                                            thumb={thumb}
                                            title={title}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <Pagination />
            </section>
            <Feedback />
        </>
    )
}

export default BlogLeftSidebar