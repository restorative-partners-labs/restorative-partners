import Link from "next/link";
import React from "react";
import SocialMediaList from "../ui/socialMediaList";

const TopNavbar = () => {
  return (
    <div className="container-fluid  py-4 flex justify-between items-center">
      <p className="font-semibold mb-0">
        Transforming Lives Impacted by Crime through Healing Services &
        Relationships
      </p>

      <div className="flex items-center gap-[20px] divide-x divide-black">
        <p className="font-bold">
          {" "}
          <span>Let's Talk:</span> (805) 242-1272
        </p>
        <div className="pl-5">
          <SocialMediaList />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
