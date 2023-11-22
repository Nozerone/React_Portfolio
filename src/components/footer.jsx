import React from "react";
import { GithubIcon, Instagram, Linkedin } from "lucide-react";

const Footer = ({}) => {
 return (
   <>
     <div>
       <footer className="card text-bg-secondary mb-3 ">
         <div className="card-body">
           <div style={{ display: 'flex', justifyContent: 'center' }}>
             <a href="https://github.com/Nozerone"><GithubIcon color="red" size={48} /></a>
             <a href="https://www.linkedin.com/in/jose-posadas-7b980a203/"><Linkedin color="blue" size={48} /></a>
             <a href="https://www.instagram.com/nozerone"><Instagram color="green" size={48} /></a>
           </div>
         </div>
       </footer>
       <div className="card-body"></div>
     </div>
   </>
 );
};

export default Footer;
