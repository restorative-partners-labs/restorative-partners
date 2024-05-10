import AboutOne from '@/components/section/about/aboutOne'
import BlogSlider from '@/components/section/blogSlider'
import Feedback from '@/components/section/feedback'
import Gallery from '@/components/section/gallery'
import BannerThree from '@/components/section/heroes/bannerThree'
import ProjectsSlider from '@/components/section/projectsSlider'
import ServicesSlider from '@/components/section/servicesSlider'
import ShopSlider from '@/components/section/shopSlider'
import Testimonial from '@/components/section/testimonial'
import VideoPortfolio from '@/components/section/videoPortfolio'
import TeamCardOne from '@/components/ui/cards/teamCardOne'
import Counter from '@/components/ui/counter'
import SectionTitle from '@/components/ui/sectionTitle'
import { blogData } from '@/lib/fackData/blogData'
import { productData } from '@/lib/fackData/productData'
import { teamData } from '@/lib/fackData/teamData'
import { cardSlideAnimation } from '@/lib/utils'

export const metadata = {
  title: "Architronix -- Home-3",
  description: "Architronix is a next js and tailwind css website",
};
const Home3 = () => {
  return (
    <>
      <BannerThree />
      <AboutOne />
      <Counter />
      <Gallery />
      <ServicesSlider />

      {/* --------- start team section */}
      <section className='pt-20'>
        <div className='container-fluid '>
          <SectionTitle
            sectionName={"Team"}
            sectionTitle={"Architects of Architronix"}
            sectionDesc={"Where Imagination Takes Flight, and Excellence Blossoms"}
            button_text={"All Architects"}
            link={"/team"}
          />
        </div>
        <div className='container lg:pt-[340px] 2sm:pt-20 pt-14'>
          <div className='grid lg:grid-cols-3 2sm:grid-cols-2 gap-7'>
            {
              teamData.slice(0, 3).map(({ id, img, name, position, social_link }) => <TeamCardOne key={id} img={img} name={name} position={position} social_link={social_link} prantCalss={"team-card"} cardVariants={cardSlideAnimation()} />)
            }
          </div>
        </div>
      </section>
      {/* --------- start team section */}

      <VideoPortfolio />
      <ProjectsSlider />
      <Testimonial />
      <ShopSlider data={productData.slice(0, 5)} />

      {/* -------- blog slider start */}
      <section className='pt-20'>
        <div className='container-fluid'>
          <SectionTitle
            sectionName={"Blog"}
            sectionTitle={"Design Insights & Inspiration"}
            sectionDesc={"Unveil the Secrets to Transforming Spaces"}
          />
        </div>
        <div className='container lg:pt-30 2sm:pt-20 pt-14'>
          <BlogSlider data={blogData.slice(0, 4)} />
        </div>
      </section>
      {/* -------- blog slider end */}
      
      <Feedback />
    </>
  )
}

export default Home3