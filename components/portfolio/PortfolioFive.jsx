"use client"

import React ,{useState,useEffect} from "react";

import Link from "next/link";
import Image from "next/image";

const portfolioMenu = [
  "All",
  "Branding",
  "Web Design",
  "Illustration",
  "Motion",
];

import {portfolioContentfive} from '../../data/works'

const PortfolioFive = () => {

  const [pageItems, setPageItems] = useState([])
  const [tabActive, setTabActive] = useState('All')
  useEffect(() => {

    if (tabActive == 'All') {
      setPageItems(portfolioContentfive)
      
    }
    else{

      const fiteredItems = portfolioContentfive.filter(elm=>elm
                                                .meta
                                                .toLowerCase()
                                                .split(',')
                                                .map(elm=>elm
                                                  .trim())
                                                  .includes(tabActive
                                                    .toLowerCase()
                                                    .trim()))
      setPageItems(fiteredItems)

    }
    
  }, [tabActive])
  return (
    <>
      <div>
        <div className="row">
          <div className="col-lg-7">
            {/* <!--Animated Block--> */}
            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay="0"
            >
              <h2 className="text-uppercase fw-semibold">
                Latest <br />
                Projects
              </h2>
            </div>
          </div>
          {/* End .col */}

          <div className="col-lg-5">
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{
                "--ptf-xxl": " 0.625rem",
                "--ptf-lg": "1.875rem",
              }}
            ></div>
            {/* <!--Animated Block--> */}
            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay="0"
            >
              <div style={{marginBottom:'12px'}} className="ptf-filters ptf-filters--style-4">
                {portfolioMenu.map((item, i) => (

                   <div onClick={()=>setTabActive(item)} className={tabActive == item? "filter-item filter-item-active active-page":'filter-item filter-item-active'} key={i}>
                   {item}
                 </div>
                ))}
              </div>
            </div>
          </div>
          {/* End .col */}

          {/* <!--Spacer--> */}
          <div
            className="ptf-spacer"
            style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
          ></div>
        </div>
        {/* End .container */}

        
          <div >
            {/* {/* <!--Animated Block--> */}

            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay="0"
            >
              <div
                className="ptf-isotope-grid row"
                style={{
                  "--bs-gutter-x": "4.75rem",
                  "--bs-gutter-y": "4.75rem",
                }}
              >
                {pageItems.map((singleItem, i) => (
                  <div className="col-lg-6" key={i}>
                    <article className="ptf-work ptf-work--style-1">
                      <div className="ptf-work__media">
                        <Link
                          className="ptf-work__link"
                          href={`/works/${singleItem.id}`}
                        ></Link>
                        <Image
                      width={1200}
                      height={1200}
                      style={{width : '100%' , height: '100%'}}
                          src={singleItem.img}
                          alt="work-showcase"
                          loading="lazy"
                        />
                      </div>
                      <div className="ptf-work__meta">
                        <div className="ptf-work__category">
                          {singleItem.meta}
                        </div>
                        <h4 className="ptf-work__title">
                          <Link href={`/works/${singleItem.id}`}> {singleItem.title}</Link>
                        </h4>
                      </div>
                    </article>
                  </div>
                ))}
                {/* End .col */}
              </div>
            </div>

            {/* End portfolio */}
          </div>
     
      </div>
    </>
  );
};

export default PortfolioFive;
