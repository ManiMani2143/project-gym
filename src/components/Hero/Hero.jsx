import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from "number-counter";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* the best ad  */}

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>

        {/* the best ad  */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span> <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and build your ideal body and
              live up your Life to fullst
            </span>
          </div>
        </div>

        {/* Figures */}

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>Expert Coachs</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={50} start={0} delay="4" preFix="+" />
            </span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/* Hero Buttons */}

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          whileInView={{ right: "4rem" }}
          initial={{ right: "-1rem" }}
          transition={transition}
          className="heart--rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate </span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero images */}

        <img src={hero_image} className="hero_image" alt="" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          className="hero_image_back"
          alt=""
        />

        {/* calories */}

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
