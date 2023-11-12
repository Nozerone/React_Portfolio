import React from "react";
import { GithubIcon, Linkedin } from "lucide-react";

const Footer = ({}) => {
  return (
    <>
      <div>
        <div className="card text-bg-secondary mb-3">
          <a href="https://github.com/Nozerone"><GithubIcon color="red" size={48} /></a>
          <a href="https://www.linkedin.com/in/jose-posadas-7b980a203/"><Linkedin color="blue" size={48} />
</a>
        </div>
        <div className="card-body"></div>
      </div>
    </>
  );
};

export default Footer;
