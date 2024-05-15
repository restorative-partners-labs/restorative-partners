import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "../ui/sectionTitle";
import faq_img from "@/assets/images/faq-image.jpg";
import SectionSidebarImg from "../ui/sectionSidebarImg";

const faqData = [
  {
    id: "1",
    question: "What is Restorative Justice?",
    ans: `
        Our interior design services encompass a wide range of offerings, including color consultation, furniture selection, space planning, decor styling, and more. We work closely with you to create spaces that reflect your vision and practical needs.
        `,
  },
  {
    id: "2",
    question: "What services are available ?",
    ans: `
        Our interior design services encompass a wide range of offerings, including color consultation, furniture selection, space planning, decor styling, and more. We work closely with you to create spaces that reflect your vision and practical needs.
        `,
  },
  {
    id: "3",
    question: "How does Restorative Justice affect the community?",
    ans: `
        Our interior design services encompass a wide range of offerings, including color consultation, furniture selection, space planning, decor styling, and more. We work closely with you to create spaces that reflect your vision and practical needs.
        `,
  },
  {
    id: "4",
    question: "How do I start my Restorative Justise journey?",
    ans: `
        Our interior design services encompass a wide range of offerings, including color consultation, furniture selection, space planning, decor styling, and more. We work closely with you to create spaces that reflect your vision and practical needs.
        `,
  },
  {
    id: "5",
    question: "How can I help promote Restorative Justice?",
    ans: `
        Our interior design services encompass a wide range of offerings, including color consultation, furniture selection, space planning, decor styling, and more. We work closely with you to create spaces that reflect your vision and practical needs.
        `,
  },
];
const Faq = ({ className, faqData, title }) => {
  return (
    <section className={`pt-20 ${className}`}>
      <div className="container-fluid">
        <SectionTitle sectionName={title ? title : ""} />
      </div>
      <div className="container lg:pt-30 2sm:pt-20 pt-14 lg:pb-30">
        <div className="grid lg:grid-cols-[100%_auto] items-center gap-17.5">
          {/* <div>
            <SectionSidebarImg img={faq_img} section_name={"faq-background"} />
          </div> */}

          <div>
            <Accordion type="single" defaultValue="1" collapsible>
              {faqData.map(({ id, ans, question }) => {
                return (
                  <AccordionItem value={id} className="mb-2.5">
                    <AccordionTrigger className="text-xl font-semibold border border-primary sm:px-12.5 px-6">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="mt-[22px] sm:px-12.5 px-6">
                      <div dangerouslySetInnerHTML={{ __html: ans }} />
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
