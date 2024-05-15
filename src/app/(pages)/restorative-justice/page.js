import AboutTwo from "@/components/section/about/aboutTwo";
import Expertise from "@/components/section/expertise";
import Feedback from "@/components/section/feedback";
import TeamCardOne from "@/components/ui/cards/teamCardOne";
import SectionTitle from "@/components/ui/sectionTitle";
import { teamData } from "@/lib/fackData/teamData";
import { cardSlideAnimation } from "@/lib/utils";
import Faq from "@/components/section/faq";
import { faqRestorativeJusticeData } from "@/lib/fackData/faqData";

export const metadata = {
  title: "Restorative Partners - Restorative Justice",
  description: "Restorative Justice FAQ",
};
const AboutUs = () => {
  return (
    <>
      <SectionTitle
        sectionName={"FAQ"}
        sectionTitle={"Restorative Justice"}
        sectionDesc={
          "Howard Zehr, often referred to as the “godfather” of Restorative Justice (RJ) in the West, traces RJ’s emergence to the 1970s as “an effort to correct some of the weaknesses of the western legal system while building on its strengths. "
        }
      />
      <Faq faqData={faqRestorativeJusticeData} />
      <Feedback />
    </>
  );
};

export default AboutUs;
