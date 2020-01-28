import React, { useState } from "react";
import styles from "./Pagination.modules.css";
import Button from "./Button"

export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, elementToShow }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }


    if(elementToShow !== 'TestIntro'){
  return (
    <nav>
      <div className="pagination">
          
        {pageNumbers.map(number => (
          <div key={number} className="pageItem">
            <Button
              tabIndex={-1}
              onClick={()  => {
               paginate(number)
              }}
              className={number === currentPage ? 'regularButton current' : 'regularButton' }
            >
                
              {number}
            </Button>
          </div>
        ))}
      </div>
    </nav>
  );}
  else {
    return null
  }
};
