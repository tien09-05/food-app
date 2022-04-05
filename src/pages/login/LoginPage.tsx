import React, { useContext } from "react";
import ReactFacebookLogin from "react-facebook-login";
import "./login-page.scss";
import { AuthContext } from "../../context/AuthContext";

import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
const LoginPage = () => {
  const { setIsLogin, setUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const responseGoogle = (res: any) => {
    setIsLogin(true);
    setUserInfo({
      name: res.profileObj.name,
    });
    toast.success("Login success!!!");
    navigate("/");
  };
  const responseFaceBook = (res: any) => {
    setIsLogin(true);
    setUserInfo({
      name: res.name,
    });
    navigate("/");
  };
  const componentClicked = (res: object) => {
    console.log(res);
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
            <button className="login-page__option">
              <ReactFacebookLogin
                appId="915944908999650"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFaceBook}
              />
            </button>

            <button className="login-page__option">
              <GoogleLogin
                clientId="106530942218-9lhntp18c9a56o5j3h7hd8dsd2qa47f7.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
