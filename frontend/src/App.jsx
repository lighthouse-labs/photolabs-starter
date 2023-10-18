import React from 'react';
import { useState } from "react";

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

import './styles/PhotoList.scss';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <HomeRoute 
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {showModal ? <PhotoDetailsModal /> : null}
    </div>
  );
};

export default App;
