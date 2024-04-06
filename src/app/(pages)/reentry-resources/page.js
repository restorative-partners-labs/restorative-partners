import { jobPostList } from "@/lib/fackData/jobPostList";
import ResourceLinkCard from "@/components/ui/cards/resourceLinkCard";

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
        `Present your work to the wider business at Show & Tell sessions.`,
      ],
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
      ],
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="bg-secondary pt-[94px] pb-[130px]">
          <div className="container">
            <h2 className="[font-size:_clamp(40px,7vw,90px)] leading-120 text-primary-foreground font-extrabold max-w-[768px]">
              Reentry Resources
            </h2>
          </div>
        </div>
      </div>
      <div className="container pt-30">
        <div className="grid lg:grid-cols-[auto_427px] xl:gap-x-[132px] gap-x-10 items-start"></div>
        <div className="pt-15 pb-30">
          <ul>
            {jobPostList.map(
              ({
                id,
                date_line,
                job_name,
                level,
                link,
                location,
                salary,
                time,
              }) => (
                <ResourceLinkCard
                  key={id}
                  id={id}
                  date_line={date_line}
                  job_name={job_name}
                  level={level}
                  location={location}
                  link={link}
                  salary={salary}
                  time={time}
                />
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
