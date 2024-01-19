"use client";

import React from "react";
import Link from "next/link";

import {serviceListfive} from '../../data/service'

const ServiceListFive = () => {
  return (
    <ul
      className="ptf-services-list ptf-services-list--style-1"
      style={{
        "--ptf-font-family": "var(--ptf-primary-font)",
        "--ptf-font-weight": "300",
      }}
    >
      {serviceListfive.map((val, i) => (
        <li key={i}>
          <Link
            href={`/service/${val.id}`}
          >
            {val.name}
            <span>{val.number}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ServiceListFive;
