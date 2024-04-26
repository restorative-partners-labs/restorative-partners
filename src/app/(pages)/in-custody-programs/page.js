import Image from "next/image";

import service_img from "@/assets/images/service-paint-image.jpg";
import SectionTitle from "@/components/ui/sectionTitle";
import Title from "@/components/ui/title";
import ServiceSingleSidebar from "@/components/ui/serviceSingleSidebar";
import Feedback from "@/components/section/feedback";
import ProjectSingleSliderOne from "@/components/section/projectSingle/projectSingleSliderOne";

export const metadata = {
  title: "Restorative Partners -- In-Custody Programs",
  description:
    "Our in-reach to individuals who are currently incarcerated, especially youth, supports a multitude of their needs and provides positive social engagement.",
};

const ServiceSingle = () => {
  return (
    <>
      <section>
        <div className="container-fluid ">
          <SectionTitle
            sectionName={"Services"}
            sectionTitle={"In-Custody Programs"}
            sectionDesc={
              "Our in-reach to individuals who are currently incarcerated, especially youth, supports a multitude of their needs and provides positive social engagement."
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
                  <li>
                    <h5 className="font-bold">AA & NA</h5>
                    <p className="mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10">
                      Community AA and NA Members provide 12 step Alcoholics
                      Anonymous and Narcotics Anonymous groups.{" "}
                    </p>
                  </li>
                  <li className="pt-7.5">
                    <h5 className="font-bold">Art Program</h5>
                    <p className="mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10">
                      Art classes and projects for the youth to encourage
                      creative self-expression and a way to process their life
                      experiences.
                    </p>
                  </li>
                  <li className="pt-7.5">
                    <h5 className="font-bold">Birthday Event</h5>
                    <p className="mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10">
                      Every youth in the facility is treated with a cupcake and
                      those with birthdays receive a card and song from the
                      volunteers.
                    </p>
                  </li>
                  <li className="pt-7.5">
                    <h5 className="font-bold">Book Club</h5>
                    <p className="mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10">
                      Book club meets to discuss books chosen for their
                      relevance, appeal, and educational value. Funding for
                      these books is provided by generous volunteers, United Way
                      Youth Board and donations from the SLO County Public
                      Library.
                    </p>
                  </li>
                  <li className="pt-7.5">
                    <h5 className="font-bold">Chess Club</h5>
                    <p className="mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10">
                      Chess club provides youth with a stimulating yet rewarding
                      activity that improves memory, problem-solving skills, and
                      ability to think ahead.
                    </p>
                  </li>
                </ul>
              </div>

            </div>
            <ServiceSingleSidebar />
          </div>
          <ProjectSingleSliderOne />
        </div>
      </section>
      <Feedback />
    </>
  );
};

export default ServiceSingle;
