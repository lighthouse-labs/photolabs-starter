import React, { useState } from 'react';

// Styling
import "../styles/HomeRoute.scss";

// Components
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {

  const { photos, topics, openModal } = props;

  const [favPhotos, setFavPhotos] = useState([]);

  const addFavourite = (photoID) => {
    if (!favPhotos.includes(photoID)) {
      setFavPhotos([...favPhotos, photoID]);
    }
  };

  const removeFavourite = (photoID) => {
    if (favPhotos.includes(photoID)) {
      setFavPhotos(favPhotos.filter((id) => id !== photoID));
    }
  };

  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics}
        favPhotos={favPhotos}
        favPhotosExist={favPhotos.length > 0}
      />

      <PhotoList 
        photos={photos} 
        favPhotos={favPhotos}
        favPhotosExist={favPhotos.length > 0}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
