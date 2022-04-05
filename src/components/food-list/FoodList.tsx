import React from "react";
import FoodItem from "../food-item/FoodItem";
import "./food-list.scss";

interface foodListProps {
  foodList: Array<{
    country: string;
    dsc: string;
    id: string;
    img: string;
    name: string;
    price: number;
    rate: number;
  }>;
}
const FoodList = (props: foodListProps) => {
  const { foodList } = props;

  return (
    <div className="food-list">
      {foodList &&
        foodList.map((food) => (
          <FoodItem
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            country={food.country}
            dsc={food.dsc}
            img={food.img}
            rate={food.rate}
          />
        ))}
    </div>
  );
};

export default FoodList;
