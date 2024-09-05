import Image from "next/image";

import service_img from "@/assets/images/service-paint-image.jpg";
import SectionTitle from "@/components/ui/sectionTitle";
import Title from "@/components/ui/title";
import ServiceSingleSidebar from "@/components/ui/serviceSingleSidebar";
import Feedback from "@/components/section/feedback";
import Link from "next/link";


export const metadata = {
  title: "Restorative Partners - Social Enterprise",
  description: "Architronix is a next js and tailwind css website",
};

const ServiceSingle = () => {
  return (
    <>
      <section>
        <div className="container-fluid ">
          <SectionTitle
            sectionName={"Services"}
            sectionTitle={"Social Enterprise"}
            sectionDesc={
              "A business whose primary purpose is addressing a social challenge rather than creating profit for owners or shareholders. All proceeds from the cafe are fed back into Restorative Partners' programs and services."
            }
          />
        </div>
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <div className="grid lg:grid-cols-[58%_auto] xl:gap-[120px] gap-15 items-start">
            <div>
              <div className="pt-12.5">
                {/* <Title title_text={"What's Included"} /> */}
                <ul>
                  <Link href={"/services/treatment/aa"}>
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
                          Alcoholics Anonymous
                        </h2>
                      </div>
                    </li>
                  </Link>
                  <Link href={"/services/treatment/na"}>
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
                          Narcotics Anonymous
                        </h2>
                      </div>
                    </li>
                  </Link>
                  <Link href={"/services/treatment/domestic-violence-group"}>
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
                          Domestic Violence Group
                        </h2>
                      </div>
                    </li>
                  </Link>
                  <Link href={"/services/treatment/anger-management-group"}>
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
                          Anger Management Group
                        </h2>
                      </div>
                    </li>
                  </Link>
                  <Link href={"/services/treatment/substance-use-group"}>
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
                          Substance Use Group
                        </h2>
                      </div>
                    </li>
                  </Link>
                  <Link href={"/services/treatment/ptsd-group"}>
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
                          PTSD Group (TBA)
                        </h2>
                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <ServiceSingleSidebar />
          </div>
        </div>
      </section>
      <Feedback />
    </>
  );
};

export default ServiceSingle;
