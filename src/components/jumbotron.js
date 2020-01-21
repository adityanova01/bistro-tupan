import React from "react";

export default function jumbotron() {
  return (
    <div>
      <div className="jumbotron jumbotronImage">
        <h1 className="display-4">Tutup Panci Bistro</h1>
        <p className="lead textHighlights">
          Indonesian Fusion Casual Dining in BSD. Serving your dining
          experience in different way. Tutup Panci can be said to be one of the
          most unique café located in BSD. This café’s theme takes pan in every
          arrangement and interior, starting from lamp, wall decoration and
          display window. Tutup Panci also serves a variety of food, starting
          from local food to western
        </p>
        <hr className="my-4" />
        <p className="textHighlights">
          Open everyday: 9.00 AM - 11.00 PM
          <br />
          Contact number: 0857 18544637
          <br />
          Address: Boulevard Residence, Blok AH Jl. Anggrek Loka, BSD, Serpong,
          Tangerang Selatan
        </p>
        <a className="btn btn-light btn-lg" href="#" role="button">
          Reservations
        </a>
      </div>
    </div>
  );
}
