import Image from "next/image";
import bg_banner from "@/assets/images/annas-home.jpg";
import project_img_1 from "@/assets/images/project-image-1.jpg";
import project_img_2 from "@/assets/images/project-image-2.jpg";
import RightArrow from "@/assets/icons/rightArrow";
import ProjectSingleSliderOne from "@/components/section/projectSingle/projectSingleSliderOne";
import Paragraph from "@/components/section/projectSingle/paragraph";
import ProjectSingleSliderTwo from "@/components/section/projectSingle/projectSingleSliderTwo";
import TeamTwo from "@/components/section/team/teamTwo";
import Feedback from "@/components/section/feedback";
import ButtonOutline from "@/components/ui/buttons/buttonOutline";
import Title from "@/components/ui/title";
import Link from "next/link";

export const metadata = {
  title: "Restorative Partners - Annas Home",
  description: "Architronix is a next js and tailwind css website",
};

const ProjectSingle = () => {
  return (
    <>
      <section className="blog-single">
        <div>
          <Image
            className="w-full max-h-[600px] object-cover"
            src={bg_banner}
            loading="lazy"
            alt="img"
          />
          <div className="container 2sm:mt-[156px] sm:mt-30 mt-20 pb-40">
            <div className="grid lg:grid-cols-[65%_auto] gap-[38px]">
              <div className="relative after:absolute sm:after:-left-12.5 after:-left-5 after:top-1/2 after:-translate-y-1/2 after:w-[1px] sm:after:h-[130%] after:h-[120%] after:bg-primary sm:ml-12.5 ml-5">
                <h1 className="text-primary-foreground [font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110">
                  Anna's Home
                </h1>
                <span className="inline-block w-[300px] h-[1px] bg-primary"></span>
                <p className="text-2xl sm:text-3xl 2sm:text-4xl !leading-160 text-primary-foreground mt-[18px]">
                  Anna's Home is a supportive housing program in Paso Robles.
                  Anna's Home provides five women and their children a safe and
                  sober living environment, assist residents with the challenges
                  of securing employment, managing a job and parenting,
                  developing financial literacy and life skills, and acquiring
                  permanent housing so the families may become self sufficient.
                </p>
              </div>
              <div className=" bg-primary py-15 sm:px-[38px] px-5 lg:-mt-[410px]">
                <Title
                  title_text={"Anna's Home"}
                  className={"text-secondary-foreground mb-0"}
                />
                <ul className="pb-7.5 pt-[5px] flex lg:flex-col flex-row flex-wrap lg:flex-nowrap gap-x-7 lg:gap-x-0 gap-y-[52px]">
                  <li>
                    <strong className="text-secondary-foreground block text-2xl mb-1.5">
                      Year Founded:
                    </strong>
                    <span className="text-secondary-foreground block">
                      Sogeprom
                    </span>
                  </li>
                  <li>
                    <strong className="text-secondary-foreground block text-2xl mb-1.5">
                      Location:
                    </strong>
                    <span className="text-secondary-foreground block">
                      Paso Robles, CA
                    </span>
                  </li>
                  <li>
                    <strong className="text-secondary-foreground block text-2xl mb-1.5">
                      Occupancy:
                    </strong>
                    <span className="text-secondary-foreground block">
                      5 families
                    </span>
                  </li>
                  <li>
                    <strong className="text-secondary-foreground block text-2xl mb-1.5">
                      Type:
                    </strong>
                    <span className="text-secondary-foreground block">
                      Women and Children
                    </span>
                  </li>

                  <li>
                    <strong className="text-secondary-foreground block text-2xl mb-1.5">
                      Programs:
                    </strong>
                    <span className="text-secondary-foreground block">
                      Women and Children
                    </span>
                  </li>
                  <li>
                    <strong className="text-secondary-foreground block text-2xl mb-1.5">
                      Size:
                    </strong>
                    <span className="text-secondary-foreground block">
                      1,200 square feet
                    </span>
                  </li>
                  <li>
                    <strong className="text-secondary-foreground block text-2xl mb-1.5">
                      Amenities:
                    </strong>
                    <span className="text-secondary-foreground block">
                      <li>Back Yard</li>
                      <li>Quiet Neighborhood</li>
                    </span>
                  </li>
                </ul>
                <Link href={"/services/housing/application"}>
                  {" "}
                  <ButtonOutline
                    className={
                      "text-secondary-foreground border-secondary whitespace-nowrap hover:text-primary-foreground hover:bg-secondary "
                    }
                  >
                    Apply Now{" "}
                    <span className="">
                      <RightArrow height={"25"} width={"22"} />
                    </span>
                  </ButtonOutline>
                </Link>
              </div>
            </div>
          </div>

          <ProjectSingleSliderOne />
        </div>
      </section>
      <Feedback />
    </>
  );
};

export default ProjectSingle;
