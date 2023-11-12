import { FileText } from 'lucide-react';
import React from 'react';

const Resume = () => {
  return (
    <>
    <FileText />
    <div>
       <h2>Resume</h2>
     <div>
      <a><h5>Download</h5></a>
     </div>
     <div>
      <h5>Education</h5>
      <ul>
        <li>
        UC Davis Coding Bootcamp 2023
        </li>
        <li>
          Academy of Art College 2008
        </li>
      </ul>
     </div>
     <div>
      <h5>Experience</h5>
      <p>Coloso Coffee</p>
     </div>
    </div>
    
  </>
  );
}

export default Resume;
