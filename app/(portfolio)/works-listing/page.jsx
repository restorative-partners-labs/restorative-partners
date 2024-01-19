import HeaderDefault from "../../../components/header/HeaderDefault";

import CopyRight from "../../../components/footer/copyright/CopyRight";

import Footer from "../../../components/footer/Footer";

import PortfolioListing from "../../../components/portfolio/PortfolioListing";

export const metadata = {
  title: "Works Listing || Moonex Portfolio and Agency NextJS Template",
};

const WorksListing = () => {
  return (
    <>
      <div className="ptf-site-wrapper animsition ptf-is--works-listing">
        {/* End Page SEO Content */}
        <div className="ptf-site-wrapper__inner">
          <HeaderDefault />
          {/* End  HeaderHomeDefault */}

          <div className="main">
            <div className="ptf-page ptf-page--portfolio-listing">
              <section>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                ></div>

                <div className="container-xxl">
                  <div className="row">
                    <div className="col-xl-10">
                      {/* <!--Animated Block--> */}
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                        <h1 className="large-heading">Portfolio</h1>
                      </div>
                    </div>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "4.375rem" }}
                  ></div>
                </div>
                {/* End .container-xxl */}

                {/*=============================================
                Start Portfolio main 
                ============================================== */}
                <div className="container-xxl">
                  <PortfolioListing />
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                ></div>
                <div className="text-center">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <a className="ptf-load-more" href="#">
                      More
                    </a>
                  </div>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                ></div>
              </section>
            </div>
            {/* End .ptf-page */}
          </div>
        </div>
        {/* End .main */}

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
    </>
    // End .ptf-is--blog-grid
  );
};

export default WorksListing;
