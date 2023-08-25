import React, {useState} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';

const App = () => {
  return (
    <div className="App">
      <HomeRoute 
      photos={photos}/>
    </div>
  );
};

export default App;
