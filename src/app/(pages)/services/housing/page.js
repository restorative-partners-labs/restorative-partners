import Image from "next/image";

import service_img from "@/assets/images/in-custody-services.jpg";
import SectionTitle from "@/components/ui/sectionTitle";
import Title from "@/components/ui/title";
import ServiceSingleSidebar from "@/components/ui/serviceSingleSidebar";
import Feedback from "@/components/section/feedback";
import ProjectSingleSliderOne from "@/components/section/projectSingle/projectSingleSliderOne";
import Link from "next/link";

export const metadata = {
  title: "Restorative Partners -- Housing",
  description:
    "We provide housing for individuals coming home from incarceration as part of a continuum of care through reincorporation into the community.",
};

const ServiceSingle = () => {
  return (
    <>
      <section>
        <div className="container-fluid ">
          <SectionTitle
            sectionName={"Services"}
            sectionTitle={"Housing"}
            sectionDesc={
              "We provide housing for individuals coming home from incarceration as part of a continuum of care through reincorporation into the community."
            }
          />
        </div>
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <div className="grid lg:grid-cols-[58%_auto] xl:gap-[120px] gap-15 items-start">
            <div>
              {/* <Image src={service_img} loading="lazy" alt="service-img" /> */}
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
                  <Link href={"/services/housing/annas-home"}>
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
                          Anna's Home
                        </h2>
                      </div>
                    </li>
                  </Link>
                  <Link href={"/services/housing/hope-house"}>
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
                          Hope House
                        </h2>
                      </div>
                    </li>
                  </Link>
                  <Link href={"/services/housing/rapha-house"}>
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
                          Rapha House
                        </h2>
                      </div>
                    </li>
                  </Link>
                  <Link href={"/services/housing/lyonheart-place"}>
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
                          LyonHeart Place
                        </h2>
                      </div>
                    </li>
                  </Link>
                  <Link href={"/services/housing/application"}>
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
                          Application
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
