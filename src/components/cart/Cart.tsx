import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";

import "./cart.scss";
interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

const Cart = () => {
  const { isOpen, setIsOpen, cart } = useContext(CartContext);

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => (totalPrice += item.quantity * item.price));
    return totalPrice;
  };

  return (
    <div className={`cart ${isOpen ? "active" : ""}`}>
      <div className="cart__overlay" onClick={() => setIsOpen(!isOpen)}></div>
      <div className="cart__heading">
        <div className="cart__title">SHOPPING CART</div>
        <i className="fas fa-times" onClick={() => setIsOpen(!isOpen)}></i>
      </div>
      <div className="cart__body">
        {cart.map((item) => (
          <CartFood
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className="cart__footer">
        <div className="cart__total">
          <span className="cart__total-text">Total</span>
          <span className="cart__total-price">{getTotalPrice()} $</span>
        </div>
        <div className="cart__btns">
          <Link
            to="/checkout"
            className="cart__btn cart__btn-checkout"
            onClick={() => setIsOpen(!isOpen)}
          >
            Checkout
          </Link>
          <div
            className="cart__btn cart__btn-buymore"
            onClick={() => setIsOpen(!isOpen)}
          >
            Buy more
          </div>
        </div>
      </div>
    </div>
  );
};
const CartFood: React.FC<ICartItem> = (props) => {
  const { img, name, price, quantity, id } = props;

  const { increQuantity, decreQuantity, deleteItem } = useContext(CartContext);
  return (
    <div className="cart__food">
      <img src={img} alt="" className="cart__food-img" />
      <div className="cart__food-info">
        <div className="cart__food-name">{name}</div>
        <div className="cart__food-price">{price}$</div>
        <div className="cart__food-control">
          <div
            className="cart__food-control-btn"
            onClick={() => decreQuantity(id)}
          >
            -
          </div>
          <span className="cart__food-control-quantity">{quantity}</span>
          <div
            className="cart__food-control-btn"
            onClick={() => increQuantity(id, 1)}
          >
            +
          </div>
        </div>
      </div>
      <div
        className="cart__food-trash"
        onClick={() => {
          deleteItem(id);
          toast.success("Delete item success !!!");
        }}
      >
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
};
export default Cart;
