"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {portfolioContentRelated} from '../../data/works'

const RelatedPortfolio = () => {
  return (
    <>
      {portfolioContentRelated.map((val, i) => (
        <div className="col-lg-4" key={i}>
          <div className="grid-item">
            {/* <!--Portfolio Item--> */}
            <article className="ptf-work ptf-work--style-1">
              <div className="ptf-work__media">
                <Link
                  className="ptf-work__link"
                  href={`/works/${val.id}`}
                ></Link>
                <Image
                      width={1200}
                      height={1200}
                      style={{width : '100%' , height: '100%'}}
                  src={val.img}
                  alt="portfolio"
                  loading="lazy"
                />
              </div>
              <div className="ptf-work__meta">
                <div className="ptf-work__category">{val.categorie}</div>
                <h4 className="ptf-work__title">
                  <Link
                    href={`/works/${val.id}`}
                  >
                    {val.title}
                  </Link>
                </h4>
              </div>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedPortfolio;
