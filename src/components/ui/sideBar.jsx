import Link from "next/link";
import RightArrow from "@/assets/icons/rightArrow";
import InputFiled from "./inputFiled";
import ButtonOutline from "./buttons/buttonOutline";
import { blogData } from "@/lib/fackData/blogData";
import Image from "next/image";

const categoriesList = [
  {
    id: "1",
    categories: "Recidivism Rates",
    post: "15",
  },
  {
    id: "2",
    categories: "Restorative Justice Case Studies",
    post: "7",
  },
  {
    id: "3",
    categories: "Reentry Success Metrics",
    post: "8",
  },
  {
    id: "4",
    categories: "Community Impact Assessments",
    post: "20",
  },
  {
    id: "5",
    categories: "Victim-Offender Dialogue Reports",
    post: "4",
  },
  {
    id: "6",
    categories: "Artistic Expression Program Evaluations",
    post: "9",
  },
  {
    id: "7",
    categories: "Educational Opportunities Analysis",
    post: "15",
  },
  {
    id: "8",
    categories: "Mental Health Support Effectiveness",
    post: "25",
  },
  {
    id: "9",
    categories: "Legal Assistance Impact Studies",
    post: "3",
  },
];

const tagList = [
    {
      id: 1,
      tag: "Restorative Justice Practices",
      link: "",
    },
    {
      id: 2,
      tag: "Recidivism Prevention",
      link: "",
    },
    {
      id: 3,
      tag: "Reentry Programs",
      link: "",
    },
    {
      id: 4,
      tag: "Community Impact Assessments",
      link: "",
    },
    {
      id: 5,
      tag: "Victim-Offender Dialogue",
      link: "",
    },
    {
      id: 6,
      tag: "Art Therapy",
      link: "",
    },
    {
      id: 7,
      tag: "Educational Opportunities",
      link: "",
    },
    {
      id: 8,
      tag: "Mental Health Support",
      link: "",
    },
    {
      id: 9,
      tag: "Legal Assistance",
      link: "",
    },
  ];
  
const recentPostData = [
  {
    id: 1,
    title: "The Modern Home Office: Designing...",
    date: "",
  },
];
const SideBar = ({ order }) => {
  return (
    <div className={`lg:sticky lg:top-16 lg:pb-16 ${order}`}>
      {/* --------- category */}
      <div className="pt-17.5">
        <h1 className="[font-size:_clamp(33px,5vw,48px)] font-semibold leading-[100%] text-primary-foreground mb-[30px]">
          Categories
        </h1>
        <ul>
          {categoriesList.map(({ id, categories, post }) => {
            return (
              <li
                key={id}
                className="text-primary-foreground flex items-center gap-[27px] mb-[22px] last:mb-0"
              >
                <RightArrow width={"35"} height={"22"} />
                <Link
                  href={""}
                  className="text-xl leading-160 inline-block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-500 hover:after:w-full "
                >
                  <span className="font-medium text-primary-foreground">
                    {categories}
                  </span>{" "}
                  <span className="font-bold text-primary-foreground">
                    ({post})
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* -------- tag */}
      <div className="pt-17.5">
        <h1 className="[font-size:_clamp(33px,5vw,48px)] font-semibold leading-[100%] text-primary-foreground mb-[30px] last:mb-0">
          Tags
        </h1>
        <div className="flex gap-3 flex-wrap">
          {tagList.map(({ id, link, tag }) => (
            <Link href={""} key={id}>
              {" "}
              <ButtonOutline
                className={"font-normal px-2.5 sm:py-[5px] py-[5px] border"}
              >
                {" "}
                <span className="text-lg">{tag}</span>{" "}
              </ButtonOutline>{" "}
            </Link>
          ))}
        </div>
      </div>

      {/* -------- Recent post */}
      {/* <div className='pt-17.5'>
                <h1 className='[font-size:_clamp(33px,5vw,48px)] font-semibold leading-[100%] text-primary-foreground mb-[30px] last:mb-0'>Recent Posts</h1>
                {
                    blogData.slice(0, 3).map(({ id, date, title, thumb }) => {
                        return (
                            <div key={id} className='flex gap-[26px] mb-7.5 last:mb-0'>
                                <div className='max-w-[162px]'>
                                    <Image src={thumb} loading='lazy'      alt={title} />
                                </div>
                                <div>
                                    <Link href={"/blog-single"} className='hover-underline text-2xl leading-120 font-semibold'><span>{title.length > 25 ? title.slice(0, 25) + '...' : title}</span></Link>
                                    <p className='text-primary'>{date}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div> */}
    </div>
  );
};

export default SideBar;
