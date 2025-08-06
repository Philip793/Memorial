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
    onClick={() => setStage('gallery')}
    style={{ cursor: 'pointer' }}
  />
      )}

      {stage === 'gallery' && (
        <div className="gallery-grid">
          <div className="gallery-item">
          <p className="image-label">Realm of Sancho</p>
          <img
          src="/img_Sanco/DP.jpg"
          alt="Realm of Sancho"
          onClick={() => handleRealmClick('sanco')}
          className="gallery-img"
          />
          </div>
   <div className="gallery-item">
    <p className="image-label">Realm of Tarro</p>
<img
  src="/img_Tarro/DP.jpg"
  alt="Realm of Tarro"
  onClick={() => handleRealmClick('tarro')}
  className="gallery-img"
/>
  </div>
<img /*
  src="/img_Baby/DP.jpg"
  alt="Realm of Baby"
  onClick={() => handleRealmClick('baby')}
  className="gallery-img" */
/>

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
