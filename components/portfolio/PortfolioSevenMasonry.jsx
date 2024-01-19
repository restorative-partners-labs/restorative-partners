"use client"

import React ,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  768: 2,
  500: 1,
};

const portfolioMenu = [
  "All",
  "Branding",
  "Packaging",
  "Illustration",
  "Motion",
  "Animation",
];

import {portfolioContentmasonry} from '../../data/works'

const PortfolioSevenMasonry = () => {

  const [pageItems, setPageItems] = useState([])
  const [tabActive, setTabActive] = useState('All')
  useEffect(() => {

    if (tabActive == 'All') {
      setPageItems(portfolioContentmasonry)
      
    }
    else{

      const fiteredItems = portfolioContentmasonry.filter(elm=>elm
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
          <div className="ptf-filters ptf-filters--style-1">
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
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid ptf-isotope-grid portfolio-isotope"
                columnClassName="my-masonry-grid_column"
              >
                {pageItems.map((singleItem, i) => (
                  <article className="ptf-work ptf-work--style-1" key={i}>
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
                ))}
                {/* End .col */}
              </Masonry>
            </div>

            {/* End portfolio */}
          </div>
  
      </div>
    </>
  );
};

export default PortfolioSevenMasonry;
