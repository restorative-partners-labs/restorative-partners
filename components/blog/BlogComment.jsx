"use client";

import React from "react";
import Image from "next/image";

const BlogComment = () => {
  return (
    <ul className="ptf-comments">
      <li className="ptf-comment-item">
        <div className="ptf-comment-item__inner">
          <a className="ptf-comment-avatar" href="#">
            <Image
              width={70}
              height={70}
              style={{ objectFit: "cover" }}
              src="/assets/img/root/comment-avatar-1.png"
              alt="comment author"
              loading="lazy"
            />
          </a>
          <div className="ptf-comment-content">
            <div className="ptf-comment-header">
              <h5 className="ptf-comment-name">
                <a href="#">Robert Downey Jr</a>
              </h5>
              <div className="ptf-comment-metas">3 hours ago</div>
            </div>
            <div className="ptf-comment-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Atume nusaate staman utra phone limo sumeria.
              </p>
            </div>
            <a className="ptf-comment-reply" href="#">
              Reply
            </a>
          </div>
        </div>
        {/* End .ptf-comment-item__inner */}

        <ul className="children">
          <li className="ptf-comment-item">
            <div className="ptf-comment-item__inner">
              <a className="ptf-comment-avatar" href="#">
                <Image
                  width={1200}
                  height={1200}
                  style={{ width: "45px", height: "45px" }}
                  src="/assets/img/root/comment-avatar-2.png"
                  alt="avatar"
                  loading="lazy"
                />
              </a>
              <div className="ptf-comment-content">
                <div className="ptf-comment-header">
                  <h5 className="ptf-comment-name">
                    <a href="#">Leona Porter</a>
                  </h5>
                  <div className="ptf-comment-metas">5 hours ago</div>
                </div>
                <div className="ptf-comment-text">
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
                <a className="ptf-comment-reply" href="#">
                  Reply
                </a>
              </div>
            </div>
          </li>
        </ul>
        {/* End .children */}
      </li>
      {/* End li */}

      <li className="ptf-comment-item">
        <div className="ptf-comment-item__inner">
          <a className="ptf-comment-avatar" href="#">
            <Image
              width={1200}
              height={1200}
              style={{ width: "70px", height: "70px" }}
              src="/assets/img/root/comment-avatar-3.png"
              alt="avatar"
              loading="lazy"
            />
          </a>
          <div className="ptf-comment-content">
            <div className="ptf-comment-header">
              <h5 className="ptf-comment-name">
                <a href="#">Janie Blonde</a>
              </h5>
              <div className="ptf-comment-metas">December 25, 2021</div>
            </div>
            <div className="ptf-comment-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <a className="ptf-comment-reply" href="#">
              Reply
            </a>
          </div>
        </div>
      </li>
      {/* End li */}
    </ul>
  );
};

export default BlogComment;
