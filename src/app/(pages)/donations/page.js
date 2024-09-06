import Link from "next/link";
import ButtonFill from "@/components/ui/buttons/buttonFill";
import JobPostCard from "@/components/ui/cards/jobPostCard";
import JobDetailsSidebar from "@/components/ui/jobDetailsSidebar";
import Title from "@/components/ui/title";
import { jobPostList } from "@/lib/fackData/jobPostList";
import RightArrow from "@/assets/icons/rightArrow";
import Faq from "@/components/section/faq";

export const metadata = {
  title: "Restorative Partners -- Volunteer",
  description:
    "There are thousands of ways to get involved with Restorative Partners to enact restorative justice. People of all ages from every part of our county can participate at some level.",
};

export const faqAboutData = [
  {
    id: "1",
    question: "How can I get involved as a volunteer?",
    ans: `
    We have several ways for you to get involved! You can be involved as an In-Custody Lead Volunteer, In-Custody Accompaniment Volunteer, Facilitated Program Volunteer, Reentry Mentor Volunteer, Administrative Volunteer and Reentry Program Lead and Accompaniment Volunteer!
          `,
  },
  {
    id: "2",
    question: "What steps do I take to become an in-custody volunteer?",
    ans: `
   The first step is to attend our Community Workshop, which is an introduction to our organization and Restorative Justice. Depending on which facility (Jail or Juvenile Hall) you’d like to volunteer at, you must attend the facility’s orientation. After attending both the workshop and facility orientation, you must complete a Live Scan in order to enter the facilities. Once you complete a Live Scan and are cleared, you will be asked to meet with the Volunteer Coordinator to discuss programs you might be attending.
`,
  },
  {
    id: "3",
    question: "What is a Live Scan?",
    ans: `
A Live Scan is a simple background check where an operator will electronically scan your fingerprints in person. Along with your Live Scan, you must submit an application.
`,
  },
  {
    id: "4",
    question:
      "How soon can I begin volunteering at the Jail and/or Juvenile Hall?",
    ans: `
After you have completed your Live Scan(s), you will meet with the Volunteer Coordinator to discuss your availability. The Jail will notify you of your clearance status anywhere between 2 and 6 weeks. As for the Juvenile Hall, the Probation Department (where your Live Scan is done for the Juvenile Hall) will send out a list in batches to notify us of any clearances, which can sometimes take a few months. Unfortunately, the Juvenile Hall does not notify us of clearances on a rolling basis as the Jail does.
          `,
  },
  {
    id: "5",
    question: "What if I am unable to attend the Community Workshop?",
    ans: `
We offer quarterly workshops that you’ll be able to attend! These Orientation Cycles typically occur in the months of January, April, July, and October. If you missed a workshop and would like to begin volunteering sooner, we offer programs at our reentry homes that you can be involved in!
          `,
  },
  {
    id: "6",
    question:
      "If I am cleared at the Jail, then am I cleared at Juvenile Hall?",
    ans: `
No. Unfortunately, the Jail and Juvenile Hall does not have a shared system of clearances. You must complete separate Live Scan processes and applications, depending on which facility you are interested in volunteering at.
          `,
  },
];
const JobDetails = () => {
  const requrments = [
    {
      id: "1",
      requrment: "Overview:",
      keys: [
        `An opportunity to create meaningful and healthy connections with the youth by being a positive role model in our community!`,
        `An opportunity to lead or go alongside other volunteers in supporting the prosocial programs we offer inside Juvenile Hall.`,
        `Share your musical interest and talents by teaching lessons on: guitar, keyboard, drums, singing, and other instruments.`,
        `Teach and or tutor the youth on education subjects, life skills, and career preparation.`,
        `Get active and join our sports program outdoors or enjoy a game of Ping Pong`,
        `Let your creative mind flow by supporting our Creative Art program and teaching a creative writing class!`,
        `If you are a bookworm and are eager to run your very own BookClub, you don't have to look any further!.`,
        `Let your green thumb turn greener while being involved with our Garden Programs!`,
        `Support our Alcohol (AA) or Narcotics (NA) Anonymous Group`,
        `Facilitate engaging and fun workshops related to your specific interest or background!`,
        `Celebrate with our youth at our monthly Karaoke Birthday Events! (If you would like to provide a delicious dessert for this event please reach out to us!)`,
        `We accept internships and welcome Senior Project ideas.`,
        `If you have a specific interest or talent and would like to create a program please don't hesitate to reach out to us!`,
      ],
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="bg-secondary pt-[94px] pb-[130px]">
          <div className="container">
            <h2 className="[font-size:_clamp(40px,7vw,90px)] leading-120 text-primary-foreground font-extrabold max-w-[768px]">
              Donations
            </h2>
            <div className="flex 2sm:flex-row flex-col justify-between pt-11">
              <div className="flex sm:flex-row flex-col justify-between lg:basis-1/2 basis-[65%]">
                <div>
                  <strong className="text-primary-foreground"></strong>
                  <p className="text-primary-foreground">
                    {" "}
                    <span className="font-bold whitespace-nowrap"></span>{" "}
                  </p>
                </div>
                <div className="2sm:mt-0 mt-6">
                  <strong className="text-primary-foreground"></strong>
                  <p className="text-primary-foreground flex gap-2">
                    {" "}
                    <span></span>
                  </p>
                </div>
              </div>
              <div className="2sm:mt-0 mt-6">
                <Link href={"/volunteer-application"}>
                  <ButtonFill className={"px-7.5 py-2.5 after:left-0"}>
                    Donate Now!
                  </ButtonFill>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-30">
        <div className="grid lg:grid-cols-[auto_427px] xl:gap-x-[132px] gap-x-10 items-start">
          <div>
            <div>
              <p className="pb-7">
                There are thousands of ways to get involved with Restorative
                Partners to enact restorative justice. People of all ages from
                every part of our county can participate at some level. Become a
                volunteer in the areas below:
              </p>
              <Title title_text={"Juvenile Hall"} />
            </div>
            <div className="pt-7.5">
              {requrments.map(({ id, keys, requrment }) => {
                return (
                  <div key={id}>
                    <h5 className="font-bold">{requrment}</h5>
                    <ul className="2sm:ml-[132px] sm:ml-20 ml-10 py-7 list-disc">
                      {keys.map((key, index) => {
                        return (
                          <li key={index} className="mb-6 last:mb-0">
                            {key}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-primary py-12.5 sm:px-9 px-5 mt-10 lg:mt-0 sticky top-10 ">
            <Title
              title_text={"Donation Info"}
              className={"mb-11 text-secondary-foreground font-semibold"}
            />
            <ul className="mb-16 flex flex-col gap-y-[34px]">
              <li>
                <strong className="text-secondary-foreground block">
                  Non Profit #
                </strong>
                <span className="text-secondary-foreground block">
                  354654654
                </span>
              </li>
              <li>
                <strong className="text-secondary-foreground block">
                  Tax ID:
                </strong>
                <span className="text-secondary-foreground block">
                  47-4825349
                </span>
              </li>
            </ul>
            <Link href={"/volunteer-application"}>
              <button
                className={
                  "flex items-center justify-center gap-3 text-2xl font-bold text-secondary-foreground  border-2 border-secondary  hover:text-primary-foreground px-10 py-[15px] whitespace-nowrap w-full relative after:absolute after:left-0 after:right-0 after:top-0 after:bg-secondary after:w-full after:h-0 hover:after:h-full after:transition-all after:duration-500 after:z-[-1] hover:after:bg-secondary transition-all duration-500"
                }
              >
                Apply Now{" "}
                <span className="rotate-90">
                  <RightArrow height={"25"} width={"22"} />
                </span>
              </button>
            </Link>
          </div>
          <section>
            {" "}
            <Title title_text={"Donation FAQs"} />
            <Faq faqData={faqAboutData} />
          </section>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
