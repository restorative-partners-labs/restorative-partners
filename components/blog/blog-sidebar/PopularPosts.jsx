"use client";

import React from "react";
import Link from "next/link";
import { popularPostContent } from "../../../data/blog";

const PopularPosts = () => {
  return (
    <>
      {popularPostContent.map((val, i) => (
        <Link
          className="ptf-popular-post"
          href={`/blog/${val.id}`}
          key={i}
        >
          <div className="ptf-popular-post__number">{val.postNumber}</div>
          <div className="ptf-popular-post__content">
            <span className="cat">{val.catName}</span>
            <h6>{val.title}</h6>
          </div>
        </Link>
      ))}
    </>
  );
};

export default PopularPosts;
