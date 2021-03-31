import React from 'react'

import css from "../../assest/images/css.png";
import selfie from "../../assest/images/selfie.png";
import html from "../../assest/images/html.png";
import mongo from "../../assest/images/mongo.png";
import js from "../../assest/images/js.png";
import react from "../../assest/images/react.png";
import mysql from "../../assest/images/mysql.png";
import jquery from "../../assest/images/jquery.png";
import api from "../../assest/images/api.png";

function Home (){
  return(

  <div className="container home">
    <h1 className="display-4"></h1>
    <img src={selfie} ></img>
    <div className="container px-4" style ={{float:"right"}}>
      <div className="row gx-5">
        <div className="p-3">
        <img src={css}></img>
        </div>
        <div className="col">
          <div className="p-3">
            <img src={html}></img>
          </div>
        </div>
      </div>
    </div>
  </div>



  );
}


export default Home;