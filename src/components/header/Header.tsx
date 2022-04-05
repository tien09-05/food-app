import React, { useContext, useEffect, useRef } from "react";
import "./header.scss";
import logo from "../../assets/img/logo.svg";
import UserInfo from "../user-info/UserInfo";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
const Header = () => {
  const navbarRef = useRef<HTMLUListElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const { cart, setIsOpen } = useContext(CartContext);

  const toggleNavbar = () => {
    navbarRef.current?.classList.toggle("active");
  };

  useEffect(() => {
    const changeBackgroundHeader = () => {
      if (window.pageYOffset > 50) {
        headerRef.current?.classList.add("bg-black");
      } else {
        headerRef.current?.classList.remove("bg-black");
      }
    };
    window.addEventListener("scroll", changeBackgroundHeader);
  }, []);
  return (
    <div className="header" ref={headerRef}>
      <div className="header__nav container">
        <div className="header__nav__mobile" onClick={toggleNavbar}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="header__nav__left">
          <Link to="/" className="header__nav__left__logo">
            <img src={logo} alt="" />
          </Link>
          <ul
            className="header__nav__left__list"
            ref={navbarRef}
            onClick={toggleNavbar}
          >
            <div className="header__nav__left__list__user hide-on-pc">
              <UserInfo />
            </div>
            <li className="header__nav__left__list__item">
              <a href="_#">
                <i className="fa-solid fa-house"></i>
                <span>Pages</span>
              </a>
            </li>
            <li className="header__nav__left__list__item">
              <a href="_#">
                <i className="fas fa-newspaper"></i>
                <span>News</span>
              </a>
            </li>
            <li className="header__nav__left__list__item">
              <a href="_#">
                <i className="fas fa-utensils"></i>
                <span>Order Online</span>
              </a>
            </li>
            <li className="header__nav__left__list__item">
              <a href="_#">
                <i className="fas fa-store-alt"></i>
                <span>Store Location</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="header__nav__right">
          <div
            className="header__nav__right__cart"
            onClick={() => setIsOpen(true)}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="header__nav__right__cart__badge">
              {cart.length}
            </span>
          </div>
          <div className="header__nav__right__user hide-on-tablet">
            <UserInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
