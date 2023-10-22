import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    openModal,
    closeModal,
  } = useApplicationData()


  return (
    <div className="App">
      < HomeRoute openModal={openModal} photoData={state.photoData} topicData={state.topicData} state={state} />
      {state.photo && <PhotoDetailsModal state={state} closeModal={closeModal} /> }
    </div>
  );
};

export default App;