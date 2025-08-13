// App.jsx
import { useState } from 'react';
import './App.css'
import FullscreenGallery from './Components/FullscreenGallery';
import { galleryData } from './data/imageData';

function App() {
  const [stage, setStage] = useState('entry');
  const [selectedRealm, setSelectedRealm] = useState(null);

  const handleRealmClick = (realm) => {
    setSelectedRealm(realm);
    setStage('fullscreen');
  };

  return (
    <div className="app">
      {stage === 'entry' && (
        <div
          className="fullscreen-bg"
          role="button"
          aria-label="Enter gallery"
          tabIndex={0}
          onClick={() => setStage('gallery')}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setStage('gallery')}
          style={{ cursor: 'pointer' }}
        />
      )}

      {stage === 'gallery' && (
        <div className="gallery-grid">
          <button
            className="gallery-item"
            onClick={() => handleRealmClick('sanco')}
            aria-label="Open Realm of Sancho"
          >
            <p className="image-label">Realm of Sancho</p>
            <img
              src="/img_Sanco/DP.jpg"
              alt="Realm of Sancho"
              className="gallery-img"
              loading="lazy"
              decoding="async"
            />
          </button>

          <button
            className="gallery-item"
            onClick={() => handleRealmClick('tarro')}
            aria-label="Open Realm of Tarro"
          >
            <p className="image-label">Realm of Tarro</p>
            <img
              src="/img_Tarro/DP.jpg"
              alt="Realm of Tarro"
              className="gallery-img"
              loading="lazy"
              decoding="async"
            />
          </button>
        </div>
      )}

      {stage === 'fullscreen' && selectedRealm && (
        <FullscreenGallery
          images={galleryData[selectedRealm]}
          onBack={() => setStage('gallery')}
        />
      )}
    </div>
  );
}

export default App;
