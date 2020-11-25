import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  fetchProduct,
  total,
  limit,
}) => {
  // const pageNumber = [];
  // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  //   pageNumber.push(i);
  // }

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pageNumber.push(i);
  }
  console.log(total, limit, pageNumber, "pagination");

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
                // paginate(number);
                fetchProduct(number);
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
