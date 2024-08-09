import AboutTwo from "@/components/section/about/aboutTwo";
import Expertise from "@/components/section/expertise";
import Feedback from "@/components/section/feedback";
import AboutGoals from "@/components/section/about/aboutGoals";
import { faqAboutData } from "@/lib/fackData/faqData";
import Faq from "@/components/section/faq";
import Image from "next/image";
import blog_inner_img from "@/assets/images/blog-inner-image.jpg";
import QuoteIcon from "@/assets/icons/quoteIcon";

import service_img from "@/assets/images/about-us-image.jpeg";
import SectionTitle from "@/components/ui/sectionTitle";
import Title from "@/components/ui/title";
import ServiceSingleSidebar from "@/components/ui/serviceSingleSidebar";

export const metadata = {
  title: "About Restorative Partners",
  description: "Architronix is a next js and tailwind css website",
};
const AboutUs = () => {
  return (
    <>
      <section>
        {" "}
        <AboutTwo />
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <div className="grid lg:grid-cols-[58%_auto] xl:gap-[120px] gap-15 items-start">
            <div>
              <Image src={service_img} loading="lazy" alt="service-img" />
              <div className="pt-12.5">
                <Title title_text={"About Restorative Partners"} />
                <p className="text-primary-foreground ">
                  Restorative Partners provides services and programs for those
                  in-custody and for those released from the San Luis County
                  Juvenile Hall, Jail, Honor Farm and State Prisons. Our
                  restorative justice approach focuses on mind, body and
                  spiritual transformation, incorporates trauma informed care,
                  addresses responsibility and accountability, and offers
                  accompaniment through reentry mentorship. We also provide
                  clean and sober living homes for men and for women as well as
                  own and operate a home for women who are ready to reunite with
                  their children and move forward with their lives. The goal in
                  all of our transformative work is to reduce violence and lower
                  recidivism by providing a continuum of care from incarceration
                  through reincorporation to our community.
                </p>
              </div>
              <div className="pt-12.5">
                <Title title_text={"Our Vision and Mission"} />
                <ul>
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
                        We envision a safer community where everyone belongs.
                      </h2>
                    </div>
                  </li>
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
                        We strive to accomplish this through transforming lives
                        impacted by crime through healing services and
                        relationships.
                      </h2>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="pt-12.5">
                <Title title_text={"Our Goals"} />
                <ul>
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
                        We educate the community in the philosophy and practice
                        of restorative justice.
                      </h2>
                    </div>
                  </li>
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
                        We partner with stakeholders to initiate, sponsor, and
                        coordinate services at the SLO County Jail, Juvenile
                        Hall and in the SLO community.
                      </h2>
                    </div>
                  </li>
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
                        We recruit and train volunteers to share their gifts and
                        expertise in our programs.
                      </h2>
                    </div>
                  </li>
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
                        We create a wide base of support to sustain our
                        programs.
                      </h2>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="pt-12.5">
                <Title title_text={"Our Beliefs"} />
                <ul>
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
                        We believe in accompanying and supporting anyone
                        affected by crime on their healing journey, to be an
                        instrument of restoration, of forgiveness, of
                        accountability, and of reconciliation.
                      </h2>
                    </div>
                  </li>
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
                        We believe that violence is never a solution to any
                        problem and that every person is endowed with a sacred
                        dignity, and is capable of changing, healing, and being
                        restored.
                      </h2>
                    </div>
                  </li>
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
                        We believe that everyone deserves to be treated with
                        respect and dignity.
                      </h2>
                    </div>
                  </li>
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
                        We believe that we can overcome violence with education,
                        love, and compassion.
                      </h2>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <ServiceSingleSidebar />
          </div>
          <Faq faqData={faqAboutData} />
          <Feedback />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
