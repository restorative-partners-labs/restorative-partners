"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";

import QuoteIcon from "@/assets/icons/quoteIcon";
import SectionTitle from "../ui/sectionTitle";
import ProgressAndNatigation from "../ui/progressAndNatigation";
import { cn } from "@/lib/utils";

const testimonialData = [
  {
    id: 1,
    name: "Erika DeHerrera",
    position: "2024",
    review:
      "I want to give the highest rating to this organization for the way my life has changed so much for the better because of all the amazing people that have contributed their time, hard work and tireless energy for us all! Thank you from the bottom of my heart!!!!",
  },
  {
    id: 2,
    name: "Christopher Wood",
    position: "2023",
    review:
      "Very helpful. Friendly staff. RP has been there for me and my children. I cannot begin to explain how grateful I am for Patty, Gabriel, Aiden, Solomon, and any folks in the woodworks doing what they do.",
  },
  {
    id: 3,
    name: "Wendy Blacker",
    position: "2019",
    review:
      "This place has saved so many lives... It is a safe place and a refuge for those whom have had doors slammed in their face due to past poor choices. The magic that Dave Davis and Sister Teressa preform here is nothing short of a miracle. I love all the people here and am eternally grateful for everything they do. This place is my family. This place is home.",
  },
  {
    id: 4,
    name: "Chris Waller",
    position: "2020",
    review:
      "What can I say about restorative partners .well sister Teresa is such an asset to this community.she has helped me so many times I can't count never judging me she is a shining beacon of Hope in a world that can be such a hard place to see love in.her sober living facilitys are top notch.Gus is a jewel an a great role model to anyone he comes in contact with thank you all so much",
  },
  {
    id: 5,
    name: "Emily",
    position: "2019",
    review:
      "What an amazing agency! They have a real hear for people and wonderful programs for those incarcerated and those transitioning back to the community.",
  },
];
const Testimonial = ({ text_muted, bg_muted }) => {
  const pagination = {
    clickable: true,
    el: ".progressbar-pagination",
    type: "progressbar",
  };
  return (
    <section className="pt-20">
      <div className="container-fluid ">
        <SectionTitle
          sectionName={"Testimonial"}
          sectionTitle={"Client Experiences"}
          sectionDesc={"Inspiring Stories from Our Clients"}
          bg_muted={bg_muted}
          text_muted={text_muted}
        />

        <div className="lg:pt-30 2sm:pt-20 pt-14">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 2,
              },
              1300: {
                slidesPerView: 3,
              },
            }}
            pagination={pagination}
            loop={true}
            modules={[Pagination, Navigation]}
            className=""
          >
            {testimonialData.map(({ id, name, position, review }) => {
              return (
                <SwiperSlide key={id}>
                  <div className="flex md:gap-6 gap-2">
                    <div className="text-secondary-foreground">
                      <QuoteIcon />
                    </div>
                    <div className="mt-16">
                      <p
                        className={cn(
                          `text-lg text-primary-foreground ${text_muted}`
                        )}
                      >
                        {review}
                      </p>
                      <div className="relative after:absolute after:-left-5 after:top-0 after:w-[1px] after:h-full after:bg-primary ml-5 mt-6">
                        <h5
                          className={cn(
                            `text-primary-foreground font-extrabold leading-160 text-lg ${text_muted}`
                          )}
                        >
                          {name}
                        </h5>
                        {/* <p
                          className={cn(
                            `text-primary-foreground font-medium ${text_muted}`
                          )}
                        >
                          {position}
                        </p> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="container">
              <ProgressAndNatigation />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
