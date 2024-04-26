import Image from "next/image";
import Link from "next/link";
import SideBar from "@/components/ui/sideBar";
import blog_single_image from "@/assets/images/blog-single-image.jpg";
import blog_inner_img from "@/assets/images/blog-inner-image.jpg";
import QuoteIcon from "@/assets/icons/quoteIcon";
import { blogData } from "@/lib/fackData/blogData";
import Feedback from "@/components/section/feedback";
import BlogSlider from "@/components/section/blogSlider";
import NextPrevPost from "@/components/ui/nextPrevPost";
import ButtonOutline from "@/components/ui/buttons/buttonOutline";
import Comments from "@/components/ui/comments";
import Leavecomment from "@/components/ui/leaveComment";
import SocialMediaList from "@/components/ui/socialMediaList";
import SectionTitle from "@/components/ui/sectionTitle";

export const metadata = {
  title: "Restorative Partners -- Mission",
  description:
    "At Restorative Partners, we believe that every person deserves to be treated with dignity and respect",
};

const BlogSingle = () => {
  const tagList = [
    {
      id: "1",
      tag: "Art and Decor",
      link: "",
    },
    {
      id: "2",
      tag: "Modern Living",
      link: "",
    },
    {
      id: "3",
      tag: "Renovations",
      link: "",
    },
    {
      id: "4",
      tag: "Vintage Style",
      link: "",
    },
  ];
  return (
    <>
      <section className="">
        <div className="container-fluid ">
          <SectionTitle sectionName={"Mission"} />
        </div>
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <div className="">
            <div>
              <div>
                <p className="text-primary-foreground pt-[23px] mb-[14px]">
                  At Restorative Partners, we believe that every person deserves
                  to be treated with dignity and respect. We strive to provide
                  intentional, inclusive, and trauma-informed services and
                  programs that disrupt cycles of generational and systemic
                  trauma. We will continue to center the voices of the most
                  vulnerable and most marginalized members of our community.
                </p>

                <p className="text-primary-foreground pt-[23px] mb-[14px]">
                  We recognize the intersectionality of our mission –
                  transforming lives impacted by crime through healing services
                  and relationships – and the movements for racial and social
                  justice. We acknowledge the generational trauma that mass
                  incarceration has disproportionately inflicted on communities
                  of color. We will continue to stand up and speak out against
                  systems of oppression and we will continue to advocate for
                  restorative pathways to healing, accountability, and community
                  care.
                </p>
                <p className="text-primary-foreground pt-[23px] mb-[14px]">
                  We acknowledge that Restorative Partners is situated on the
                  ancestral, traditional, and contemporary lands of the yak
                  titʸu titʸu yak tiłhini Northern Chumash tribe. We honor the
                  tribe's connection to these territories and respect the land
                  on which we live and work.
                </p>

                <p className="text-primary-foreground  pt-[23px] mb-[14px]">
                  Yours in solidarity,
                </p>

                <p className="text-primary-foreground pt-[23px] mb-[14px]">
                  The Restorative Partners Leadership Team and Staff
                </p>
              </div>

              <div>
                <Image
                  src={blog_inner_img}
                  loading="lazy"
                  width={"auto"}
                  height={"auto"}
                  alt="Multi-Functional Furniture"
                  className="pt-9 pb-12.5 w-full h-full"
                />
              </div>

              <hr className="mt-[22px] mb-12.5" />
            </div>
          </div>
        </div>
      </section>
      <Feedback />
    </>
  );
};

export default BlogSingle;
