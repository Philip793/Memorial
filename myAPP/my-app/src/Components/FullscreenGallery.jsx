
import React, { useState } from 'react';

import './FullscreenGallery.css'; 

function FullscreenGallery({ images, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleGalleryClick = (e) => {
       if (
      e.target.classList.contains('nav-button') ||
      e.target.classList.contains('back-button')
    ) {
      return;
    }
    handleNext();
  };

  return (
    <div className="fullscreen-gallery" onClick={handleGalleryClick}>
      <button className="back-button" onClick={onBack}>
        ← Back to Realms
      </button>

      <div className="image-container">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="fullscreen-img"
        />
      </div>

      <div className="navigation">
        <button onClick={handlePrev} className="nav-button">← Prev</button>
        <button onClick={handleNext} className="nav-button">Next →</button>
      </div>
    </div>
  );
}

export default FullscreenGallery;

