import React from "react";
import "./pagination.scss";

interface paginationProps {
  totalPage: number;
  currentPage: number;
  setPage: Function;
}
const Pagination = ({ totalPage, currentPage, setPage }: paginationProps) => {
  const renderPage = (totalPage: number) => {
    const result = [];
    for (let index = 0; index < totalPage; index++) {
      result.push(
        <div
          className={`pagination__item ${
            currentPage === index + 1 ? "active" : ""
          }`}
          key={index}
          onClick={() => jumpPage(index + 1)}
        >
          {index + 1}
        </div>
      );
    }
    return result;
  };

  const nextPage = () => {
    const newPage = Math.min(currentPage + 1, totalPage);
    setPage(newPage);
  };
  const prevPage = () => {
    const newPage = Math.max(currentPage - 1, 1);
    setPage(newPage);
  };
  const jumpPage = (page: number) => {
    setPage(page);
  };
  return (
    <div className="pagination">
      <div
        className="pagination__item pagination__item--prev "
        onClick={prevPage}
      >
        Prev
      </div>
      {renderPage(totalPage)}
      <div
        className="pagination__item pagination__item--next"
        onClick={nextPage}
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
