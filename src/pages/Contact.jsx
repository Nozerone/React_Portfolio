import React from 'react';

const Contact = () => {
  return (
    <>
    <div>
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
</div>

  Contact has a form with Name, Email and message fields. Find code to validate email address and display "invalid email".
</div>

    </>
  );
}

export default Contact;
