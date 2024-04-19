import React from "react";
import Image from "next/image";
import SectionTitle from "../../ui/sectionTitle";
import about_bg from "@/assets/images/about-image-2.jpg";
import SectionSidebarImg from "@/components/ui/sectionSidebarImg";

const AboutTwo = () => {
  return (
    <section>
      <div className="container-fluid">
        <SectionTitle
          sectionName={"About Us"}
          sectionTitle={"What We Believe"}
          sectionDesc={
            "Our professional staff and an army of volunteers offer programs, services, homes & relationships that empower mind-body-spirit & community transformation."
          }
        />
        <div
          className={`bg-primary xl:mt-[220px] lg:mt-25 md:mt-44 mt-[540px] xl:mb-20 mb-0`}
        >
          <div className="container">
            <div className="flex lg:flex-row flex-col items-center justify-between gap-[66px]">
              <div className="md:-mt-25 -mt-[470px] -mb-25">
                <SectionSidebarImg img={about_bg} section_name={"about-bg"} />
              </div>
              <div className="max-w-[533px] lg:pt-0 pt-20 lg:pb-0 pb-10">
                <h2 className="text-secondary-foreground text-3xl 2sm:text-4xl font-bold leading-120 mb-14 max-w-[400px]">
                  About Restorative Partners
                </h2>
                <p className=" text-secondary-foreground">
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
                  through reincorporation to our community.{" "}
                </p>
                <p className="text-secondary-foreground mt-7">
                  We envision a safer community where everyone belongs. We
                  strive to accomplish this through transforming lives impacted
                  by crime through healing services and relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
