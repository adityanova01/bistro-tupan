import React from "react";
import firstImage from "../images/carousel/carousel1.jpg"
import secondImage from "../images/carousel/carousel2.jpg"
import thirdImage from "../images/carousel/carousel3.jpg"

export default function carousel() {
  return (
    <div>
      <div
        id="carouselIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselIndicators" data-slide-to="1"></li>
          <li data-target="#carouselIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={firstImage} className="d-block w-100 kenburns-bottom" alt="Carousel Image" />
          </div>
          <div className="carousel-item">
            <img src={secondImage} className="d-block w-100 kenburns-bottom" alt="Carousel Image" />
          </div>
          <div className="carousel-item">
            <img src={thirdImage} className="d-block w-100 kenburns-bottom" alt="Carousel Image" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
