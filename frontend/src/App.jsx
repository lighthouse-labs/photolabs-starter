import React from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './styles/PhotoList.scss';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, dispatch } = useApplicationData();
  const darkModeValue = (state.darkMode === false) ? '' : 'dark';

  return (
    <div className={`App ${darkModeValue}`}>
      <HomeRoute 
        state={state}
        favList={state.favList}
        liked={state.liked}
        showModal={state.showModal}
        photoData={state.photoData}
        topicData={state.topicData}
        dispatch={dispatch}
        darkMode={state.darkMode}
        darkModeValue={darkModeValue}
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
