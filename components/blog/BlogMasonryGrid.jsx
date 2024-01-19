"use client";

import React from "react";
import Link from "next/link";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { blogContentmansorygrid } from "../../data/blog";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  768: 2,
  500: 1,
};

const BlogMasonryGrid = () => {
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {blogContentmansorygrid.map((item, i) => (
          <div className="grid-item" key={i}>
            {/* <!--Blog Post--> */}
            <article className="ptf-post ptf-post--style-2">
              <div className="ptf-post__media">
                <Image
                  width={1200}
                  height={1200}
                  style={{ width: "100%", height: "100%" }}
                  src={item.img}
                  alt="post"
                  loading="lazy"
                />
                <div className="ptf-post__media__content">
                  <header className="ptf-post__header">
                    <div className="ptf-post__meta">
                      <span className="cat">{item.cat}</span>
                      <span className="date">{item.date}</span>
                    </div>
                    <h3 className="ptf-post__title">{item.title}</h3>
                  </header>
                </div>
              </div>
              {/* End .ptf-post */}
              <div className="ptf-post__content">
                <header className="ptf-post__header">
                  <div className="ptf-post__meta">
                    <span className="cat">{item.cat}</span>
                    <span className="date">{item.date}</span>
                  </div>
                  <h3 className="ptf-post__title">
                    <Link
                      href={`/blog-details-sidebar/${item.id}`}
                    >
                      {item.title}
                    </Link>
                  </h3>
                </header>
                <div className="ptf-post__excerpt">
                  <p>{item.description}</p>
                </div>
                <footer className="ptf-post__footer">
                  <Link
                    className="ptf-read-more-link"
                    href={`/blog-details-sidebar/${item.id}`}
                  >
                    Continue
                  </Link>
                </footer>
              </div>
              {/* End .ptf-post__content */}
            </article>
          </div>
        ))}
      </Masonry>
    </>
  );
};

export default BlogMasonryGrid;
