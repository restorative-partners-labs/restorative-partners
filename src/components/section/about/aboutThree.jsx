"use client"
import Image from 'next/image'
import SectionTitle from '../../ui/sectionTitle'
import about_bg from "@/assets/images/about-image-2.jpg"
import { useInView } from 'react-intersection-observer'
import SectionSidebarImg from '@/components/ui/sectionSidebarImg'

const aboutList = [
    {
        id: "01",
        item: " Dream Forge",
        item_desc: "We begin in the Dream Forge, where your ideas take shape. It's a place where creativity and innovation converge, and the blueprint of your vision emerges."
    },
    {
        id: "02",
        item: "Design Alchemy",
        item_desc: "Next, we venture into the realm of Design Alchemy. Here, ideas transform into design concepts, and we mix elements and inspiration like skilled alchemists."
    },
    {
        id: "03",
        item: "Reality Craftsmanship",
        item_desc: "Finally, we step into the realm of Reality Craftsmanship. In this workshop, your dream becomes tangible, and our team of artisans and builders craft your space with precision and care."
    },
]
const AboutThree = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0.00,
        triggerOnce: true
    });
    return (
        <section className='pt-20'>
            <div className='container-fluid'>
                <SectionTitle sectionName={"About Us"} sectionTitle={"Our Artistic Journey"} sectionDesc={"Unveiling the Passion, Vision, and Expertise Behind Our Designs"} />
                <div className={`bg-primary 2xl:mt-[220px] lg:mt-25 md:mt-44 mt-[520px] `}>
                    <div className='container'>
                        <div className='flex lg:flex-row flex-col items-center justify-between gap-[66px]'>
                            <div className='2xl:-mt-25 md:mt-4 -mt-[470px]'>
                                <SectionSidebarImg img={about_bg} section_name={"about-bg"}/> 
                            </div>
                            <div className='max-w-[650px] lg:pb-0 pb-10'>
                                <h2 className='text-secondary-foreground lg:text-5xl text-[40px] font-bold leading-120 max-w-[500px]'>Crafting Your Vision: Our Design Process</h2>
                                <ul className='pt-10 '>
                                    {
                                        aboutList.map(({ id, item, item_desc }) => {
                                            return (
                                                <li key={id} className='lg:flex gap-10 pb-10 last:pb-0 justify-between'>
                                                    <svg ref={ref} strokeWidth="1" className={`h-[65px] 2xl:w-20 w-[250px] relative -top-1 left-0 xl:text-6xl text-5xl mb-3 lg:mb-0 inline-block font-extrabold leading-120 ${inView ? "animate-text-line-animation stroke-secondary stroke-dasharray-1000 stroke-dashoffset-1000" : "fill-transparent stroke-secondary"} `}><text x="0%" dominantBaseline="middle" y="70%">{id}</text></svg>
                                                    <div className='max-w-[520px]'>
                                                        <h4 className='text-3xl 2sm:text-4xl font-bold leading-135 text-secondary-foreground pb-1.5'>{item}</h4>
                                                        <p className='text-lg text-secondary-foreground font-normal'>{item_desc}</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutThree