import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const linkstyle={
        textDecoration:"none",
        color:"red",
    }
    const listStyle={
        margin:"20px",
    }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item" style={listStyle}>
            <Link to={"/"} style={linkstyle}>
                Home
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            <Link to={"/about"} style={linkstyle}>
                About
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            <Link to={"/contact"} style={linkstyle}>
              contact
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            <Link to={"/setting"} style={linkstyle}>
              setting
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
