import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import SectionTitle from "../ui/sectionTitle"
import faq_img from "@/assets/images/faq-image.jpg"
import SectionSidebarImg from "../ui/sectionSidebarImg"

const faqData = [
    {
        id: "1",
        question: "What Interior Design Services Do You Offer?",
        ans: `
        Our interior design services encompass a wide range of offerings, including color consultation, furniture selection, space planning, decor styling, and more. We work closely with you to create spaces that reflect your vision and practical needs.
        `
    },
    {
        id: "2",
        question: "How Can You Help with Architectural Planning?",
        ans: `
        Our interior design services encompass a wide range of offerings, including color consultation, furniture selection, space planning, decor styling, and more. We work closely with you to create spaces that reflect your vision and practical needs.
        `
    },
    {
        id: "3",
        question: "What Do You Mean by Sustainable Design Solutions?",
        ans: `
        Our interior design services encompass a wide range of offerings, including color consultation, furniture selection, space planning, decor styling, and more. We work closely with you to create spaces that reflect your vision and practical needs.
        `
    },
    {
        id: "4",
        question: "What Can I Expect from Your Room Makeover Services?",
        ans: `
        Our interior design services encompass a wide range of offerings, including color consultation, furniture selection, space planning, decor styling, and more. We work closely with you to create spaces that reflect your vision and practical needs.
        `
    },
    {
        id: "5",
        question: "How Do Your Lighting Design Services Work?",
        ans: `
        Our interior design services encompass a wide range of offerings, including color consultation, furniture selection, space planning, decor styling, and more. We work closely with you to create spaces that reflect your vision and practical needs.
        `
    },

]
const Faq = ({className}) => {
    return (
        <section className={`pt-20 ${className}`}>
            <div className="container-fluid">
                <SectionTitle sectionName={"FAQ"} sectionTitle={"Design Insights Unveiled"} sectionDesc={"Answers to Your Design Questions"} />
            </div>
            <div className="container lg:pt-30 2sm:pt-20 pt-14">
                <div className="grid lg:grid-cols-[40%_auto] items-center gap-17.5">
                    <div>
                        <SectionSidebarImg img={faq_img} section_name={"faq-background"} />
                    </div>

                    <div>
                        <Accordion type="single" defaultValue="1" collapsible>
                            {
                                faqData.map(({ id, ans, question }) => {
                                    return (
                                        <AccordionItem value={id} className='mb-2.5'>
                                            <AccordionTrigger className="text-xl font-semibold border border-primary sm:px-12.5 px-6">{question}</AccordionTrigger>
                                            <AccordionContent className="mt-[22px] sm:px-12.5 px-6">
                                                {ans}
                                            </AccordionContent>
                                        </AccordionItem>
                                    )
                                })
                            }


                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq