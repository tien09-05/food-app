import React, { useContext } from "react";
import CheckoutForm from "../../components/checkout-form/CheckoutForm";
import UserInfo from "../../components/user-info/UserInfo";
import { CartContext } from "../../context/CartContext";
import "./checkout.scss";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => (totalPrice += item.quantity * item.price));
    return totalPrice;
  };
  return (
    <div className="checkout">
      <div className="checkout__wrapper container">
        <div className="checkout__left">
          <div className="checkout__left-title">Contact information</div>
          <div className="checkout__left-user">
            <UserInfo />
          </div>
          <label className="checkout__left-label">
            <input type="checkbox" name="" id="" />
            Keep me up to date on news and offers
          </label>

          <CheckoutForm />
        </div>
        <div className="checkout__right">
          <div className="checkout__right__cart">
            {cart.map((item) => (
              <div className="checkout__right__cart-item">
                <img src={item.img} alt="" />
                <div className="checkout__right__cart-item__info">
                  <div className="checkout__right__cart-item__name">
                    {item.name}
                  </div>
                  <div className="checkout__right__cart-item__location">
                    {item.name}
                  </div>
                </div>
                <div className="checkout__right__cart-item__price">
                  {item.price} $
                </div>
              </div>
            ))}
          </div>
          <div className="checkout__right__input-group">
            <input type="text" placeholder="Enter your code" />
            <button className="checkout__right__btn">APPLY</button>
          </div>
          <div className="checkout__right__fee-list">
            <div className="checkout__right__fee">
              <span>Discount</span>
              <span>$0</span>
            </div>
            <div className="checkout__right__fee">
              <span>Shipping Cost</span>
              <span>Free</span>
            </div>
            <div className="checkout__right__fee">
              <span>Taxes (estimated)</span>
              <span>$0</span>
            </div>
          </div>
          <div className="checkout__right__total-price">
            <span>Total</span>
            <span>{getTotalPrice()} $</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
