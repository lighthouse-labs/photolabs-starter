import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';

const App = () => {
  const {
    favourites,
    isModalOpen,
    clickedPhoto,
    openModal,
    setClickedPhoto,
    toggleFavourites,
    closeModal,
    photos,
    topics,
    getTopicId,
    selectedTopic
  } = useApplicationData();

  const [darkTheme, setDarkTheme] = useState(false);
  const themeToggler = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        toggleFavourites={toggleFavourites}
        openModal={openModal}
        setClickedPhoto={setClickedPhoto}
        getTopicId={getTopicId}
        selectedTopic={selectedTopic}
        themeToggler={themeToggler}
        darkTheme={darkTheme}
      />

      {isModalOpen && (
        <PhotoDetailsModal
          toggleFavourites={toggleFavourites}
          closeModal={closeModal}
          favourites={favourites}
          clickedPhoto={clickedPhoto}
          openModal={openModal}
          themeToggler={themeToggler}
          darkTheme={darkTheme}
        />
      )}
    </div>
  );
};

export default App;
