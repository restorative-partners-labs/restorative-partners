"use client";

import Feedback from "@/components/section/feedback";
import LeaderCard from "@/components/ui/cards/leaderCard";
import SectionTitle from "@/components/ui/sectionTitle";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";

export const staffQuery = groq`*[_type == "staff" && defined(firstName)]{
    _id, firstName, lastName, image, role, email, phone, phoneExt, type
  }`;

const Team = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    client.fetch(staffQuery).then(setStaff);
    console.log(staff);

    const staffSubscription = client.listen(staffQuery).subscribe((update) => {
      if (update.result) {
        setStaff((prevStaff) =>
          prevStaff.map((staff) =>
            staff._id === update.result._id ? update.result : staff
          )
        );
      }
    });

    return () => {
      staffSubscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <section className="pt-20">
        <div className="container-fluid ">
          <SectionTitle
            sectionName={"Our Team"}
            sectionDesc={
              "Empowering communities through restorative justice practices, fostering healing and reconciliation for a brighter future"
            }
          />
        </div>
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <div className="grid lg:grid-cols-3 2sm:grid-cols-2 gap-7">
            {staff
              .filter(({ type }) => type === "staff")
              .map(
                ({
                  id,
                  image,
                  firstName,
                  lastName,
                  role,
                  phone,
                  phoneExt,
                  email,
                  type,
                }) => (
                  <LeaderCard
                    key={id}
                    img={image}
                    firstName={firstName}
                    lastName={lastName}
                    position={role[0]}
                    phone={phone}
                    phoneExt={phoneExt}
                    email={email}
                    type={type}
                  />
                )
              )}
          </div>
        </div>
      </section>
      <Feedback />
    </>
  );
};

export default Team;
