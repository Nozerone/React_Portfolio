import React from 'react';
import { BugOff } from 'lucide-react';

const Navbar = ({setPage}) => {
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
            <div className='d-flex flex-row gap-3'>
            <BugOff color="red" size={48} className='mt-3 '/>
            <h2 className='mt-4'>Jose Posadas</h2>
          
            </div>
              <div className=" d-flex flex-row mt-4" id="navbarNav" >
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
