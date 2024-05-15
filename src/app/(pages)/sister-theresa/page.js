import SectionTitle from "@/components/ui/sectionTitle";
import Title from "@/components/ui/title";
import Image from "next/image";
import React from "react";
import team_img from "@/assets/images/sister_theresa.png";
import Link from "next/link";
import RightArrow from "@/assets/icons/rightArrow";
import ProjectCardThree from "@/components/ui/cards/projectCardThree";
import Feedback from "@/components/section/feedback";
import ButtonOutline from "@/components/ui/buttons/buttonOutline";
import SocialMediaList from "@/components/ui/socialMediaList";
import { teamData } from "@/lib/fackData/teamData";

export const metadata = {
  title: "Restorative Partners - Sister Theresa ",
  description: "Restorative Partner Executive Director Sister Theresa",
};

const TeamSingle = () => {
  return (
    <>
      <section>
        <div className="container-fluid ">
          <SectionTitle
            sectionName={"Executive Director"}
            sectionTitle={"Sister Theresa"}
            sectionDesc={"Her Vision Embodied"}
            sectionNameSize={30}
          />
        </div>
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <div className="grid xl:grid-cols-[auto_538px] lg:grid-cols-[auto_350px] md:grid-cols-[auto_400px] 2xl:gap-[132px] gap-16 items-start">
            <div>
              <div className="mb-12.5">
                <Title title_text={"Bio:"} />
                <br />
                <p>
                  Much of Sister Theresa Harpin's life work has been spent
                  working in Social and Restorative Justice. She has been a
                  member of the Sister's of St. Joseph of Carondelet for over 40
                  years, serving as Pastor, Campus Minister, Musician, and
                  Parish Social Justice Coordinator. She is a Certified
                  Facilitator for the Alternatives to Violence Project,
                  Aggression Replacement Training, and Thinking for a Change
                  Programs.
                </p>
                <br />

                <p>
                  In 2006, Sister Theresa joined the staff of the Center for
                  Restorative Justice Works and initiated the "Get on the Bus"
                  Program. This program reunited children with their
                  incarcerated father's at the California Men's Colony in San
                  Luis Obispo County. She grew the program from a single bus
                  traveling from Los Angeles, to 18 buses from all over
                  California. The power of family reunification transformed her
                  life, and working with those impacted by crime became her
                  passion.
                </p>
                <br />

                <p>
                  In 2011, with the collaboration of the San Luis Obispo
                  Sheriff's Office and Probation Department, Sister Theresa
                  launched Restorative Partners. Restorative Partners is a
                  nonprofit agency that offers healing and help to those
                  impacted by crime within San Luis Obispo County, including
                  victims, offenders, and the community. Her vision provides
                  professional and volunteer programming that engages the mind,
                  body and spirit in rehabilitation, recovery, and re-entry. In
                  launching Restorative Partners, Sister Theresa drew together
                  the expertise of other nonprofits, universities, businesses,
                  and faith-based communities that educate and develop programs
                  that reduce recidivism and provide better re-entry and
                  integration into our communities.
                </p>
                <br />

                <p>
                  In 2015, Restorative Partners (RP) was awarded funding for a
                  Mentorship Program, matching returning citizens with community
                  volunteers to help navigate the challenges of re-entry. This
                  work soon led to getting involved with recovery/re-entry
                  housing. In 2016, RP took over two recovery homes in Los Osos,
                  CA. A year later, we celebrated the grand opening of Anna's
                  Home for Women and Children in Paso Robles, CA. In May of
                  2018, RP opened our new State Parolee housing and outpatient
                  services in San Luis Obispo, CA. This is the only parolee
                  re-entry housing/drug and alcohol treatment program of it's
                  kind in San Luis Obispo County.
                </p>
                <br />

                <p>
                  Since launching RP's treatment program, Sister Theresa has
                  expanded our services to include court referred and other
                  self-pay clients.
                </p>
                <br />

                <p>
                  Sister Theresa and the Restorative Partner's Team know that
                  jobs are critical to successful re-entry and are often hard to
                  come by for those returning to the community. Yet, through our
                  work we have found a way to bridge the gap by providing job
                  training through partnerships and local employers. Under
                  Sister Theresa's leadership, Restorative Partners now offers
                  two vocational training programs, Culinary Training and an
                  Internship Program through Cuesta College, as well as a Solar
                  Installation Training Program with GRID.
                </p>
                <br />

                <p>
                  When asked, "How does Restorative Partners cover so much
                  ground with their services?" Sister Theresa quickly responds
                  with, "We are Restorative PARTNERS! We do nothing alone. We
                  draw together a wide range of local talent and expertise to
                  meet the needs of our clients, and to bring healing and repair
                  to our community. As one of our volunteers put it, TOGETHER WE
                  ARE STRONGER!"
                </p>
              </div>
              {/* <div className="pt-12.5">
                <Title title_text={"Expertise and Specializations:"} />
                <ul>
                  <li>
                    <h5 className="font-bold">Architectural Focus: </h5>
                    <p className="mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10">
                      Russell specializes in residential, commercial a outdoor
                      design.
                    </p>
                  </li>
                  <li className="pt-7.5">
                    <h5 className="font-bold">Specializations: </h5>
                    <p className="mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10">
                      His expertise lies in creating a timeless interiors that
                      seamlessly blend luxury and functionality.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-20">
                <Title title_text={"Design Philosophy:"} />
                <ul>
                  <li>
                    <h5 className="font-bold">Philosophy Overview: </h5>
                    <p className="mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10">
                      Russell's design philosop Architronix revolves around
                      capturing the essence of each client's persionality and
                      translating it into a space that feels uniquely theirs.
                    </p>
                  </li>
                  <li className="pt-7.5">
                    <h5 className="font-bold">Client-Centric Approach: </h5>
                    <p className="mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10">
                      Through close collaboration, Russell ensures that a every
                      design reflects the client's vision and exceeds
                      expectations.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-20">
                <Title title_text={"Education and Credentials:"} />
                <ul>
                  <li>
                    <h5 className="font-bold">Educational Background: </h5>
                    <p className="mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10">
                      Russell holds a Master's in Interior of the Design from
                      Architronix University of Belgium.
                    </p>
                  </li>
                  <li className="pt-7.5">
                    <h5 className="font-bold">Professional Credentials: </h5>
                    <p className="mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10">
                      Recognized as an the industry leader, Russell is a member
                      of the National Interior Design for Association (NIDA) and
                      has received accolades for his innovative designs.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-20">
                <Title title_text={"Awards and Recognition:"} />
                <ul>
                  <li>
                    <h5 className="font-bold">Achievements: </h5>
                    <p className="mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10">
                      Russell Otten's work at Architronix has been feeatured in
                      Design Excellence Magazine, earning him the Interior
                      Alchemist title.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-20">
                <Title title_text={"Contact information:"} />
                <ul>
                  <li className="flex items-center mb-3">
                    <h5 className="font-bold min-w-28">Email: </h5>
                    <Link
                      href={"mailto:russell@architronix.com"}
                      className="hover-underline"
                    >
                      <span>russell@architronix.com</span>
                    </Link>
                  </li>
                  <li className="flex items-center mb-3">
                    <h5 className="font-bold min-w-28">Phone: </h5>
                    <Link href={"tel:555123-4567"} className="hover-underline">
                      {" "}
                      <span>(555) 123-4567</span>{" "}
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <h5 className="font-bold min-w-28">Social: </h5>
                    <div className="">
                      {" "}
                      <SocialMediaList />{" "}
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="sticky top-16">
              <Image
                src={team_img}
                loading="lazy"
                alt="Russell Otten"
                className="w-full"
              />
              {/* <Link href={""} className="mt-11 inline-block">
                <ButtonOutline className={"after:left-0"}>
                  Connect to Linkedin <RightArrow width={"53"} height={"22"} />
                </ButtonOutline>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
      {/* <div className="container pt-20">
        <h2 className="[font-size:_clamp(40px,7vw,90px)] text-primary-foreground font-extrabold leading-120 max-w-[651px]">
          Portfolio Showcase:
        </h2>
        <div className="grid lg:grid-cols-3 2sm:grid-cols-2 gap-5 pt-10">
          {teamData[0].portfolio.map(({ id, img, link, project_name }) => (
            <ProjectCardThree key={id} img={img} project_name={project_name} />
          ))}
        </div>
      </div> */}
      <Feedback />
    </>
  );
};

export default TeamSingle;
