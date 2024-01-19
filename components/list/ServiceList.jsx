"use client";

import React from "react";
import Link from "next/link";

import {listContentthree} from '../../data/service'

const ServiceList = () => {
  return (
    <>
      {listContentthree.map((val, i) => (
        <li key={i}>
          <Link
            href={`/service/${val.id}`}
          >
            {val.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default ServiceList;
