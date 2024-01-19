import Link from "next/link";
import HeaderDefault from "../../../components/header/HeaderDefault";
import Pricing from "../../../components/pricing/Pricing";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";

export const metadata = {
  title: "Pricing  || Moonex Portfolio and Agency NextJS Template",
};

const Pricings = () => {
  return (
    <>
      <HeaderDefault />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--pricing">
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-10">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">Pricing & Plan</h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-24">
                      We provide much types of plan for your purpose with an
                      affordable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>
          </section>
          {/* End pricing top section title */}

          <section>
            <div className="container">
              <div
                className="row"
                style={{ "--bs-gutter-x": "2rem", "--bs-gutter-y": "2.5rem" }}
              >
                <Pricing />
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.875rem", "--ptf-md": "3.4375rem" }}
              ></div>
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                <p className="fz-24">
                  You have a large team?
                  <Link
                    className="has-accent-4 text-decoration-underline"
                    href="/contact"
                  >
                    Contact us
                  </Link>
                  for information about more enterprise options.
                </p>
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>
        </div>
      </div>

      {/*=============================================
        Start Footer
        ============================================== */}
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
    </>
  );
};

export default Pricings;
