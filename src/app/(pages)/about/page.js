import AboutTwo from "@/components/section/about/aboutTwo";
import Expertise from "@/components/section/expertise";
import Feedback from "@/components/section/feedback";
import AboutGoals from "@/components/section/about/aboutGoals";

export const metadata = {
  title: "About Restorative Partners",
  description: "Architronix is a next js and tailwind css website",
};
const AboutUs = () => {
  return (
    <>
      <AboutTwo />
      <AboutGoals />
      <Feedback />
    </>
  );
};

export default AboutUs;
