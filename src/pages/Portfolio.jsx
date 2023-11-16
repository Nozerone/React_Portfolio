import { GalleryThumbnails } from 'lucide-react';
import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <GalleryThumbnails />
       <h2>Portfolio</h2>
    <div>
  <div className="card-group">
    <div className="card">
      <a href="https://codemantic-e7e316dea174.herokuapp.com/"><img src="src/assets/images/Screenshot 2023-11-11 at 9.57.07 PM.png" className="card-img-top" alt="..." /></a>
      <div className="card-body">
        <h5 className="card-title">Codemantic</h5>
        <p className="card-text">This is a dating app for coders.</p>
      </div>
    </div>
    <div className="card">
    <a href="https://github.com/Nozerone/Note_Taker"><img src="src/assets/images/Screenshot 2023-11-11 at 10.46.42 PM.png" className="card-img-top" alt="..." /></a>
      <div className="card-body">
        <h5 className="card-title">Note Taker</h5>
        <p className="card-text">This is a note taker application..</p>
      </div>
    </div>
    <div className="card">
    <a href="https://nozerone.github.io/semantic-html/"><img src="src/assets/images/Screenshot 2023-11-11 at 9.49.03 PM.png" className="card-img-top" alt="..." /></a>
      <div className="card-body">
        <h5 className="card-title">Semantic Refractmentation</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
    </div>
  </div>
  <div className="card-group">
    <div className="card">
    <a href="https://nozerone.github.io/Code_Quiz/"><img src="src/assets/images/Screenshot 2023-07-27 at 2.38.17 PM.png" className="card-img-top" alt="..." /></a>
      <div className="card-body">
        <h5 className="card-title">Code Quiz</h5>
        <p className="card-text">This is a code Quiz.</p>
      </div>
    </div>
    <div className="card">
    <a href="https://nozerone.github.io/Group-Project-job-search-app/"><img src="src/assets/images/Screenshot 2023-11-14 at 7.20.55 PM.png" className="card-img-top" alt="..." /></a>
      <div className="card-body">
        <h5 className="card-title">Job Finder</h5>
        <p className="card-text" required>This is a collaboration project.</p>
      </div>
    </div>
    <div className="card">
    <a href="https://nozerone.github.io/daily_planner_application/"><img src="src/assets/images/Screenshot 2023-08-01 at 4.18.32 PM.png" className="card-img-top" alt="..." /></a>
      <div className="card-body">
        <h5 className="card-title">Daily Planner</h5>
        <p className="card-text">This is a daily planner application.</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Portfolio;
