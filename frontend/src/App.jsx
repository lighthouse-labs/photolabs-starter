import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  //set as state to check if the modal is open or not
  const [isModalOpen, setIsModalOpen] = useState(false);

  //function to change modal state
  const setModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="App">
      <HomeRoute setModalHandler={setModalHandler} />
      {isModalOpen && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
