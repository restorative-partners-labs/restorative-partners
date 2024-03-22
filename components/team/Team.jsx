"use client";

import React from "react";
import Image from "next/image";
const teamContent = [
  {
    delayAnimation: "0",
    img: "team-1",
    title: "Cindy Ayala",
    designation: "Mission & Restorative Justice Implementation Director",
  },
  {
    delayAnimation: "100",
    img: "team-2",
    title: "Sister Theresa Harpin",
    designation: "Executive Director",
  },
  {
    delayAnimation: "200",
    img: "team-3",
    title: "Liz Holly",
    designation: "Reentry Resource Center Director",
  },
  {
    delayAnimation: "300",
    img: "team-4",
    title: "Gus Chavez",
    designation: "Housing & Treatment Director",
  },
  {
    delayAnimation: "0",
    img: "team-5",
    title: "Gina Grieb",
    designation: "Development & Marketing Director",
  },
  {
    delayAnimation: "100",
    img: "team-6",
    title: "Shelby Willits",
    designation: "Executive Assistant",
  },
  {
    delayAnimation: "200",
    img: "team-6",
    title: "David Fields",
    designation: "Finance & HR Director",
  },

  {
    delayAnimation: "300",
    img: "team-6",
    title: "Jason Hunter",
    designation: "General Manager/Chef @ The Bridge Cafe",
  },
  {
    delayAnimation: "200",
    img: "new-member",
    title: "",
    designation: "",
  },
];

const Team = () => {
  return (
    <>
      {teamContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          {/* <!--Team Member--> */}
          <div className="ptf-team-member ptf-team-member--has-effect">
            <div className="ptf-team-member__avatar">
              <div className="shadow-effect"></div>
              <a href="#">
                {" "}
                <Image
                  width={1200}
                  height={1200}
                  style={{ width: "100%", height: "100%" }}
                  src={`/assets/img/root/team/${val.img}.png`}
                  alt={val.title}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="ptf-team-member__content">
              <h6 className="ptf-team-member__name">
                <a href="#">{val.title}</a>
              </h6>
              <p className="ptf-team-member__function">{val.designation}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Team;
