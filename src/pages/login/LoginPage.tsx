import React, { useContext } from "react";
import "./login-page.scss";
import { AuthContext } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import app from "../../firebase";
app();
const LoginPage = () => {
  const { setIsLogin, setUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const onHandleLogin = (provider: any) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        setIsLogin(true);
        setUserInfo({ name });
        toast.success("Login success!!!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="login-page container">
      <div className="login-page__wrapper">
        <div className="login-page__img">
          <img
            src="https://food-g-app.web.app/static/media/thumb.a547c0a3.svg"
            alt=""
          />
        </div>
        <div className="login-page__content">
          <div className="login-page__title">JOIN WITH US</div>
          <div className="login-page__message">
            Don't have an account?{" "}
            <span onClick={() => toast.info("Feature not available!!!")}>
              Create an account
            </span>
          </div>
          <form className="login-page__form">
            <div className="login-page__input-group">
              <label htmlFor="">Email address</label>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="login-page__input-group">
              <label htmlFor="">Password</label>
              <input type="text" placeholder="Enter your password" />
            </div>
            <button type="submit" className="login-page__btn-submit">
              LOG IN
            </button>
          </form>
          <div className="login-page__separate">
            <span>OR</span>
          </div>
          <div className="login-page__options">
            <button
              className="login-page__option"
              onClick={() => onHandleLogin(facebookProvider)}
            >
              Facebook login
            </button>

            <button
              className="login-page__option"
              onClick={() => onHandleLogin(googleProvider)}
            >
              Google login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
