"use client"

import React from "react";

const instagramFeed = ["image-1", "image-2", "image-3", "image-4", "image-5"];

import Image from "next/image";
const InstagramFeed = () => {
  return (
    <ul className="ptf-instagram-feed">
      {instagramFeed.map((icon, i) => (
        <li key={i}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
                      width={1200}
                      height={1200}
                      style={{width : '100%' , height: '100%'}}
              src={`/assets/img/instagram/${icon}.png`}
              alt="instagram icon"
              loading="lazy"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default InstagramFeed;
