import Image from "next/image";

import service_img from "@/assets/images/in-custody-services.jpg";
import SectionTitle from "@/components/ui/sectionTitle";
import Title from "@/components/ui/title";
import ServiceSingleSidebar from "@/components/ui/serviceSingleSidebar";
import Feedback from "@/components/section/feedback";
import ProjectSingleSliderOne from "@/components/section/projectSingle/projectSingleSliderOne";
import Link from "next/link";

export const metadata = {
  title: "Restorative Partners - ReEntry Resources",
  description:
    "Our Reentry Resources page is dedicated to supporting individuals transitioning back into the community after incarceration. We provide essential tools, guidance, and connections to services that empower returning citizens to rebuild their lives. Whether you're seeking employment opportunities, housing assistance, educational programs, or emotional support, our curated resources are here to help you navigate the journey to successful reintegration and personal growth.",
};

const ServiceSingle = () => {
  return (
    <>
      <section>
        <div className="container-fluid ">
          <SectionTitle
            sectionName={"Services"}
            sectionTitle={"ReEntry Resources"}
            sectionDesc={
              "Our Reentry Resources page is dedicated to supporting individuals transitioning back into the community after incarceration. Our curated resources are here to help you navigate the journey to successful reintegration and personal growth."
            }
          />
        </div>
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <div className="grid lg:grid-cols-[58%_auto] xl:gap-[120px] gap-15 items-start">
            <div>
              <Image src={service_img} loading="lazy" alt="service-img" />
              {/* <div className="pt-12.5">
                <Title title_text={"Overview"} />
                <p className="text-primary-foreground ">
                  At Architronix, our Color Consultation services are designed
                  to elevate your space through the power of color. Whether
                  you're revamping your home, office, or commercial
                  establishment, our expert color consultants bring a wealth of
                  knowledge and creativity to transform your environment.
                </p>
              </div> */}
              <div className="pt-12.5">
                {/* <Title title_text={"What's Included"} /> */}
                <ul>
                  <Link href={"/services/reentry-resources/system-navigation"}>
                    <li className="bg-secondary grid lg:grid-cols-[8%_auto] lg:gap-y-0 gap-y-6 justify-between items-center mb-7.5 py-8 px-7.5 border border-primary">
                      <svg
                        strokeWidth="1"
                        className="h-[65px] w-20 relative -top-2  left-0 xl:text-6xl text-5xl inline-block font-extrabold leading-120 stroke-primary stroke-dasharray-1000 stroke-dashoffset-1000 animate-text-line-animation"
                      >
                        <text x="0%" dominantBaseline="middle" y="70%">
                          1
                        </text>
                      </svg>
                      <div className="w-full">
                        <h2 className="text-2xl font-bold leading-160 text-primary-foreground">
                        System Navigation
                        </h2>
                      </div>
                    </li>
                  </Link>
                  <Link href={"/services/reentry-resources/workforce-development"}>
                    <li className="bg-secondary grid lg:grid-cols-[8%_auto] lg:gap-y-0 gap-y-6 justify-between items-center mb-7.5 py-8 px-7.5 border border-primary">
                      <svg
                        strokeWidth="1"
                        className="h-[65px] w-20 relative -top-2  left-0 xl:text-6xl text-5xl inline-block font-extrabold leading-120 stroke-primary stroke-dasharray-1000 stroke-dashoffset-1000 animate-text-line-animation"
                      >
                        <text x="0%" dominantBaseline="middle" y="70%">
                          2
                        </text>
                      </svg>
                      <div className="w-full">
                        <h2 className="text-2xl font-bold leading-160 text-primary-foreground">
                        Workforce Development 
                        </h2>
                      </div>
                    </li>
                  </Link>
                  <Link href={"/services/reentry-resources/case-management"}>
                    {" "}
                    <li className="bg-secondary grid lg:grid-cols-[8%_auto] lg:gap-y-0 gap-y-6 justify-between items-center mb-7.5 py-8 px-7.5 border border-primary">
                      <svg
                        strokeWidth="1"
                        className="h-[65px] w-20 relative -top-2  left-0 xl:text-6xl text-5xl inline-block font-extrabold leading-120 stroke-primary stroke-dasharray-1000 stroke-dashoffset-1000 animate-text-line-animation"
                      >
                        <text x="0%" dominantBaseline="middle" y="70%">
                          3
                        </text>
                      </svg>
                      <div className="w-full">
                        <h2 className="text-2xl font-bold leading-160 text-primary-foreground">
                        Case Management
                        </h2>
                      </div>
                    </li>
                  </Link>
                  <Link href={"/services/reentry-resources/cencal-calaim"}>
                    {" "}
                    <li className="bg-secondary grid lg:grid-cols-[8%_auto] lg:gap-y-0 gap-y-6 justify-between items-center mb-7.5 py-8 px-7.5 border border-primary">
                      <svg
                        strokeWidth="1"
                        className="h-[65px] w-20 relative -top-2  left-0 xl:text-6xl text-5xl inline-block font-extrabold leading-120 stroke-primary stroke-dasharray-1000 stroke-dashoffset-1000 animate-text-line-animation"
                      >
                        <text x="0%" dominantBaseline="middle" y="70%">
                          4
                        </text>
                      </svg>
                      <div className="w-full">
                        <h2 className="text-2xl font-bold leading-160 text-primary-foreground">
                        Cen Cal / Cal Aim
                        </h2>
                      </div>
                    </li>
                  </Link>
                  <Link href={"/services/reentry-resources/education"}>
                    {" "}
                    <li className="bg-secondary grid lg:grid-cols-[8%_auto] lg:gap-y-0 gap-y-6 justify-between items-center mb-7.5 py-8 px-7.5 border border-primary">
                      <svg
                        strokeWidth="1"
                        className="h-[65px] w-20 relative -top-2  left-0 xl:text-6xl text-5xl inline-block font-extrabold leading-120 stroke-primary stroke-dasharray-1000 stroke-dashoffset-1000 animate-text-line-animation"
                      >
                        <text x="0%" dominantBaseline="middle" y="70%">
                          5
                        </text>
                      </svg>
                      <div className="w-full">
                        <h2 className="text-2xl font-bold leading-160 text-primary-foreground">
                        Education Opportunities
                        </h2>
                      </div>
                    </li>
                  </Link>
                  <Link href={"/services/treatment"}>
                    {" "}
                    <li className="bg-secondary grid lg:grid-cols-[8%_auto] lg:gap-y-0 gap-y-6 justify-between items-center mb-7.5 py-8 px-7.5 border border-primary">
                      <svg
                        strokeWidth="1"
                        className="h-[65px] w-20 relative -top-2  left-0 xl:text-6xl text-5xl inline-block font-extrabold leading-120 stroke-primary stroke-dasharray-1000 stroke-dashoffset-1000 animate-text-line-animation"
                      >
                        <text x="0%" dominantBaseline="middle" y="70%">
                          6
                        </text>
                      </svg>
                      <div className="w-full">
                        <h2 className="text-2xl font-bold leading-160 text-primary-foreground">
                        Treatment
                        </h2>
                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <ServiceSingleSidebar />
          </div>
          {/* <ProjectSingleSliderOne /> */}
        </div>
      </section>
      <Feedback />
    </>
  );
};

export default ServiceSingle;
