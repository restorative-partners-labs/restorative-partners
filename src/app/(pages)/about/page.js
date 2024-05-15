import AboutTwo from "@/components/section/about/aboutTwo";
import Expertise from "@/components/section/expertise";
import Feedback from "@/components/section/feedback";
import AboutGoals from "@/components/section/about/aboutGoals";
import { faqAboutData } from "@/lib/fackData/faqData";
import Faq from "@/components/section/faq";

export const metadata = {
  title: "About Restorative Partners",
  description: "Architronix is a next js and tailwind css website",
};
const AboutUs = () => {
  return (
    <>
      <AboutTwo />
      <Faq faqData={faqAboutData} />
      <Feedback />
    </>
  );
};

export default AboutUs;
