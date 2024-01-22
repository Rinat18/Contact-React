import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Contact-book</div>
      <div className="nav-routes">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/add"}>Add Contact</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
