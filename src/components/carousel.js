import React from "react";
import firstImage from "../images/carousel/carousel1.jpg"
import secondImage from "../images/carousel/carousel2.jpg"
import thirdImage from "../images/carousel/carousel3.jpg"

export default function carousel() {
  return (
    <div>
      <div
        id="carouselIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselIndicators" data-slide-to="1"></li>
          <li data-target="#carouselIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={firstImage} class="d-block w-100" alt="Carousel Image" />
          </div>
          <div class="carousel-item">
            <img src={secondImage} class="d-block w-100" alt="Carousel Image" />
          </div>
          <div class="carousel-item">
            <img src={thirdImage} class="d-block w-100" alt="Carousel Image" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
