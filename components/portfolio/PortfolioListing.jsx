"use client"

import React ,{useState,useEffect} from "react";
import Image from "next/image";
import dynamic from 'next/dynamic'
const ReactTooltip = dynamic(() => import('react-tooltip'), { ssr : false });
import Link from "next/link";

const portfolioMenu = [
  "All",
  "Branding",
  "Ui/Ux",
  "Packaging",
  "Illustration",
  "Motion",
  "Animation",
];

import {portfolioContentlisting} from '../../data/works'

const PortfolioListing = () => {
  const [pageItems, setPageItems] = useState([])
  const [tabActive, setTabActive] = useState('All')
  useEffect(() => {

    if (tabActive == 'All') {
      setPageItems(portfolioContentlisting)
      
    }
    else{

      const fiteredItems = portfolioContentlisting.filter(elm=>elm
        .cat
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
            {/* <!--Animated Block--> */}
            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay="0"
            >
              <div className="ptf-isotope-grid">
                <div className=" grid-item ">
                  {/* <!--Portfolio Item--> */}
                  {pageItems.map((val, i) => (
                    <article
                      className="ptf-work ptf-work--style-4"
                      data-tip
                      data-for={val.dataId}
                      key={i}
                    >
                      <Link
                        className="ptf-work__link"
                        href={`/works/${val.id}`}
                      ></Link>
                      <ReactTooltip
                        id={val.dataId}
                        place="right"
                        type="dark"
                        effect="float"
                      >
                        <div className="poup-link">
                          <Image
                      width={1200}
                      height={1200}
                      style={{width : '100%' , height: '100%'}}
                            src={val.imgPopup}
                            alt="popup"
                          />
                        </div>
                      </ReactTooltip>
                      <div className="ptf-work__category">{val.cat}</div>
                      <h4 className="ptf-work__title">{val.title}</h4>
                      <div className="ptf-work__date">{val.date}</div>
                    </article>
                  ))}
                </div>
                <div></div>
                {/* End .grid-item */}
              </div>
              {/* End .ptf-isotope-grid */}
            </div>

            {/* End portfolio */}
          </div>
    
      </div>
    </>
  );
};

export default PortfolioListing;
