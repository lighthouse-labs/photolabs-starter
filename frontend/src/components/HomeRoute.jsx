import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";
import React, { useState } from 'react';
import PhotoDetailsModal from "../routes/PhotoDetailsModal";
import photos from "mocks/photos";

const HomeRoute = () => {

  const [favouritedPhotos, setFavouritedPhotos] = useState([])
  const [selectedPhotoData, setSelectedPhotoData] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleFavouritePhotos = (photo) => {
    const isPhotoFavourited = favouritedPhotos.some(favPhoto => favPhoto === photo)

    if(isPhotoFavourited) {
      setFavouritedPhotos(favouritedPhotos.filter(favPhoto => favPhoto.id !== photo.id))
    } else {
      setFavouritedPhotos([...favouritedPhotos, photo])
    }

  }

  const handleModalToggle = (data) => {
    setIsModalOpen(!isModalOpen);
    setSelectedPhotoData(data)
  }

  
  return (
    <div className="home-route">
      <TopNavigationBar 
        favouritedPhotos={favouritedPhotos}
      />
      <PhotoList 
        favouritedPhotos={favouritedPhotos}
        handleFavouritePhotos={handleFavouritePhotos}
        onPhotoClick={handleModalToggle}
        photos={photos}
      />
      {isModalOpen ? (
        <PhotoDetailsModal 
          onCloseClick={handleModalToggle} 
          data={selectedPhotoData}
          favouritedPhotos={favouritedPhotos}
          handleFavouritePhotos={handleFavouritePhotos}
        />
        ) : null}
    </div>
  );
};

export default HomeRoute;