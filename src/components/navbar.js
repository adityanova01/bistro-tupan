import React from "react";

export default function navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* ENABLE navbar-brand TO ALIGN TOGGLER ON THE RIGHT ALIGNMENT */}
        {/* <span className="navbar-brand"></span> */}
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                About <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Menus <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Event <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Catering <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Reservations <span class="sr-only"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
