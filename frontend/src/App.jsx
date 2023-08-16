import React from 'react';

// Styling
import './App.scss';

// Routes
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Mock Data
import photos from 'mocks/photos.js'
import topics from 'mocks/topics.js'


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute 
        topics={topics}
        photos={photos}
        />
      <PhotoDetailsModal />
    </div>
  );
};



export default App;
