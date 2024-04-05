import React from 'react'
import SectionTitle from '../../ui/sectionTitle'
import TeamCardTwo from '../../ui/cards/teamCardTwo'
import team_13 from "@/assets/images/team-13.jpg"
import team_14 from "@/assets/images/team-14.jpg"
import team_15 from "@/assets/images/team-15.jpg"
import team_16 from "@/assets/images/team-16.jpg"

import credit_image_1 from "@/assets/images/credit-image-1.jpg"
import credit_image_2 from "@/assets/images/credit-image-2.jpg"
import TeamCardThree from '../../ui/cards/teamCardThree'

const temaList = [
    {
        id: 1,
        img: team_13,
        link: "/team-single",
        name: "Michael Johnson",
        position: "Lead Designer",
        desc: "As the lead designer, Michael brought creativity and innovation to the project. His visionary approach guided the entire design process."
    },
    {
        id: 2,
        img: team_14,
        link: "/team-single",
        name: "Michael Johnson",
        position: "Lead Designer",
        desc: "As the lead designer, Michael brought creativity and innovation to the project. His visionary approach guided the entire design process."
    },
    {
        id: 3,
        img: team_15,
        link: "/team-single",
        name: "Michael Johnson",
        position: "Lead Designer",
        desc: "As the lead designer, Michael brought creativity and innovation to the project. His visionary approach guided the entire design process."
    },
    {
        id: 4,
        img: team_16,
        link: "/team-single",
        name: "Michael Johnson",
        position: "Lead Designer",
        desc: "As the lead designer, Michael brought creativity and innovation to the project. His visionary approach guided the entire design process."
    },
    {
        id: 5,
        img: credit_image_1,
        link: "/team-single",
        name: "Layero Engenharia",
        position: "Engineers",
        desc: "",
    },
    {
        id: 6,
        img: credit_image_2,
        link: "/team-single",
        name: "Maddison & Walker",
        position: "Interior Supplier",
        desc: "",
    },


]


const TeamTwo = () => {
    return (
        <section>
            <div className='container-fluid '>
                <SectionTitle sectionName={"Credits"} sectionTitle={"Exploring Our Creations"} sectionDesc={"The Talented Team Behind 'Elegant Urban Oasis"} />
            </div>
            <div className='container lg:pt-30 2sm:pt-20 pt-14'>
                <div className='grid 2sm:grid-cols-2  gap-10'>
                    {
                        temaList.slice(0, 4).map(({ id, desc, img, name, position, link }) => <TeamCardTwo key={id} desc={desc} img={img} name={name} position={position} link={link} />)
                    }
                </div>
            </div>
            {/* ----  Other Credits */}
            <div className='container pt-30'>
                <div className='relative after:absolute after:xl:-left-12.5 after:-left-7 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[130%] after:bg-primary xl:ml-12.5 ml-7'>
                    <h1 className='xl:text-[130px] lg:text-8xl 2sm:text-7xl text-5xl font-extrabold leading-110 text-primary-foreground'>Other <br /> Credits</h1>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-2 gap-[23px] mt-20'>
                    {
                        temaList.slice(4, 6).map(({ id, desc, img, name, position, link }) => <TeamCardThree key={id} desc={desc} img={img} name={name} position={position} link={link} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default TeamTwo