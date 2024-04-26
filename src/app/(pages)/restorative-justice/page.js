import AboutTwo from "@/components/section/about/aboutTwo";
import Expertise from "@/components/section/expertise";
import Feedback from "@/components/section/feedback";
import TeamCardOne from "@/components/ui/cards/teamCardOne";
import SectionTitle from "@/components/ui/sectionTitle";
import { teamData } from "@/lib/fackData/teamData";
import { cardSlideAnimation } from "@/lib/utils";
import Faq from "@/components/section/faq";

export const metadata = {
  title: "Restorative Partners - Restorative Justice",
  description: "Architronix is a next js and tailwind css website",
};
const AboutUs = () => {
  return (
    <>
      <Faq />
      <Feedback />
    </>
  );
};

export default AboutUs;
