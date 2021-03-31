/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {  BrowserRouter, Link } from "react-router-dom";
import "./style.css";

function Navbar() {
return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <div>
    {/* <a className="navbar-brand">Girverius McFarland</a> */}
    <Link to= "/Home" className={ window.location.pathname === "/Home" ?"nav-link active" : "nav-link"} style={{color: "white"}}>Girverius McFarland</Link>


    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      
        <Link to= "/About" className={ window.location.pathname === "/About" ?"nav-link active" : "nav-link"} aria-current="page">About</Link>
        <Link to= "/Portfolio" className={ window.location.pathname === "/Portfolio" ?"nav-link active" : "nav-link"}>Portfolio</Link>
        <Link to= "/Contact" className={ window.location.pathname === "/Contact" ?"nav-link active" : "nav-link"}>Contact</Link>
        
     
        {/* <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link> */}
      </div>
    </div>
  </div>
</nav>
);

}

export default Navbar;