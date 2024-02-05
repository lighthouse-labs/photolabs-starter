import React from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';



// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favorite, setFavorite] = useState([]);

  const toggleFavorite = (id) => {
    setFavorite((presentFavorites) => {
      if (presentFavorites.includes(id)) {
        return presentFavorites.filter(favoriteId => favoriteId !== id);
      } else {
        return [...presentFavorites, id]
      }
    })
  }


  const [displayModal, setDisplayModal] = useState(null);

  const updateDisplayModal = (props) => {
    const modalProps = { ...props, modalState: true };
    displayModal ? setDisplayModal(null) : setDisplayModal(modalProps);
  }

  return (
    <div className="App">

      <HomeRoute
        photos={photos}
        topics={topics}
        updateDisplayModal={updateDisplayModal}
        favorite={favorite}
        toggleFavorite={toggleFavorite} />

      {displayModal && <PhotoDetailsModal
        updateDisplayModal={updateDisplayModal}
        displayModal={displayModal}
        favorite={favorite}
        toggleFavorite={toggleFavorite} />}
    </div>
  );
};

export default App;
