import React from 'react';
import { useEffect } from "react";

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

import './styles/PhotoList.scss';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, setFavList, setLiked, setShowModal, reducer, dispatch } = useApplicationData();

  // console.log('APP STATE', state)
  console.log('APP STATE.PHOTODATA', state.photoData)

  return (
    <div className="App">
      <HomeRoute 
        state={state}
        favList={state.favList}
        setFavList={setFavList}
        liked={state.liked}
        setLiked={setLiked}
        showModal={state.showModal}
        setShowModal={setShowModal}
        reducer={reducer}
        dispatch={dispatch}
        photoData={state.photoData}
        topicData={state.topicData}
      />
      {state.showModal ? 
      <PhotoDetailsModal 
        state={state}
        favList={state.favList}
        setFavList={setFavList}
        liked={state.liked}
        setLiked={setLiked}
        showModal={state.showModal}
        setShowModal={setShowModal}
        reducer={reducer}
        dispatch={dispatch}
        photoData={state.photoData}
        topicData={state.topicData}
      /> : null}
    </div>
  );
};

export default App;
