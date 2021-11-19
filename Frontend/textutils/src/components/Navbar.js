import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import moon from "../assets/svg-icon/cloud-moon-solid.svg";
import sun from "../assets/svg-icon/cloud-sun-solid.svg";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode === "light" ? "light" : "dark"
      } bg-${props.mode === "light" ? "light" : "dark"}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/handwritten">
                To Handwritten
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                color: `${props.mode === "light" ? "black" : "white"}`,
                backgroundColor: `${
                  props.mode === "light" ? "white" : "#495057"
                }`,
              }}
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
          <div className="mx-2">
            <img
              src={props.mode === "light" ? moon : sun}
              style={
                props.mode === "dark"
                  ? {
                      filter:
                        " invert(94%) sepia(17%) saturate(3848%) hue-rotate(2deg) brightness(106%) contrast(108%)",
                    }
                  : {
                      filter:
                        "invert(0%) sepia(88%) saturate(7450%) hue-rotate(245deg) brightness(80%) contrast(100%)",
                    }
              }
              height="30px"
              width="auto"
              type="button"
              alt="Mode Change icon"
              onClick={props.toggleMode}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "Set About",
};
