import Link from "next/link";

import { serviceContenttwo } from "../../data/service";

const ServiceTwo = () => {
  return (
    <>
      {serviceContenttwo.map((item, i) => (
        <div className="col-12 col-md-6 col-lg-4" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            <h6 className="fz-16 text-uppercase has-3-color fw-normal">
              Branding
            </h6>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "2.8125rem" }}
            ></div>
            {/* <!--Services List--> */}
            <ul className="ptf-services-list ptf-services-list--style-2">
              {item.serviceList.map((val, i) => (
                <li key={i}>
                  <Link
                    href={`/service/${val.id}`}
                  >
                    {val.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceTwo;
