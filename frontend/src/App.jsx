import React from 'react';
import { useState } from "react";

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

import './styles/PhotoList.scss';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favList, setFavList] = useState([]);

  const [liked, setLiked] = useState({});

  const [showModal, setShowModal] = useState(null);
  
  console.log('APP', liked)
  return (
    <div className="App">
      <HomeRoute 
        favList={favList}
        setFavList={setFavList}
        liked={liked}
        setLiked={setLiked}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {showModal ? 
      <PhotoDetailsModal 
        favList={favList}
        setFavList={setFavList}
        liked={liked}
        setLiked={setLiked}
        showModal={showModal}
        setShowModal={setShowModal}
      /> : null}
    </div>
  );
};

export default App;
