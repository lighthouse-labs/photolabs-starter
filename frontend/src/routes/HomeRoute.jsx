import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";



const HomeRoute = (props) => {
  const { topics, photos ,getPhotosByTopic} = props;
  
  const [favPhotos, setFavPhotos] = useState([]);

 

  const toggleFavorite = (photoId) => {
    if (favPhotos.includes(photoId)) {
      setFavPhotos(favPhotos.filter((id) => id !== photoId));
    } else {
      setFavPhotos((prev) => [...prev, photoId]);
    }
  };

 
  const [openModal, setOpenModal] = useState(false);
 
  const [clickedPhoto, setClickedPhoto] = useState(null);

  

  const photoClickHandler = (photoProps) => {
    setClickedPhoto(photoProps);
    setOpenModal(true);

  };

  const closeModal = () => {
    setOpenModal(false);
    setClickedPhoto(null);
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} hasFavoritedPhoto={favPhotos.length} getPhotosByTopic={getPhotosByTopic}/>
      <PhotoList
        photos={photos}
        onPhotoClick={photoClickHandler}
        toggleFavorite={toggleFavorite}
        favPhotos={favPhotos}
        
      />
      {openModal && (
        <PhotoDetailsModal
          photos={photos} 
          photo={clickedPhoto}
          onClose={closeModal}
          toggleFavorite={toggleFavorite}
          favorited={favPhotos.includes(clickedPhoto.id)}
          favPhotos={favPhotos}
        />
      )}
    </div>
  );
};

export default HomeRoute;