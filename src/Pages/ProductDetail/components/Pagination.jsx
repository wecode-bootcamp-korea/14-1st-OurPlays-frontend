import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  console.log(postsPerPage, totalPosts);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  console.log(pageNumber);
  return (
    <div className="Pagination">
      <ul className="pagination-lists">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <a
              href="!#"
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
