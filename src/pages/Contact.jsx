import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");

 const checkEmail = (str) => {
   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (!re.test(str)) {
       alert("Invalid email");
   }
 }

 const checkMessage = (str) => {
   if (str.trim() === '') {
       alert("You must enter a message.");
   }
 }

 const handleOnBlur = (event) => {
   event.preventDefault();
   checkEmail(email);
   checkMessage(message);
   // Handle form submission here
   
 }

 return (
   <>
     <form className='needs-validation form-control-lg' onSubmit={handleOnBlur}>
       <div>
       </div>
       <h2>Contact</h2>
       <div className="mb-3">
         <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
         <input type="text" className="form-control" placeholder="your name" />
       </div>
       <div className="mb-3">
         <label htmlFor="validationServer01" className="form-label">Email address</label>
         <input type="email" className="form-control is-valid" id="validationServer01" placeholder="name@example.com" onBlur={(e) => setEmail(e.target.value)} />
         <div className="invalid-feedback">
           You must enter a valid email address!
         </div>
       </div>
       <div className="mb-3">
         <label htmlFor="validationServer02" className="form-label">Message</label>
         <textarea onBlur={(e) => setMessage(e.target.value)} required placeholder="your message" className="form-control" id="validationServer02" rows={3} defaultValue={""} />
         <div className="valid-feedback">
           Looks good!
         </div>
       </div>
       <div>
         <button type="submit" className='btn btn-secondary'> 
           <Send /> Submit
         </button>
       </div>
     </form>
   </>
 );
}

export default Contact;
