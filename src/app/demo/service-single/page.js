import Image from 'next/image'

import service_img from "@/assets/images/service-paint-image.jpg"
import SectionTitle from '@/components/ui/sectionTitle'
import Title from '@/components/ui/title'
import ServiceSingleSidebar from '@/components/ui/serviceSingleSidebar'
import Feedback from '@/components/section/feedback'

export const metadata = {
  title: "Architronix -- Service Single",
  description: "Architronix is a next js and tailwind css website",
};


const ServiceSingle = () => {
  return (
    <>
      <section>
        <div className='container-fluid '>
          <SectionTitle sectionName={"Services"} sectionTitle={"Color Consultation"} sectionDesc={"Exploring Excellence in Every Meticulous Design Detail"} />
        </div>
        <div className='container lg:pt-30 2sm:pt-20 pt-14'>
          <div className='grid lg:grid-cols-[58%_auto] xl:gap-[120px] gap-15 items-start'>
            <div>
              <Image src={service_img} loading='lazy'      alt='service-img' />
              <div className='pt-12.5'>
                <Title title_text={"Overview"} />
                <p className='text-primary-foreground '>
                  At Architronix, our Color Consultation services are designed to elevate your space through the power of color. Whether you're revamping your home, office, or commercial establishment, our expert color consultants bring a wealth of knowledge and creativity to transform your environment.
                </p>
              </div>
              <div className='pt-12.5'>
                <Title title_text={"What's Included"} />
                <ul>
                  <li>
                    <h5 className='font-bold'>Personalized Color Schemes:</h5>
                    <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Tailored color palettes crafted to complement your style, preferences, and the unique characteristics of your space.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Expert Advice:</h5>
                    <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Consultation with our experienced color specialists who provide insights into the psychological and aesthetic aspects of color selection.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Space Analysis:</h5>
                    <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>In-depth analysis of your space, considering lighting, architecture, and existing elements to ensure cohesive and harmonious color choices.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Material Coordination:</h5>
                    <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Guidance on coordinating colors with existing materials, furniture, and decor elements to achieve a unified and polished look.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Trend Integration:</h5>
                    <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Incorporation of current design trends while ensuring a timeless and enduring appeal.</p>
                  </li>
                </ul>
              </div>
              <div className='pt-12.5'>
                <Title title_text={"How It Works"} />
                <ul>
                  <li>
                    <h5 className='font-bold'>Consultation Request:</h5>
                    <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Reach out to our team and express your interest in a Color Consultation.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Initial Discussion:</h5>
                    <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>A preliminary discussion to understand your goals, preferences, and any specific challenges you're facing with your space.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Personalized Color Plan:</h5>
                    <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Depending on your location and preference, we offer on-site or virtual consultations to assess your space.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Follow-Up Support:</h5>
                    <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Our consultants develop a personalized color plan with detailed recommendations and visual representations.</p>
                  </li>
                </ul>
              </div>
              <strong className='mt-12.5 block'>
                Enhance your surroundings with the transformative impact of carefully chosen colors. Let Architronix bring your vision to life through our expert Color Consultation services.
              </strong>
            </div>
            <ServiceSingleSidebar />
          </div>
        </div>
      </section>
      <Feedback />
    </>
  )
}

export default ServiceSingle