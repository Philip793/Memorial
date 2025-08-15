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
        <div className="center">
          <h1>Memorial</h1>
               <div className='gallery-grid' tabIndex={0}>     
            <img
            
              src="/img_Sanco/DP.jpg"
              alt="Realm of Sancho"
              className="gallery-img"
              onClick={() => handleRealmClick('sanco')}
              />
          

         
            
            <img
              src="/img_Tarro/DP.jpg"
              alt="Realm of Tarro"
              className="gallery-img"
              onClick={() => handleRealmClick('tarro')} />
          </div>
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
