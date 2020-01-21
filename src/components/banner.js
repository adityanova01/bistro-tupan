import React from "react";
import firstCard from "../images/cards/card1.jpg";
import secondCard from "../images/cards/card2.jpg";
import thirdCard from "../images/cards/card3.png";

export default function banner() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md card banner">
            <img src={firstCard} class="card-img-top" alt="Banner" />
          </div>
          <div class="col-md card banner">
            <img src={secondCard} class="card-img-top" alt="Banner" />
          </div>
          <div class="col-md card banner">
            <img src={thirdCard} class="card-img-top" alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  );
}
