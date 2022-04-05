import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Cart from "../../components/cart/Cart";
import FoodList from "../../components/food-list/FoodList";
import { URL__API } from "../../constant";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";

import "./detail.scss";

interface food {
  country: string;
  dsc: string;
  id: string;
  img: string;
  name: string;
  price: number;
  rate: number;
}

const Detail = () => {
  const [detailFood, setDetailFood] = useState<food>({
    country: "",
    dsc: "",
    id: "",
    img: "",
    name: "",
    price: 0,
    rate: 0,
  });
  const [relatedFoods, setRelatedFoods] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { pathname } = useLocation();
  const { id } = useParams();
  const endpoint = pathname.split("/")[1];
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`${URL__API}/${endpoint}?id=${id}`)
      .then((res) => setDetailFood(res.data[0]));
  }, [endpoint, id]);
  useEffect(() => {
    axios
      .get(`${URL__API}/${endpoint}?_limit=4`)
      .then((res) => setRelatedFoods(res.data));
  }, [endpoint]);

  useEffect(() => {
    window.scrollTo(0, 200);
  }, [id]);

  const renderStars = (stars: number) => {
    const result = [];
    for (let index = 1; index <= 5; index++) {
      if (index <= stars) {
        result.push(<i className="fa-solid fa-star" key={index}></i>);
      } else {
        result.push(<i className="fa-regular fa-star" key={index}></i>);
      }
    }
    return result;
  };

  return (
    <div className="detail">
      <div className="container">
        <div className="detail__wrapper">
          <div className="detail__img">
            <img src={detailFood.img} alt="" />
          </div>
          <div className="detail__content">
            <div className="detail__name">{detailFood.name} </div>
            <div className="detail__rate">
              <div className="detail__rate-stars">
                {renderStars(detailFood.rate)}
              </div>
              <div className="detail__rate-review">2 Customer Reviews</div>
            </div>
            <div className="detail__price">${detailFood.price}</div>
            <div className="detail__country">
              <span>Country:</span>
              {detailFood.country}
            </div>
            <div className="detail__desc">{detailFood.dsc}</div>
            <hr />
            <div className="detail__control">
              <div className="detail__btns">
                <div
                  className="detail__btn"
                  onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                >
                  -
                </div>
                <div className="detail__quantity">{quantity}</div>
                <div
                  className="detail__btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </div>
              </div>
              <div
                className="detail__add-to-cart"
                onClick={() => {
                  addToCart(detailFood, quantity);
                  toast.success("Add to cart success !!!");
                }}
              >
                <i className="fa-solid fa-cart-plus"></i>
                <span>ADD TO CART</span>
              </div>
            </div>
            <hr />

            <div className="detail__commits">
              <div className="detail__commit">
                <i className="fa-solid fa-truck"></i>
                <span>Free global shipping on all orders</span>
              </div>
              <div className="detail__commit">
                <i className="fa-regular fa-calendar"></i>
                <span>2 hours easy returns if you change your mind</span>
              </div>
              <div className="detail__commit">
                <i className="fa-solid fa-tag"></i>
                <span>Order before noon for same day dispatch</span>
              </div>
            </div>
          </div>
        </div>
        <div className="detail__products">
          <div className="detail__products__yellow-text">Best foods</div>
          <div className="detail__products__heading-text">Related Products</div>
          <FoodList foodList={relatedFoods} />
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Detail;
