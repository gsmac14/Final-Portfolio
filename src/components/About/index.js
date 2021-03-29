import React from 'react';
import Resume from "../../assest/images/resume.png";
import Linkin from "../../assest/images/linkin.png";
import Github from "../../assest/images/github.png";

function About (){
    return(
        <div classnameNameName="jumbotron jumbotron-fluid">
  <div classnameName="container">
    <h1 classnameName="display-4">About Girverius</h1>
    <p classnameName="lead">
I am a full stack developer with a background in the health field wanting to merge my experience and ideas with web based applications/software in order to give users a wonderful experience. I recently earned a certificate in full stack development from Southern Methodist University. I have developed skills that include JavaScript, CSS, HTML, React, MongoDb, Mysql, Algorithms, Data Structures, API development, and JQuery. I am known for my creativity, self-motivation, working well with others, passion for completing projects, and bringing a visually intuitive application to the user. I have recently worked on a team that developed an application for helping doctors schedule house call appointments. I am excited to put my skills to good use so that I can develop first classnameName applications and software.
</p>
{/* <a>
        classnameName="nav-link"
        href={"https://docs.google.com/document/d/e/2PACX-1vRQr7GEfrq6-DgrniOvVHG-F-4KNhwl4lHGvL0U9G80469ZRRJ6Cj1l6-Aq35edRbNBmjwJAYVytJx7/pub"}
        ><img src={Resume} /></a>
      
      <a
        classnameName="nav-link"
        href={"https://www.linkedin.com/in/girverius-mcfarland-995a901bb"}
        ><img src={Linkin} /></a>
      
      <a
        classnameName="nav-link"
        href={"https://github.com/gsmac14"}
        ><img src={Github}/></a> */}

<div classname="row row-cols-1 row-cols-md-3 g-4">
  <div classname="col">
    <div classname="card h-100">
      <img src={Resume} classname="card-img-top" alt="resume"></img>
      <div classname="card-body">
      </div>
      <div classname="card-footer">
      </div>
    </div>
  </div>
  <div classname="col">
    <div classname="card h-100">
      <img src={Linkin} classname="card-img-top" alt="..."></img>
      <div classname="card-body">
      </div>
      <div classname="card-footer">
      </div>
    </div>
  </div>
  <div classname="col">
    <div classname="card h-100">
      <img src={Github} classname="card-img-top" alt="..."></img>
      <div classname="card-body">
             </div>
      <div classname="card-footer">
      </div>
    </div>
  </div>
</div>
  </div>
</div>

    );
}

export default About;

