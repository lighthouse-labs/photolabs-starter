import React from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';



// Note: Rendering a single component to build components in isolation
const App = () => {

  const [displayModal, setDisplayModal] = useState(false);
  const updateDisplayModal = () => {
    setDisplayModal(!displayModal)
  }


  return (
    <div className="App">

      <HomeRoute photos={photos} topics={topics} updateDisplayModal={updateDisplayModal}/>
      {displayModal && <PhotoDetailsModal updateDisplayModal={updateDisplayModal}/>}
    </div>
  );
};

export default App;
