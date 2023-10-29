import React from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './styles/PhotoList.scss';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, dispatch } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        state={state}
        favList={state.favList}
        liked={state.liked}
        showModal={state.showModal}
        photoData={state.photoData}
        topicData={state.topicData}
        dispatch={dispatch}
      />
      {state.showModal ? 
      <PhotoDetailsModal 
        state={state}
        favList={state.favList}
        liked={state.liked}
        showModal={state.showModal}
        photoData={state.photoData}
        topicData={state.topicData}
        dispatch={dispatch}
      /> : null}
    </div>
  );
};

export default App;
