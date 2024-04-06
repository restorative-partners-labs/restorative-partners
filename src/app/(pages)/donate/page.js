import Image from 'next/image'
import bg_banner from "@/assets/images/project-hero-image.jpg"
import project_img_1 from "@/assets/images/project-image-1.jpg"
import project_img_2 from "@/assets/images/project-image-2.jpg"
import RightArrow from '@/assets/icons/rightArrow'
import ProjectSingleSliderOne from '@/components/section/projectSingle/projectSingleSliderOne'
import Paragraph from '@/components/section/projectSingle/paragraph'
import ProjectSingleSliderTwo from '@/components/section/projectSingle/projectSingleSliderTwo'
import TeamTwo from '@/components/section/team/teamTwo'
import Feedback from '@/components/section/feedback'
import ButtonOutline from '@/components/ui/buttons/buttonOutline'
import Title from '@/components/ui/title'

export const metadata = {
    title: "Architronix -- Project Single",
    description: "Architronix is a next js and tailwind css website",
};

const ProjectSingle = () => {
    return (
        <>
            <section className='blog-single'>
                <div>
                    <Image src={bg_banner} loading='lazy'      alt="img" />
                    <div className='container 2sm:mt-[156px] sm:mt-30 mt-20'>
                        <div className='grid lg:grid-cols-[65%_auto] gap-[38px]'>
                            <div className='relative after:absolute sm:after:-left-12.5 after:-left-5 after:top-1/2 after:-translate-y-1/2 after:w-[1px] sm:after:h-[130%] after:h-[120%] after:bg-primary sm:ml-12.5 ml-5'>
                                <h1 className='text-primary-foreground [font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110'>A dream villa</h1>
                                <span className='inline-block w-[300px] h-[1px] bg-primary'></span>
                                <p className='text-2xl sm:text-3xl 2sm:text-4xl !leading-160 text-primary-foreground mt-[18px]'>The design of this apartment facing Ipanema beach, in Rio de Janeiro, was designed for a couple with two young children, who wanted a space to accompany their daughters' growth and also environments with privacy for home office work.</p>
                            </div>
                            <div className=' bg-primary py-15 sm:px-[38px] px-5 lg:-mt-[410px]'>
                                <Title title_text={"Elegant Urban Oasis"} className={"text-secondary-foreground mb-0"} />
                                <ul className='pb-7.5 pt-[75px] flex lg:flex-col flex-row flex-wrap lg:flex-nowrap gap-x-7 lg:gap-x-0 gap-y-[52px]'>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Clients:</strong>
                                        <span className='text-secondary-foreground block'>Sogeprom</span>
                                    </li>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Area:</strong>
                                        <span className='text-secondary-foreground block'>891 m²</span>
                                    </li>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Project year:</strong>
                                        <span className='text-secondary-foreground block'>Sogeprom</span>
                                    </li>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Project type:</strong>
                                        <span className='text-secondary-foreground block'>Sogeprom</span>
                                    </li>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Location:</strong>
                                        <span className='text-secondary-foreground block'>Sogeprom</span>
                                    </li>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Team:</strong>
                                        <span className='text-secondary-foreground block'>Russell Otten, Gabriel Ranieri, Raissa Furlan, Maria Pereira</span>
                                    </li>
                                </ul>
                                <ButtonOutline className={"text-secondary-foreground border-secondary whitespace-nowrap hover:text-primary-foreground hover:bg-secondary "}>
                                    Technical Sheet <span className='rotate-90'><RightArrow height={"25"} width={"22"} /></span>
                                </ButtonOutline>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid mt-30'>
                        <div className='flex lg:flex-row flex-col gap-8'>
                            <Image src={project_img_1} loading='lazy'      width={"auto"} height={"auto"} alt='img' className='w-full h-full' />
                            <Image src={project_img_2} loading='lazy'      width={"auto"} height={"auto"} alt='img' className='w-full h-full' />
                        </div>
                    </div>
                    <Paragraph />
                    <ProjectSingleSliderOne />
                    <Paragraph />
                    <ProjectSingleSliderTwo />
                    <Paragraph />
                </div>

            </section>
            <TeamTwo />
            <Feedback />
        </>
    )
}

export default ProjectSingle