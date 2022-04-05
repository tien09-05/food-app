import React from "react";
import { Link } from "react-router-dom";
import "./filter.scss";

const filterTypes = [
  {
    displayName: "Burgers",
    icon: `fa-solid fa-burger`,
    link: "/burgers",
  },
  {
    displayName: "Breads",
    icon: ` fa-solid fa-bacon`,
    link: "/breads",
  },
  {
    displayName: "Sandwiches",
    icon: `fa-solid fa-cheese`,
    link: "/sandwiches",
  },
  {
    displayName: "Drinks",
    icon: `fa-solid fa-martini-glass`,
    link: "/drinks",
  },
  {
    displayName: "Pizzas",
    icon: ` fa-solid fa-pizza-slice`,
    link: "/pizzas",
  },
];

interface IFilter {
  setFilter: React.Dispatch<
    React.SetStateAction<{
      name: any;
      gte: any;
      lte: any;
    }>
  >;
}

const Filter: React.FC<IFilter> = (props) => {
  const { setFilter } = props;

  const renderFilterTypeItem = () =>
    filterTypes.map((type) => (
      <li className="filter__type__item" key={type.displayName}>
        <Link to={`${type.link}`}>
          <i className={type.icon}></i>
          {type.displayName}
        </Link>
      </li>
    ));

  const onHandleChangeRadio = ({ name, gte, lte }: any) => {
    setFilter({ name, gte, lte });
  };

  return (
    <div className="filter">
      <div className="filter__title">Popular</div>
      <ul className="filter__type">{renderFilterTypeItem()}</ul>
      <div className="filter__title">Price</div>
      <div className="filter__price">
        <label className="filter__price-radio">
          <input
            type="radio"
            name="price"
            value="test"
            onChange={() =>
              onHandleChangeRadio({ name: "price", gte: 0, lte: 100 })
            }
          />
          Under 100$
        </label>
        <label className="filter__price-radio">
          <input
            type="radio"
            name="price"
            value="test"
            onChange={() =>
              onHandleChangeRadio({ name: "price", gte: 50, lte: 100 })
            }
          />
          50$ to 100$
        </label>
        <label className="filter__price-radio">
          <input
            type="radio"
            name="price"
            value="test"
            onChange={() =>
              onHandleChangeRadio({ name: "price", gte: 0, lte: 50 })
            }
          />
          Under 50$
        </label>
        <label className="filter__price-radio">
          <input
            type="radio"
            name="price"
            value="test"
            onChange={() =>
              onHandleChangeRadio({ name: "price", gte: 100, lte: null })
            }
          />
          Above 100$
        </label>
      </div>
    </div>
  );
};

export default Filter;
