import React from "react";
import { Link } from "react-router-dom";
import "./success.scss";
const Success = () => {
  return (
    <div className="success">
      <div className="success__wrapper container">
        <i className="fas fa-check-circle success__icon"></i>
        <h4 className="success__message">Your purchase was successfull 🍔</h4>
        <Link to="/" className="success__btn">
          <svg
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            width="20px"
            fill="red"
          >
            <path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
          <span> Buy more</span>
        </Link>
      </div>
    </div>
  );
};

export default Success;
