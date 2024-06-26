import React from "react";

function Header() {
  return (
    <div className="contain">
     
      <lable className="l2">ABOUT </lable>
      <lable className="l2">SERVICES</lable>
      <img
        className="img1"
        src="https://www.sliderrevolution.com/wp-content/uploads/revslider/barber-shop-header/barber-shop-logo.png"
      ></img>
      <lable className="l3">BARBERS </lable>
      <lable className="l3">CONTACTS </lable>

      <div className="bar">
        <div className="bar1"></div>
        <div className="bar1"></div>
        <div className="bar1"></div>
      </div>
    </div>
  );
}

export default Header;
