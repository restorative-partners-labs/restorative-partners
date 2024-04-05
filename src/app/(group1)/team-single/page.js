import SectionTitle from '@/components/ui/sectionTitle'
import Title from '@/components/ui/title'
import Image from 'next/image'
import React from 'react'
import team_img from "@/assets/images/team-1.jpg"
import Link from 'next/link'
import RightArrow from '@/assets/icons/rightArrow'
import ProjectCardThree from '@/components/ui/cards/projectCardThree'
import Feedback from '@/components/section/feedback'
import ButtonOutline from '@/components/ui/buttons/buttonOutline'
import SocialMediaList from '@/components/ui/socialMediaList'
import { teamData } from '@/lib/fackData/teamData'

export const metadata = {
  title: "Architronix -- Team Single",
  description: "Architronix is a next js and tailwind css website",
};

const TeamSingle = () => {
  return (
    <>
      <section>
        <div className='container-fluid '>
          <SectionTitle
            sectionName={"Architect"}
            sectionTitle={"Russell <br> Otten"}
            sectionDesc={"Interior Alchemist"}
          />
        </div>
        <div className='container lg:pt-30 2sm:pt-20 pt-14'>
          <div className='grid xl:grid-cols-[auto_538px] lg:grid-cols-[auto_350px] md:grid-cols-[auto_400px] 2xl:gap-[132px] gap-16 items-start'>
            <div>
              <div className='mb-12.5'>
                <Title title_text={"Brief Bio:"} />
                <p>Russell Otten, the Interior Alchemist at Architronix, adds a touch of magic to spaces. With over a decade of experience, Russell blends artistic flair with a deep understanding of client aspirations.</p>
              </div>
              <div className='pt-12.5'>
                <Title title_text={"Expertise and Specializations:"} />
                <ul>
                  <li>
                    <h5 className='font-bold'>Architectural Focus: </h5>
                    <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Russell specializes in residential, commercial a outdoor design.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Specializations:  </h5>
                    <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>His expertise lies in creating a timeless interiors that seamlessly blend luxury and functionality.</p>
                  </li>
                </ul>
              </div>
              <div className='pt-20'>
                <Title title_text={"Design Philosophy:"} />
                <ul>
                  <li>
                    <h5 className='font-bold'>Philosophy Overview:  </h5>
                    <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Russell's design philosop Architronix revolves around capturing the essence of each client's persionality and translating it into a space that feels uniquely theirs.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Client-Centric Approach: </h5>
                    <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Through close collaboration, Russell ensures that a every design reflects the client's vision and exceeds expectations.</p>
                  </li>
                </ul>
              </div>
              <div className='pt-20'>
                <Title title_text={"Education and Credentials:"} />
                <ul>
                  <li>
                    <h5 className='font-bold'>Educational Background:  </h5>
                    <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Russell holds a Master's in Interior of the Design from Architronix University of Belgium.</p>
                  </li>
                  <li className='pt-7.5'>
                    <h5 className='font-bold'>Professional Credentials:    </h5>
                    <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Recognized as an the industry leader, Russell is a member of the National Interior Design for Association (NIDA) and has received accolades for his innovative designs.</p>
                  </li>
                </ul>
              </div>
              <div className='pt-20'>
                <Title title_text={"Awards and Recognition:"} />
                <ul>
                  <li>
                    <h5 className='font-bold'>Achievements:  </h5>
                    <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>Russell Otten's work at Architronix has been feeatured in Design Excellence Magazine, earning him the Interior Alchemist title.</p>
                  </li>

                </ul>
              </div>
              <div className='pt-20'>
                <Title title_text={"Contact information:"} />
                <ul>
                  <li className='flex items-center mb-3'>
                    <h5 className='font-bold min-w-28'>Email:  </h5>
                    <Link href={"mailto:russell@architronix.com"} className='hover-underline' ><span>russell@architronix.com</span></Link>
                  </li>
                  <li className='flex items-center mb-3'>
                    <h5 className='font-bold min-w-28'>Phone:  </h5>
                    <Link href={"tel:555123-4567"} className='hover-underline' > <span>(555) 123-4567</span> </Link>
                  </li>
                  <li className='flex items-center'>
                    <h5 className='font-bold min-w-28'>Social:    </h5>
                    <div className=''> <SocialMediaList /> </div>
                  </li>

                </ul>
              </div>
            </div>
            <div className='sticky top-16'>
              <Image src={team_img} loading='lazy'      alt='Russell Otten' className='w-full' />
              <Link href={""} className='mt-11 inline-block'>
                <ButtonOutline className={"after:left-0"}>Connect to Linkedin <RightArrow width={"53"} height={"22"} /></ButtonOutline>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className='container pt-20'>
        <h2 className='[font-size:_clamp(40px,7vw,90px)] text-primary-foreground font-extrabold leading-120 max-w-[651px]'>Portfolio Showcase:</h2>
        <div className='grid lg:grid-cols-3 2sm:grid-cols-2 gap-5 pt-10'>
          {teamData[0].portfolio.map(({ id, img, link, project_name }) => <ProjectCardThree key={id} img={img} project_name={project_name} />)}
        </div>
      </div>
      <Feedback />
    </>
  )
}

export default TeamSingle