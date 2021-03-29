/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {  BrowserRouter, Link } from "react-router-dom";
import "./style.css";

function Navbar() {
return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">Girverius McFarland</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <BrowserRouter>
        <Link to= "/About" className={ window.location.pathname === "/About" ?"nav-link active" : "nav-link"} aria-current="page">About</Link>
        <Link to= "/portolio" className={ window.location.pathname === "/portfolio" ?"nav-link active" : "nav-link"}>Portfolio</Link>
        <Link to= "/contact" className={ window.location.pathname === "/contact" ?"nav-link active" : "nav-link"}>Contact</Link>
        
        </BrowserRouter>
        {/* <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link> */}
      </div>
    </div>
  </div>
</nav>
);

}

export default Navbar;