import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isShown, setIsShown] = useState(false);

  const closeModal = () => {
    setIsShown(false);
  };

  const openModal = () => {
    setIsShown(true);
  };
  
  return (
    <div className="App">
      <HomeRoute openModal={openModal}/>
      {!!isShown && <PhotoDetailsModal closeModal={closeModal} isShown={isShown}/>}
    </div>
  );
};

export default App;
