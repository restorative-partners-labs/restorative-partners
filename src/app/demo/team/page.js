import Feedback from '@/components/section/feedback'
import TeamCardOne from '@/components/ui/cards/teamCardOne'
import SectionTitle from '@/components/ui/sectionTitle'
import { teamData } from '@/lib/fackData/teamData'

export const metadata = {
    title: "Architronix -- Team",
    description: "Architronix is a next js and tailwind css website",
};

const Team = () => {
    return (
        <>
            <section className='pt-20'>
                <div className='container-fluid '>
                    <SectionTitle
                        sectionName={"Team"}
                        sectionTitle={"Architects of Architronix"}
                        sectionDesc={"Where Imagination Takes Flight, and Excellence Blossoms"}
                    />
                </div>
                <div className='container lg:pt-30 2sm:pt-20 pt-14'>
                    <div className='grid lg:grid-cols-3 2sm:grid-cols-2 gap-7'>
                        {
                            teamData.map(({ id, img, name, position, social_link }) => <TeamCardOne key={id} img={img} name={name} position={position} social_link={social_link} />)
                        }
                    </div>
                </div>
            </section>
            <Feedback/>
        </>
    )
}

export default Team