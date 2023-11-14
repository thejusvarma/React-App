import React from "react";
import { Link } from "react-router-dom";

export default function  Navbar(prop)
{
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
  };
    return (
      <>
      
        <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
    <div className="container-fluid">
        {/* title data passed here */}
      <Link className="navbar-brand" to="/">{prop.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mt-3 mt-lg-1">
          <li className="nav-item">
            <Link className="nav-Link active " aria-current="page" style={linkStyle}  to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-Link active " aria-current="page" style={linkStyle}  to="/about">About</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-Link active " aria-current="page" style={linkStyle}  to="/textform">Form</Link>
          </li>
        </ul>
        <form className="d-flex">
        <div className={`form-check form-switch text-${prop.toggle.color}`}>
              <input class="form-check-input" type="checkbox" onClick={prop.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label class="form-check-label" for="flexSwitchCheckDefault">{prop.toggle.text}</label>
        </div>
        </form>
      </div>
    </div>
  </nav>
</>
    )
}