import React from 'react'
import section_bg from "@/assets/images/section-bg.jpg"
import SectionTitle from '@/components/ui/sectionTitle'
import { servicesData } from '@/lib/fackData/servicesData'
import ServiceCard from '@/components/ui/cards/serviceCard'
import Counter from '@/components/ui/counter'
import AboutThree from '@/components/section/about/aboutThree'
import Expertise from '@/components/section/expertise'
import Faq from '@/components/section/faq'
import Feedback from '@/components/section/feedback'

export const metadata = {
  title: "Architronix -- Services",
  description: "Architronix is a next js and tailwind css website",
};

const Services = () => {
  return (
    <>
      <section className='bg-cover bg-no-repeat bg-center relative z-[1] after:contents-[""] after:z-[-1] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[#d2e0d9a6] pt-20 pb-30' style={{ backgroundImage: `url(${section_bg.src})` }}>
        <div className='container-fluid '>
          <SectionTitle sectionName={"Services"} sectionTitle={"Explore Our Design Offerings"} sectionDesc={"Exploring Excellence in Every Meticulous Design Detail"} />
        </div>
      </section>
      {/* -------- service list */}
      <div className='container-fluid lg:pt-20 2sm:pt-16 pt-10'>
        <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-8 px-4 2sm:px-0'>
          {
            servicesData.map(({ id, service_desc, service_name, link }) => <ServiceCard key={id} id={id} service_desc={service_desc} service_name={service_name} link={link} />)
          }
        </div>
      </div>
      <AboutThree />
      <Counter />
      <Expertise />
      <Faq />
      <Feedback />
    </>
  )
}

export default Services