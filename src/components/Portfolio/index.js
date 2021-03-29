import React from 'react';
import BurgerApp from "../../assest/images/BurgerApp.png";
import DocToGo from "../../assest/images/DocToGo.png";
import Project1 from "../../assest/images/project1.PNG";
import Weather from "../../assest/images/Weather.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio(){
    return(
<div className="row row-cols-1 row-cols-md-2 g-4">
  <div classname="col">
    <div classname="card">
      <img src={BurgerApp} className="card-img-top" alt="burger"/>
      <div classname="card-body">
        <h5 classname="card-title">Card title</h5>
        <p classname="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div classname="col">
    <div classname="card">
    <img src={DocToGo} className="card-img-top" alt="doc"/>      
    <div classname="card-body">
        <h5 classname="card-title">Card title</h5>
        <p classname="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div classname="col">
    <div classname="card">
    <img src={Project1} className="card-img-top" alt="project"/>       
    <div classname="card-body">
        <h5 classname="card-title">Card title</h5>
        <p classname="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div classname="col">
    <div classname="card">
    <img src={Weather} className="card-img-top" alt="weather"/>       
    <div classname="card-body">
        <h5 classname="card-title">Card title</h5>
        <p classname="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    );
}

export default Portfolio;