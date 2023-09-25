import React from "react";
import HomeRoute from "./routes/HomeRoute";
import FavouritesRoute from "routes/FavouritesRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import TopNavigationBar from "./components/TopNavigationBar";
import Route from "./components/Route";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    showModal,
    showPhotoDetails,
    favPhotos,
    photoData,
    topicData,
    createFavorite,
    deleteFavorite,
    selectTopic,
    handleClick,
    handleFavsClick,
    handleClose,
  } = useApplicationData();

  const modal = (
    <PhotoDetailsModal
      onClose={handleClose}
      photos={showPhotoDetails}
      createFavorite={createFavorite}
      deleteFavorite={deleteFavorite}
      favPhotos={favPhotos}
    />
  );

  return (
    <div className="App">
      <div className="home-route">
        <TopNavigationBar
          onFavsClick={handleFavsClick}
          onSelect={selectTopic}
          topics={topicData}
          isFavPhotoExist={favPhotos?.length}
        />
      </div>
      <Route path="/">
        <HomeRoute
          photos={photoData}
          onPhotoClick={handleClick}
          createFavorite={createFavorite}
          deleteFavorite={deleteFavorite}
          favPhotos={favPhotos}
        />
      </Route>
      <Route path="/favourites">
        <FavouritesRoute
          photos={favPhotos}
          onPhotoClick={handleClick}
          createFavorite={createFavorite}
          deleteFavorite={deleteFavorite}
          favPhotos={favPhotos}
        />
      </Route>

      {showModal && modal}
    </div>
  );
};

export default App;
