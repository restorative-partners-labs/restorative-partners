"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {portfolioContentthree} from '../../data/works'

const PortfolioThree = () => {
  return (
    <>
      {portfolioContentthree.map((val, i) => (
        <div className="col-lg-6" key={i}>
          <div className=" grid-item filter-1 filter-4 filter-7">
            {/* <!--Portfolio Item--> */}
            <article className="ptf-work ptf-work--style-6">
              <div className="ptf-work__media">
                <Image
                      width={1200}
                      height={1200}
                      style={{width : '100%' , height: '100%'}}
                  src={val.img}
                  alt={val.title}
                  loading="lazy"
                />
              </div>
              <Link
                className="ptf-work__meta"
                href={`/works/${val.id}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  style={{ height: "1em" }}
                  viewBox="0 0 17 17"
                >
                  <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                </svg>
                <div className="ptf-work__category">{val.categorie}</div>
                <h4 className="ptf-work__title">{val.title}</h4>
              </Link>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};

export default PortfolioThree;
