import React from 'react';
import { AtSign,Send } from 'lucide-react';

const Contact = () => {
  return (
    <>
    <div>
      <div>
        <AtSign />
      </div>
    <h2>Contact</h2>
    <div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
  </div>
  <div>
    <button type="button" action="submit" className='btn btn-secondary'> 
  <Send /> Submit
  </button>
  </div>
</div>

  Contact has a form with Name, Email and message fields. Find code to validate email address and display "invalid email".
</div>

    </>
  );
}

export default Contact;
