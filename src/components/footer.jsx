import Link from "next/link";
import SocialMediaList from "./ui/socialMediaList";
import Image from "next/image";
import img from "@/assets/images/rp-logo.png";

const Footer = () => {
  return (
    <footer className=" container-fluid  mx-auto ">
      <div className=" bg-secondary ">
        <div className="container">
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center pt-[100px] pb-20">
            <div>
              <Link href={"/"} className="text-primary-foreground">
                <Image src={img} loading="lazy" width={200} height={30} />
              </Link>
              <h5 className="xl:text-2xl text-xl font-semibold text-primary-foreground leading-160 pt-2.5 pb-3">
                Transforming Lives Impacted by Crime through Healing Services &
                Relationships
              </h5>
              <SocialMediaList />
            </div>
            <div className="mt-12 lg:mt-0 flex gap-x-10">
              <span className="h-[198px] w-[1px] bg-primary block my-2.5"></span>
              <div>
                <h5 className="text-2xl font-extrabold block text-primary-foreground leading-160 ">
                  Office:
                </h5>
                <span className="w-[99px] h-[1px] bg-primary block my-2.5"></span>
                <div className="">
                  {/* <p className="text-xl font-bold text-primary-foreground">
                    Architronix,{" "}
                  </p> */}
                  <p className="text-lg text-primary-foreground">
                    3196 South Higuera Street, Suite D
                  </p>
                  <p className="text-lg  text-primary-foreground">
                    San Luis Obispo, CA 93401
                  </p>
                </div>
                <div className="mt-[17px]">
                  <Link
                    href={"tel:+34962398486"}
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Phone: <span>(805) 242-1272</span>
                  </Link>
                  <Link
                    href={"mailto:hello@architronix.com"}
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Email: <span>info@restorativepartners.org</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 flex gap-x-10">
              <span className="h-[198px] w-[1px] bg-primary block my-2.5"></span>
              <div>
                <h5 className="text-2xl font-extrabold inline-block text-primary-foreground leading-160 ">
                  The Bridge Cafe
                </h5>
                <span className="w-[99px] h-[1px] bg-primary block my-2.5"></span>
                <div className="mt-[18px]">
                  {/* <p className="text-xl font-bold text-primary-foreground">
                    Architronix Inc,{" "}
                  </p> */}
                  <p className="text-lg text-primary-foreground">
                    1074 Higuera St
                  </p>
                  <p className="text-lg  text-primary-foreground">
                    San Luis Obispo, CA 93401
                  </p>
                </div>
                <div className="mt-[17px]">
                  <Link
                    href={"tel:+34962398486"}
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Phone: <span>(805) 439-1689</span>
                  </Link>
                  <Link
                    href={"mailto:hello@architronix.com"}
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Email: <span>info@thebridgecafe.org</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-pritext-primary-foreground" />
          <div className="py-8 lg:flex justify-between items-center">
            <span className="text-sm text-primary-foreground block">
              Non-Profit #354654654
            </span>
            <span className="text-sm text-primary-foreground block">
              <Link href={""}>Tax ID 47-4825349</Link>{" "}
            </span>
            <span className="text-sm text-primary-foreground block mt-3 lg:mt-0">
              ©2024, Restorative Partners, All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
