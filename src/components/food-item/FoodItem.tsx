import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";

import "./food-item.scss";

interface foodItemProps {
  country: string;
  dsc: string;
  id: string;
  img: string;
  name: string;
  price: number;
  rate: number;
}

const FoodItem: React.FC<foodItemProps> = (props) => {
  const { country, dsc, img, name, price, rate, id } = props;
  let { type } = useParams();

  const { addToCart } = useContext(CartContext);
  const onHandleClickCart = (event: any) => {
    event.preventDefault();

    const cartItem = {
      id,
      name,
      price,
      img,
    };
    toast.success("Add to cart success !!!");
    addToCart(cartItem, 1);
  };

  return (
    <Link to={`/${type}/${id} `} className="food-item">
      <div className="food-item__img-wrapper">
        <img src={img} alt="" className="food-item__img" />
        <span className="food-item__tag">Favorite</span>
        <div className="food-item__btns">
          <div className="food-item__btn" onClick={(e) => onHandleClickCart(e)}>
            <i className="fas fa-shopping-cart"></i>
          </div>
          <div className="food-item__btn">
            <i className="far fa-heart"></i>
          </div>
        </div>
        <div className="food-item__star">
          <i className="fas fa-star"></i>
          <span>{rate}</span>
        </div>
      </div>
      <div className="food-item__body">
        <div className="food-item__name">{name}</div>
        <div className="food-item__desc">{dsc}</div>
        <div className="food-item__info">
          <div className="food-item__info__location">
            <i className="fas fa-map-marker-alt"></i>
            <span>{country}</span>
          </div>
          <div className="food-item__info__price">{Math.ceil(price)}$</div>
        </div>
      </div>
    </Link>
  );
};

export default FoodItem;
