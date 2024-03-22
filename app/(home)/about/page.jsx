import Link from "next/link";

import Award from "../../../components/award/Award";

import Blog from "../../../components/blog/Blog";
import Brand from "../../../components/brand/Brand";
import Counter from "../../../components/counter/Counter";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderHomeDefault from "../../../components/header/HeaderHomeDefault";
import HeroDefault from "../../../components/hero/HeroDefault";
import Portfolio from "../../../components/portfolio/Portfolio";
import Approach from "../../../components/service/Approach";
import ServiceOne from "../../../components/service/ServiceOne";
import Testimonial from "../../../components/testimonial/Testimonial";
import Image from "next/image";
import HeaderAgency from "@/components/header/HeaderAgency";
import FooterTwo from "@/components/footer/FooterTwo";
import CopyRightTwo from "@/components/footer/copyright/CopyRightTwo";

export const metadata = {
  title: "Home Default || Moonex Portfolio and Agency NextJS Template",
};

const HomeDefault = () => {
  return (
    <div className="ptf-site-wrapper animsition  ptf-is--home-default">
      {/* End Page SEO Content */}

      <HeaderAgency />
      {/* End Header Default */}

      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-default">
            {/*=============================================
                Start Hero Section
              ============================================== */}
            <section className="has-accent-1-background">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "15rem" }}
              ></div>
              <div className="container-xxl">
                <HeroDefault />
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Service Section
              ============================================== */}

            {/*=============================================
                Start Portfolio Section
              ============================================== */}

            {/*=============================================
                Start Our Approach Section
              ============================================== */}
            <section className="has-accent-1-background">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading">Our Approach</h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": " 3.75rem" }}
                ></div>
                <Approach />
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Brand and Counterup Section
              ============================================== */}

            {/*=============================================
                Start Jaralax Testimonial Section
              ============================================== */}

            {/*=============================================
                Start Award Section
              ============================================== */}

            {/*=============================================
                End Blog Section
              ============================================== */}
          </div>
        </div>
        {/* End .ptf-main */}

        {/* <!--Footer--> */}
        <footer className="ptf-footer ptf-footer--style-3">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 offset-xl-2">
                <div className="ptf-footer__top">
                  <FooterTwo />
                </div>
                {/* End .ptf-footer__top */}

                <div className="ptf-footer__bottom">
                  <CopyRightTwo />
                </div>
                {/* End .ptf-footer__bottom */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomeDefault;
