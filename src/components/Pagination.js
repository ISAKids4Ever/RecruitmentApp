import React from "react";
import styles from "./Pagination.modules.css";

export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  let currentPageClass = [];
  if(currentPage){
    currentPageClass[currentPage]="current"
  } else {
    currentPageClass[currentPage]="pageLink"
  }
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
