"use client";

import React from "react";

const Pagination = ({ pageNumber, setPageNumber, blogContentfive }) => {
  const handlePrevious = () => {
    if (pageNumber == 1) {
    } else {
      setPageNumber((pre) => pre - 1);
    }
  };
  const handleNext = () => {
    if (Math.ceil(blogContentfive.length / 4) > pageNumber) {
      setPageNumber((pre) => pre + 1);
    }
  };

  // {blogContentfive.slice((pageNumber - 1) * 7, pageNumber * 7).map(elm=>
  return (
    <>
      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block">
        <ul className="ptf-page-navigation">
          <li onClick={handlePrevious} className="next">
            <i className="lnil lnil-chevron-left"></i>
          </li>

          <li
            className={pageNumber == 1 ? "is-active" : ""}
            onClick={() => setPageNumber(1)}
          >
            1
          </li>
          {blogContentfive.length > 4 ? (
            <li
              className={pageNumber == 2 ? "is-active" : ""}
              onClick={() => setPageNumber(2)}
            >
              2
            </li>
          ) : (
            ""
          )}
          {blogContentfive.length > 8 ? (
            <li
              className={pageNumber == 3 ? "is-active" : ""}
              onClick={() => setPageNumber(3)}
            >
              3
            </li>
          ) : (
            ""
          )}

          {blogContentfive.length > 16 && pageNumber != 4 && <li>...</li>}
          {pageNumber > 3 &&
            Math.ceil(blogContentfive.length / 4) != pageNumber && (
              <li className="is-active">{pageNumber}</li>
            )}
          {blogContentfive.length > 16 &&
            pageNumber < Math.ceil(blogContentfive.length / 4) - 1 &&
            pageNumber > 3 && <li className="">...</li>}
          {blogContentfive.length > 13 ? (
            <li
              className={
                pageNumber == Math.ceil(blogContentfive.length / 4)
                  ? "is-active"
                  : ""
              }
              onClick={() =>
                setPageNumber(Math.ceil(blogContentfive.length / 4))
              }
            >
              {Math.ceil(blogContentfive.length / 4)}
            </li>
          ) : (
            ""
          )}
          <li onClick={handleNext} className="next">
            <i className="lnil lnil-chevron-right"></i>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
