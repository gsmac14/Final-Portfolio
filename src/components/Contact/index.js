import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact (){

    return(
 <div className= "contact">
  <div class="container">
    <h1 class="display-4">Contact Me</h1>
    <p class="lead" style={{textAlign: "center"}}>Allow one to two business days!</p>
  </div>

     <div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" acti></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</div>
 
    );
}

export default Contact;


