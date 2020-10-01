import React from "react";
import "./aboutme.css";
import myPic from "../assets/my.jpg";
function AboutMe({ props }) {
  return (
    <div className="aboutme">
      <div className="description">
        <h2>About Me</h2>
        <p>
          I create artistic T-shirts and Wall Art printed by me and painted,
          still by me, with my unique technique, using PERMANENT COLORS with 3D
          effect.
        </p>
        <p>
          {" "}
          Each t-shirt is then packaged in a nice box made of recycled
          cardboard.
        </p>
        <p>
          I do everything by myself...from the idea down to the final product,
          photos, descriptions, contact with customers, post office...all!
        </p>
        <p>
          Each t-shirt or canvas is exclusive and unique, different from all the
          others for some particulars. What I love most about my job is my
          freedom. Thank you for stopping by in my Quortshirts shop! At the
          bottom of this page you can find the buttons to my social accounts.
        </p>
      </div>
      <div className="image">
        <img src={myPic} alt="" />
      </div>
    </div>
  );
}

export default AboutMe;
