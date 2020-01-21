import React from "react";

export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* ENABLE navbar-brand TO ALIGN TOGGLER ON THE RIGHT ALIGNMENT */}
        {/* <span className="navbar-brand"></span> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                About <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Menus <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Event <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Catering <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Reservations <span className="sr-only"></span>
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
