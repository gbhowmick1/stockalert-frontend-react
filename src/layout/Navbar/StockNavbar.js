import React from "react";
import { Link } from "react-router-dom";

export default function StockNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Enter Stock Name
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div>
            <input type="text" placeholder="Enter Company Name"></input>
          </div>


          <Link className="btn btn-outline-light" to="/adduser">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
}
