"use client";

import React from "react";
import Link from "next/link";

const footerItems = [
  { itemName: "Faqs", link: "" },
  { itemName: "Term & Conditions", link: "" },
  { itemName: "Privacy Policy", link: "" },
  { itemName: "Help", link: "" },
  { itemName: "Works", link: "" },
  { itemName: "Studio", link: "" },
  { itemName: "News", link: "" },
];

const FooterList = () => {
  return (
    <ul>
      {footerItems.map((item, i) => (
        <li key={i}>
          <Link href={item.link}>{item.itemName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
