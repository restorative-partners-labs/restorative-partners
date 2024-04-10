"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import RightArrow from "@/assets/icons/rightArrow";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";

const builder = imageUrlBuilder(client);

const  LeaderCard = ({
  img,
  firstName,
  lastName,
  position,
  email,
  phone,
  phoneExt,
  type,
}) => {
  return (
    <motion.div
      className={cn(`mb-16`)}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative group hover-underline">
        <div className="relative">
          <Image
            src={builder.image(img).url()}
            loading="lazy"
            width={"100"}
            height={"100"}
            alt={firstName + "-" + lastName}
            className="w-full h-full"
          />
        </div>
        <div className="bg-secondary  absolute left-0 bottom-[-10%] min-w-[295px] transition-all duration-500 group-hover:min-w-full">
          <div>
            <span className="w-full h-[1px] bg-[#253B2F4D] block absolute top-2"></span>
            <span className="w-full h-[1px] bg-[#253B2F4D] block absolute bottom-2"></span>
            <span className="w-[1px] h-full bg-[#253B2F4D] block absolute left-2"></span>
            <span className="w-[1px] h-full bg-[#253B2F4D] block absolute right-2"></span>
          </div>
          <Link
            href={"/team-single"}
            className="flex items-center justify-between px-[27px] pt-[9px] pb-[18px]"
          >
            <label>
              <span
                className={cn(
                  `text-2xl font-bold leading-160 text-primary-foreground cursor-pointer `
                )}
              >
                {firstName} {lastName}
              </span>
              <small className={cn(`text-primary-foreground text-lg block `)}>
                {position}
              </small>

              {type !== "board" && (
                <>
                  <Link href={`tel:${phone};${phoneExt}`}>
                    <small
                      className={cn(`text-primary-foreground text-lg block `)}
                    >
                      {phone} ext {phoneExt}
                    </small>
                  </Link>
                  <Link href={`mailto:${email}`}>
                    <small
                      className={cn(`text-primary-foreground text-lg block `)}
                    >
                      {email}
                    </small>
                  </Link>
                </>
              )}
            </label>
            <small className="text-primary-foreground mt-2.5 flex items-center gap-3 transition-all duration-500 opacity-0 group-hover:opacity-100">
              {" "}
              <RightArrow width={"35"} height={"21"} />{" "}
            </small>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default LeaderCard;
