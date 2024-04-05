import AboutOne from '@/components/section/about/aboutOne'
import BlogSlider from '@/components/section/blogSlider'
import Feedback from '@/components/section/feedback'
import Gallery from '@/components/section/gallery'
import BannerOne from '@/components/section/heroes/bannerOne'
import ProjectsSlider from '@/components/section/projectsSlider'
import ServicesSlider from '@/components/section/servicesSlider'
import Testimonial from '@/components/section/testimonial'
import Counter from '@/components/ui/counter'
import VideoPortfolio from '@/components/section/videoPortfolio'
import { blogData } from '@/lib/fackData/blogData'
import { teamData } from '@/lib/fackData/teamData'
import SectionTitle from '@/components/ui/sectionTitle'
import TeamCardOne from '@/components/ui/cards/teamCardOne'
import { cardSlideAnimation } from '@/lib/utils'
import ShopSlider from '@/components/section/shopSlider'
import { productData } from '@/lib/fackData/productData'
import { bannerFourData } from '@/lib/fackData/bannerFourData'

export const metadata = {
  title: "Architronix -- Home-4",
  description: "Architronix is a next js and tailwind css website",
};
const Home4 = () => {
  return (
    <>
      <BannerOne data={bannerFourData} text_muted={"text-muted"} bg_muted={"bg-muted"} border_muted={"border-muted"} />
      <AboutOne text_muted={"text-muted"} bg_muted={"bg-muted"} />
      <Counter text_muted={"text-muted"} bg_muted={"bg-muted"} />
      <Gallery text_muted={"text-muted"} bg_muted={"bg-muted"} />
      <ServicesSlider text_muted={"text-muted"} bg_muted={"bg-muted"} />

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
              teamData.slice(0, 3).map(({ id, img, name, position, social_link }) => <TeamCardOne key={id} img={img} name={name} position={position} social_link={social_link} prantCalss={"team-card"} text_muted={"text-muted"} bg_muted={"bg-muted"} cardVariants={cardSlideAnimation()} />)
            }
          </div>
        </div>
      </section>
      {/* --------- start team section */}

      <VideoPortfolio text_muted={"text-muted"} bg_muted={"bg-muted"} after_bg_muted={"after:bg-muted"} />
      <ProjectsSlider text_muted={"text-muted"} bg_muted={"bg-muted"} />
      <Testimonial text_muted={"text-muted"} bg_muted={"bg-muted"} />
      <ShopSlider data={productData.slice(0, 5)} text_muted={"text-muted"} bg_muted={"bg-muted"} />
      {/* -------- blog slider start */}
      <section className='pt-20'>
        <div className='container-fluid'>
          <SectionTitle
            sectionName={"Blog"}
            sectionTitle={"Design Insights & Inspiration"}
            sectionDesc={"Unveil the Secrets to Transforming Spaces"}
            text_muted={"text-muted"} bg_muted={"bg-muted"}
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

export default Home4