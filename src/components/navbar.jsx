import React from 'react';
import { BugOff } from 'lucide-react';

const Navbar = ({setPage}) => {
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <BugOff color="red" size={48}/>
      Jose Posadas</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a onClick={() => setPage('About me')} className="nav-link" href="#">About me</a>
        </li>
        <li className="nav-item">
          <a onClick={() => setPage('Contact')} className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a onClick={() => setPage('Portfolio')} className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a onClick={() => setPage('Resume')} className="nav-link" href="#" >Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
    </>
  );
}

export default Navbar;
