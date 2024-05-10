import Image from "next/image";
import bg_banner from "@/assets/images/donate-hero.jpg";
import project_img_1 from "@/assets/images/donate-hero.jpg";
import project_img_2 from "@/assets/images/project-image-2.jpg";
import RightArrow from "@/assets/icons/rightArrow";
import ProjectSingleSliderOne from "@/components/section/projectSingle/projectSingleSliderOne";
import Paragraph from "@/components/section/projectSingle/paragraph";
import ProjectSingleSliderTwo from "@/components/section/projectSingle/projectSingleSliderTwo";
import TeamTwo from "@/components/section/team/teamTwo";
import Feedback from "@/components/section/feedback";
import ButtonOutline from "@/components/ui/buttons/buttonOutline";
import Title from "@/components/ui/title";

export const metadata = {
  title: "Donate -- Restorative Partners",
  description: "Architronix is a next js and tailwind css website",
};

const ProjectSingle = () => {
  return (
    <>
      <section className="blog-single">
        <div>
          <Image src={bg_banner} loading="lazy" alt="img" />
          <div className="container 2sm:mt-[156px] sm:mt-30 mt-20">
            <div className="grid lg:grid-cols-[65%_auto] gap-[38px]">
              <div className="relative after:absolute sm:after:-left-12.5 after:-left-5 after:top-1/2 after:-translate-y-1/2 after:w-[1px] sm:after:h-[130%] after:h-[120%] after:bg-primary sm:ml-12.5 ml-5">
                <p className="text-2xl sm:text-3xl 2sm:text-4xl !leading-160 text-primary-foreground mt-[18px]">
                  Transform the lives of those impacted by crime today! Your
                  donation will help us provide transforming programming and
                  mentoring for those who need and want to change their
                  behavior, heal from their trauma and acquire new skills,
                  accountability and compassion.
                </p>
              </div>
              <div className=" bg-primary py-15 sm:px-[38px] px-5 lg:-mt-[410px]">
                <Title
                  title_text={"Your Donations Matter"}
                  className={"text-secondary-foreground mb-0"}
                />
                <ul className="pb-7.5 pt-[75px] flex lg:flex-col flex-row flex-wrap lg:flex-nowrap gap-x-7 lg:gap-x-0 gap-y-[52px]">
                  <li>
                    <strong className="text-secondary-foreground block text-2xl mb-1.5">
                      $35
                    </strong>
                    <span className="text-secondary-foreground block">
                      Provides one emergency bednight
                    </span>
                  </li>
                  <li>
                    <strong className="text-secondary-foreground block text-2xl mb-1.5">
                      $200
                    </strong>
                    <span className="text-secondary-foreground block">
                      Provides one month of groceries for the women and children
                      at Anna's Home
                    </span>
                  </li>
                  <li>
                    <strong className="text-secondary-foreground block text-2xl mb-1.5">
                      $800
                    </strong>
                    <span className="text-secondary-foreground block">
                      sponsors one month of Sober Living Housing & Services for
                      an individual
                    </span>
                  </li>
                </ul>

                <a href="https://restorativepartners.networkforgood.com/projects/214282-restorative-partners">
                  {" "}
                  <ButtonOutline
                    className={
                      "text-secondary-foreground border-secondary whitespace-nowrap hover:text-primary-foreground hover:bg-secondary "
                    }
                  >
                    Donate Now !{" "}
                    <span className="">
                      <RightArrow height={"25"} width={"22"} />
                    </span>
                  </ButtonOutline>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="container-fluid mt-30">
            <div className="flex lg:flex-row flex-col gap-8">
              <Image
                src={project_img_1}
                loading="lazy"
                width={"auto"}
                height={"auto"}
                alt="img"
                className="w-full h-full"
              />
              <Image
                src={project_img_2}
                loading="lazy"
                width={"auto"}
                height={"auto"}
                alt="img"
                className="w-full h-full"
              />
            </div>
          </div> */}
          {/* <Paragraph />
          <ProjectSingleSliderOne />
          <Paragraph />
          <ProjectSingleSliderTwo />
          <Paragraph /> */}
        </div>
      </section>
      {/* <TeamTwo /> */}
      <Feedback />
    </>
  );
};

export default ProjectSingle;
