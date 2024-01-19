"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogContentFour } from "../../data/blog";

const BlogFour = () => {
  return (
    <>
      {blogContentFour.map((val, i) => (
        <div className="col-md" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.delayAnimation}
          >
            <div>
              {/* <!--Blog Post--> */}
              <article
                className="ptf-post ptf-post--style-1"
                style={{ "--ptf-post-header-indent": "3.125rem" }}
              >
                <div className="ptf-post__media">
                  <Link
                    className="ptf-work__link"
                    href={`/blog/${val.id}`}
                  ></Link>
                  <Image
                    width={1200}
                    height={1200}
                    style={{ width: "100%", height: "100%" }}
                    src={val.img}
                    alt="poster"
                    loading="lazy"
                  />
                </div>
                <div className="ptf-post__content">
                  <header className="ptf-post__header">
                    <div className="ptf-post__meta">
                      <span className="cat">{val.cat}</span>
                      <span className="date">{val.date}</span>
                    </div>
                    <h3 className="ptf-post__title">
                      <Link
                        href={`/blog/${val.id}`}
                      >
                        {val.title}
                      </Link>
                    </h3>
                  </header>
                </div>
              </article>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogFour;
