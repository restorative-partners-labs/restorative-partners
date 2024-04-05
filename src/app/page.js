import React from 'react'
import AboutOne from '@/components/section/about/aboutOne'
import Gallery from '@/components/section/gallery'
import BannerOne from '@/components/section/heroes/bannerOne'
import ServicesSlider from '@/components/section/servicesSlider'
import VideoPortfolio from '@/components/section/videoPortfolio'
import ProjectsSlider from '@/components/section/projectsSlider'
import Testimonial from '@/components/section/testimonial'
import ShopSlider from '@/components/section/shopSlider'
import BlogSlider from '@/components/section/blogSlider'
import Feedback from '@/components/section/feedback'
import Counter from '@/components/ui/counter'
import SectionTitle from '@/components/ui/sectionTitle'
import TeamCardOne from '@/components/ui/cards/teamCardOne'

import { productData } from '@/lib/fackData/productData'
import { blogData } from '@/lib/fackData/blogData'
import { teamData } from '@/lib/fackData/teamData'
import { cardSlideAnimation } from '@/lib/utils'
import { bannerOneData } from '@/lib/fackData/bannerOneData'
import HeaderOne from '@/components/header/headerOne'
import Footer from '@/components/footer'

export const metadata = {
  title: "Architronix -- Home-1",
  description: "Architronix is a next js and tailwind css website",
};

const Home1 = () => {
  return (
    <>
      <HeaderOne />
      <BannerOne data={bannerOneData} />
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
      {/* --------- end team section */}

      <VideoPortfolio />
      <ProjectsSlider />
      <Testimonial />
      <ShopSlider data={productData.slice(0, 5)} />

      {/* -------- blog slider start */}
      <section className='pt-20'>
        <div className='container-fluid '>
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
      <Footer />
    </>
  )
}

export default Home1