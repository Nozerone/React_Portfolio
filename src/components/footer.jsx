import React from "react";
import { GithubIcon, Instagram, Linkedin } from "lucide-react";

const Footer = ({}) => {
 return (
   <>
     <div >
       <footer>
           <div className="row">
         <div className="col d-flex flex-row gap-3 justify-content-center mb-4 mt-4">
             <a href="https://github.com/Nozerone"><GithubIcon color="black" size={48} /></a>
             <a href="https://www.linkedin.com/in/jose-posadas-7b980a203/"><Linkedin color="black" size={48} /></a>
             <a href="https://www.instagram.com/nozerone"><Instagram color="black" size={48} /></a>
           </div>
         </div>
       </footer>
       <div className="card-body"></div>
     </div>
   </>
 );
};

export default Footer;
