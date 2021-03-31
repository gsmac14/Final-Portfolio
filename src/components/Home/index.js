import React from "react";
import "./style.css";
import css from "../../assest/images/css.png";
import selfie from "../../assest/images/selfie.png";
import html from "../../assest/images/html.png";
import mongo from "../../assest/images/mongo.png";
import js from "../../assest/images/js.png";
import react from "../../assest/images/react.png";
import mysql from "../../assest/images/mysql.png";
import jquery from "../../assest/images/jquery.png";
import api from "../../assest/images/api.png";
import ProgressBar from "react-bootstrap/ProgressBar";

function Home() {
  return (
    <div className="container home">
      <h1
        style={{
          textAlign: "left",
          paddingLeft: 70,
          paddingTop: 30,
          color: "black",
        }}
      >
        {" "}
        Full Stack Developer
      </h1>
      <img
        src={selfie}
        style={{
          borderRadius: 300,
          height: 300,
          width: 300,
          display: "block",
          float: "right",
        }}
      ></img>
      <div className="container">
        <div
          className="row row-cols-3"
          style={{ paddingTop: 20, paddingRight: 250 }}
        >
          <div className="p-3">
            <img src={css} style={{ height: 75, width: 75 }}></img>
          </div>
          <div className="col ">
            <div>
              <img src={html} style={{ height: 75, width: 75 }}></img>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <img src={jquery} style={{ height: 75, width: 75 }}></img>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <img src={js} style={{ height: 75, width: 75 }}></img>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <img src={mongo} style={{ height: 75, width: 75 }}></img>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <img src={mysql} style={{ height: 75, width: 75 }}></img>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <img src={react} style={{ height: 75, width: 75 }}></img>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <img src={api} style={{ height: 75, width: 75 }}></img>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <p style={{color:"black", fontFamily:"monospace", textAlign:"center", fontWeight:"bolder"}}>Loading More..</p>
              <div>
                <ProgressBar animated now={45} variant="success" />
                </div>
                
                
       
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
