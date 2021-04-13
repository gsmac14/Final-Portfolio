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
    <form className="contact-form" onSubmit={sendEmail} >
      <h1> Contact</h1>
      <div>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" class="form-control form-control-lg" placeholder="Name" value={name} onChange={(e) => setName(e.target.value) } />

      </div>
      <div>

      <label>Email</label>
      <input type="email" name="user_email" class="form-control form-control-lg" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>

      <label>Message</label>
      <textarea name="message" class="form-control form-control-lg " placeholder="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
      </div>
      <button type="submit" onClick={handleSubmit} class="btn btn-success">Submit</button>
    </form>
  );
  }

  
export default Contact;


