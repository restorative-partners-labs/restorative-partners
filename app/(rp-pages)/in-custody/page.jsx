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


            {/*=============================================
                Start Service Section
              ============================================== */}


            {/*=============================================
                Start Portfolio Section
              ============================================== */}
   

            {/*=============================================
                Start Our Approach Section
              ============================================== */}
            <section
              className="has-accent-1-background"
              // style={{
              //   backgroundImage: `url(${
              //     "" + "/assets/img/root/service-bubble.png"
              //   })`,
              //   backgroundRepeat: "no-repeat",
              //   backgroundPosition: "100% calc(100% + 120px)",
              // }}
            >
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
                  <h2 className="h1 large-heading">In Custody</h2>
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
            <section
              className="jarallax jarallax-img"
              style={{
                backgroundImage: `url("/assets/img/about-us-testimonial-background.png")`,
              }}
            >
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-4">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <Image
                        width={1200}
                        height={1200}
                        style={{ width: "100%", height: "100%" }}
                        src="/assets/img/root/quote.png"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xl": "3.75rem" }}
                    ></div>
                  </div>
                  <div className="col-xl-8">
                    <Testimonial />
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Award Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "11.875rem", "--ptf-md": "5.9375rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-4">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading">
                        Our
                        <br />
                        Awards
                      </h2>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-lg": "3.75rem" }}
                    ></div>
                  </div>
                  <div className="col-lg-8">
                    <Award />
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>

            <section>
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
                  <div
                    className="row"
                    style={{
                      "--bs-gutter-x": "3.75rem",
                      "--bs-gutter-y": "7.5rem",
                    }}
                  >
                    <Blog />
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
                End Blog Section
              ============================================== */}
          </div>
        </div>
        {/* End .ptf-main */}

        {/* <!--Footer--> */}
        <footer className="ptf-footer ptf-footer--style-1">
          <div className="container-xxl">
            <div className="ptf-footer__top">
              <Footer />
            </div>
            <div className="ptf-footer__bottom">
              <CopyRight />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomeDefault;
