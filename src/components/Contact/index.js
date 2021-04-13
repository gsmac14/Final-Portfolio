import React, { useState } from "react";
import emailjs from 'emailjs-com';


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, message);
    //clears the input
    setName("");
    setEmail("");
    setMessage("");
  }

  function sendEmail(e) {
    e.preventDefault(name, email, message);

    emailjs.sendForm('service_cud2i6m', 'template_r4c6dwx', e.target, 'user_Zq2hhsqAB2qox3FkQuK6y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail} style={{marginLeft: 50, marginRight: 50} } >
      <h1> Contact</h1>
      <p style={{textAlign: "center"}}>Please allow 1 to 2 busisness for a response.</p>
      <div class="form-row" style={{marginTop: 40}}>

      <div class= "col">
      <input type="hidden" name="contact_number"  />
      <label style={{fontSize: 20}}>Name or  Company</label>
      <input type="text" name="user_name" class="form-control"  value={name} onChange={(e) => setName(e.target.value) } />

      </div>
      <div class = "col">

      <label style={{fontSize: 20}} >Email</label>
      <input type="email" name="user_email" class="form-control"  value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      </div>
      <div style={{marginTop: 20, marginBottom: 20}}>

      <label style={{fontSize: 20}}>Message</label>
      <textarea name="message" class="form-control form-control-lg "  value={message} onChange={(e) => setMessage(e.target.value)}/>
      </div>
      <div style={{textAlign: "center"}}>

      <button type="submit" onClick={handleSubmit} href="/" class="btn btn-success btn-lg">Send Message</button>
      </div>
    </form>
  );
  }

  
export default Contact;


