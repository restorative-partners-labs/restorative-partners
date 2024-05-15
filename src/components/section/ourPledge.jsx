import Image from "next/image";
import Link from "next/link";
import RightArrow from "@/assets/icons/rightArrow";
import video_thumb from "@/assets/images/rj-home-video-thumb.png";
import SectionTitle from "../ui/sectionTitle";
import { cn } from "@/lib/utils";
import VideoPlay from "../ui/videoPlay";
import ButtonOutline from "../ui/buttons/buttonOutline";

const OurPledge = ({ text_muted, bg_muted, after_bg_muted }) => {
  return (
    <section className="pt-20">
      <div className="container-fluid lg:pt-30 2sm:pt-20 pt-14">
        <div
          className={cn(
            ` relative after:contents-[""] after:absolute after:left-0 after:top-0 after:max-w-[1320px] after:w-full z-[1] after:h-full after:bg-primary ${after_bg_muted} pt-[90px] pb-[110px]`
          )}
        >
          <div className="container flex lg:flex-row flex-col justify-between relative z-10">
            <div className="2xl:max-w-[637px] lg:max-w-[500px] w-full">
              <h4 className="text-secondary-foreground text-3xl 2sm:text-4xl font-bold leading-135">
                We Pledge To:
              </h4>

              <ul className="mt-[35px]">
                <li className="text-secondary-foreground flex items-center gap-[27px]">
                  <RightArrow width={"35"} height={"22"} />{" "}
                  <span className="text-secondary-foreground text-xl leading-160 font-bold">
                    Respect the dignity of every person
                  </span>{" "}
                </li>
                <li className="text-secondary-foreground flex items-center gap-[27px] mt-4">
                  <RightArrow width={"35"} height={"22"} />{" "}
                  <span className="text-secondary-foreground text-xl leading-160 font-bold">
                    Overcome violence with love and compassion
                  </span>{" "}
                </li>
                <li className="text-secondary-foreground flex items-center gap-[27px] mt-4">
                  <RightArrow width={"35"} height={"22"} />{" "}
                  <span className="text-secondary-foreground text-xl leading-160 font-bold">
                    Accompany and support anyone affected by crime on their
                    healing journey
                  </span>{" "}
                </li>
                <li className="text-secondary-foreground flex items-center gap-[27px] mt-4">
                  <RightArrow width={"35"} height={"22"} />{" "}
                  <span className="text-secondary-foreground text-xl leading-160 font-bold">
                    Be an instrument of restoration, forgiveness, and
                    reconciliation
                  </span>{" "}
                </li>
              </ul>

              <Link href={"/mission"} className="mt-[70px] inline-block">
                <ButtonOutline
                  className={
                    "border-secondary text-secondary-foreground sm:px-10 px-3 after:hover:bg-secondary after:left-0 hover:text-primary-foreground"
                  }
                >
                  Our Organization <RightArrow width={"35"} height={"22"} />
                </ButtonOutline>
              </Link>
            </div>
            <VideoPlay
              img={video_thumb}
              video_url={
                "https://restorativepartners.org/wp-content/uploads/2020/04/restorative-partners-home-video-1.mp4"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPledge;
