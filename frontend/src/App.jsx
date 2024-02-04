import React from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';



// Note: Rendering a single component to build components in isolation
const App = () => {

  const [displayModal, setDisplayModal] = useState(0);

  const updateDisplayModal = (props) => {
    // setDisplayModal(!displayModal)
    displayModal ? setDisplayModal(0) : setDisplayModal(props);
  }


  return (
    <div className="App">

      <HomeRoute photos={photos} topics={topics} updateDisplayModal={updateDisplayModal}/>
      {displayModal && <PhotoDetailsModal updateDisplayModal={updateDisplayModal} modalData={displayModal}/>}
    </div>
  );
};

export default App;
