import React, { useState } from "react";
import styles from "./Pagination.modules.css";

export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
    let currentPageClass=[currentPage];
    console.log(currentPageClass)
  const [currentPageClassState, setCurrentPage] = useState(currentPageClass)
  console.log(currentPageClassState)
  for (let i=1; i<=totalPosts.length; i++){
    if(i===currentPage){
        setCurrentPage(["current"])
      }
  }
//   if(currentPage){
//     currentPageClass[currentPage]="current"
//   } else {
//     currentPageClass[currentPage]="pageLink"
//   }

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
              className={currentPageClass[number]}
            >
                
              {number}
            </p>
          </div>
        ))}
      </div>
    </nav>
  );
};
