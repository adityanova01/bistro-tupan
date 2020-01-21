import React from "react";
import firstCard from "../images/cards/card1.jpg";
import secondCard from "../images/cards/card2.jpg";
import thirdCard from "../images/cards/card3.png";

export default function banner() {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl card banner">
            <img src={firstCard} class="card-img-top" alt="Banner" />
          </div>
          <div class="col-xl card banner">
            <img src={secondCard} class="card-img-top" alt="Banner" />
          </div>
          <div class="col-xl card banner">
            <img src={thirdCard} class="card-img-top" alt="Banner" />
          </div>
        </div>
      </div>
      <div class="container buttonCustom">
        <div class="row">
          <div class="col-xl-12">
            <button type="button" class="btn btn-secondary btn-lg">
              Check Our Menus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
