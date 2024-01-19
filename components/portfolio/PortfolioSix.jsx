"use client"

import React ,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";



const portfolioMenu = [
  "All",
  "Branding",
  "Packaging",
  "Illustration",
  "Motion",
  "Animation",
];

import {portfolioContentsix} from '../../data/works'

const PortfolioSix = () => {
  const [pageItems, setPageItems] = useState([])
  const [tabActive, setTabActive] = useState('All')
  useEffect(() => {

    if (tabActive == 'All') {
      setPageItems(portfolioContentsix)
      
    }
    else{

      const fiteredItems = portfolioContentsix.filter(elm=>elm
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
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div className="ptf-filters ptf-filters--style-1" style={{marginBottom:'30px'}}>
            {portfolioMenu.map((item, i) => (
              <div onClick={()=>setTabActive(item)} className={tabActive == item? "filter-item active-page":'filter-item'} key={i}>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
        ></div>

        
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
                          alt="work"
                          loading="lazy"
                        />
                      </div>
                      <div className="ptf-work__meta">
                        <div className="ptf-work__category">
                          {singleItem.meta}
                        </div>
                        <h4 className="ptf-work__title">
                          <Link href={`/works/${singleItem.id}`}>{singleItem.title}</Link>
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

export default PortfolioSix;
