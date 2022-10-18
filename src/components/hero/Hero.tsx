import React from "react";
//style
import "./Hero.scss";
const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroContainer__box">
        <h1>Great recipes for your dining table</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          perspiciatis, cupiditate omnis a perferendis vero officia deleniti
          voluptatibus.
        </p>
        <div className="heroContainer__box--container">
          <img
            className="heroContainer__box--img"
            alt="proffile"
            src={require("../../assets/hero.jpg")}
          />
          <p>Loren Principale</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
