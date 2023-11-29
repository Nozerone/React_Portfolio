import React from 'react';

const Resume = () => {
  return (
    <>
  
    <div className='container row mb-3'>
     <div className='mb-3 col'>
      <a href='src/assets/jposadas_cv.pdf' title='Jose_resume' download><button class="btn btn-success">Download</button></a>
     </div>
     <div>
      <h5>Front End </h5>
      <ul>
        <li>
        html 
        </li>
        <li>
          css
        </li>
        <li>
          javascript
        </li>
        <li>
          bootstrap
        </li>
        <li>
        react
        </li>
      </ul>
     </div>
     <div>
      <h5>Backend</h5>
      <ul>
        <li>MySQL</li>
        <li>Nodejs</li>
        <li>Mongo DB</li>
        <li>Express</li>
      </ul>
     </div>
    </div>
    
  </>
  );
}

export default Resume;
