import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

import { toast } from "react-toastify";

import "./checkout-form.scss";
const CheckoutForm = () => {
  const { isLogin } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();
  const onHandleCheckout = () => {
    if (!isLogin) {
      toast.error("Please login to continue !!!");
      return;
    }
    if (cart.length <= 0) {
      toast.error("Cart is empty !!!");
      return;
    }

    toast.success("Checkout success !!!");
    navigate("/success");
  };
  return (
    <form className="checkout-form">
      <h3 className="checkout-form__title">Shipping address</h3>
      <div className="checkout-form__row">
        <input
          className="checkout-form__input-half"
          placeholder="First Name"
        ></input>
        <input
          className="checkout-form__input-half"
          placeholder="Last Name"
        ></input>
      </div>
      <div className="checkout-form__row">
        <input
          className="checkout-form__input-full"
          placeholder="Email "
        ></input>
      </div>
      <div className="checkout-form__row">
        <input
          className="checkout-form__input-half"
          placeholder="Country"
        ></input>
        <input
          className="checkout-form__input-half"
          placeholder="Phone"
        ></input>
      </div>
      <div className="checkout-form__row">
        <Link to="/" className="checkout-form-btn-back">
          &#60; Return to shop
        </Link>
        <div className="checkout-form-btn-checkout" onClick={onHandleCheckout}>
          Checkout
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
