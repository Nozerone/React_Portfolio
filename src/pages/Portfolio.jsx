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
    <a><img src="src/assets/images/Screenshot 2023-11-11 at 10.46.42 PM.png" className="card-img-top" alt="..." /></a>
      <div className="card-body">
        <h5 className="card-title">Web #2</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
    <div className="card">
    <a href="https://nozerone.github.io/semantic-html/"><img src="src/assets/images/Screenshot 2023-11-11 at 9.49.03 PM.png" className="card-img-top" alt="..." /></a>
      <div className="card-body">
        <h5 className="card-title">App #3</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
    </div>
  </div>
  <div className="card-group">
    <div className="card">
    <a><img src="..." className="card-img-top" alt="..." /></a>
      <div className="card-body">
        <h5 className="card-title">App #4</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    <div className="card">
    <a><img src="..." className="card-img-top" alt="..." /></a>
      <div className="card-body">
        <h5 className="card-title">App #5</h5>
        <p className="card-text" required>This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
    <div className="card">
    <a><img src="..." className="card-img-top" alt="..." /></a>
      <div className="card-body">
        <h5 className="card-title">App #6</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Portfolio;
