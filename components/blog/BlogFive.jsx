"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogFive = ({ blogContentfive, pageNumber }) => {
  return (
    <>
      {blogContentfive
        .slice((pageNumber - 1) * 4, pageNumber * 4)
        .map((val, i) => (
          <div className="grid-item" key={i}>
            {/* <!--Blog Post--> */}
            <article className="ptf-post ptf-post--style-3">
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
                  alt={val.categories}
                  loading="lazy"
                />
              </div>
              <div className="ptf-post__content">
                <header className="ptf-post__header">
                  <div className="ptf-post__meta">
                    <span className="cat">{val.categories}</span>
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
                <footer className="ptf-post__footer">
                  <div className="ptf-post__info">
                    <Link
                      className="comments"
                      href={`/blog/${val.id}`}
                    >
                      {" "}
                      <i className="lnil lnil-comments"></i> {val.comments}
                    </Link>
                    <a className="author" href="#">
                      <i className="lnil lnil-user"></i>by
                      <span>{val.author}</span>
                    </a>
                  </div>
                </footer>
              </div>
            </article>
          </div>
        ))}
    </>
  );
};

export default BlogFive;
