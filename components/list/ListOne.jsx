"use client";

import React from "react";
import Link from "next/link";

import {serviceListfive} from '../../data/service'
const ListOne = () => {
  return (
    <ul
      className="ptf-services-list ptf-services-list--style-5"
      style={{ "--ptf-font-family": "var(--ptf-primary-font)" }}
    >
      {serviceListfive.map((val, i) => (
        <li key={i}>
          <Link
            href={`/service/${val.id}`}
          >
            {val.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListOne;
