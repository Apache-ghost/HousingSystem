import React from "react";
import "./Hero.css";
import "../../index.css";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-Container ">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Find Your Dream
              <br /> Home Today <br />
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span>are you ready to strat the search for your home?</span>
            <span>Look no futher Move-in is Here for you.</span>
            <div className="flexCenter search-bar">
              <input type="text" />
              <button className="button">Search</button>
            </div>
          </div>
          <div className="FlexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={848} end={3930} duration={4} />
                <span>+</span>
              </span>
              <span> Prenium Products</span>
            </div>
          </div>
          <div className="FlexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={238} end={1250} duration={4} />
                <span>+</span>
              </span>
              <span>Satisfied Customers</span>
            </div>
          </div>
          <div className="FlexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp end={10} />
                <span>+</span>
              </span>
              <span>Awards Winnings</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./public\images\hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
