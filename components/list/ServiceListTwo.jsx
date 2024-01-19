"use client";

import React from "react";
import Link from "next/link";

const ServiceListTwo = () => {
  return (
    <>
      <Link
        className="has-black-color"
        href={`/service/17`}
      >
        {" "}
        Branding
      </Link>
      ,{" "}
      <Link
        className="has-black-color"
        href={`/service/12`}
      >
        UI/UX
      </Link>{" "}
      <br />
      and{" "}
      <Link
        className="has-black-color"
        href={`/service/23`}
      >
        Illustration
      </Link>
    </>
  );
};

export default ServiceListTwo;
