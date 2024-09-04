import Link from 'next/link'
import ButtonFill from '@/components/ui/buttons/buttonFill'
import JobPostCard from '@/components/ui/cards/jobPostCard'
import JobDetailsSidebar from '@/components/ui/jobDetailsSidebar'
import Title from '@/components/ui/title'
import { jobPostList } from '@/lib/fackData/jobPostList'


export const metadata = {
  title: "Architronix -- Job Details",
  description: "Architronix is a next js and tailwind css website",
};
const JobDetails = () => {
  const requrments = [
    {
      id: "1",
      requrment: "Key Responsibilities:",
      keys: [
        `Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.`,
        `Work with BAs, product managers and tech teams to lead the Product Design`,
        `Accurately estimate design tickets during planning sessions.`,
        `Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.`,
        `Accurately estimate design tickets during planning sessions.`,
        `Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, micro interaction specifications and pattern libraries.`,
        `Ensure design choices are data led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.`,
        `Design pixel perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheel`,
        `Present your work to the wider business at Show & Tell sessions.`
      ]
    },
    {
      id: "2",
      requrment: "Required Skills:",
      keys: [
        `You’ve been designing digital products for 2+ years.`,
        `A portfolio that exemplifies strong visual design and a focus on defining the user experience.`,
        `You’ve proudly shipped and launched several products.`,
        `You have some past experience working in an agile environment – Think two-week sprints.`,
        `Experience effectively presenting and communicating your design decisions to clients and team members`,
        `Up-to-date knowledge of design software like Figma, Sketch etc.s`,
      ]
    }
  ]
  
  return (
    <>
      <div className='container-fluid'>
        <div className='bg-secondary pt-[94px] pb-[130px]'>
          <div className='container'>
            <h2 className='[font-size:_clamp(40px,7vw,90px)] leading-120 text-primary-foreground font-extrabold max-w-[768px]'>Senior Interior Designer</h2>
            <div className='flex 2sm:flex-row flex-col justify-between pt-11'>
              <div className='flex sm:flex-row flex-col justify-between lg:basis-1/2 basis-[65%]'>
                <div>
                  <strong className='text-primary-foreground'>USA,California</strong>
                  <p className='text-primary-foreground'> <span>Apply before:</span> <span className='font-bold whitespace-nowrap'> 28 Feb 2024</span> </p>
                </div>
                <div className='2sm:mt-0 mt-6'>
                  <strong className='text-primary-foreground'>Expert</strong>
                  <p className='text-primary-foreground flex gap-2'> <span>$45k - $60k </span>/ <span className='font-bold'>year</span></p>
                </div>
              </div>
              <div className='2sm:mt-0 mt-6'>
                <Link href={""}>
                  <ButtonFill className={"px-7.5 py-2.5 after:left-0"}>Apply Now</ButtonFill>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container pt-30'>
        <div className='grid lg:grid-cols-[auto_427px] xl:gap-x-[132px] gap-x-10 items-start'>
          <div>
            <div>
              <Title title_text={"Job Description"} />
              <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.</p>
              <p className='pt-7'>This means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces.</p>
              <p className='pt-7'>It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
            </div>
            <div className='pt-7.5'>
              {
                requrments.map(({ id, keys, requrment }) => {
                  return (
                    <div key={id}>
                      <h5 className='font-bold'>{requrment}</h5>
                      <ul className='2sm:ml-[132px] sm:ml-20 ml-10 py-7 list-disc'>
                        {
                          keys.map((key, index) => {
                            return (
                              <li key={index} className='mb-6 last:mb-0'>{key}</li>
                            )
                          })
                        }

                      </ul>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <JobDetailsSidebar />
        </div>
        <div className='pt-15 pb-30'>
          <Title title_text={"Other Jobs"} />
          <ul>
            {
              jobPostList.map(({ id, date_line, job_name, level, link, location, salary, time }) =>
                <JobPostCard key={id} id={id} date_line={date_line} job_name={job_name} level={level} location={location} link={link} salary={salary} time={time} />)
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default JobDetails