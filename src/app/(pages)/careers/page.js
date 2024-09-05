import SectionTitle from '@/components/ui/sectionTitle'
import JobPostCard from '@/components/ui/cards/jobPostCard'
import { jobPostList } from '@/lib/fackData/jobPostList'
import ServiceCard from '@/components/ui/cards/serviceCard'
import { servicesData } from '@/lib/fackData/servicesData'
import AboutThree from '@/components/section/about/aboutThree'
import Faq from '@/components/section/faq'

export const metadata = {
  title: "Restorative Partners -- Career",
  description: "Discover Your Future at Restorative Partners",
};
const Career = () => {
  return (
    <>
      <section>
        <div className='container-fluid '>
          <SectionTitle
            sectionName={"Career"}
            sectionTitle={"Job Openings"}
            sectionDesc={"Discover Your Future at Restorative Partners"}
          />
        </div>
        <div className='container mt-30'>
          <ul>
            {
              jobPostList.map(({ id, date_line, job_name, level, link, location, salary, time }) =>
                <JobPostCard key={id} id={id} date_line={date_line} job_name={job_name} level={level} location={location} link={link} salary={salary} time={time} />)
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default Career