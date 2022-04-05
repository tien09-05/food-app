import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

import "./user-info.scss";

const UserInfo = () => {
  const { isLogin, userInfo, setIsLogin, setUserInfo } =
    useContext(AuthContext);
  const onSignOut = () => {
    setIsLogin(false);
    setUserInfo({
      name: "",
    });

    toast.success("Sign out success !!!");
  };
  return (
    <Link to="/login" className="user">
      <div className="user__avatar">
        <i className="fa-solid fa-circle-user"></i>
      </div>
      <div className="user__name"> {userInfo.name}</div>
      <span>
        {isLogin ? <span onClick={onSignOut}>Sign Out</span> : "sign in"}
      </span>
    </Link>
  );
};

export default UserInfo;
