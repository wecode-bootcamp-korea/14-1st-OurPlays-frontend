import React from "react";

const Pagination = ({ fetchProduct, total, limit }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="Pagination">
      <ul className="pagination-lists">
        {pageNumber.map((number, idx) => (
          <li key={number} className="page-item">
            <a
              href="!#"
              data-idx={idx}
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                fetchProduct(e);
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

// const pageNumber = [];
// for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//   pageNumber.push(i);
// }
