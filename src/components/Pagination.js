import React from "react";
import styles from "./Pagination.modules.css";

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination">
        {pageNumbers.map(number => (
          <div key={number} className="pageItem">
            <p
              tabIndex={0}
              onClick={() => {
                paginate(number)
              }}
              className="pageLink"
            >
              {number}
            </p>
          </div>
        ))}
      </div>
    </nav>
  );
};
