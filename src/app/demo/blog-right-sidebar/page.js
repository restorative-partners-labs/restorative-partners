import Feedback from '@/components/section/feedback'
import BlogCard from '@/components/ui/cards/blogCard'
import Pagination from '@/components/ui/pagination'
import SectionTitle from '@/components/ui/sectionTitle'
import SideBar from '@/components/ui/sideBar'
import { blogData } from '@/lib/fackData/blogData'

export const metadata = {
    title: "Architronix -- Blog Right Sidebar",
    description: "Architronix is a next js and tailwind css website",
};
const BlogRightSidebar = () => {
    return (
        <>
            <section>
                <div className='container-fluid '>
                    <SectionTitle sectionName={"Blog"} sectionTitle={"Design Insights & Inspiration"} sectionDesc={"Unveil the Secrets to Transforming Spaces"} />
                </div>
                <div className='container lg:py-30 2sm:py-20 py-14'>
                    <div className='grid 2xl:grid-cols-[auto_385px] lg:grid-cols-[auto_300px] items-start gap-x-[62px]'>
                        <div className='grid 2sm:grid-cols-2 gap-x-5 gap-y-[75px]'>
                            {
                                blogData.map(({ id, author, date, desc, tag, thumb, title }) => <BlogCard key={id} date={date} tag={tag} thumb={thumb} title={title} />)
                            }
                        </div>
                        <SideBar />
                    </div>
                </div>
                <Pagination />
            </section>
            <Feedback />
        </>
    )
}

export default BlogRightSidebar