import React from "react";
import Logo from "../../assets/logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="hamburger">
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>
      <div className="logo">
        <img src={Logo} alt="Life Boat" />
        <div className="title">
          <h4>SAFE SPACE</h4>
          <p>Rediscover Yourself</p>
        </div>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">FEATURES</a>
          </li>
          <li>
            <a href="">THERAPISTS</a>
          </li>
          <li>
            <a href="">FAQ's</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
