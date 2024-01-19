"use client";

import React from "react";
import dynamic from "next/dynamic";
const ReactTooltip = dynamic(() => import("react-tooltip"), { ssr: false });
import Link from "next/link";
import Image from "next/image";

import {portfolioContenttwo} from '../../data/works'
const PortfolioTwo = () => {
  return (
    <>
      <div className=" grid-item ">
        {/* <!--Portfolio Item--> */}
        {portfolioContenttwo.map((val, i) => (
          <article
            className="ptf-work ptf-work--style-4"
            data-tip
            data-for={val.dataId}
            key={i}
          >
            <Link
              className="ptf-work__link"
              href={`/works/${val.id}`}
            ></Link>
            <ReactTooltip
              id={val.dataId}
              place="right"
              type="dark"
              effect="float"
            >
              <div className="poup-link">
                <Image
                      width={1200}
                      height={1200}
                      style={{width : '100%' , height: '100%'}}
                  src={val.imgPopup}
                  alt="popup"
                />
              </div>
            </ReactTooltip>
            <div className="ptf-work__category">{val.cat}</div>
            <h4 className="ptf-work__title">{val.title}</h4>
            <div className="ptf-work__date">{val.date}</div>
          </article>
        ))}
      </div>
      {/* End .grid-item */}
      <div></div>
      {/* End .grid-item */}
    </>
  );
};

export default PortfolioTwo;
