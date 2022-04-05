import React from "react";
import Header from "../header/Header";
import "./banner.scss";
const Banner = () => {
  return (
    <div className="banner">
      <Header />
      <div className="banner__content">
        <h1 className="banner__heading">Food App</h1>
        <div className="banner__paths">
          <div className="banner__path active">
            <span>Home</span> <i className="fas fa-ellipsis-h"></i>
          </div>
          <div className="banner__path">
            <span>Home</span> <i className="fas fa-ellipsis-h"></i>
          </div>
          <div className="banner__path">
            <span>Home</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
