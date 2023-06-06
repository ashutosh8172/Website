import React from "react";
import logo from "../Images/download.jpeg";
import { NavLink } from "react-router-dom";
import "../Css/ListStyle.css";

const List = () => {
  return (
    <>
      <header>
        <div className="container container-flex">
          <div className="logoContainer">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <nav>
            <div className="list">
              <NavLink
                exact
                to="/"
                className="listItem"
                activeClassName="activeItem"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="listItem"
                activeClassName="activeItem"
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className="listItem"
                activeClassName="activeItem"
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className="listItem"
                activeClassName="activeItem"
              >
                Contact
              </NavLink>
              <NavLink
                to="/policy"
                className="listItem"
                activeClassName="activeItem"
              >
                Policy
              </NavLink>
            </div>
          </nav>
          <button className="icons">
            <ion-icon name="search"></ion-icon>
          </button>
          <button className="icons">
            <ion-icon name="person"></ion-icon>
          </button>
          <button className="icons">
            <ion-icon name="call"></ion-icon>
          </button>
        </div>
      </header>
    </>
  );
};
export default List;
