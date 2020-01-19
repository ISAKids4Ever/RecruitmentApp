import React, { useState } from "react";
import styles from "./Pagination.modules.css";

export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  let [currentPageClass, setCurrentPageClass] = useState("pageLink");
 
  console.log(currentPageClass)


  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination">
          
        {pageNumbers.map(number => (
          <div key={number} className="pageItem">
            <p
              tabIndex={-1}
              onClick={()  => {
               paginate(number)
              }}
              className={currentPageClass}
            >
                
              {number}
            </p>
          </div>
        ))}
      </div>
    </nav>
  );
};
