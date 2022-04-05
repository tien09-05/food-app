import React from "react";
import "./sort.scss";

interface ISort {
  setSort: React.Dispatch<
    React.SetStateAction<{
      name: string;
      order: string;
    }>
  >;
}
const Sort: React.FC<ISort> = (props) => {
  const { setSort } = props;

  const onHandleClick = (name: string, order: string) => {
    setSort({ name, order });
  };

  return (
    <div className="sort">
      <div className="sort__title">
        <span>Sort</span> <i className="fas fa-arrow-down"></i>
      </div>
      <ul className="sort__list">
        <li
          className="sort__item"
          onClick={() => onHandleClick("price", "asc")}
        >
          Price: Low to high
        </li>
        <li
          className="sort__item"
          onClick={() => onHandleClick("price", "desc")}
        >
          Price: High to low
        </li>
        <li className="sort__item" onClick={() => onHandleClick("rate", "asc")}>
          Rate: Low to high
        </li>
        <li
          className="sort__item"
          onClick={() => onHandleClick("rate", "desc")}
        >
          Rate: High to low
        </li>
      </ul>
    </div>
  );
};

export default Sort;
