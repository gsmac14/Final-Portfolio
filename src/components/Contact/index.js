import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact (){

    return(
<div id="contact">

<div className="card">
  <div className="card-body">
    <h1>
      Contact
    </h1>
  </div>

  <form>
    <div className="form-group">
      <label for="exampleInputName">Name</label>
      <input type="name" className="form-control" id="exampleInputName" />
    </div>
    <div className="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <small id="emailHelp" className="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div className="form-group">
      <label for="exampleFormControlMessage">Message</label>
      <textarea
        className="form-control"
        id="exampleFormControlMessage"
      ></textarea>
    </div>

    <button type="submit" className="btn btn-success">Submit</button>
  </form>
</div>
</div>
    );
}

export default Contact;


