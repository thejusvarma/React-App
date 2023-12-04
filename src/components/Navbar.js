import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function  Navbar(prop)
{
  // below two lines just helps in darken the tag text which is currently openend
  let location = useLocation();
  const mystyle = { "fontWeight": "bold"  }

    return (
      <>
    <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
    <div className="container-fluid">
        {/* title data passed here */}
      <Link className="navbar-brand" to="/">{prop.title}</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mt-3 mt-lg-1">
          <li className="nav-item">
          <Link className="nav-Link active" aria-current="page" style={{...prop.link,...location.pathname==="/"?mystyle:""}}  to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-Link" aria-current="page" style={{...prop.link,...location.pathname==="/about"?mystyle:""}} to="/about">About</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-Link" aria-current="page" style={{...prop.link,...location.pathname==="/textform"?mystyle:""}}  to="/textform">Form</Link>
          </li>
        </ul>
        <form className="d-flex">
        <div className={`form-check form-switch text-${prop.toggle.color}`}>
              <input className="form-check-input" type="checkbox" onClick={prop.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{prop.toggle.text}</label>
        </div>
        </form>
      </div>
    </div>
  </nav>
</>
    )
}