import React from 'react';
import BurgerApp from "../../assest/images/BurgerApp.png";
import DocToGo from "../../assest/images/DocToGo.png";
import Project1 from "../../assest/images/project1.PNG";
import Weather from "../../assest/images/Weather.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio(){
    return(
<div className="row row-cols-1 row-cols-md-2 g-4" style={{padding: 100}}>
  <div className="col"style={{paddingBottom : 100}} >
    <div className="card h-100" >
      <img src={BurgerApp} className="card-img-top" alt="burger"/>
      <div className="card-body" >
      <h5 class="card-title">Burger App</h5>
                    <a
      class="nav-link"
      href="https://burgerappgm.herokuapp.com/"
      >Burger App</a>
      <a
      class="nav-link"
      href="https://github.com/gsmac14/BurgerApp"
      ><i class="fab fa-github"></i>Github</a>
      </div>
    </div>
  </div>
  <div className="col" style={{paddingBottom : 100}}>
    <div className="card h-100 ">
    <img src={DocToGo} className="card-img-top" alt="doc"/>      
    <div className="card-body">
    <h5 class="card-title">Doc-To-Go App</h5>
                    <a
      class="nav-link"
      href="https://doctorgo.herokuapp.com/"
      >Doc-To-Go App</a>
      <a
      class="nav-link"
      href="https://github.com/gsmac14/DocToGo"
      ><i class="fab fa-github"></i>Github</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src={Project1} className="card-img-top" alt="project"/>       
    <div className="card-body">
    <h5 class="card-title">Radio Search</h5>
                      <a
        class="nav-link"
        href="https://gsmac14.github.io/Project1/"
        >Radio App</a>
        <a
        class="nav-link"
        href="https://github.com/gsmac14/Project1"
        ><i class="fab fa-github"></i>Github</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src={Weather} className="card-img-top" alt="weather"/>       
    <div className="card-body">
    <h5 class="card-title">Weather App</h5>
                    <a
      class="nav-link"
      href="https://gsmac14.github.io/WeatherAPI/"
      >Weather App</a>
      <a
      class="nav-link"
      href="https://github.com/gsmac14/WeatherAPI"
      ><i class="fab fa-github"></i>Github</a>
      </div>
    </div>
  </div>
</div>
    );
}

export default Portfolio;