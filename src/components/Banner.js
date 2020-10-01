import React from "react";
import "./banner.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
function Banner() {
  return (
    <div className="banner">
      <Carousel
        className="banner__carousel"
        interval={3000}
        fade={true}
        indicators={false}
      >
        <Carousel.Item className="banner__item1">
          <Carousel.Caption
            style={{ color: "black" }}
            className="banner__caption"
          >
            <h2>Cotton Fabric</h2>
            <p>Very Smooth</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="banner__item2">
          <Carousel.Caption
            style={{ color: "white" }}
            className="banner__caption"
          >
            <h2>Custom Shirts</h2>
            <p>Footbal Teams</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="banner__item3">
          <Carousel.Caption
            style={{ color: "black" }}
            className="banner__caption"
          >
            <h2>Third slide label</h2>
            <p>hello</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
