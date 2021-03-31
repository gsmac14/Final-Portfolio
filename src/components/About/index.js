import React from "react";
import Resume from "../../assest/images/resume.png";
import Linkin from "../../assest/images/linkin.png";
import Github from "../../assest/images/github.png";
import "./style.css";
import Navbar from "../Navbar";
function About() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "left", marginTop: 40 }}>About Girverius</h1>
      <p className="lead">
        I am a full stack developer with a background in the health field
        wanting to merge my experience and ideas with web based
        applications/software in order to give users a wonderful experience. I
        recently earned a certificate in full stack development from Southern
        Methodist University. I have developed skills that include JavaScript,
        CSS, HTML, React, MongoDb, Mysql, Algorithms, Data Structures, API
        development, and JQuery. I am known for my creativity, self-motivation,
        working well with others, passion for completing projects, and bringing
        a visually intuitive application to the user. I have recently worked on
        a team that developed an application for helping doctors schedule house
        call appointments. I am excited to put my skills to good use so that I
        can develop first className applications and software.
      </p>
      <div>
        <div className="row">
          <div className="col-sm">
            <p
              style={{
                textAlign: "center",
                color: "black",
                fontWeight: "bolder",
                fontSize: 20,
              }}
            >
              Resume
            </p>

            <a
              className="nav-link"
              href={
                "https://docs.google.com/document/d/e/2PACX-1vRQr7GEfrq6-DgrniOvVHG-F-4KNhwl4lHGvL0U9G80469ZRRJ6Cj1l6-Aq35edRbNBmjwJAYVytJx7/pub"
              }
            >
              <img
                src={Resume}
                style={{ height: 100, width: 100, marginLeft: 80 }}
              />
            </a>
          </div>
          <div className="col-sm">
            <p
              style={{
                textAlign: "center",
                color: "black",
                fontWeight: "bolder",
                fontSize: 20,
              }}
            >
              LinkedIn
            </p>

            <a
              className="nav-link"
              href={"https://www.linkedin.com/in/girverius-mcfarland-995a901bb"}
            >
              <img
                src={Linkin}
                style={{ height: 100, width: 100, marginLeft: 80 }}
              />
            </a>
          </div>
          <div className="col-sm">
            <p
              style={{
                textAlign: "center",
                color: "black",
                fontWeight: "bolder",
                fontSize: 20,
              }}
            >
              GitHub
            </p>
            <a className="nav-link" href={"https://github.com/gsmac14"}>
              <img
                src={Github}
                style={{ height: 100, width: 100, marginLeft: 80 }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
