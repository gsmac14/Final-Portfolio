import React from 'react';
import BurgerApp from "../../assest/images/BurgerApp.png";
import DocToGo from "../../assest/images/DocToGo.png";
import Project1 from "../../assest/images/project1.PNG";
import Weather from "../../assest/images/Weather.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Github from "../../assest/images/github.png";
import LinkUp from "../../assest/images/LinkUp.png"
import "./style.css";

function Portfolio(){
    return(
      <div>
        <h1 style={{fontSize: 50, marginTop: 30 }}>Portfolio</h1>

<div className="row row-cols-1 row-cols-md-2 g-4" style={{padding: 100}}>

<div className="col"style={{paddingBottom : 100}} >
    <div className="card h-80" >
      {/* <img src={BurgerApp} style={{height:300}} className="card-img-top" alt="burger"/> */}
      <div className="card-body" style={{color:"black", textAlign:"center"}} >
      <h5 class="card-title">LinkUP App</h5>
      <a
      class="nav-link"
      href="https://link-up-pro.herokuapp.com/"
      ><img src={LinkUp} style={{height:300, width: 300, marginTop: 20, marginLeft: 30}} className="card-img-top" alt="burger"/>
      </a>
      <a
      class="nav-link"
      href="https://github.com/mpapamichalis/link-it"
      ><h5 style={{marginLeft: 50}}>GitHub</h5><img src={Github}
      style={{ height: 50, width: 50, marginLeft:50 }}/></a>
      </div>
    </div>
  </div>
  <div className="col" style={{paddingBottom : 100}} >
    <div className="card h-100">
    <div className="card-body">
    <h5 class="card-title" style={{color:"black", textAlign:"center"}}>Radio Search</h5>
                      <a
        class="nav-link"
        href="https://gsmac14.github.io/Project1/">
    <img src={Project1} style={{height:300}} className="card-img-top" alt="project"/>       </a>
        <a
        class="nav-link"
        href="https://github.com/gsmac14/Project1"
        ><h5 style={{textAlign:"center"}}>GitHub</h5><img src={Github}
        style={{ height: 50, width: 50, marginLeft:150}}/></a>
      </div>
    </div>
  </div>

  <div className="col"style={{paddingBottom : 100}} >
    <div className="card h-80" >
      {/* <img src={BurgerApp} style={{height:300}} className="card-img-top" alt="burger"/> */}
      <div className="card-body" style={{color:"black", textAlign:"center"}} >
      <h5 class="card-title">Burger App</h5>
      <a
      class="nav-link"
      href="https://burgerappgm.herokuapp.com/"
      ><img src={BurgerApp} style={{height:300, width: 300, marginTop: 20, marginLeft: 30}} className="card-img-top" alt="burger"/>
      </a>
      <a
      class="nav-link"
      href="https://github.com/gsmac14/BurgerApp"
      ><h5 style={{marginLeft: 50}}>GitHub</h5><img src={Github}
      style={{ height: 50, width: 50, marginLeft:50 }}/></a>
      </div>
    </div>
  </div>
  <div className="col" style={{paddingBottom : 100}}>
    <div className="card h-100 ">
    <div className="card-body" style={{color:"black", textAlign:"center"}}>
    <h5 class="card-title">Doc-To-Go App</h5>
                    <a
      class="nav-link"
      href="https://doctorgo.herokuapp.com/"
    ><img src={DocToGo} style={{height:300, width: 300, marginTop: 20, marginLeft: 30}} className="card-img-top" alt="doc"/>      
      </a>
      <a
      class="nav-link"
      href="https://github.com/gsmac14/DocToGo"
      ><h5 style={{textAlign:"center"}}>GitHub</h5>
        <img src={Github}
      style={{ height: 50, width: 50,  marginLeft: 10}}/></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <div className="card-body">
    <h5 class="card-title">Weather App</h5>
                    <a
      class="nav-link"
      href="https://gsmac14.github.io/WeatherAPI/"
    > <img src={Weather} style={{height:300}} className="card-img-top" alt="weather"/>       
      </a>
      <a
      class="nav-link"
      href="https://github.com/gsmac14/WeatherAPI"
      ><h5 style={{textAlign:"center"}}>GitHub</h5> <img
      src={Github}
      style={{ height: 50, width: 50, marginLeft:150}}
    /> </a>
      </div>
    </div>
  </div>
</div>
      </div>
    );
}

export default Portfolio;